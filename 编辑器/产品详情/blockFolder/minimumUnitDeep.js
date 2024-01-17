/**
 * @description: 最小单元组件依赖加载
 */
(function () {
  //事件中心
  class EventEmitter {
    constructor() {
      this._events = Object.create(null);
    }
    //注册监听
    on(type, fn, context = this) {
      if (!this._events[type]) {
        this._events[type] = [];
      }

      this._events[type].push([fn, context]);
    }

    once(type, fn, context = this) {
      let fired = false;

      function magic() {
        this.off(type, magic);

        if (!fired) {
          fired = true;
          fn.apply(context, arguments);
        }
      }

      this.on(type, magic);
    }
    //移除监听
    off(type, fn) {
      let _events = this._events[type];
      if (!_events) {
        return;
      }

      let count = _events.length;
      while (count--) {
        if (_events[count][0] === fn) {
          _events[count][0] = undefined;
        }
      }
    }
    //响应监听事件
    emit(type) {
      let events = this._events[type];
      if (!events) {
        return;
      }

      let len = events.length;
      let eventsCopy = [...events];
      for (let i = 0; i < len; i++) {
        let event = eventsCopy[i];
        let [fn, context] = event;
        if (fn) {
          fn.apply(context, [].slice.call(arguments, 1));
        }
      }
    }
  }
  var leadComponentSite = window.leadComponentSite || (window.leadComponentSite = {});
  const globalMinimumUnitEvent = new EventEmitter();
  Object.assign(leadComponentSite, {
    previewDomain: '//rornrwxhjjjr5o.leadongcdn.cn:6541/static',
    globalMinimumUnitEvent: globalMinimumUnitEvent,
    // 加载依赖成功
    jsDeepSuccess: async function (jsDeep, cssDeep) {
      const pageAllScriptLink = this.getPageAllTagLink("script")
      const pageAllLink = this.getPageAllTagLink("link")
      for (let urlLink of cssDeep) {
        if (this.findScriptLink(pageAllLink, urlLink)) {
          continue
        }
        await this.loadDependFunc({ url: urlLink, type: 'style' })
      }
      for (let urlLink of jsDeep) {
        if (this.findScriptLink(pageAllScriptLink, urlLink)) {
          continue
        }
        await this.loadDependFunc({ url: urlLink, type: 'script' })
      }
    },
    //创建资源加载的promis对象
    loadDependFunc(option) {
      var loadDependPromise = new Promise((resolve, rej) => {
        if (option.type == "script") {
          var scriptDom = document.createElement("script");
          scriptDom.type = "text/javascript";
          scriptDom.src = option.url;
          document.head.appendChild(scriptDom);
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
    },
    // 获取所有的script标签
    getPageAllTagLink(tag) {
      var scriptDom = document.querySelectorAll(tag);
      var scriptLinkArr = [];
      for (let item of scriptDom) {
        if (item.src) {
          scriptLinkArr.push(item.src);
        }
      }
      return scriptLinkArr;
    },
    // 查找页面是否存在已加载资源
    findScriptLink(scriptList, urlLink) {
      for (let item of scriptList) {
        if (item && item.indexOf(urlLink) > -1) {
          return true
        }
      }
      return false
    },
    // 加载指定的回调函数
    renderCallback(options) {
      const { callback } = options
      if (callback && typeof callback == 'function') {
        callback()
      }
    }
  })

  /**
   * sku
   */
  var miniUnitSku = leadComponentSite.miniUnitSku || (leadComponentSite.miniUnitSku = {});
  Object.assign(miniUnitSku, {
    init: async function (options) {
      const deeped = {
        jsDeep: [leadComponentSite.previewDomain + '/assets/blockEditor/script/standalone.js', leadComponentSite.previewDomain + '/assets/blockEditor/script/spec-adjoin-martix.js'],
        cssDeep: []
      }
      await leadComponentSite.jsDeepSuccess(deeped.jsDeep, deeped.cssDeep)
      debugger
      leadComponentSite.renderCallback(options)
    }
  })

  /**
   * 产品图片
   */
  var miniUnitProductImg = leadComponentSite.miniUnitProductImg || (leadComponentSite.miniUnitProductImg = {});
  Object.assign(miniUnitProductImg, {
    init: async function (options) {
      const deeped = {
        cssDeep: [leadComponentSite.previewDomain + '/assets/blockEditor/styles/swiper.min.css'],
        jsDeep: [leadComponentSite.previewDomain + '/assets/blockEditor/script/swiper.min.js']
      }
      await leadComponentSite.jsDeepSuccess(deeped.jsDeep, deeped.cssDeep)
      leadComponentSite.renderCallback(options)
    }
  })
})()