(function (window, $, undefined) {
    try { $(function () { setTimeout(function () { if ($(".owl-controls").css("display") == "none") { $(".owl-wrapper-outer .owl-item").eq(0).find(".item").css("margin", "0px 5px 0px 0px"); $(".owl-wrapper-outer .owl-item").eq($(".owl-wrapper-outer .owl-item").length - 1).find(".item").css("margin", "0px 0px 0px 5px") } }, 200) }) } catch (e) { try { console && (console.log && console.log(e)) } catch (e) { } } try {
        $(function () {
            debugger;
            if ($.fn && ($.fn.slide && typeof $.fn.slide == "function")) {
                $(".sitewidget-prodScrolling-20220905172603").slide({
                    mainCell: ".superslider-responsive-wrap ul",
                    autoPlay: true, effect: "leftMarquee", vis: 5, interTime: 50, trigger: "click", switchLoad: "_src"
                }); $(".sitewidget-prodScrolling-20220905172603").find(".tempWrap").css("width", "100%"); return
            } var slideScriptSrc = "//jkrorwxhrnkklr5q-static.micyjz.com/static/assets/widget/script/plugins/jquery.SuperSlide.2.1.1.source.js?_\x3d1662342906876"; $.getScript(slideScriptSrc, function () {
                $(".sitewidget-prodScrolling-20220905172603").slide({
                    mainCell: ".superslider-responsive-wrap ul", autoPlay: true, effect: "leftMarquee", vis: 5,
                    interTime: 50, trigger: "click", switchLoad: "_src"
                }); $(".sitewidget-prodScrolling-20220905172603").find(".tempWrap").css("width", "100%")
            })
        })
    } catch (e) { try { console && (console.log && console.log(e)) } catch (e) { } } try {
        $(function () {
            debugger;
            $(".sitewidget-touchgraphicslider-intro").each(function () { var prodIntroWords = $.trim($(this).text()).length; if (prodIntroWords > 120) { var limitwords = $.trim($(this).text()).substring(0, 119) + "..."; $(this).text(limitwords) } }); if (prodScrolling.prodList && (prodScrolling.prodList !== "undefined" &&
                typeof prodScrolling.prodList.init == "function")) { prodScrolling.prodList.init("sitewidget-prodScrolling-20220905172603"); return } $.getScript("//ijrorwxhrnkklr5q-static.micyjz.com/static/assets/widget/script/plugins/prodScrolling/prodScrolling.js?_\x3d1662342906876", function () { prodScrolling.prodList.init("sitewidget-prodScrolling-20220905172603") }); try { loadTemplateImg("sitewidget-prodScrolling-20220905172603") } catch (e) { try { console && (console.log && console.log(e)) } catch (e) { } }
        })
    } catch (e) {
        try {
            console && (console.log &&
                console.log(e))
        } catch (e) { }
    }
})(window, $);