function inSlick(options) {
  const jsDeep = ['']
  const cssDeep = ['']

}
(function () {
  var leadComponentSite = window.leadComponentSite || (window.leadComponentSite = {});
  Object.assign(leadComponentSite, {
    jsDeepSuccess: function (jsDeep, cssDeep) {
      return new Promise((resove, reject) => {
        $.getScript("ajax/test.js")
          .done(function (script, textStatus) {
            console.log(textStatus);
          })
          .fail(function (jqxhr, settings, exception) {
            $("div.log").text("Triggered ajaxError handler.");
          });
      })
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
    },
  })
})()