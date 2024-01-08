/**
 * @description: 最小单元组件依赖加载
 */
(function () {
  var leadComponentSite = window.leadComponentSite || (window.leadComponentSite = {});
  Object.assign(leadComponentSite, {
    jsDeepSuccess:async function (jsDeep, cssDeep) {
      for(let urlLink of jsDeep){
        await this.loadDependFunc({url:urlLink,type:'script'})
      }
      for(let urlLink of cssDeep){
        await this.loadDependFunc({url:urlLink,type:'style'})
      }
    },
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
  })

  /**
   * sku
   */
  var miniUnitSku = leadComponentSite.miniUnitSku || (leadComponentSite.miniUnitSku = {});
  Object.assign(miniUnitSku, {
    init: async function (options) {
      const deeped = {
        jsDeep: ['./standalone.js'],
        cssDeep: ['./index.css']
      }
      await leadComponentSite.jsDeepSuccess(...deeped)
      debugger
    },
  })
})()