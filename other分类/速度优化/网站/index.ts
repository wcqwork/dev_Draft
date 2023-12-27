interface SpeedLazyLoadOptions {

}

class SpeedLazyLoad {
    //基础资源是否已经加载
    baseLoaded = false;
    //是否重复加载
    isReload: Boolean = false;
    //全部的js数组
    alljsArray: Array<string> = [];
    //全部的css数组
    allcssArray: Array<string> = [];
    // 基础资源
    baseDependsArray: Array<string> = []
    //优先加载的js数组
    priorityJsDependsArray: Array<string> = [];
    //延迟加载的js数组
    delayJsDependsArray = [];
    //优先加载的css相关依赖的数组
    prioritycssDependsArray: Array<string> = [];
    //延迟加载的css相关依赖的数组
    delaycssDependsArray: Array<string> = [];
    //判断是否支持preload
    isSupportPreloadFlag: Boolean = false
    // preload完成之后的图片
    loadingImgDomSuccessArray: Array<string> = []
    // 全部的图片的数组
    allImgArray: Array<string> = []
    //可视区域内的组件或者区块id
    innerViewSettingIds: Array<string> = ['backstage-headArea']
    //不在可视区域内的组件或者区块id
    outterViewSettingIds: Array<string> = ['backstage-footArea']
    // 回填timer
    loadTimer: any

    // 页头、页脚依赖数组
    deepJsJson: Array<Object> = []

    // 首屏收集状态 '1'成功 '0'失败
    aboveTheFold = '1'

    //获取http https
    protocol = window.location.protocol;
    constructor(opts: SpeedLazyLoadOptions = {}) {
        this.init()
    }

    init() {
        // 判断是否支持preload
        this.isSupportPreload()
        // 获取所有在可视区域内的组件和区块的settingId
        this.getInnerViewSettingIds()
        //  处理页头、页脚依赖数组
        this.handlerDeepJsJson();
        //  获取页面所有的依赖进行preload
        this.getAllDepends()
        // 预加载可视区内图片
        this.proloadViewImg(this.innerViewSettingIds)
        // 终端到对应时间回填
        this.backfill()
        // 监听页面事件
        this.onListen()
    }

    /**
     * 回填函数
     */
    backfill() {
        //pc端8s回填，移动端5s回填。
        var isMobile = this.isMobile();
        if (isMobile) {
            this.loadTimer = setTimeout(() => {
                this.ansyFunc();
            }, 5000);
        } else {
            this.loadTimer = setTimeout(() => {
                this.ansyFunc();
            }, 8000);
        }

        // 首屏收集失败立即回填
        if (this.aboveTheFold == '0') {
            this.ansyFunc();
        }
    }

    /**
     * 监听页面事件
     */
    onListen() {
        //事件触发立即回填
        window.addEventListener('mousemove', this.ansyFunc.bind(this));
        window.addEventListener('keydown', this.ansyFunc.bind(this));
        window.addEventListener('touchmove', this.ansyFunc.bind(this));
        window.addEventListener('touchend', this.ansyFunc.bind(this));
    }

    /**
     * 最先执行的加载方法
     */
    ansyFunc() {
        if (!this.isReload) {
            //是否重复加载，不重复执行
            this.isReload = true;
            //清除8s，5s延迟防止重复触发
            clearTimeout(this.loadTimer);
            //引入base资源
            this.loadBasejs(this.ansyFunc2.bind(this));
            //加载预加载完成的图片
            this.loadSuccessImg()
            // 回填所有图片
            this.backfillAllImg()
            //  处理轮播图
            this.handlerCarousel(document);
        }
    }

    //预加载后续的非可视区内的图片、加载延迟的依赖（非可视区）
    //方法是作为回调参数回传执行的
    ansyFunc2() {
        // 预加载不在可视区域内图片
        this.proloadViewImg(this.outterViewSettingIds);
        // 加载所有的资源依赖
        this.loadDelayDepends();
    }

