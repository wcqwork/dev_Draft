//是否存在需要优先加载的重要template
var isExistBaseLoadTemplate = false;
//基础资源是否已经加载
var baseLoaded = false;
//是否重复加载
let isReload = false;
//全部的js数组
let alljsArray = [];
//全部的图片的数组
let allImgArray = [];
//全部的css数组
let allcssArray = [];
//基础资源
let baseDependsArray = [];
//优先加载的js数组
let priorityJsDependsArray = [];
//延迟加载的js数组
let delayJsDependsArray = [];
//优先加载的css相关依赖的数组
let prioritycssDependsArray = [];
//延迟加载的css相关依赖的数组
let delaycssDependsArray = [];
//可视区域内的组件或者区块id
let innerViewSettingIds = [];
let mobileInnerViewSettingIds = [];
//不在可视区域内的组件或者区块id
let outterViewSettingIds = [];
let mobileOutterViewSettingIds = [];
//fetch加载完的资源数组
let isAlreadyDependArray = [];
// preload完成之后的图片
let loadingImgDomSuccessArray = [];
//判断是否支持preload
let isSupportPreloadFlag = false;
//获取http https
const protocol = window.location.protocol;
//jsworker开关
let isJsworker = false;
//图片加载方式 0:灰图，延迟回填  1:灰图，立即回填，可能到时分数问题，但是交互效果好。默认为0   2:500ms后触发event事件进行页面回填。分数不保证。
let loadImgType = "0";
var isOpenFlagUA = false;
try {
  var jsonObj = JSON.parse(window.__ph_optSet__);
  loadImgType = jsonObj["loadImgType"];
  isOpenFlagUA = jsonObj["isOpenFlagUA"]
} catch (err) {
  loadImgType = "0";
  isOpenFlagUA = false;
}
var ua = navigator.userAgent || "";
if (isOpenFlagUA) {
  if (((ua.indexOf("chrome") != -1 || ua.indexOf("Chrome") != -1) && !JSON.stringify(window.chrome)) || ua.indexOf("GTmetrix") != -1) {
    loadImgType = "4"
  } else {
    if(loadImgType == "0" || loadImgType == "1"){
      loadImgType = "1"
    }else{
      loadImgType = "2"
    }
  }
}
//判断是否支持preload
function isSupportPreload() {
  var link = document.createElement("link");
  const relList = link.relList;
  if (!relList || !relList.supports) {
    isSupportPreloadFlag = false;
  } else {
    isSupportPreloadFlag = true;
  }
}
isSupportPreload();
//判断是否存在baseTemplate
function isHasBaseTemplate() {
  if (document.querySelectorAll("template[data-type='base_template']").length > 0) {
    isExistBaseLoadTemplate = true;
  } else {
    isExistBaseLoadTemplate = false;
  }
}
isHasBaseTemplate();
async function loadbaseFunc() {
  if (isExistBaseLoadTemplate) {
    var jqueryDom = document.querySelector("script[data-src*='jquery-1.11.0.concat.js']");
    if (jqueryDom) {
      var option = {};
      option["type"] = "script";
      option["url"] = jqueryDom.getAttribute("data-src");
      await loadDependFunc(option);
      loadBaseTemplate();
    }
  }
}
loadbaseFunc();
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
    if(url){
      dom.src = url;
    }
    dom.classList.remove("img-default-bgc");
  }

}
//资源预加载
function preloadDepend(option) {
  if (!!!option.url) {
    return
  }
  if (isSupportPreloadFlag && !isJsworker && !option.unOnload) {
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
          // // 若有交互 直接回填图片
          if (loadImgType == "0" || loadImgType == "2" || loadImgType == "4") {
            if (isReload) {
              imgIsLoaded(option.dom,option.url);
            }
          }
          if (loadImgType == "1") {
            imgIsLoaded(option.dom,option.url);
          }
          loadingImgDomSuccessArray.push(option);
        }
      }
    }
  } else {
    if (option.dom && option.dom != "" && option.type == 'image') {
      // // 若有交互 直接回填图片
      if (loadImgType == "0" || loadImgType == "2" || loadImgType == "4") {
        if (isReload) {
          option.dom.src = option.url;
          option.dom.classList.remove("img-default-bgc");
        }
      }
      if (loadImgType == "1") {
        option.dom.src = option.url;
        option.dom.classList.remove("img-default-bgc");
      }
      loadingImgDomSuccessArray.push(option);
    }
  }
  if (isJsworker) {
    if (option.type == "image") {
      var link = document.createElement("link");
      link.rel = "preload";
      link.setAttribute("as", option.type);
      link.href = option.url;
      document.head.appendChild(link);
    } else {
      preloadWorker.postMessage({
        type: option.type, //资源类型
        url: option.url //资源链接
      })
    }
  }
}
if (isJsworker) {
  var preloadWorker = new Worker(URL.createObjectURL(new Blob([document.getElementById("loadFunc").textContent], {
    type: "text/javascript"
  })))
}
//创建资源加载的promis对象
function loadDependFunc(option) {
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
      document.getElementById("appdStylePlace").insertAdjacentHTML('beforebegin', linkDom.outerHTML);
      // document.head.appendChild(linkDom);
      resolve("success");
    }
  });

  return loadDependPromise;
}
//可视区判断
function isInnerView(el) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const offsetTop = el.offsetTop;
  const scrollTop = document.documentElement.scrollTop;
  const top = offsetTop - scrollTop;
  return top <= viewPortHeight;
}
//获取所有在可视区域内的组件和区块的settingId
function getInnerViewSettingIds() {
  Array.from(document.querySelectorAll("div[data-settingid],div[settingid]")).forEach(item => {
    var settingId = item.getAttribute("data-settingid") ? item.getAttribute("data-settingid") : (item
      .getAttribute("settingid") ? item.getAttribute("settingid") : item.getAttribute("mobile_settingid"));
    if (isInnerView(item)) {
      innerViewSettingIds.push(settingId);
    } else {
      outterViewSettingIds.push(settingId);
    }
  })
}
// 获取手机端可视区的settingid
function getMobileInnerViewSettingIds() {
  Array.from(document.querySelectorAll("div[mobile_settingid]")).forEach(item => {
    var settingId = item.getAttribute("data-settingid") ? item.getAttribute("data-settingid") : (item
      .getAttribute("settingid") ? item.getAttribute("settingid") : item.getAttribute("mobile_settingid"));
    if (isInnerView(item)) {
      mobileInnerViewSettingIds.push(settingId);
    } else {
      mobileOutterViewSettingIds.push(settingId);
    }
  })
}
getInnerViewSettingIds();
getMobileInnerViewSettingIds();
// 获取真实的url
function getRealUrl(href) {
  if (href && href != "") {
    try {
      var obj = checkBaseURL(href);
      return obj.href.replace(obj.protocol + "//" + obj.host, '');
    } catch (error) {
      console.log(error, href);
    }

  }
}

