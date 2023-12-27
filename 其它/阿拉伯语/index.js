
$(function () {
    $(".sitewidget-galleryDetail .sitewidget-bd").height("100%")
    function closeGallery() {

        $(window).bind("unload", function () {
            $(".galleryDetailBookStyle").parents('#backstage-bodyArea').css('z-index', 7)
            $(".galleryDetailBookStyle").parents('#backstage-bodyArea').prev().css('display', 'block')
        })
    }
    closeGallery()
    $(".galleryDetailBookStyle").parents('#backstage-bodyArea').css('z-index', 1000)
    $(".galleryDetailBookStyle").parents('#backstage-bodyArea').prev().css('display', 'none')
    var flipbookPages = $(".galleryDetailBookStyle").attr("data-page")
    var flipbookPagesNum = parseInt(flipbookPages)
    $(".currentPageIndexAndtotal").val(1)
    $(".leftallbtn").click(function () {
        $(".flipbook").turn("page", 1)
    })
    $(".rightallbtn").click(function () {
        var allpagesCont = $(".flipbook").turn("pages")
        $(".flipbook").turn("page", allpagesCont)
    })
    $(".rightbtn").click(function () {
        $(".flipbook").turn("next")
    })
    $(".leftbtn").click(function () {
        $(".flipbook").turn("previous")
    })
    $(".currentPageIndexAndtotal").focusout(function () {

        var nowpageUserInput = $(this).val()
        var nowpageUserInputNum = parseInt(nowpageUserInput)
        if (nowpageUserInputNum > 0 && nowpageUserInputNum
            < (flipbookPagesNum + 1)) {
            $(".flipbook").turn("page", nowpageUserInputNum)
        } else {
            var nowpageNum = $(".flipbook").turn("page")
            if (nowpageNum != 1 && nowpageNum != flipbookPagesNum) {
                $(".currentPageIndexAndtotal").val(nowpageNum + "-" + (nowpageNum + 1))
            } else {
                $(".currentPageIndexAndtotal").val(nowpageNum)
            }
        }
    })

    function loadApp() {
        if ($(window).width() > 960) {
            [@web_backend]
            setTimeout(function () {
                [/@web_backend]
$('.flipbook').turn({
                    width: ($('.galleryDetailBookStyle').height() - 65) * 1.414286,
                    height: $('.galleryDetailBookStyle').height() - 65,
                    acceleration: true,
                    cornerSize: 400,
                    elevation: 50,
                    duration: 1000,
                    gradients: true,
                    autoCenter: true,
                    turnCorners: 'page'
                });
                [@web_backend]
            }, 1000);
            [/@web_backend]
      $(".flipbook").bind("turned", function (event, page, pageObject) {
                console.log(pageObject, '+00=')
                if (page != 1 && page != flipbookPagesNum) {
                    if (page % 2 == 0) {
                        $(".currentPageIndexAndtotal").val(page + "-" + (page + 1))
                    } else {
                        $(".currentPageIndexAndtotal").val((page - 1) + "-" + page)
                    }
                } else {
                    $(".currentPageIndexAndtotal").val(page)
                }
            })
    } else {
            $('.flipbook').turn({
                width: ($('.galleryDetailBookStyle').height() - 100) * 1.414286 / 2,
                height: $('.galleryDetailBookStyle').height() - 100,
                acceleration: true,
                cornerSize: 400,
                elevation: 50,
                duration: 1000,
                gradients: true,
                autoCenter: true,
                turnCorners: 'page'
            });
            $(".flipbook").turn("display", "single")
            $(".flipbook").bind("turned", function (event, page, view) {
                console.log(view, '+00---------------------=')
                $(".currentPageIndexAndtotal").val(page)
            })
        }
        onloadHack(function(){
            console.log('回填图片');
            callBackImg();
        })
        function callBackImg(){
            var _flipbookbgm = $(".galleryDetailBookStyle .flipbook-item-bgm");
            _flipbookbgm && _flipbookbgm.each(function(index,item){
                var _bgmItem = $(item).attr("data-thumb");
                $(item).css("background-image","url("+_bgmItem+")");
            });
        }
    }

    function windowChange() {
        $(window).resize(function () {
        });
    }

    loadApp()
    windowChange()
    var isPlus = false;
    var zoomMultipleList = [1.2, 1.5, 2];
    var curZoom = 0;
    $(".search-plusBtn").click(function () {
        var length = $(".search-plusBtn").find(".fa-search-plus").length;
        if (length == 1) {
            $(".flipbook").turn("zoom", zoomMultipleList[curZoom]);
            isPlus = true;
            curZoom++;
            if (curZoom > 2) {
                $(this).find(".fa").removeClass("fa-search-plus").addClass("fa-search-minus")
                $(".flipbook").addClass("plusIng")
            }
        } else {
            curZoom = 0;
            $(".flipbook").turn("zoom", 1);
            isPlus = false;
            $(this).find(".fa").addClass("fa-search-plus").removeClass("fa-search-minus")
            $(".flipbook").css("margin-top", 0 + "px")
            $(".flipbook").removeClass("plusIng")
        }

    })
    var isDown;
    var mouseDownX;
    var mouseDownY;
    var mouseDownX2;
    var resultY = 0;
    var resultX = 0;
    var mouseDownY2;
    $(".flipbook").mousedown(function (event) {
        isDown = true;
        var getMarginTop = document.getElementsByClassName("flipbook")[0].style.marginTop;
        var getMarginLeft = document.getElementsByClassName("flipbook")[0].style.marginLeft;
        if (getMarginTop) {
            getMarginTop = parseInt(getMarginTop)
        } else {
            getMarginTop = 0
        }
        if (getMarginLeft) {
            getMarginLeft = parseInt(getMarginLeft)
        } else {
            getMarginLeft = 0
        }

        mouseDownX = event.pageX - getMarginLeft;
        mouseDownY = event.pageY - getMarginTop;
    })
    $(document).mouseup(function (event) {

        if (isDown && isPlus) {
            $(".flipbook").css("transition", "all 0.5s ")
            isDown = false;
            mouseDownX2 = event.pageX;
            mouseDownY2 = event.pageY;
            var leftPlace = $('.flipbook').offset().left;
            var topPlace = $('.flipbook').offset().top;
            var getWidth = $('.flipbook').width();
            var getHeight = $('.flipbook').height();
            var viewHeight = $(document).height();
            var viewWidth = $(document).width();
            if (topPlace > 0) {
                $(".flipbook").css("margin-top", 0 + "px")
            }

            if (getHeight + topPlace - viewHeight < 60) {
                $(".flipbook").css("margin-top", -(getHeight - viewHeight + 70) + "px")
            }
            if (leftPlace > 0) {
                $(".flipbook").css("margin-left", ((getWidth - viewWidth) / 2 + 10) + "px")
            }
            if (getWidth + leftPlace - viewWidth < 0) {
                $(".flipbook").css("margin-left", -((getWidth - viewWidth) / 2 + 10) + "px")
            }
            setTimeout(function () {
                $(".flipbook").css("transition", "none")
            }, 500);
        } else {
            isDown = false
        }

    })
    $(".flipbook").mousemove(function (event) {
        if (isDown && isPlus) {
            var difference = event.pageY - mouseDownY
            resultY = difference
            var difference2 = event.pageX - mouseDownX
            resultX = difference2
            $(".flipbook").css("margin-top", resultY + "px")
            $(".flipbook").css("margin-left", resultX + "px")
        }
    })

});