    /**
     * 回填所有图片
     */
    backfillAllImg() {
        const imgs = document.querySelectorAll('img');
        let observer = new IntersectionObserver((entries) => {
            // 观察所有
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image: any = entry.target;
                    const imgSrc = image.getAttribute('data-src') || image.getAttribute('phoenix-lazyload') ||  image.getAttribute('data-original');
                    if(imgSrc){
                        image.src = imgSrc;
                    }
                    // 取消观察
                    observer.unobserve(image)
                }
            })
        })
        imgs.forEach(img => {
            observer.observe(img)
        })
    }

    /**
     * // 处理页头、页脚依赖数组
     */
    handlerDeepJsJson() {
        this.initDeepJsJson();
    }

    /**
     * 初始化deepJsJson
     */
    initDeepJsJson() {
        const _deepJson = window._deepJsJson || [];
        this.deepJsJson = _deepJson;
        if (window._aboveTheFold) {
            this.aboveTheFold = window._aboveTheFold;
        }
    }

    /**
     * 获取所有在可视区域内的组件和区块的settingId
     */
    getInnerViewSettingIds() {
        Array.from(document.querySelectorAll("body>section")).forEach(item => {
            const settingId = item.getAttribute('id')
            if (settingId) {
                const isInnerFlag = this.isInnerView(item)
                isInnerFlag ? this.innerViewSettingIds.push(settingId) : this.outterViewSettingIds.push(settingId);
            }
        })
    }

    /**
     * 预加载图片
     */
    proloadViewImg(settingIds: string[]) {
        const that = this;
        settingIds.forEach(element => {
            Array.from(document.querySelectorAll("#" + element + " img"))
                .forEach(item => {
                    var option: any = {};
                    option["type"] = "image";
                    if (item.getAttribute("src") && item.getAttribute("src") != "") {
                        option["url"] = item.getAttribute("src");
                    }
                    if (item.getAttribute("phoenix-lazyload") && item.getAttribute("phoenix-lazyload") != "") {
                        option["url"] = item.getAttribute("phoenix-lazyload");
                    }
                    if (item.getAttribute("data-src") && item.getAttribute("data-src") != "") {
                        option["url"] = item.getAttribute("data-src");
                    }
                    if (item.getAttribute("data-original") && item.getAttribute("data-original") != "") {
                        option["url"] = item.getAttribute("data-original");
                    }
                    // imgae.src =
                    option["dom"] = item;
                    if (option.url != window.location.href) {
                        var url = this.getRealUrl(option.url);
                        if (this.allImgArray.indexOf(url) == -1) {
                            this.allImgArray.push(url);
                            this.preloadDepend(option);
                        } else {

                            option['unOnload'] = true;
                            this.preloadDepend(option);
                        }
                    }
                })
        })
    }

    /**
     * 处理轮播图
     */
    handlerCarousel(element) {
        if(element){
            var soliderContainers = element.querySelectorAll('.solider-container');
            soliderContainers.forEach(function(soliderContainer) {
              var sliderHrefs = soliderContainer.querySelectorAll('.slider_href');
              sliderHrefs.forEach(function(sliderHref) {
                var image = sliderHref.getAttribute('data-image');
                if (image) {
                  sliderHref.style.backgroundImage = `url(${image})`;
                  sliderHref.style.filter = 'none';
                }
              });
            });    
        }    
    }

    /**
     * 获取页面所有的依赖进行preload
     */
    getAllDepends() {
        const that = this;
        //页面script引入的js资源
        Array.from(document.querySelectorAll("script:not([type='text/x-delay-script'])")).forEach(item => {
            if (item.getAttribute("data-src")) {
                //获取相关依赖链接
                var url: any = item.getAttribute("data-src");
                if (that.alljsArray.indexOf(url) != -1) {
                    return;
                };
                that.alljsArray.push(url);
                if (url.indexOf("jquery-1.11.0.concat") != -1) {
                    that.baseDependsArray.push(url);
                } else {
                    that.baseDependsArray.push(url);
                };
                var option = {};
                option["type"] = "script";
                option["url"] = that.protocol + url;
                that.preloadDepend(option);
            }
        });
        //页面link标签引入的css资源
        Array.from(document.querySelectorAll("link[type='text/css']")).forEach(item => {
            if (item.getAttribute("data-href")) {
                var url: any = item.getAttribute("data-href");
                if (that.allcssArray.indexOf(url) != -1) {
                    return;
                };
                that.allcssArray.push(url);
                that.prioritycssDependsArray.push(url);
                var option = {};
                option["type"] = "style";
                option["url"] = that.protocol + url;
                that.preloadDepend(option);
            }
        });

        //页面中组件和区块的相关依赖
        //优先对可视区域内的组件和区块的依赖进行预加载
        that.analyzeDepends(this.deepJsJson, true);
    }

    /**
     * 资源预加载
     * @param option 
     * @returns 
     */
    preloadDepend(option) {
        const that = this
        if (!!!option.url) {
            return
        }
        if (this.isSupportPreloadFlag && !option.unOnload) {
            if (option.type == 'image') {
                var imgObj = new Image();
                imgObj.src = option.url;
                // 判断图片是否有本地缓存有本地缓存直接回填不然走预加载那套。
                if (imgObj.complete) {
                    if (option.dom && option.dom != "") {
                        option.dom.src = option.url;
                        option.dom.classList.remove("img-default-bgc");
                    }
                } else {
                    linkPreload();
                }
            } else {
                linkPreload();
            }

            function linkPreload() {
                var link = document.createElement("link");
                link.rel = "preload";
                link.setAttribute("as", option.type);
                link.href = option.url;
                document.head.appendChild(link);
                link.onload = function () {
                    if (option.dom && option.dom != "") {
                        //若有交互 直接回填图片
                        if (that.isReload) {
                            that.imgIsLoaded(option.dom, option.url);
                            that.loadingImgDomSuccessArray.push(option);
                        }
                    }
                }
            }
        } else {
            if (option.dom && option.dom != "" && option.type == 'image') {
                //若有交互 直接回填图片
                if (that.isReload) {
                    option.dom.src = option.url;
                    option.dom.classList.remove("img-default-bgc");
                    this.loadingImgDomSuccessArray.push(option);
                }
            }
        }
    }

    /**
     * 图片加载完成后再次回填图片
     * @param dom 
     * @param url 
     */
    imgIsLoaded(dom, url) {
        var timer: any = null;
        timer = setTimeout(function () {
            dom.src = url;
            dom.classList.remove("img-default-bgc");
        }, 8000)
        var imgObj = new Image();
        imgObj.src = url;
        imgObj.onload = function () {
            if (timer) {
                clearTimeout(timer)
            }
            dom.src = url;
            dom.classList.remove("img-default-bgc");
        }
        imgObj.onerror = function () {
            if (timer) {
                clearTimeout(timer)
            }
            if (url) {
                dom.src = url;
            }
            dom.classList.remove("img-default-bgc");
        }

    }

    /**
     * 加载预加载完成的图片
     */
    loadSuccessImg() {
        //一百毫秒延迟 防止上面回填有时间差
        setTimeout(() => {
            this.loadingImgDomSuccessArray.forEach((ele: any) => {
                const option = ele;
                ele.dom.src = option.url;
                // 高级幻灯片与新版高级幻灯片处理
                // ele.dom.setAttribute('data-src', option.url);
                ele.dom.classList.remove("img-default-bgc");
            })
        }, 100)
    }



    /**
     * 可视区判断
     */
    isInnerView(el: any) {
        // viewPortHeight 兼容所有浏览器写法
        const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const offsetTop = el.offsetTop;
        const scrollTop = document.documentElement.scrollTop;
        const top = offsetTop - scrollTop;
        return top <= viewPortHeight;
    }

    /**
     * 获取真实的url
     * @param href 
     * @returns 
     */
    getRealUrl(href) {
        if (href && href != "") {
            try {
                var obj: any = this.checkBaseURL(href);
                return obj.href.replace(obj.protocol + "//" + obj.host, '');
            } catch (error) {
                console.log(error, href);
            }

        }
    }

    checkBaseURL(href) {
        if (href && href != "") {
            var el = document.createElement('div');
            var escapedURL = href.split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');

            el.innerHTML = '<a href="' + escapedURL + '">x</a>';
            var firstChild: any = el.firstChild;
            if (firstChild) {
                return {
                    "href": firstChild.href,
                    "hostname": firstChild.hostname,
                    "host": firstChild.host,
                    "protocol": firstChild.protocol
                }
            }
        }
    }
    /**
     * 判断是否支持preload
     */
    isSupportPreload() {
        var link = document.createElement("link");
        const relList = link.relList;
        if (!relList || !relList.supports) {
            this.isSupportPreloadFlag = false;
        } else {
            this.isSupportPreloadFlag = true;
        }
    }

    //引入base资源
    loadBasejs(callback) {
        const that = this;
        function loadCallBack() {
            that.baseLoaded = true;
            if (callback) {
                setTimeout(function () {
                    callback();
                }, 10)
            }
        }
        this.loadDepends(this.baseDependsArray, "script", loadCallBack);
    }

    // 加载所有的资源依赖
    loadDelayDepends() {
        const that = this
        if (that.baseLoaded) {
            that.loadprioritycss();
            that.loadpriorityjs();
        } else {
            setTimeout(() => {
                that.loadprioritycss();
                that.loadpriorityjs();
            }, 5000);
        }
    }

    //预先引入prioritycssDependsArray资源
    loadprioritycss(callback?) {
        this.loadDepends(this.prioritycssDependsArray, "style", callback);
    }

    //预先引入priorityJsDependsArray资源
    loadpriorityjs(callback?) {
        this.loadDepends(this.priorityJsDependsArray, "script", callback);
    }

    //引入后续delayJsDependsArray资源
    loaddelayjsFunc(callback) {
        // console.log("loaddelayjsFunc", delayJsDependsArray)
        if (this.delayJsDependsArray && this.delayJsDependsArray.length > 0) {
            this.loadDepends(this.delayJsDependsArray, "script", callback);
        } else {
            callback();
        }
    }

    //引入后续delaycssDependsArray资源
    loaddelaycss() {
        this.loadDepends(delaycssDependsArray, "style");
    }

    //加载方法
    async loadDepends(array, type, callback?) {
        if (array.length && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                var option = {
                    type
                };
                if (typeof array[i] == "string") {
                    option["url"] = array[i];
                    await this.loadDependFunc(option);
                } else if (array[i] instanceof Array) {
                    var callBackFn = "";
                    for (var j = 0; j < array[i].length; j++) {
                        if (array[i][j].url) {
                            option["url"] = array[i][j].url;
                            await this.loadDependFunc(option);
                        }
                        if (array[i][j].callBackFn) {
                            callBackFn = array[i][j].callBackFn;
                            try {
                                eval(callBackFn);
                            } catch (err) {
                                console.log(err);
                                continue;
                            }
                        }
                    }

                }
                if (i == array.length - 1) {
                    if (callback) {
                        try {
                            callback();
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }

            }
        } else {
            if (callback) {
                try {
                    callback();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    //创建资源加载的promis对象
    loadDependFunc(option) {
        var loadDependPromise = new Promise((resolve, rej) => {
            if (option.type == "script") {
                var scriptDom = document.createElement("script");
                scriptDom.type = "text/javascript";
                scriptDom.src = option.url;
                document.body.appendChild(scriptDom);
                scriptDom.onload = function () {
                    resolve("success");
                };
                scriptDom.onerror = function () {
                    resolve("error");
                };
            }
            if (option.type == "style") {
                var linkDom = document.createElement("link");
                linkDom.rel = "stylesheet";
                linkDom.href = option.url;
                document.head.appendChild(linkDom);
                resolve("success");
            }
        });

        return loadDependPromise;
    }

    /**
     * 解析jsdepend和cssdepend
     * @param idsArray 
     * @param isPriority 
     */
    analyzeDepends(idsArray, isPriority) {
        const that = this;
        idsArray.forEach(item => {
            const jsDepend = item.jsDeps;
            const cssDepend = item.cssDeps;
            const callBackFn = item.callback;
            let loadArray: any = []; // 依赖资源和callback
            // 有jsDepend
            if (jsDepend && jsDepend != "") {
                // jsDepend预加载
                jsDepend.forEach((element, index) => {
                    const option = {};
                    const url = element;
                    const urlreal = that.getRealUrl(url);
                    option["type"] = "script";
                    option["url"] = that.protocol + url;
                    option["callBackFn"] = callBackFn;

                    if (that.alljsArray.indexOf(urlreal) == -1) {
                        loadArray.push({
                            url: option["url"]
                        });
                        that.alljsArray.push(urlreal);
                        that.preloadDepend(option);
                    }
                    if (index == jsDepend.length - 1) {
                        loadArray.push({
                            callBackFn
                        });
                    };
                })

                // 加入对应级别数组
                if (loadArray.length > 0) {
                    if (isPriority) {
                        that.priorityJsDependsArray.push(loadArray);
                    } else {
                        delayJsDependsArray.push(loadArray);
                    }
                }
            } else { // 没有jsDepend
                loadArray.push({
                    callBackFn
                });
                if (loadArray.length > 0) {
                    if (isPriority) {
                        that.priorityJsDependsArray.push(loadArray);
                    } else {
                        delayJsDependsArray.push(loadArray);
                    }
                }
            }

            // cssDepend
            if (cssDepend && cssDepend != "") {
                cssDepend.forEach(element => {
                    const option = {};
                    option["type"] = "style";
                    const url = element;
                    const urlreal = that.getRealUrl(url);
                    if (that.allcssArray.indexOf(urlreal) != -1) {
                        return
                    };
                    option["url"] = that.protocol + url;
                    that.allcssArray.push(urlreal);
                    that.preloadDepend(option);
                    if (isPriority) {
                        that.prioritycssDependsArray.push(url);
                    } else {
                        that.delaycssDependsArray.push(url);
                    }
                })
            }
        })
    }

    /**
     * 是否是移动端
     * @returns 
     */
    isMobile() {
        let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        return flag;
    }
}
const lazyOption = {

}
const speedLazyLoad = new SpeedLazyLoad(lazyOption)


/**
 * logo组件依赖pc3.0
 */
//template里的图片回填
function loadTemplateImg(classname) {
    Array.from(document.querySelectorAll("." + classname + " img")).forEach(item => {
        var url = "";
        if (item.getAttribute("src") && item.getAttribute("src") != "") {
            url = item.getAttribute("src");
        }
        if (item.getAttribute("phoenix-lazyload") && item.getAttribute("phoenix-lazyload") != "") {
            url = item.getAttribute("phoenix-lazyload");
        }
        if (item.getAttribute("data-src") && item.getAttribute("data-src") != "") {
            url = item.getAttribute("data-src");
        }
        if (item.getAttribute("data-original") && item.getAttribute("data-original") != "") {
            url = item.getAttribute("data-original");
        }
        if (url != window.location.href) {
            imgIsLoaded(item, url);
        }
    })
}

//图片加载完成后再次回填图片
function imgIsLoaded(dom, url) {
    var timer = null;
    timer = setTimeout(function () {
        dom.src = url;
        dom.classList.remove("img-default-bgc");
    }, 8000)
    var imgObj = new Image();
    imgObj.src = url;
    imgObj.onload = function () {
        if (timer) {
            clearTimeout(timer)
        }
        dom.src = url;
        dom.classList.remove("img-default-bgc");
    }
    imgObj.onerror = function () {
        if (timer) {
            clearTimeout(timer)
        }
        if (url) {
            dom.src = url;
        }
        dom.classList.remove("img-default-bgc");
    }

}
/**
 * 
 * logo组件依赖pc3.0
 */