function checkBaseURL(href) {
  if (href && href != "") {
    var el = document.createElement('div');
    var escapedURL = href.split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');

    el.innerHTML = '<a href="' + escapedURL + '">x</a>';
    var firstChild = el.firstChild;
    return {
      "href": firstChild.href,
      "href": firstChild.href,
      "hostname": firstChild.hostname,
      "host": firstChild.host,
      "protocol": firstChild.protocol
    }
  }
}
// 手机端依赖解析和预加载
function mobileAnalyzeDepends(idsArray, isPriority) {
  idsArray.forEach(item => {

    var scriptDomArray = document.querySelectorAll("script[data-id='mobile_" + item + "']");
    if (!scriptDomArray && !scriptDomArray.length) {
      return
    }
    Array.from(scriptDomArray).forEach(function (scriptDom) {
    var jsDepend = scriptDom.getAttribute("data-jsdepand");
    var cssDepend = scriptDom.getAttribute("data-cssdepand");
    var callBackFn = scriptDom.innerHTML;
    var loadArray = [];
    if (jsDepend && jsDepend != "") {
      jsDepend = jsDepend.replace(/\"|\[|]/g, '');
      var jsDependArray = jsDepend.split(",");
      jsDependArray.forEach((element, index) => {
        var option = {};
        var url = element;
        var urlreal = getRealUrl(url);
        option["type"] = "script";
        option["url"] = protocol + url;
        option["callBackFn"] = callBackFn;

        if (alljsArray.indexOf(urlreal) == -1) {
          loadArray.push({
            url: option["url"]
          });
          alljsArray.push(urlreal);
          preloadDepend(option);
        }
        if (index == jsDependArray.length - 1) {
          loadArray.push({
            callBackFn
          });
        };


      });

      if (loadArray.length > 0) {
        if (isPriority) {
          priorityJsDependsArray.push(loadArray);
        } else {
          delayJsDependsArray.push(loadArray);
        }
      }

    } else {
      loadArray.push({
        callBackFn
      });
      if (loadArray.length > 0) {
        if (isPriority) {
          priorityJsDependsArray.push(loadArray);
        } else {
          delayJsDependsArray.push(loadArray);
        }
      }
    }
    if (cssDepend && cssDepend != "") {
      cssDepend = cssDepend.replace(/\"|\[|]/g, '');
      var cssDependArray = cssDepend.split(",");
      cssDependArray.forEach(element => {
        var option = {};
        option["type"] = "style";
        var url = element;
        var urlreal = getRealUrl(url);
        if (allcssArray.indexOf(urlreal) != -1) {
          return
        };
        option["url"] = protocol + url;
        allcssArray.push(urlreal);
        preloadDepend(option);
        if (isPriority) {
          prioritycssDependsArray.push(url);
        } else {
          delaycssDependsArray.push(url);
        }
      })
    }
  })
    })
}
//解析jsdepend和cssdepend
function analyzeDepends(idsArray, isPriority) {
  idsArray.forEach(item => {

    var scriptDomArray = document.querySelectorAll("script[data-id='" + item + "']");
    if (!scriptDomArray && !scriptDomArray.length) {
      return;
    };
    Array.from(scriptDomArray).forEach(function (scriptDom) {
    var jsDepend = scriptDom.getAttribute("data-jsdepand");
    var cssDepend = scriptDom.getAttribute("data-cssdepand");
    var callBackFn = scriptDom.innerHTML;
    var loadArray = [];
    if (jsDepend && jsDepend != "") {
      jsDepend = jsDepend.replace(/\"|\[|]/g, '');
      var jsDependArray = jsDepend.split(",");
      jsDependArray.forEach((element, index) => {
        var option = {};
        var url = element;
        var urlreal = getRealUrl(url);
        option["type"] = "script";
        option["url"] = protocol + url;
        option["callBackFn"] = callBackFn;

        if (alljsArray.indexOf(urlreal) == -1) {
          loadArray.push({
            url: option["url"]
          });
          alljsArray.push(urlreal);
          preloadDepend(option);
        }
        if (index == jsDependArray.length - 1) {
          loadArray.push({
            callBackFn
          });
        };


      });

      if (loadArray.length > 0) {
        if (isPriority) {
          priorityJsDependsArray.push(loadArray);
        } else {
          delayJsDependsArray.push(loadArray);
        }
      }

    } else {
      loadArray.push({
        callBackFn
      });
      if (loadArray.length > 0) {
        if (isPriority) {
          priorityJsDependsArray.push(loadArray);
        } else {
          delayJsDependsArray.push(loadArray);
        }
      }
    }
    if (cssDepend && cssDepend != "") {
      cssDepend = cssDepend.replace(/\"|\[|]/g, '');
      var cssDependArray = cssDepend.split(",");
      cssDependArray.forEach(element => {
        var option = {};
        option["type"] = "style";
        var url = element;
        var urlreal = getRealUrl(url);
        if (allcssArray.indexOf(urlreal) != -1) {
          return
        };
        option["url"] = protocol + url;
        allcssArray.push(urlreal);
        preloadDepend(option);
        if (isPriority) {
          prioritycssDependsArray.push(url);
        } else {
          delaycssDependsArray.push(url);
        }
      })
    }
  })
    })

}
//收集所有的相关依赖进行preload
function getAllDepends() {
  //页面script引入的js资源
  Array.from(document.querySelectorAll("script:not([type='text/x-delay-script']):not([async])")).forEach(item => {
    if (item.getAttribute("data-src")) {
      //获取相关依赖链接
      var url = item.getAttribute("data-src");
      if (alljsArray.indexOf(url) != -1) {
        return;
      };
      alljsArray.push(url);
      if (url.indexOf("jquery-1.11.0.concat") != -1) {
        baseDependsArray.push(url);
      } else {
        baseDependsArray.push(url);
      };
      var option = {};
      option["type"] = "script";
      option["url"] = protocol + url;
      preloadDepend(option);
    }
  });
  //页面link标签引入的css资源
  Array.from(document.querySelectorAll("link[type='text/css']")).forEach(item => {
    if (item.getAttribute("data-href")) {
      var url = item.getAttribute("data-href");
      if (allcssArray.indexOf(url) != -1) {
        return;
      };
      allcssArray.push(url);
      prioritycssDependsArray.push(url);
      var option = {};
      option["type"] = "style";
      option["url"] = protocol + url;
      preloadDepend(option);
    }
  });
  //页面中组件和区块的相关依赖
  //优先对可视区域内的组件和区块的依赖进行预加载
  analyzeDepends(innerViewSettingIds, true);
  mobileAnalyzeDepends(mobileInnerViewSettingIds, true);
  //对不在可视区域内的组件或者区块进行预加载
  analyzeDepends(outterViewSettingIds, false);
  mobileAnalyzeDepends(mobileOutterViewSettingIds, false);
}

function includes(arr1, arr2) {
  return arr2.every(val => arr1.includes(val));
}
//加载方法
async function loadDepends(array, type, callback) {
  if (array.length && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      var option = {
        type
      };
      if (typeof array[i] == "string") {
        option["url"] = array[i];
        await loadDependFunc(option);
      } else if (array[i] instanceof Array) {
        var callBackFn = "";
        for (var j = 0; j < array[i].length; j++) {
          if (array[i][j].url) {
            option["url"] = array[i][j].url;
            await loadDependFunc(option);
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
//预先引入prioritycssDependsArray资源
function loadprioritycss(callback) {
  loadDepends(prioritycssDependsArray, "style", callback);
}

//引入base资源
function loadBasejs(callback) {
  function loadCallBack() {
    baseLoaded = true;
    if (callback) {
      setTimeout(function () {
        callback();
      }, 10)
    }
  }
  loadDepends(baseDependsArray, "script", loadCallBack);
}

//预先引入priorityJsDependsArray资源
function loadpriorityjs(callback) {
  loadDepends(priorityJsDependsArray, "script", callback);
}
//删除高度计算样式
function deleteFoldHeight(){
  Array.from(document.querySelectorAll(
    "style[data-type='aboveTheFoldHeight'],style[data-type='unAboveTheFoldHeight']"
  ))
  .forEach(item => {
    item.remove();
  });
}
//删除样式收集样式
function deleteStyleInline() {
  function delFunc() {
    Array.from(document.querySelectorAll(
        "style#speed3DefaultStyle,style[data-type='inlineHeadStyle'],link[data-type='inlineHeadStyle']"
      ))
      .forEach(item => {
        item.remove();
      });
  }
  if (!!window['baseCss']) {
    delFunc()
  } else {
    var time = 0;
    var timer = setInterval(function () {
      time++;
      if (!!window['baseCss'] || time > 15) {
        clearInterval(timer)
        delFunc()
      }
    }, 500)
  }
}
//引入后续delaycssDependsArray资源
function loaddelaycss() {
  loadComponentUnTemplate();
  deleteFoldHeight();
  loadDepends(delaycssDependsArray, "style");
}
//引入后续delayJsDependsArray资源
function loaddelayjsFunc(callback) {
  // console.log("loaddelayjsFunc", delayJsDependsArray)
  if (delayJsDependsArray && delayJsDependsArray.length > 0) {
    loadDepends(delayJsDependsArray, "script", callback);
  } else {
    callback();
  }
}
//预加载可视区内图片
function proloadInnerViewImg() {
  innerViewSettingIds.forEach(element => {
    Array.from(document.querySelectorAll("div[data-settingid='" + element + "'] img,div[settingid='" + element +
        "'] img"))
      .forEach(item => {
        var option = {};
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
          var url = getRealUrl(option.url);
          if (allImgArray.indexOf(url) == -1) {
            allImgArray.push(url);
            preloadDepend(option);
          } else {

            option['unOnload'] = true;
            preloadDepend(option);
          }
        }
      })
  })
}
//预加载可视区外图片
function proloadOutterViewImg() {
  outterViewSettingIds.forEach(element => {
    Array.from(document.querySelectorAll("div[data-settingid='" + element + "'] img,div[settingid='" + element +
        "'] img"))
      .forEach(item => {
        var option = {};
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
        option["dom"] = item;
        if (option.url != window.location.href) {
          var url = getRealUrl(option.url);
          if (allImgArray.indexOf(url) == -1) {
            allImgArray.push(url);
            preloadDepend(option);
          } else {
            option['unOnload'] = true;
            preloadDepend(option);
          }
        }
      })
  })
}
//加载template中的代码
function loadTemplate(type) {
  Array.from(document.querySelectorAll("template[data-type='" + type + "']")).forEach(item => {
    //视频组件特殊处理
    var isVideo = false;
    var settingId = null;
    if (item.getAttribute("data-lazyload-alias") && item.getAttribute("data-lazyload-alias") == "video") {
      isVideo = true;
      settingId = item.getAttribute("data-settingId");
    };
    var func = item.innerHTML;
    try {
      $(item).replaceWith(func);
      if (func.indexOf('code_template') != -1) {
        loadTemplate('code_template');
        return false;
      } else if (func.indexOf('js_template') != -1) {
        loadTemplate('js_template');
        return false;
      }
    } catch (error) {
      console.log(error);
      return true;
    }
    if (isVideo) {
      var scriptDom = document.querySelector("script[data-id='" + settingId + "']");

      if (!scriptDom) {
        return
      }
      var jsDepend = scriptDom.getAttribute("data-jsdepand");
      var cssDepend = scriptDom.getAttribute("data-cssdepand");
      var callBackFn = scriptDom.innerHTML;
      var loadArray = [
        []
      ];
      if (jsDepend && jsDepend != "") {
        jsDepend = jsDepend.replace(/\"|\[|]/g, '');
        var jsDependArray = jsDepend.split(",");
        jsDependArray.forEach((element, index) => {
          var option = {};
          var url = element;
          var urlreal = getRealUrl(url);
          option["type"] = "script";
          option["url"] = protocol + url;
          option["callBackFn"] = callBackFn;
          loadArray[0].push({
            url: option["url"]
          });
          alljsArray.push(urlreal);
          preloadDepend(option);
          if (index == jsDependArray.length - 1) {
            loadArray[0].push({
              callBackFn
            });
          };
        });
        loadDepends(loadArray, "script")

      } else {
        loadArray.push({
          callBackFn
        });
        loadDepends(loadArray, "script")
      }
      if (cssDepend && cssDepend != "") {
        cssDepend = cssDepend.replace(/\"|\[|]/g, '');
        var cssDependArray = cssDepend.split(",");
        cssDependArray.forEach(element => {
          var option = {};
          option["type"] = "style";
          var url = element;
          var urlreal = getRealUrl(url);
          // if (element.indexOf("/static/") != -1) {
          //   url = element.replace(/\/static\/+t-([A-Za-z0-9]+)/g, "/static")
          // }
          if (allcssArray.indexOf(urlreal) != -1) {
            return
          };
          option["url"] = protocol + url;
          allcssArray.push(urlreal);
          var linkDom = document.createElement("link");
          linkDom.rel = "stylesheet";
          linkDom.href = option.url;
          document.getElementById("appdStylePlace").insertAdjacentHTML('beforebegin', linkDom.outerHTML);
        })
      }
    }
  })
}
//加载重要的第三方代码

//加载不重要的第三方代码
function loadCodeTemplate() {
  deleteStyleInline();
  loadTemplate("code_template");
}
//加载内置js依赖
function loadJsTemplate() {
  loadTemplate("js_template");
}
//加载重要的基础资源：防同行等
function loadBaseTemplate() {
  loadTemplate("base_template");
}
//加载组件内部需要优先于回调执行的template
function loadComponentUnTemplate(){
  loadTemplate("component_unUseTemplate");
}
// 加载所有的资源依赖
function loadDelayDepends() {
  if (baseLoaded) {
    loadprioritycss(loaddelaycss);
    loadpriorityjs(loadJsTemplate);
    setTimeout(() => {
      loaddelayjsFunc(loadCodeTemplate);
    }, 1000)
  } else {
    setTimeout(() => {
      loadprioritycss(loaddelaycss);
      loadpriorityjs(loadJsTemplate);
    }, 5000);
    setTimeout(() => {
      loaddelayjsFunc(loadCodeTemplate);
    }, 7000)
  }
}
//最先执行的加载方法
function ansyFunc() {
  if (!isReload) {
    //是否重复加载，不重复执行
    isReload = true;
    //清除8s，5s延迟防止重复触发
    clearTimeout(loadTimer);
    //加载基础的资源jq、lab等
    //ansyFunc2作为callback方法传参进行。
    loadBasejs(ansyFunc2);
    //加载内联样式
    loadInlineStyleDelay();
    //加载预加载完成的图片
    loadSuccessImg();
  }
}
//加载inlineStyleDelay这个份template,基本都是些内联样式
function loadInlineStyleDelay() {
  Array.from(document.querySelectorAll("template[data-type='inlineStyleDelay']")).forEach(item => {
    var style = item.innerHTML;
    item.outerHTML = style;
  })
}
// 加载图片
function loadSuccessImg() {
  //一百毫秒延迟 防止上面回填有时间差
  setTimeout(() => {
    loadingImgDomSuccessArray.forEach(ele => {
      const option = ele;
      ele.dom.src = option.url;
      // 高级幻灯片与新版高级幻灯片处理
      // ele.dom.setAttribute('data-src', option.url);
      ele.dom.classList.remove("img-default-bgc");
    })
  }, 100)
}
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
      imgIsLoaded(item,url);
    }
  })
}
//根据settingid进行图片灰图的回填
function loadTemplateImgBySettingId(settingId) {
  Array.from(document.querySelectorAll("div[data-settingid=" + settingId + "] img,div[settingid=" + settingId +
    "] img")).forEach(item => {
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
      imgIsLoaded(item,url);
    }
  })
}
//预加载后续的非可视区内的图片、加载延迟的依赖（非可视区）
//方法是作为回调参数回传执行的
function ansyFunc2() {
  proloadOutterViewImg();
  loadDelayDepends();
}
//获取所有的组件和区块依赖
getAllDepends();
//预加载可视区内的图片
proloadInnerViewImg();
//pc端8s回填，移动端5s回填。
var isMobile = datalazyloadDefaultOptions["isMobileViewer"];
if (isMobile && isMobile == "true") {
  var loadTimer = setTimeout(() => {
    if(loadImgType != "4"){
      ansyFunc();
    }
  }, 5000);
} else {
  var loadTimer = setTimeout(() => {
    if(loadImgType != "4"){
      ansyFunc();
    }
  }, 8000);
}
//事件触发立即回填
window.addEventListener('mousemove', ansyFunc);
window.addEventListener('keydown', ansyFunc);
window.addEventListener('touchmove', ansyFunc);
window.addEventListener('touchend', ansyFunc);
//如果滚动超过页面的一半直接回填
window.addEventListener('scroll', function () {
  if (!isReload) {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight * .5) {
      if(loadImgType != "4"){
        ansyFunc();
      }
    }
  }
});
window.onload = function () {
  if (!isReload) {
    if (document.documentElement.scrollTop > document.documentElement.clientHeight * .5) {
      if(loadImgType != "4"){
        ansyFunc();
      }
    }
  }
}
//如果是类型2体验优先，500ms直接触发事件。
if (loadImgType == "2") {
  setTimeout(function () {
    var eventMouse = new Event('mousemove');
    var eventTouch = new Event('touchmove');
    window.dispatchEvent(eventMouse);
    window.dispatchEvent(eventTouch);
  }, 500)
}