(function (window, $, undefined) {
  var _page_editor =
    window._page_editor_namespaces_ || (window._page_editor_namespaces_ = {});
  var name = "cCApKfUHbtqw";
  var pageVariable =
    _page_editor_namespaces_[name] || (_page_editor_namespaces_[name] = {});
  $.extend(pageVariable, {
    init: init,
  });
  function init() {
    var items = document.querySelectorAll("#i9ukt");
    for (var i = 0, len = items.length; i < len; i++) {
      (function () {
        let el = this;
        $(el).on("click", function () {
          var EmployeeWindow2 = window;
          if (
            $(el).data("provider") == "dialog" &&
            !EmployeeWindow2._isEditor
          ) {
            var html = `
<div class="lead-preview-box">
<div class="lead-preview-bx-img">
<div class="lead-preview-close">
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path
          d="M210.304 813.696a42.666667 42.666667 0 0 1 0-60.330667L753.365333 210.304a42.666667 42.666667 0 1 1 60.330667 60.330667L270.634667 813.696a42.666667 42.666667 0 0 1-60.330667 0z"
          fill="#ffffff"
          p-id="3388"
      ></path>
      <path
          d="M210.304 210.304a42.666667 42.666667 0 0 1 60.330667 0l543.061333 543.061333a42.666667 42.666667 0 1 1-60.330667 60.330667L210.304 270.634667a42.666667 42.666667 0 0 1 0-60.330667z"
          fill="#ffffff"
      ></path>
  </svg>
</div>
${$(el).html()}
</div>
</div>
`;
            document.body.insertAdjacentHTML("beforeend", html);
            $(".lead-preview-close").on("click", function () {
              $(".lead-preview-box").remove();
            });
          }
        });
      }).bind(items[i])();
    }
    var items = document.querySelectorAll("#iei2ln, #ilti15");
    for (var i = 0, len = items.length; i < len; i++) {
      (function () {
        var el = this;
        $(el).on("click", function () {
          if ($(el).data("provider") == "dialog") {
            if ($(el).data("autoplay") == "1") {
              $(el).next().find("video").attr("autoplay", "true");
            }
            var html = `
<div class="lead-preview-box">
<div class="lead-preview-bx">
<div class="lead-preview-close">
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path
          d="M210.304 813.696a42.666667 42.666667 0 0 1 0-60.330667L753.365333 210.304a42.666667 42.666667 0 1 1 60.330667 60.330667L270.634667 813.696a42.666667 42.666667 0 0 1-60.330667 0z"
          fill="#ffffff"
          p-id="3388"
      ></path>
      <path
          d="M210.304 210.304a42.666667 42.666667 0 0 1 60.330667 0l543.061333 543.061333a42.666667 42.666667 0 1 1-60.330667 60.330667L210.304 270.634667a42.666667 42.666667 0 0 1 0-60.330667z"
          fill="#ffffff"
      ></path>
  </svg>
</div>
${$(el).next().html()}
</div>
</div>
`;
            document.body.insertAdjacentHTML("beforeend", html);
            $(".lead-preview-close").on("click", function () {
              $(".lead-preview-box").remove();
            });
          } else {
            $(el).addClass("video_hidden");
            $(el).next().removeClass("video_hidden");
          }
        });
      }).bind(items[i])();
    }
    var items = document.querySelectorAll("#it0bi4, #i1ek7h");
    for (var i = 0, len = items.length; i < len; i++) {
      (function () {
        var el = this;
        const regex = /(m3u8)$/;
        if (regex.test($(el).attr("src"))) {
          if (Hls?.isSupported()) {
            const hls = new Hls();
            hls.loadSource($(el).attr("src"));
            hls.attachMedia(el);
          }
        }
      }).bind(items[i])();
    }
  }
})(window, jQuery);
(function (window, $, undefined) {
  $(function () {
    window._page_editor_namespaces_["cCApKfUHbtqw"].init();
  });
})(window, jQuery);

$(function () {
  window._block_namespaces_["prodlist_editor13"].init({
    relationId: "cCApKfUHbtqw",
    relationType: "5",
    pageId: "cCApKfUHbtqw",
    nodeId: "aaa_585906a04016482da774713288ff84a2",
    appId: "77338",
    appIsDev: "1",
    appVersion: "",
  });
});
