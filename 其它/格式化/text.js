/* /develop/NCAfpUKLAWZO-noAKpfsvkPGE-GkUfApKfpKpq-jlBqrKjjnrnjmrmirni/demo.js,/develop/VkApKfUgLaPt-akUpAfKSVwKO-GvUApKfKKUAU-jpBqrKrjnrqjmimioji-jpBqrKrjoriroioimjr/demo.js,/develop/LAUKpfKCVAEZ-dyfKAphIDUYj-GvUApKfKKUAU-joBqrKjjlrliliprinr-jmBqrKjjlrlilimlkir/demo.js,/develop/LAUKpfKCVAEZ-eIpUfKMdsAZE-GvUApKfKKUAU-jqBqrKijrinipimkpli-jmBqrKjjlrlilimlkir/shoppingcartStatus.js,/develop/FLKpUAfANfAg-hkpfUACmwFWt-GvUApKfKKUAU-jjBqrKijirniqinjkrr-jpBqrKjjkrpimrijkkr/video.min.js */
/* /develop/NCAfpUKLAWZO-noAKpfsvkPGE-GkUfApKfpKpq-jlBqrKjjnrnjmrmirni/demo.js */
(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "block10244";
    var block10244 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(block10244, {
        "init": init
    })

    function init(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        // 后续代码
        //邮件订阅代码
        //获取是否开启验证
        var isVerification = $('.block-10244 #submit').attr('data-switch');
        //未开启
        if (isVerification == 'false') {
            var state = false;
            $selector.find('.mailInput').focus(function () {
                $selector.find(".block-10244 .submitBtn").removeClass("susscess_color")
                $selector.find(".susscess_icon").css("display", "none")
                $selector.find(".loading").css("display", "none")
                $selector.find(".font-icon").css("display", "inline-block")
                $selector.find(".errormessage").css('opacity', '0')
                $selector.find(".text_1").css("display", "none")
                $selector.find(".text_2").css("display", "none")
                if (state == false) {
                    // $(this).val('');

                    $selector.find(".mailInput").addClass("mailActive");

                }
            })
        }

        $selector.find('.mailInput').blur(function () {
            if ($(this).val() == '') {
                // $selector.find(this).focus();
                $selector.find(".errormessage").css('opacity', '1')
                $selector.find(".text_1").css("display", "block")
                $selector.find(".text_2").css("display", "none")
                $selector.find(".mailInput").removeClass("mailActive");
            } else {
                if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val()) == false) {
                    // $selector.find(this).focus();
                    $selector.find(".mailInput").addClass("mailActive");
                    $selector.find(".errormessage").css('opacity', '1');
                    $selector.find(".text_1").css("display", "none");
                    $selector.find(".text_2").css("display", "block");
                } else {
                    //未开启验证
                    if (isVerification == 'false') {
                        $selector.find("#mailCollect").submit();
                        $selector.find(".font-icon").css("display", "none")
                        $selector.find(".loading").css("display", "flex")
                        var serializeData = $("#mailCollect").serialize();
                        serializeData = serializeData.replace(/\+/g, " ");
                        serializeData = decodeURIComponent(serializeData);
                        $.ajax({
                            url: "/phoenix/admin/form",
                            type: "post",
                            data: serializeData,
                            success: function (data) {
                                $selector.find(".mailInput").removeClass("mailActive");
                                $selector.find(".loading").css("display", "none")
                                $selector.find(".susscess_icon").css("display", "block")
                                $selector.find(".block-10244 .submitBtn").addClass("susscess_color")
                                $selector.find(".errormessage").css('opacity', '0')
                                $selector.find(".text_1").css("display", "none")
                                $selector.find(".text_2").css("display", "none")
                            }
                        });
                        state = true;
                    }
                }
            }
        });
    }

})(window, jQuery);;
/* /develop/VkApKfUgLaPt-akUpAfKSVwKO-GvUApKfKKUAU-jpBqrKrjnrqjmimioji-jpBqrKrjoriroioimjr/demo.js */
(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {}); var name = "block11554"; var block11554 = _block_namespaces_[name] || (_block_namespaces_[name] = {}); $.extend(block11554, { "init": init }); function init(nodeObj) {
        if (!!!nodeObj) return; var $selector = $("div[data-settingid\x3d" + nodeObj.settingId + "]"); var state = false; $selector.find(".mailInput").focus(function () { if (state == false) { $(this).val(""); $selector.find(".mailInput1").addClass("mailActive") } }); $selector.find(".mailInput").blur(function () {
            if ($(this).val() ==
                "") $selector.find(".mailInput1").removeClass("mailActive"); else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val()) == false) { $selector.find(this).focus(); $selector.find(".mailInput1").addClass("mailActive") } else {
                    $selector.find("#mailCollect").submit(); var serializeData = $("#mailCollect").serialize(); serializeData = serializeData.replace(/\+/g, " "); serializeData = decodeURIComponent(serializeData); $.ajax({
                        url: "/phoenix/admin/form", type: "post", data: serializeData, success: function (data) {
                            setTimeout(function () { $selector.find(".mailInput1").removeClass("mailActive") },
                                1E3)
                        }
                    }); state = true
                }
        }); var winWidth = window.innerWidth; if (winWidth < 1200) { var height = $selector.find(".qiaoxin11554 .wrapperB").innerHeight(); $selector.find(".qiaoxin11554 .wrapperB .tileB:nth-child(5)").css("top", height + 20 + "px") } $(window).resize(function () { var winWidth1 = window.innerWidth; if (winWidth1 < 1200) { var height = $selector.find(".qiaoxin11554 .wrapperB").innerHeight(); $selector.find(".qiaoxin11554 .wrapperB .tileB:nth-child(5)").css("top", height + 20 + "px") } })
    }
})(window, jQuery);;
/* /develop/LAUKpfKCVAEZ-dyfKAphIDUYj-GvUApKfKKUAU-joBqrKjjlrliliprinr-jmBqrKjjlrlilimlkir/demo.js */
(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "block21044";
    var block21044 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(block21044, {
        "init": innit
    })

    function innit(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        $selector.find('style[styleDefault-block]').remove(); //初始化移除默认样式

        var _height = $selector.find('.nav-row').height();
        $selector.find('.block21044').height(_height)

        if ($(window).width() > 768) {
            controlArrow();
            navPosition();
        }

        $(window).resize(function () {
            var innerWidth = $(window).width();
            if (innerWidth > 768) {
                controlArrow();
                navPosition();
            }
            if (innerWidth >= 900) {
                $selector.find('.mobile-close').hide();
            } else {
                initHeight = $selector.find('.mobile-row').find('.blockNavBar').height();
                if ($selector.find('.mobile-row').css('transform') !== 'matrix(1, 0, 0, 1, 0, 0)') {
                    $selector.find('.mobile-close').hide();
                } else {
                    $selector.find('.mobile-close').show();
                }
            }
        })

        $selector.find('.status_login').on('click', function () {
            if ($selector.find('.aflex').css('opacity') == '0') {
                $selector.find('.aflex').css('opacity', 1);
            } else {
                $selector.find('.aflex').css('opacity', 0);
            }
        })

        $selector.find('.userLoginStatus').on('click', function () {
            if ($selector.find('.logins').css('opacity') == '0') {
                $selector.find('.logins').css('opacity', 1);
                $selector.find('.loginul').show();
            } else {
                $selector.find('.logins').css('opacity', 0);
                $selector.find('.loginul').hide();
            }
        })

        //控制下购物车显示的数量问题
        // var cartNum = $selector.find('.cartStyle4Num').html();
        // if (cartNum == '0') {
        //     $selector.find('.cartStyle4Num').hide();
        // } else {
        //     $selector.find('.cartStyle4Num').html('(' + cartNum + ')')
        // }

        var mobilePrev = `<i class="font-icon block-icon block-icongengduo"></i>`;
        $selector.find('.mobile-row').find('.blockNavBar').find('.shi').html(mobilePrev);

        //复制搜索代码放到手机端
        var searchHtml = $selector.find('.header-row').find('.header-search').html();
        $selector.find('.mobile-row').find('.mobile-nav-header').html(searchHtml);

        //复制币种代码放到手机端
        //var currencyHtml = $selector.find('.header-row').find('.header-currency').html();
        //$selector.find('.mobile-row').find('.mobile-nav-localization').html(currencyHtml);

        //复制导航代码放到手机端
        var navHtml = $selector.find('.header-row').find('.header-menu').html();
        $selector.find('.mobile-row').find('.mobile-nav-menu').html(navHtml);

        //处理手机端箭头的显示
        $selector.find('.mobile-row').find('.mobile-nav-menu').find('.nav-li').each(function () {
            if ($(this).find('.subWra').length !== 0) {
                $(this).find('.shi').html("<i class='font-icon block-icon block-icongengduo'></i>")
            }
        });

        //监听滚动条滚动
        $(window).scroll(function () {
            var _height = $selector.find('.nav-row').height();
            $selector.find('.block21044').height(_height)
            if ($(document).scrollTop() > 50) {
                $selector.find('.nav-top').css('height', '0');
                $selector.find('.nav-row').css('top', '0').css('position', 'fixed');
                // $selector.find('.mobile-row').css('top','0');
            } else if ($(document).scrollTop() < 50) {
                $selector.find('.nav-top').css('height', '');
                $selector.find('.nav-row').css('top', '0').css('position', '');
                // $selector.find('.mobile-row').css('top','');
            }
        })

        var noChild = '';
        $selector.find('.header-row').find('.nav-li').each(function () {
            if ($(this).find('.sub').length !== 0) {
                $(this).find(".but i").css('display', "block");
                $(this).hover(function () {
                    $(this).find('.sub').addClass('subActive');
                }, function () {
                    $(this).find('.sub').removeClass('subActive');
                });
                noChild = $(this).find('.sub').find('.ulSub').html();
                $(this).find('.single-parent').html(noChild);

                $(this).find('.sub').find('.single-parent').find('.liSub').each(function () {
                    if ($(this).hasClass('has03sub') == true) {
                        $(this).css('display', 'none');
                    } else {
                        $(this).addClass('level-2')
                    }
                })

                $(this).find('.sub').find('.ulSub').find('.liSub').each(function () {
                    if ($(this).hasClass('has03sub') == false) {
                        $(this).css('display', 'none');
                    }
                })

                // $(this).find('.sub').find('.liSub').each(function() {
                //     if ($(this).hasClass('has03sub') == false) {
                //         noChild = "<div class='level-2'>" + $(this).html() + "</div>";
                //         $(this).parent().siblings().html(noChild);
                //         $(this).css('display', 'none');
                //     }
                // })
            }
        });

        // var text = $selector.find('.header-row').find(".payCoin-menu").find(".payCoin-item").find(".payCoin-item-text").eq(0).text();
        // $selector.find('.header-row').find(".payCoin_text").find(".payCoin-item-text.nav_text").text(text);

        $selector.find('.header-row').find('.clickShow').off('click').on('click', function (e) {
            e.stopPropagation();
            if ($selector.find('.header-row').find(".payCoin-menu").css("display") == "none") {
                $selector.find('.header-row').find(".payCoin-menu").fadeIn(300);
                $selector.find('.header-row').find(".clickShow").find("i").addClass("toggle");
            } else {
                $selector.find('.header-row').find(".payCoin-menu").fadeOut(300);
                $selector.find('.header-row').find(".clickShow").find("i").removeClass("toggle");
            }
        });

        $(document).click(function () {
            $selector.find('.header-row').find(".payCoin-menu").fadeOut(300);
            $selector.find('.header-row').find(".clickShow").find("i").removeClass("toggle");
        })

        $selector.find('.payCoin-menu').find('.payCoin-item').click(function () {
            // var coinHtml = $(this).find('.payCoin-item-text').html();
            // $selector.find('.header-row').find(".payCoin_text").find(".payCoin-item-text.nav_text").html(coinHtml);
            $selector.find('.header-row').find(".payCoin-menu").fadeOut(300);
            $selector.find('.header-row').find(".clickShow").find("i").removeClass("toggle");
            // history.go(0);
        })

        $selector.find('.header-row').find(".search-wrap_wrap").click(function () {
            $selector.find('.header-row').find(".search-input").show(300);
            // $selector.find('.user-username-outer').hide(300);
            // $selector.find('.status_login').hide(300);
            $selector.find('.aflex').css('opacity', 0)
            $selector.find('.logins').css('opacity', 0)
        });

        $selector.find('.header-row').find(".closeBox").click(function () {
            $selector.find('.header-row').find(".search-input").hide(300);
            // $selector.find('.user-username-outer').show(300);
            // $selector.find('.status_login').show(300);
        });

        //移动端

        $selector.find(".header-row").find(".header-icon").click(function () {
            $('html,body').css('overflow', 'hidden').css('height', '100%');
            $selector.find(".mobile-background").show();
            $selector.find(".mobile-row").css("transform", "translateX(0)");
            $selector.find(".mobile-close").css("display", "block");
        });

        $selector.find(".mobile-background").click(function () {
            $('html,body').css('overflow', '').css('height', '');
            $selector.find(".mobile-background").hide();
            // $selector.find(".mobile-row").find(".mobile-background").css("opacity", "0");
            $selector.find(".mobile-row").css("transform", "translateX(-103%)");
            $selector.find(".mobile-close").css("display", "none");
        });

        $selector.find(".mobile-close").click(function () {
            $('html,body').css('overflow', '').css('height', '');
            $selector.find(".mobile-background").hide();
            // $selector.find(".mobile-row").find(".mobile-background").css("opacity", "0");
            $selector.find(".mobile-row").css("transform", "translateX(-103%)");
            $selector.find(".mobile-close").css("display", "none");
        })

        var text1 = $selector.find('.mobile-row').find(".payCoin-menu").find(".payCoin-item").find(".payCoin-item-text").eq(0).text();
        $selector.find('.mobile-row').find(".payCoin_text").find(".payCoin-item-text.nav_text").text(text1);

        $selector.find('.mobile-row').find('.clickShow').off('click').on('click', function () {
            if ($selector.find('.mobile-row').find(".payCoin-menu").css("display") == "none") {
                $selector.find('.mobile-row').find(".payCoin-menu").fadeIn(300);
                $selector.find('.mobile-row').find(".clickShow").find("i").addClass("toggle");
            } else {
                $selector.find('.mobile-row').find(".payCoin-menu").fadeOut(300);
                $selector.find('.mobile-row').find(".clickShow").find("i").removeClass("toggle");
            }
        });

        $selector.find('.mobile-nav-localization').find('.payCoin-menu').find('.payCoin-item').click(function () {
            phoenixSite.payCoinExchange.handleElement($('body'));
            var newCoinHtml = $(this).find('.payCoin-item-text').html();
            $selector.find('.mobile-row').find(".payCoin_text").find(".payCoin-item-text.nav_text").html(newCoinHtml);
            $selector.find('.mobile-row').find(".payCoin-menu").fadeOut(300);
            $selector.find('.mobile-row').find(".clickShow").find("i").removeClass("toggle");
            // history.go(0);
        })



        $selector.find('.mobile-row').find(".search-wrap_wrap").click(function () {
            $selector.find('.mobile-row').find(".search-input").show(300);
            $selector.find('.mobile-close').hide();
        });

        $selector.find('.mobile-row').find(".closeBox").click(function () {
            $selector.find('.mobile-row').find(".search-input").hide(300);
            $selector.find('.mobile-close').show();
        });

        var initHeight = $selector.find('.mobile-row').find('.blockNavBar').height();
        $selector.find(".mobile-row").find(".nav-li").each(function () {
            $(this).find('.shi').click(function () {
                if ($(this).parent().find('.subWra').length !== 0) {
                    //控制二级导航back，一级显示
                    if ($(this).parent().find('.liSub').eq(0).find('a').hasClass('backLevel02') == false) {
                        var clickHtml = $(this).parent().find('.subWra').find('.ulSub').html();
                        var href02 = $(this).parent().find(".but").attr('href');
                        var clickText = $(this).parent().find(".but").text();
                        var supplyLevel02 = `<li class="liSub"><a class="backLevel02"><i class="font-icon block-icon block-iconzuo"></i><span>BACK</span></a></li><li class="liSub"><a href="${href02}">${clickText}</a></li>`;
                        var combination = supplyLevel02 + clickHtml;
                        $(this).parent().find('.subWra').find('.ulSub').html(combination);
                    }
                    //控制二级导航的箭头
                    $(this).parent().find('.has03sub').each(function () {
                        var isExist = $(this).find('.hh').children().length;
                        if (isExist <= 2) {
                            var hhHtml = $(this).find('.hh').html();
                            var sub03 = `<div class="shi1"><i class="font-icon block-icon block-icongengduo"></i></div>`;
                            $(this).find('.hh').html(sub03 + hhHtml)
                        }
                    })
                    var newHeight = $(this).parent().find('.subWra').find('.ulSub').innerHeight();
                    console.log(newHeight)
                    $selector.find('.mobile-row').find('.blockNavBar').height(newHeight);
                    $(this).parent().find('.subWra').addClass('mobileActive');
                    $(this).parent().find('.ulSub').find('.liSub').eq(0).click(function () {
                        $(this).parent().parent().parent().parent().height(initHeight);
                        $(this).parent().parent().removeClass('mobileActive')
                    });

                } else {
                    $(this).parent().find('.but').find('.block-icongengduo').css('display', 'none');
                }

                $(this).parent().find('.subWra').find('.has03sub').each(function () {
                    $(this).find('.hh').find('.shi1').click(function () {
                        if ($(this).parent().find('.nav03-liSub').eq(0).find('a').hasClass('backLevel03') == false) {
                            var clickHtml03 = $(this).parent().find('.nav03-ulSub').html();
                            var href03 = $(this).parent().find('.textBox').find('a').attr('href');
                            var clickText03 = $(this).parent().find('.textBox').find('a').text();
                            var supplyLevel03 = `<li class="nav03-liSub"><a class="backLevel03"><i class="font-icon block-icon block-iconzuo"></i><span>BACK</span></a></li><li class="nav03-liSub"><a href="${href03}">${clickText03}</a></li>`;
                            var combination03 = supplyLevel03 + clickHtml03;
                            $(this).parent().find('.nav03-ulSub').html(combination03);
                        }

                        var nav03liSub = $(this).parent().find('.nav03-ulSub').find('.nav03-liSub').innerHeight();
                        var nav03liSubLength = $(this).parent().find('.nav03-ulSub').find('.nav03-liSub').length;
                        var newHeight03 = nav03liSub * nav03liSubLength + 10;
                        $selector.find('.mobile-row').find('.blockNavBar').height(newHeight03);
                        $(this).parent().find('.nav03-ulSub').addClass('mobileActive02');

                        var initHeight02 = $(this).parent().parent().parent().height();

                        $(this).parent().find('.nav03-ulSub').find('.nav03-liSub').eq(0).click(function () {
                            $(this).parent().parent().parent().parent().parent().parent().parent().height(initHeight02);
                            $(this).parent().removeClass('mobileActive02')
                        });
                    })
                })
            })
        });




        function controlArrow() {
            var menuWidth = $selector.find('.header-menu').width();
            menuWidth = menuWidth + 48;
            $selector.find('.button-next').css('left', menuWidth + 'px');
        }

        //按钮的出现和隐藏  
        function navPosition() {



            var navigationWidth = Math.floor($selector.find(".header-left-row .navigation").width());
            // console.log(navigationWidth)
            var arrayObj = new Array();

            var translateX = 0;
            var ulWidth = 0;

            $selector.find(".header-left-row .navBox").find(".navTile").each(function () {
                ulWidth += Math.floor($(this).width()) + 40;
            })

            var ulWidth02 = ulWidth - 20;
            var windowWidth = $(window).width();

            if (ulWidth02 <= navigationWidth) {
                console.log(1)
                $selector.find(".header-left-row .navBox").width(ulWidth + 'px');
                $selector.find(".header-left-row .navCenter").css("padding", "0px");
                $selector.find(".header-left-row .button-prev").hide();
                $selector.find(".header-left-row .button-next").hide();
            } else {
                $selector.find(".header-left-row .navBox").width(ulWidth + 'px');
                $selector.find(".header-left-row .navCenter").css("padding", "0px 20px");
                $selector.find(".header-left-row .button-prev").hide();
                $selector.find(".header-left-row .button-next").show();
            }
            var navigationLeft = Math.floor($selector.find(".header-left-row .navigation").offset().left);
            var navigationRight = Math.floor($selector.find(".header-left-row .navigation").width()) + navigationLeft;


            //点击左右按钮切换导航
            $selector.find(".header-left-row .button-prev").click(function () {
                var navBoxLeft = Math.floor($selector.find(".header-left-row .navBox").offset().left);
                var navBoxRight = Math.floor($selector.find(".header-left-row .navBox").width()) + navigationLeft;
                var navigationLeft = Math.floor($selector.find(".header-left-row .navigation").offset().left);
                var navigationRight = Math.floor($selector.find(".header-left-row .navigation").width()) + navigationLeft;

                if (navBoxLeft < navigationLeft) {
                    var liDom = $selector.find(".header-left-row .navTile");
                    var liLength = liDom.length;
                    for (var i = liLength - 1; i >= 0; i--) {
                        var lengths = liLength - i - 1;
                        var thisLeft = Math.floor(liDom.eq(i).offset().left);

                        var thisRight = Math.floor(liDom.eq(i).width()) + thisLeft;
                        if (thisLeft < navigationLeft) {

                            var arrayLength = arrayObj.length;

                            if (arrayLength == 1) {
                                translateX -= arrayObj[0];
                                arrayObj.pop();
                                break;
                            } else {
                                var q1 = arrayObj[arrayLength - 1] - arrayObj[arrayLength - 2];

                                translateX -= q1;
                                arrayObj.pop();
                                break;
                            }

                        }
                    }
                } else {
                    translateX = 0;
                }
                // $selector.find(".navBox").css({
                //     'transform': 'translateX(' + translateX + 'px)'
                //     // 'left': translateX + 'px'
                // });

                $selector.find('.header-left-row .navigation').stop(true).animate({
                    scrollLeft: Math.abs(translateX)
                });


                if (translateX >= 0) {
                    $selector.find(".header-left-row .button-prev").hide();
                    $selector.find(".header-left-row .button-next").show();
                } else {

                    $selector.find(".header-left-row .button-prev").show();
                    $selector.find(".header-left-row .button-next").show();

                }

                // console.log(1)


            });
            $selector.find(".header-left-row .button-next").click(function () {
                var moveWidth = $(window).width();
                var navigationLeft = Math.floor($selector.find(".header-left-row .navigation").offset().left);
                var navigationRight = Math.floor($selector.find(".header-left-row .navigation").width()) + navigationLeft;

                var navBoxLeft = Math.floor($selector.find(".header-left-row .navBox").offset().left);
                var navBoxRight = Math.floor($selector.find(".header-left-row .navBox").width()) + navigationLeft;
                var arrayLength = arrayObj.length;
                if (navBoxRight > navigationRight) {
                    $selector.find(".header-left-row .navTile").each(function (e) {
                        var thisLeft = Math.floor($(this).offset().left);
                        var thisRight = Math.floor($(this).width()) + thisLeft;
                        if (thisRight > navigationRight) {
                            if (thisLeft < navigationRight) {

                                var w1 = Math.floor($selector.find(".header-left-row .navOne").width());
                                var all = 0;
                                for (var i = e; i--; i >= 0) {
                                    var w2 = Math.floor($selector.find(".header-left-row .navTile").eq(i).width());
                                    all += w2;
                                }

                                if (arrayLength == 0) {
                                    translateX -= all;
                                } else {
                                    all = all + arrayObj[0];
                                    translateX -= all;
                                }
                                // translateX -= all;
                                return false;
                            } else {
                                translateX -= Math.floor($selector.find(".header-left-row .navigation").width());
                                return false;

                            }

                        }

                    });

                    arrayObj.push(translateX);

                } else {
                    translateX = 0;

                }

                // $selector.find('.navigation').on('scroll', function(){
                $selector.find('.header-left-row .navigation').stop(true).animate({
                    scrollLeft: Math.abs(translateX)
                });
                // })
                // $selector.find(".navBox").css({
                //     'transform': 'translateX(' + translateX + 'px)'
                // });
                var a2 = Math.floor($selector.find(".header-left-row .navigation").width());

                var a3 = ulWidth + translateX - 20;

                var a1 = a2 + translateX;

                if (translateX == 0) {
                    $selector.find(".header-left-row .button-prev").hide();
                    $selector.find(".header-left-row .button-next").show();
                } else {
                    if (a3 < a2) {
                        $selector.find(".header-left-row .button-prev").show();
                        $selector.find(".header-left-row .button-next").hide();
                    } else {
                        $selector.find(".header-left-row .button-prev").show();
                        $selector.find(".header-left-row .button-next").show();
                    }

                }

            });
        }








    }
})(window, jQuery);;
/* /develop/LAUKpfKCVAEZ-eIpUfKMdsAZE-GvUApKfKKUAU-jqBqrKijrinipimkpli-jmBqrKjjlrlilimlkir/shoppingcartStatus.js */
(function (window, $, undefined) {
    var phoenixSite = window.phoenixSite || (window.phoenixSite = {}); var payCoinExchange = phoenixSite.payCoinExchange || (phoenixSite.payCoinExchange = {}); var shoppingcartStatus = phoenixSite.shoppingcartStatus || (phoenixSite.shoppingcartStatus = {}); shoppingcartStatus.version = "2.0.1"; var isSubmit = false; $.extend(shoppingcartStatus, {
        init: function (options) {
            if (typeof options == "undefined") return; var componentId = options["componentId"]; if (!!!componentId) return; var $component = $("#" + componentId);
            if (!$component.length) return; if ($("div.sitewidget-shoppingCart").length || $("div.sitewidget-orderConfirm").length) { var statusEle = $("a[data-attr\x3dshoppingcartStatus]"), cartPageUrl = statusEle.attr("data-href") || "/"; statusEle.attr("href", cartPageUrl); return } _helper.click($component)
        }, countLayerShopcart: function (selector) {
            var _selectors = []; if (typeof selector !== "undefined" && $.isArray(selector)) $.merge(_selectors, selector); else if (typeof selector !== "undefined" && typeof selector === "string") _selectors.push(selector);
            else _selectors.push("[data-attr\x3dlayerShoppingcart]"); var elements = []; $.each(_selectors, function (key, value) { $.merge(elements, $(value)) }); if (!elements.length) return; $.each(elements, function () { var that = $(this); countPrice(that) })
        }, showLayerShopcart: showLayerShopcart
    }); var _helper = {}; $.extend(_helper, { isProdQuantity: function (prodQuantity) { if (!!!prodQuantity || isNaN(prodQuantity)) return false; if (/^[1-9]\d*$/.test(prodQuantity)) return true } }); $.extend(_helper, {
        click: function ($component) {
            var clickEle =
                $component.find("[data-attr\x3dshoppingcartStatus]"); if (!clickEle.length) return; clickEle.unbind("click").bind("click", function (e) { showLayerShopcart() })
        }
    }); function showLayerShopcart() {
        var ajaxOption = {
            url: "/phoenix/admin/order/layerShoppingcart", type: "post", beforeSend: function () {
                var loading = $('\x3cdiv class\x3d"cart-wrap-fixedr-mark"\x3e\x3cdiv class\x3d"double-bounce-wrap"\x3e\x3cdiv class\x3d"double-bounce1"\x3e\x3c/div\x3e\x3cdiv class\x3d"double-bounce2"\x3e\x3c/div\x3e\x3c/div\x3eLoading...\x3c/div\x3e');
                $("body").append(loading); loading.animate({ "right": "0" }, "fast")
            }, done: function (response, textStatus, jqXHR) { if ($("#cart-dialog") && $("#cart-dialog").length && $("#cart-dialog").css("right") == "0px") $(".cart-wrap-fixedr-mark").remove(); if ($("#prodInquireBasket").length) $("#prodInquireBasket").slideUp(); try { response = $.parseJSON(response) } catch (e) { response = {} } renderLayerShopcart(response) }, fail: function (jqXHR, textStatus, errorThrown) { }
        }; phoenixSite.ajax(ajaxOption)
    } function renderLayerShopcart(response) {
        var layerShopcart =
            $("div[data-attr\x3dlayerShoppingcart]"); var html = [], shopcartPageUrl = response["shopcartPageUrl"] || "", auth_isShowPrice = response["auth_isShowPrice"] || false; var prods = response["orderProds"] || []; var phoenix_view_cart = phoenixSite.message(phoenixSite.lanEdition, "phoenix_view_cart"); _helper.phoenix_shopingcart_subtotal = response["phoenix_shopingcart_subtotal"]; _helper.phoenix_shopingcart_shopping = response["phoenix_shopingcart_shopping"]; _helper.phoenix_shopingcart_selectAll = response["phoenix_shopingcart_selectAll"];
        _helper.phoenix_shopingcart_delGood = response["phoenix_shopingcart_delGood"]; _helper.phoenix_shopingcart_submit = response["phoenix_shopingcart_submit"]; _helper.phoenix_shopingcart_confirmDel = response["phoenix_shopingcart_confirmDel"]; _helper.phoenix_shopingcart_frequency = response["phoenix_shopingcart_frequency"]; _helper.phoenix_shopingcart_viewCart = response["phoenix_shopingcart_viewCart"]; _helper.phoenix_shopingcart_empty = response["phoenix_shopingcart_empty"]; var isCartShow = $("#cart-dialog"); if (!isCartShow.length) html.push('\x3cdiv class\x3d"cart-wrap cart-wrap-fixedr" id\x3d"cart-dialog" data-attr\x3d"layerShoppingcart" data-type\x3d"layerShoppingcart"\x3e');
        var _menu_prefix = ""; if (phoenixSite.page != undefined && phoenixSite.page._menu_prefix != undefined) _menu_prefix = phoenixSite.page._menu_prefix; html.push('\x3cform action\x3d"' + _menu_prefix + '/phoenix/admin/order/confirm" method\x3d"post" data-attr\x3d"form"\x3e'); html.push('\x3cp class\x3d"close"\x3e\x3cspan\x3e' + _helper.phoenix_shopingcart_viewCart + '\x3c/span\x3e\x3ci class\x3d"fa fa-times" aria-hidden\x3d"true"\x3e\x3c/i\x3e\x3c/p\x3e'); if ($.inArray(prods) && prods.length) {
            html.push('\x3cul class\x3d"cart-ul" data-attr\x3d"shoppingcartLayerSub"\x3e');
            html.push(renderProdHtml(response, prods, auth_isShowPrice)); html.push("\x3c/ul\x3e"); html.push('\x3cdiv class\x3d"total-price"\x3e'); html.push('\x3cspan class\x3d"selectAll"\x3e\x3cinput type\x3d"checkbox" /\x3e' + _helper.phoenix_shopingcart_selectAll + "\x3c/span\x3e"); html.push('\x3cspan class\x3d"view-cart" style\x3d"position: absolute;right: 0;top: 50%;transform: translateY(-50%);"\x3e\x3ca href\x3d"' + _menu_prefix + shopcartPageUrl + '"\x3e' + phoenix_view_cart + "\x3c/a\x3e\x3c/span\x3e"); html.push('\x3cspan class\x3d"title"\x3e\x3ca href\x3d"' +
                _menu_prefix + shopcartPageUrl + '"\x3e' + _helper.phoenix_shopingcart_subtotal + "\x3c/a\x3e\x3c/span\x3e"); if (auth_isShowPrice) { html.push('\x3cdiv class\x3d"price-contain"\x3e'); html.push('\x3cspan class\x3d"fl price-all currencySymbol"\x3e\x3c/span\x3e'); html.push('\x3cspan class\x3d"fl price-all needExchangeValue" data-attr\x3d"layerShoppingCartTotal" data-type\x3d"layerShopcart"\x3e\x3c/span\x3e\x3c/div\x3e') } html.push("\x3c/div\x3e"); html.push('\x3cdiv class\x3d"menu-btn"\x3e'); html.push('\x3cspan class\x3d"checkout" data-attr\x3d"submit" title\x3d"' +
                    _helper.phoenix_shopingcart_submit + '"\x3e' + _helper.phoenix_shopingcart_submit + "\x3c/span\x3e"); html.push('\x3cspan id\x3d"quickcart_paypal"\x3e\x3c/span\x3e'); html.push("\x3c/div\x3e")
        } else html.push('\x3cp class\x3d"empty-cart"\x3e' + _helper.phoenix_shopingcart_empty + "\x3c/p\x3e"); html.push('\x3cinput type\x3d"hidden" name\x3d"extendProp" value\x3d""\x3e'); html.push('\x3cinput type\x3d"hidden" name\x3d"confirmType" value\x3d"0"\x3e'); html.push("\x3c/form\x3e"); if (!isCartShow.length) {
            html.push("\x3c/div\x3e");
            layerShopcart.unbind("close").remove(); $("body").unbind("click.shopcartstatus"); $("body").append(html.join(""))
        } else { isCartShow.empty(); isCartShow.append(html.join("")) } $(".cart-wrap-fixedr").animate({ "right": "0" }, "fast", function () { setTimeout(function () { $(".cart-wrap-fixedr-mark").fadeOut(function () { $(this).remove() }) }, 1E3) }); layerBind(); if (!!response.paypalClientId) paypalInitial(response.paypalClientId, response.phoenix_default_currency)
    } function paypalInitial(paypalClientId, currency) {
        if ("undefined" !=
            typeof paypal) renderButton(); else { $.ajaxSetup({ cache: true }); $.getScript("https://www.paypal.com/sdk/js?client-id\x3d" + paypalClientId + "\x26disable-funding\x3dcard\x26commit\x3dfalse\x26currency\x3d" + currency, function () { renderButton() }) }
    } function renderButton() {
        var checkoutId; paypal.Buttons({
            style: { layout: "horizontal", height: 48, label: "checkout", tagline: false }, createOrder: function () {
                var layShopcart = $("div[data-attr\x3dlayerShoppingcart]"); var extendPropValue = _helper.prepareParam(layShopcart); if (!!!extendPropValue) return;
                return fetch("/phoenix/admin/orderv2/smartPayment/cart", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: "confirmType\x3d0\x26extendProp\x3d" + extendPropValue }).then(function (res) { return res.json() }).then(function (data) { checkoutId = data["checkoutUUID"]; return data.id })
            }, onApprove: function (data, actions) { window.open("/phoenix/admin/checkout/smartPayment/confirm?checkoutId\x3d" + checkoutId, "_self") }
        }).render("#quickcart_paypal")
    } function renderProdHtml(response, prods, auth_isShowPrice) {
        var prodsHtml =
            []; var currencySymbol = response["currencySymbol"] || ""; var i, prodLength, prod; var defaultRate, type, unit, symbol, rate, newRate; var cookieObject = payCoinExchange.getCurrencyCookie(); defaultRate = cookieObject["defaultRate"], type = cookieObject["type"], unit = cookieObject["unit"], symbol = cookieObject["symbol"], rate = cookieObject["rate"]; for (i = 0, prodLength = prods.length; i < prodLength; i++) {
                var prod = prods[i]; var orderProdIsProdTradeEnabled = prod["orderProdIsProdTradeEnabled"] || false; prodsHtml.push('\x3cli class\x3d"cart-list" data-attr\x3d"prod" data-id\x3d"' +
                    prod["orderProdId"] + '"\x3e'); prodsHtml.push('\x3cinput type\x3d"checkbox" class\x3d"cart-ipt" /\x3e'); prodsHtml.push('\x3cimg src\x3d"' + prod["orderProdImgUrl"] + '" alt\x3d"' + prod["orderProdName"] + '" title\x3d"' + prod["orderProdName"] + '"/\x3e'); prodsHtml.push('\x3cdiv class\x3d"cart-list-wrap"\x3e'); prodsHtml.push('\x3cp\x3e\x3ca href\x3d"' + prod["prodUrl"] + '"\x3e' + prod["orderProdName"] + "\x3c/a\x3e\x3c/p\x3e"); if (auth_isShowPrice && orderProdIsProdTradeEnabled) {
                        prodsHtml.push('\x3cp style\x3d"position:absolute;top:70px;left: 0;"\x3e\x3cspan class\x3d"price currencySymbol"\x3e' +
                            currencySymbol + "\x3c/span\x3e"); var _showProdDiscount = parseFloat(prod["orderProdDiscount"]) * rate; var _showProdUnitPrice = parseFloat(prod["orderProdUnitPrice"]) * rate; if (prod["orderProdIsShowDiscountPrice"]) {
                                prodsHtml.push('\x3cspan class\x3d"price needExchangeValue real"'); prodsHtml.push(' exchangevalue\x3d"' + prod["orderProdDiscount"] + '"'); prodsHtml.push(' exchangeValueUnitPrice\x3d"' + prod["orderProdUnitPrice"] + '"'); prodsHtml.push(' exchangeValueDiscountPrice\x3d"' + prod["orderProdDiscount"] + '"'); prodsHtml.push(_showProdDiscount);
                                prodsHtml.push("\x3e\x3c/span\x3e")
                            } else { prodsHtml.push('\x3cspan class\x3d"price needExchangeValue real"'); prodsHtml.push(' exchangevalue\x3d"' + prod["orderProdUnitPrice"] + '"'); prodsHtml.push(' exchangeValueUnitPrice\x3d"' + prod["orderProdUnitPrice"] + '"'); prodsHtml.push("\x3e"); prodsHtml.push(_showProdUnitPrice); prodsHtml.push("\x3c/span\x3e") } prodsHtml.push("\x3c/p\x3e")
                    } var attrs = prod["orderProdAttrs"] || [], j; if ($.inArray(attrs) || !attrs.length) {
                        prodsHtml.push('\x3cdiv class\x3d"detail-sku"\x3e');
                        for (j = 0, attrLength = attrs.length; j < attrLength; j++) { var attr = attrs[j]; prodsHtml.push("\x3cspan\x3e"); prodsHtml.push(attr["propValue"]); if (j != attrLength - 1) prodsHtml.push(",\x26nbsp;"); prodsHtml.push("\x3c/span\x3e") } prodsHtml.push("\x3c/div\x3e")
                    } prodsHtml.push('\x3cdiv class\x3d"input-wrap"\x3e'); prodsHtml.push('\x3cspan class\x3d"reduce" data-attr\x3d"minus"\x3e-\x3c/span\x3e'); prodsHtml.push('\x3cinput type\x3d"number" data-attr\x3d"prodQuantity" prodId\x3d"' + prod["prodId"] + '" skuValueId\x3d"' + prod["skuValueId"] +
                        '" value\x3d"' + prod["orderProdQuantity"] + '" data-id\x3d"' + prod["orderProdId"] + '"\x3e'); prodsHtml.push('\x3cspan class\x3d"add" data-attr\x3d"plus"\x3e+\x3c/span\x3e'); prodsHtml.push('\x3cdiv class\x3d"hide  low-stocks-error" data-attr\x3d"layerProdQuantityTip" data-id\x3d"' + prod["orderProdId"] + '"\x3e\x3c/div\x3e'); prodsHtml.push("\x3c/div\x3e"); prodsHtml.push("\x3c/div\x3e"); if (auth_isShowPrice && orderProdIsProdTradeEnabled) {
                            var orderProdWholeSaleResult = prod["orderProdWholeSaleResult"] || ""; if (!!orderProdWholeSaleResult) {
                                prodsHtml.push('\x3cscript dataId\x3d"' +
                                    prod["orderProdId"] + '" type\x3d"text/wholeSale"\x3e'); prodsHtml.push($.toJSON(prod["orderProdWholeSaleResult"])); prodsHtml.push("\x3c/script\x3e")
                            }
                        } prodsHtml.push("\x3c/li\x3e")
            } return prodsHtml.join("")
    } function addNum(extendProp, prodId) { $.ajax({ url: "/phoenix/admin/order/addToCart", type: "post", dataType: "json", data: { "extendProp": extendProp, "quantity": 1, "prodIds": prodId }, success: function (res) { } }) } function updateNum(quantity, prodId) {
        isSubmit = true; submitStatus(); $.ajax({
            url: "/phoenix/admin/order/updateShoppingcartItemQuantity",
            type: "post", dataType: "json", data: { "quantity": quantity, "orderProdId": prodId }, success: function (res) { isSubmit = false; submitStatus() }
        })
    } function submitStatus() {
        if (isSubmit) $(".cart-ul").find(".cart-list").each(function () { $(this).find(".input-wrap").find('input[type\x3d"number"]').prop("readonly", true); $(this).find(".input-wrap").find(".reduce").css("cursor", "not-allowed"); $(this).find(".input-wrap").find(".add").css("cursor", "not-allowed"); $(this).find(".input-wrap").find(".reduce").addClass("waitting") });
        else $(".cart-ul").find(".cart-list").each(function () { $(this).find(".input-wrap").find('input[type\x3d"number"]').prop("readonly", false); $(this).find(".input-wrap").find(".reduce").css("cursor", "pointer"); $(this).find(".input-wrap").find(".add").css("cursor", "pointer"); $(this).find(".input-wrap").find(".reduce").removeClass("waitting") })
    } function mulDel(dataId, $component) {
        var ajaxOption = {
            url: "/phoenix/admin/order/deleteShoppingcartItem", dataType: "json", type: "post", data: { "deleteProdIds": dataId }, done: function (response,
                textStatus, jqXHR) { _helper.afterRemoveShoppingcartProd($component) }, fail: function (jqXHR, textStatus, errorThrown) { }
        }; phoenixSite.ajax(ajaxOption)
    } function layerBind() {
        var layShopcart = $("div[data-attr\x3dlayerShoppingcart]"); if (!layShopcart.length) return; _helper.close(layShopcart); _helper.minus(layShopcart); _helper.plus(layShopcart); _helper.prodQuantity(layShopcart); phoenixSite.payCoinExchange.handleElement($("div[data-attr\x3dlayerShoppingcart][data-type\x3dlayerShoppingcart]")); _helper.countPrice(layShopcart);
        _helper.countTotalNum(layShopcart); _helper.submitOrder(layShopcart); clickSelectAll("init"); $(".total-price").find(".selectAll").children("input").click(function () { clickSelectAll("") }); $(".cart-ul").find(".cart-ipt").click(function () {
            setTimeout(function () {
                var total = $(".cart-ul").find(".cart-ipt").length; var num = 0; $(".cart-ul").find(".cart-ipt").each(function () { if ($(this).is(":checked")) { num++; $(".cart-wrap-fixedr .menu-btn .delBtn").removeClass("btn-del-no") } }); if (num === 0) $(".cart-wrap-fixedr .menu-btn .delBtn").addClass("btn-del-no");
                if (num == total) $(".total-price").find(".selectAll").children("input").prop("checked", true); else $(".total-price").find(".selectAll").children("input").prop("checked", false); _helper.countPrice($(".cart-wrap")); _helper.countTotalNum($(".cart-wrap")); hideProdQuantityTip($(".cart-wrap"))
            }, 100)
        })
    } function clickSelectAll(init) {
        var ele = $(".total-price").find(".selectAll").children("input"); if ("init" == init) ele.prop("checked", true); if (ele.is(":checked")) {
            $(".cart-wrap-fixedr .menu-btn .delBtn").removeClass("btn-del-no");
            $(".cart-ul").find(".cart-ipt").each(function () { $(this).prop("checked", true) })
        } else { $(".cart-ul").find(".cart-ipt").each(function () { $(this).prop("checked", false) }); $(".cart-wrap-fixedr .menu-btn .delBtn").addClass("btn-del-no") } _helper.countPrice($(".cart-wrap")); _helper.countTotalNum($(".cart-wrap")); hideProdQuantityTip($(".cart-wrap"))
    } $.extend(_helper, {
        close: function ($component) {
            $("body").unbind("click.shopcartstatus").bind("click.shopcartstatus", function (e) {
                var _target = $(e.target); var isCart =
                    _target.attr("id"); console.log(isCart); if (_target.closest("div[data-attr\x3dlayerShoppingcart][data-type\x3dlayerShoppingcart]").length == 0 && isCart != "addToCart" && isCart != "addToCartList") $component.triggerHandler("close")
            }); $component.unbind("close").bind("close", function (e) { $component.css({ "right": "-100%" }, function () { $component.remove() }) }); $component.find(".close").unbind("click").bind("click", function () { $component.triggerHandler("close") }); $component.find(".continue").click(function () { $component.triggerHandler("close") });
            $component.find(".delBtn").click(function () {
                var isCarAllNull = false; $(".cart-ul .cart-list input.cart-ipt").each(function (item) { if ($(this).prop("checked")) isCarAllNull = true }); if (!isCarAllNull) return false; var val = window.confirm(_helper.phoenix_shopingcart_confirmDel); if (val) {
                    var dataId = []; $(".cart-ul").find(".cart-list").each(function () {
                        if ($(this).find(".cart-ipt").is(":checked")) {
                            dataId.push($(this).find('input[type\x3d"number"]').attr("data-id")); $(this).remove(); _helper.countPrice($component); _helper.countTotalNum($component);
                            hideProdQuantityTip($component)
                        } mulDel(dataId.join(","), $component)
                    })
                }
            })
        }
    }); $.extend(_helper, {
        minus: function ($component) {
            var minus = $component.find("[data-attr\x3dminus]"), shoppingcarts = $("[data-attr\x3dshoppingcartLayerSub]"); minus.unbind("click").bind("click", function () {
                var that = $(this); if (isSubmit) { alert(_helper.phoenix_shopingcart_frequency); return } if ($(this).hasClass("waitting")) return; var $prodQuantity = that.next("[data-attr\x3dprodQuantity]"); if (!$prodQuantity.length) return; var prodQuantity =
                    $.trim($prodQuantity.val()); if (!_helper.isProdQuantity(prodQuantity)) prodQuantity = "1"; prodQuantity = parseInt(prodQuantity) - 1; if (prodQuantity <= 0) { remove($component, that.parents('[data-attr\x3d"prod"]')); return } if (!_helper.isProdQuantity(prodQuantity)) prodQuantity = "1"; var checked = $(this).parent().parent().parent().find(".cart-ipt").is(":checked"); $prodQuantity.val(prodQuantity); var quantity = $(this).parent().find('input[type\x3d"number"]').val(); var prodId = $(this).parent().find('input[type\x3d"number"]').attr("data-id");
                updateNum(quantity, prodId); if (checked) { _helper.countPrice($component); _helper.countTotalNum($component); hideProdQuantityTip($component) } else;
            })
        }, plus: function ($component) {
            var plus = $component.find("[data-attr\x3dplus]"), shoppingcarts = $("[data-attr\x3dshoppingcartLayerSub]"); plus.unbind("click").bind("click", function () {
                if (isSubmit) { alert(_helper.phoenix_shopingcart_frequency); return } if ($(this).hasClass("waitting")) return; var $prodQuantity = $(this).prev("[data-attr\x3dprodQuantity]"); if (!$prodQuantity.length) return;
                var prodQuantity = $.trim($prodQuantity.val()); if (!_helper.isProdQuantity(prodQuantity)) prodQuantity = "1"; prodQuantity = parseInt(prodQuantity) + 1; if (!_helper.isProdQuantity(prodQuantity)) prodQuantity = "1"; var checked = $(this).parent().parent().parent().find(".cart-ipt").is(":checked"); $prodQuantity.val(prodQuantity); var quantity = $(this).parent().find('input[type\x3d"number"]').val(); var prodId = $(this).parent().find('input[type\x3d"number"]').attr("data-id"); updateNum(quantity, prodId); if (checked) {
                    _helper.countPrice($component);
                    _helper.countTotalNum($component); hideProdQuantityTip($component)
                } else;
            })
        }, prodQuantity: function ($component) {
            var $prodQuantity = $component.find("[data-attr\x3dprodQuantity]"), shoppingcarts = $("[data-attr\x3dshoppingcartLayerSub]"); $prodQuantity.unbind("blur").bind("blur", function () {
                if (isSubmit) { alert(_helper.phoenix_shopingcart_frequency); return } var $prodQuantitys = $(this); var prodQuantity = $.trim($prodQuantitys.val()); if (!_helper.isProdQuantity(prodQuantity)) prodQuantity = "1"; $prodQuantitys.val(prodQuantity);
                updateNum(prodQuantity, $prodQuantitys.attr("data-id")); _helper.countPrice($component); _helper.countTotalNum($component); hideProdQuantityTip($component)
            })
        }, afterRemoveShoppingcartProd: function ($component) { var prodslength = $component.find("[data-attr\x3dprod]").length; if (!prodslength) { if ($(".empty-cart").length == 0) $component.find("form .close").after($('\x3cp class\x3d"empty-cart"\x3e' + _helper.phoenix_shopingcart_empty + "\x3c/p\x3e")); $(".cart-wrap form .total-price").remove(); $(".cart-wrap form .menu-btn").remove() } },
        countPrice: countPrice
    }); $.extend(_helper, {
        countTotalNum: function ($component) {
            var prodEle = $component.find("[data-attr\x3dprod]"); var totalNum = 0; prodEle.each(function () { if (!$(this).find(".cart-ipt").is(":checked")) return true; var numEle = $(this).find("input[data-attr\x3dprodQuantity]"), num = 0; if (!numEle.length) return; num = $.trim(numEle.val()); if (!!!num || isNaN(num)) return; if (!_helper.isProdQuantity(num)) return; totalNum = totalNum + parseInt(num) }); var shoppingcartNumEle = $("span[data-attr\x3dshoppingcartNum]");
            if (!shoppingcartNumEle.length) return; var oldNum = shoppingcartNumEle.html(); oldNum = oldNum.replace(/\d+/, prodEle.length); shoppingcartNumEle.html(oldNum)
        }
    }); function remove($component, $Ele) {
        var dataId = $Ele.attr("data-id"); $Ele.fadeOut(function () { $(this).remove(); _helper.afterRemoveShoppingcartProd($component); _helper.countPrice($component); _helper.countTotalNum($component); hideProdQuantityTip($component) }); if (!!!dataId) return; var ajaxOption = {
            url: "/phoenix/admin/order/deleteShoppingcartItem", dataType: "json",
            type: "post", data: { "deleteProdIds": dataId }, done: function (response, textStatus, jqXHR) { }, fail: function (jqXHR, textStatus, errorThrown) { }
        }; phoenixSite.ajax(ajaxOption)
    } function countPrice($component) {
        var totalPrice = 0; var defaultRate, type, unit, symbol, rate, newRate; var cookieObject = payCoinExchange.getCurrencyCookie(); if (!$.isEmptyObject(cookieObject)) {
            defaultRate = cookieObject["defaultRate"], type = cookieObject["type"], unit = cookieObject["unit"], symbol = cookieObject["symbol"], rate = cookieObject["rate"]; var newRate;
            try { newRate = rate / defaultRate } catch (e) { }
        } $component.find("[data-attr\x3dprod]").each(function (i, n) {
            if (!$(this).find(".cart-ipt").is(":checked")) return true; var that = $(this); var dataId = that.attr("data-id"); var quantity = $.trim($(n).find("input[data-attr\x3dprodQuantity]").val()); var priceEle = that.find("span.needExchangeValue.real"); var wholeSaleEle = $component.find("script[type\x3dtext\\/wholeSale][dataId\x3d" + dataId + "]"); var isWholeSalePrice = !!wholeSaleEle.length; var _unitPrice, exchangeValueUnitPrice,
                exchangeValueDiscountPrice, wholeSalePrice; exchangeValueUnitPrice = $.trim(priceEle.attr("exchangeValueUnitPrice")); exchangeValueDiscountPrice = $.trim(priceEle.attr("exchangeValueDiscountPrice")); var unitPrice = exchangeValueDiscountPrice || exchangeValueUnitPrice; if (isWholeSalePrice) {
                    exchangeValueUnitPrice = $.trim(priceEle.attr("exchangeValueUnitPrice")); exchangeValueDiscountPrice = $.trim(priceEle.attr("exchangeValueDiscountPrice")); wholeSalePrice = findWholeSalePrice($component, wholeSaleEle, dataId, quantity);
                    if (typeof wholeSalePrice != "undefined") if (!!exchangeValueUnitPrice && !isNaN(exchangeValueUnitPrice)) unitPrice = floatTool.add(exchangeValueUnitPrice, wholeSalePrice); else if (!!exchangeValueDiscountPrice && !isNaN(exchangeValueDiscountPrice)); else; else if (!!exchangeValueDiscountPrice && !isNaN(exchangeValueDiscountPrice)) unitPrice = floatTool.add(exchangeValueDiscountPrice, 0); var defaultRate, type, unit, symbol, rate, newRate; var cookieObject = payCoinExchange.getCurrencyCookie(); defaultRate = cookieObject["defaultRate"],
                        type = cookieObject["type"], unit = cookieObject["unit"], symbol = cookieObject["symbol"], rate = cookieObject["rate"]; unitPrice = floatTool.add(unitPrice, 0); _unitPrice = unitPrice.toFixed(2); var _unitPriceVal = (_unitPrice * rate).toFixed(2); priceEle.attr("exchangeValue", _unitPrice).html(_unitPriceVal)
                } else if (!isWholeSalePrice); totalPrice = floatTool.add(totalPrice, floatTool.multiply(unitPrice, quantity))
        }); var totalPriceObj = countPriceWithExchange(totalPrice, newRate, unit, symbol); if ($.isPlainObject(totalPriceObj)) totalPrice =
            totalPriceObj["newPrice"]; totalPrice = payCoinExchange.toEurPrice(totalPrice, unit, symbol); renderTotalPrice($component, totalPrice, symbol, "layerShoppingCartTotal")
    } function findWholeSalePrice($component, wholeSaleEle, dataId, quantity) {
        var wholeSalePrice = 0; var wholeSaleJson = $.trim(wholeSaleEle.html()); if (!wholeSaleEle.length || !!!wholeSaleJson) return; try { wholeSaleJson = $.parseJSON(wholeSaleJson) } catch (e) { wholeSaleJson = {} } if ($.isEmptyObject(wholeSaleJson)) return; var wholeSaleArray = wholeSaleJson["wholeSaleGradient"];
        var wholeSaleObj = wholeSaleJson["wholeSaleJson"]; var length = wholeSaleArray; if (!$.isArray(wholeSaleArray) || !length) return; var index = findWholeSale(wholeSaleArray, quantity); if (index == -1) return; var key = wholeSaleArray[index]; if (typeof key == "undefined") return; wholeSalePrice = wholeSaleObj[key]; if (typeof key == "undefined") return; return wholeSalePrice
    } function findWholeSale(wholeSaleArray, val) { var idx = -1, j; for (j = wholeSaleArray.length - 1; j >= 0; j--)if (val >= wholeSaleArray[j]) { idx = j; break } return idx } function countPriceWithExchange(price,
        newRate, unit, symbol) { if (!!!newRate || isNaN(newRate)) return price; price = payCoinExchange.fixEurNum(price); if (!!!price || isNaN(price)) return price; var newPrice = newRate * price; if (!!!newPrice || isNaN(newPrice)) return; newPrice = newPrice.toFixed(2); return { "newPrice": newPrice, "symbol": symbol, "unit": unit } } function renderTotalPrice($component, totalPrice, symbol, selector) {
            var element = $component.find("span[data-attr\x3d" + selector + "]"); if (!element.length) return; element.html(totalPrice); if (!!!symbol) return; var symbolElement =
                element.prev(".currencySymbol"); if (!symbolElement.length) return; symbolElement.html(symbol)
        } $.extend(_helper, {
            prepareParam: function ($component) {
                var prods = $component.find("[data-attr\x3dprod]"); if (!prods.length) { _helper.afterRemoveShoppingcartProd($component); return } var extendProp = []; prods.each(function () {
                    if (!$(this).find(".cart-ipt").is(":checked")) return true; var dataId = $(this).attr("data-id"); if (!dataId) return; var prodQuantity = $.trim($component.find("input[data-attr\x3dprodQuantity][data-id\x3d" +
                        dataId + "]").val()); if (!_helper.isProdQuantity(prodQuantity)) return; extendProp.push(dataId + "_" + prodQuantity)
                }); return extendProp.join()
            }, submitOrder: function ($component) {
                $component.find("[data-attr\x3dsubmit]").unbind("click").bind("click", function () {
                    var extendPropValue = _helper.prepareParam($component); if (!!!extendPropValue) return; $component.find("input[name\x3dextendProp]").val(extendPropValue); if (window.fbq) window.fbq("track", "InitiateCheckout"); var ajaxOption = {
                        url: "/phoenix/admin/order/check4Shopcart",
                        type: "post", data: { "extendProp": extendPropValue }, done: function (response, textStatus, jqXHR) {
                            try { response = $.parseJSON(response) } catch (e) { response = {} } if (response["code"] == "true") { $component.find("[data-attr\x3dform]").submit(); return } if (response["code"] == "false") {
                                var msg = response["msg"]; if (msg == "phoenix_shopcart_empty") { _helper.afterRemoveShoppingcartProd($component); return } var msgs = response["msgs"], i, length; if ($.isArray(msgs) && msgs.length) for (i = 0, length = msgs.length; i < length; i++) {
                                    var _msg = msgs[i]; $component.find("[data-attr\x3dlayerProdQuantityTip][data-id\x3d" +
                                        _msg["id"] + "]").html(_msg["msg"]).show(); $component.find("[data-attr\x3dlayerProdQuantityTip][data-id\x3d" + _msg["id"] + "]").parent(".input-wrap").addClass("div-low-stocks-error"); $component.find("[data-attr\x3dlayerProdQuantityTip][data-id\x3d" + _msg["id"] + "]").parent(".input-wrap").find("span").addClass("span-low-stocks-error"); $component.find("[data-attr\x3dlayerProdQuantityTip][data-id\x3d" + _msg["id"] + "]").parent(".input-wrap").find("input").addClass("input-low-stocks-error")
                                }
                            }
                        }, fail: function (jqXHR,
                            textStatus, errorThrown) { }
                    }; phoenixSite.ajax(ajaxOption)
                })
            }
        }); function hideProdQuantityTip($component) { $component.find("[data-attr\x3dlayerProdQuantityTip]").hide() } var floatTool = function () {
            function isInteger(obj) { return Math.floor(obj) === obj } function toInteger(floatNum) {
                var ret = { times: 1, num: 0 }; var isNegative = floatNum < 0; if (isInteger(floatNum)) { ret.num = floatNum; return ret } var strfi = floatNum + ""; var dotPos = strfi.indexOf("."); var len = strfi.substr(dotPos + 1).length; var times = Math.pow(10, len); var intNum =
                    parseInt(Math.abs(floatNum) * times + 0.5, 10); ret.times = times; if (isNegative) intNum = -intNum; ret.num = intNum; return ret
            } function operation(a, b, digits, op) {
                a = payCoinExchange.fixEurNum(a); b = payCoinExchange.fixEurNum(b); var o1 = toInteger(a); var o2 = toInteger(b); var n1 = o1.num; var n2 = o2.num; var t1 = o1.times; var t2 = o2.times; var max = t1 > t2 ? t1 : t2; var result = null; switch (op) {
                    case "add": if (t1 === t2) result = n1 + n2; else if (t1 > t2) result = n1 + n2 * (t1 / t2); else result = n1 * (t2 / t1) + n2; return result / max; case "subtract": if (t1 === t2) result =
                        n1 - n2; else if (t1 > t2) result = n1 - n2 * (t1 / t2); else result = n1 * (t2 / t1) - n2; return result / max; case "multiply": result = n1 * n2 / (t1 * t2); return result; case "divide": result = n1 / n2 * (t2 / t1); return result
                }
            } function add(a, b, digits) { return operation(a, b, digits, "add") } function subtract(a, b, digits) { return operation(a, b, digits, "subtract") } function multiply(a, b, digits) { return operation(a, b, digits, "multiply") } function divide(a, b, digits) { return operation(a, b, digits, "divide") } return {
                add: add, subtract: subtract, multiply: multiply,
                divide: divide
            }
        }()
})(this, jQuery);;
/* /develop/FLKpUAfANfAg-hkpfUACmwFWt-GvUApKfKKUAU-jjBqrKijirniqinjkrr-jpBqrKjjkrpimrijkkr/video.min.js */
/*

 Video.js 7.7.5 <//videojs.com/>
 Copyright Brightcove, Inc. <https://www.brightcove.com/>
 Available under Apache License Version 2.0
 <https://github.com/videojs/video.js/blob/master/LICENSE>

 Includes vtt.js <https://github.com/mozilla/vtt.js>
 Available under Apache License Version 2.0
 <https://github.com/mozilla/vtt.js/blob/master/LICENSE>

 slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
 Copyright (c) 2014 David Björklund
 Available under the MIT license
 <https://github.com/kesla/parse-headers/blob/master/LICENCE>
 2019 Brightcove, Inc
 @license Apache-2.0
*/
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("global/window"), require("global/document")) : "function" == typeof define && define.amd ? define(["global/window", "global/document"], t) : (e = e || self).videojs = t(e.window, e.document) }(this, function (y, h) {
    y = y && y.hasOwnProperty("default") ? y.default : y, h = h && h.hasOwnProperty("default") ? h.default : h; var d = "7.7.5", l = [], e = function (o, u) {
        return function (e, t, i) {
            var n = u.levels[t], r = new RegExp("^(" + n + ")$"); if ("log" !== e && i.unshift(e.toUpperCase() +
                ":"), i.unshift(o + ":"), l) { l.push([].concat(i)); var s = l.length - 1E3; l.splice(0, 0 < s ? s : 0) } if (y.console) { var a = y.console[e]; a || "debug" !== e || (a = y.console.info || y.console.log), a && n && r.test(e) && a[Array.isArray(i) ? "apply" : "call"](y.console, i) }
        }
    }; var p = function t(i) {
        function n() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; r("log", s, t) } var r, s = "info"; return r = e(i, n), n.createLogger = function (e) { return t(i + ": " + e) }, n.levels = {
            all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error",
            info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: s
        }, n.level = function (e) { if ("string" == typeof e) { if (!n.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level'); s = e } return s }, (n.history = function () { return l ? [].concat(l) : [] }).filter = function (t) { return (l || []).filter(function (e) { return (new RegExp(".*" + t + ".*")).test(e[0]) }) }, n.history.clear = function () { l && (l.length = 0) }, n.history.disable = function () { null !== l && (l.length = 0, l = null) }, n.history.enable = function () { null === l && (l = []) },
            n.error = function () { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; return r("error", s, t) }, n.warn = function () { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; return r("warn", s, t) }, n.debug = function () { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; return r("debug", s, t) }, n
    }("VIDEOJS"), f = p.createLogger; function t(e, t) { return e(t = { exports: {} }, t.exports), t.exports } var r = t(function (e) {
        function t() {
            return e.exports = t = Object.assign || function (e) {
                for (var t =
                    1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e
            }, t.apply(this, arguments)
        } e.exports = t
    }), i = Object.prototype.toString, s = function (e) { return o(e) ? Object.keys(e) : [] }; function a(t, i) { s(t).forEach(function (e) { return i(t[e], e) }) } function m(i) { for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++)t[n - 1] = arguments[n]; return Object.assign ? r.apply(void 0, [i].concat(t)) : (t.forEach(function (e) { e && a(e, function (e, t) { i[t] = e }) }), i) }
    function o(e) { return !!e && "object" == typeof e } function u(e) { return o(e) && "[object Object]" === i.call(e) && e.constructor === Object } function n(e, t) { if (!e || !t) return ""; if ("function" != typeof y.getComputedStyle) return ""; var i = y.getComputedStyle(e); return i ? i.getPropertyValue(t) || i[t] : "" } function c(e) { return "string" == typeof e && Boolean(e.trim()) } function g(e) { if (0 <= e.indexOf(" ")) throw new Error("class has illegal whitespace characters"); } function v() { return h === y.document } function _(e) { return o(e) && 1 === e.nodeType }
    function b() { try { return y.parent !== y.self } catch (e) { return !0 } } function T(n) { return function (e, t) { if (!c(e)) return h[n](null); c(t) && (t = h.querySelector(t)); var i = _(t) ? t : h; return i[n] && i[n](e) } } function S(e, i, t, n) {
        void 0 === e && (e = "div"), void 0 === i && (i = {}), void 0 === t && (t = {}); var r = h.createElement(e); return Object.getOwnPropertyNames(i).forEach(function (e) {
            var t = i[e]; -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (p.warn("Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set " +
                e + " to " + t + "."), r.setAttribute(e, t)) : "textContent" === e ? k(r, t) : r[e] !== t && (r[e] = t)
        }), Object.getOwnPropertyNames(t).forEach(function (e) { r.setAttribute(e, t[e]) }), n && V(r, n), r
    } function k(e, t) { return "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t, e } function C(e, t) { t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e) } function E(e, t) { return g(t), e.classList ? e.classList.contains(t) : function (e) { return new RegExp("(^|\\s)" + e + "($|\\s)") }(t).test(e.className) } function w(e, t) {
        return e.classList ?
            e.classList.add(t) : E(e, t) || (e.className = (e.className + " " + t).trim()), e
    } function L(e, t) { return e.classList ? e.classList.remove(t) : (g(t), e.className = e.className.split(/\s+/).filter(function (e) { return e !== t }).join(" ")), e } function P(e, t, i) { var n = E(e, t); if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !n), i !== n) return i ? w(e, t) : L(e, t), e } function A(i, n) {
        Object.getOwnPropertyNames(n).forEach(function (e) {
            var t = n[e]; null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 ===
                t ? "" : t)
        })
    } function I(e) { var t = {}, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,"; if (e && e.attributes && 0 < e.attributes.length) for (var n = e.attributes, r = n.length - 1; 0 <= r; r--) { var s = n[r].name, a = n[r].value; "boolean" != typeof e[s] && -1 === i.indexOf("," + s + ",") || (a = null !== a), t[s] = a } return t } function x(e, t) { return e.getAttribute(t) } function O(e, t, i) { e.setAttribute(t, i) } function D(e, t) { e.removeAttribute(t) } function R() { h.body.focus(), h.onselectstart = function () { return !1 } } function U() {
        h.onselectstart =
        function () { return !0 }
    } function M(e) { if (e && e.getBoundingClientRect && e.parentNode) { var t = e.getBoundingClientRect(), i = {}; return ["bottom", "height", "left", "right", "top", "width"].forEach(function (e) { void 0 !== t[e] && (i[e] = t[e]) }), i.height || (i.height = parseFloat(n(e, "height"))), i.width || (i.width = parseFloat(n(e, "width"))), i } } function N(e) {
        var t; if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return { left: 0, top: 0 }; var i = h.documentElement, n = h.body, r = i.clientLeft || n.clientLeft || 0, s = y.pageXOffset ||
            n.scrollLeft, a = t.left + s - r, o = i.clientTop || n.clientTop || 0, u = y.pageYOffset || n.scrollTop, l = t.top + u - o; return { left: Math.round(a), top: Math.round(l) }
    } function B(e, t) { var i = {}, n = N(e), r = e.offsetWidth, s = e.offsetHeight, a = n.top, o = n.left, u = t.pageY, l = t.pageX; return t.changedTouches && (l = t.changedTouches[0].pageX, u = t.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (a - u + s) / s)), i.x = Math.max(0, Math.min(1, (l - o) / r)), i } function j(e) { return o(e) && 3 === e.nodeType } function F(e) {
        for (; e.firstChild;)e.removeChild(e.firstChild);
        return e
    } function H(e) { return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function (e) { return "function" == typeof e && (e = e()), _(e) || j(e) ? e : "string" == typeof e && /\S/.test(e) ? h.createTextNode(e) : void 0 }).filter(function (e) { return e }) } function V(t, e) { return H(e).forEach(function (e) { return t.appendChild(e) }), t } function q(e, t) { return V(F(e), t) } function W(e) {
        return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || ("mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button &&
            1 === e.buttons))
    } var z, G = T("querySelector"), K = T("querySelectorAll"), X = Object.freeze({ isReal: v, isEl: _, isInFrame: b, createEl: S, textContent: k, prependTo: C, hasClass: E, addClass: w, removeClass: L, toggleClass: P, setAttributes: A, getAttributes: I, getAttribute: x, setAttribute: O, removeAttribute: D, blockTextSelection: R, unblockTextSelection: U, getBoundingClientRect: M, findPosition: N, getPointerPosition: B, isTextNode: j, emptyEl: F, normalizeContent: H, appendContent: V, insertContent: q, isSingleLeftClick: W, $: G, $$: K }), Y = !1, $ = function () {
        if (v() &&
            !1 !== z.options.autoSetup) { var e = Array.prototype.slice.call(h.getElementsByTagName("video")), t = Array.prototype.slice.call(h.getElementsByTagName("audio")), i = Array.prototype.slice.call(h.getElementsByTagName("video-js")), n = e.concat(t, i); if (n && 0 < n.length) for (var r = 0, s = n.length; r < s; r++) { var a = n[r]; if (!a || !a.getAttribute) { Q(1); break } void 0 === a.player && null !== a.getAttribute("data-setup") && z(a) } else Y || Q(1) }
    }; function Q(e, t) { t && (z = t), y.setTimeout($, e) } function J() { Y = !0, y.removeEventListener("load", J) } v() &&
        ("complete" === h.readyState ? J() : y.addEventListener("load", J)); function Z(e) { var t = h.createElement("style"); return t.className = e, t } function ee(e, t) { e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t } var te, ie = 3; function ne() { return ie++ } y.WeakMap || (te = function () {
            function e() { this.vdata = "vdata" + Math.floor(y.performance && y.performance.now() || Date.now()), this.data = {} } var t = e.prototype; return t.set = function (e, t) { var i = e[this.vdata] || ne(); return e[this.vdata] || (e[this.vdata] = i), this.data[i] = t, this }, t.get =
                function (e) { var t = e[this.vdata]; if (t) return this.data[t]; p("We have no data for this element", e) }, t.has = function (e) { return e[this.vdata] in this.data }, t.delete = function (e) { var t = e[this.vdata]; t && (delete this.data[t], delete e[this.vdata]) }, e
        }()); var re, se = y.WeakMap ? new WeakMap : new te; function ae(e, t) {
            if (se.has(e)) {
                var i = se.get(e); 0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <=
                    0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && se.delete(e)
            }
        } function oe(t, i, e, n) { e.forEach(function (e) { t(i, e, n) }) } function ue(e) {
            if (e.fixed_) return e; function t() { return !0 } function i() { return !1 } if (!e || !e.isPropagationStopped) {
                var n = e || y.event; for (var r in e = {}, n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (e[r] = n[r])); if (e.target || (e.target = e.srcElement ||
                    h), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () { n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0 }, e.defaultPrevented = !1, e.stopPropagation = function () { n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = t }, e.isPropagationStopped = i, e.stopImmediatePropagation = function () {
                        n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped =
                            t, e.stopPropagation()
                    }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) { var s = h.documentElement, a = h.body; e.pageX = e.clientX + (s && s.scrollLeft || a && a.scrollLeft || 0) - (s && s.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || a && a.scrollTop || 0) - (s && s.clientTop || a && a.clientTop || 0) } e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
            } return e.fixed_ = !0, e
        } var le = function () {
            if ("boolean" != typeof re) {
                re = !1; try {
                    var e =
                        Object.defineProperty({}, "passive", { get: function () { re = !0 } }); y.addEventListener("test", null, e), y.removeEventListener("test", null, e)
                } catch (e) { }
            } return re
        }, ce = ["touchstart", "touchmove"]; function he(a, e, t) {
            if (Array.isArray(e)) return oe(he, a, e, t); se.has(a) || se.set(a, {}); var o = se.get(a); if (o.handlers || (o.handlers = {}), o.handlers[e] || (o.handlers[e] = []), t.guid || (t.guid = ne()), o.handlers[e].push(t), o.dispatcher || (o.disabled = !1, o.dispatcher = function (e, t) {
                if (!o.disabled) {
                    e = ue(e); var i = o.handlers[e.type]; if (i) for (var n =
                        i.slice(0), r = 0, s = n.length; r < s && !e.isImmediatePropagationStopped(); r++)try { n[r].call(a, e, t) } catch (e) { p.error(e) }
                }
            }), 1 === o.handlers[e].length) if (a.addEventListener) { var i = !1; le() && -1 < ce.indexOf(e) && (i = { passive: !0 }), a.addEventListener(e, o.dispatcher, i) } else a.attachEvent && a.attachEvent("on" + e, o.dispatcher)
        } function de(e, t, i) {
            if (se.has(e)) {
                var n = se.get(e); if (n.handlers) {
                    if (Array.isArray(t)) return oe(de, e, t, i); var r = function (e, t) { n.handlers[t] = [], ae(e, t) }; if (void 0 !== t) {
                        var s = n.handlers[t]; if (s) if (i) {
                            if (i.guid) for (var a =
                                0; a < s.length; a++)s[a].guid === i.guid && s.splice(a--, 1); ae(e, t)
                        } else r(e, t)
                    } else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
                }
            }
        } function pe(e, t, i) {
            var n = se.has(e) ? se.get(e) : {}, r = e.parentNode || e.ownerDocument; if ("string" == typeof t ? t = { type: t, target: e } : t.target || (t.target = e), t = ue(t), n.dispatcher && n.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) pe.call(null, r, t, i); else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
                se.has(t.target) ||
                se.set(t.target, {}); var s = se.get(t.target); t.target[t.type] && (s.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), s.disabled = !1)
            } return !t.defaultPrevented
        } function fe(e, t, i) { if (Array.isArray(t)) return oe(fe, e, t, i); function n() { de(e, t, n), i.apply(this, arguments) } n.guid = i.guid = i.guid || ne(), he(e, t, n) } function me(e, t, i) { function n() { de(e, t, n), i.apply(this, arguments) } n.guid = i.guid = i.guid || ne(), he(e, t, n) } function ge(e, t, i) {
            t.guid || (t.guid = ne()); var n = t.bind(e); return n.guid = i ? i + "_" + t.guid :
                t.guid, n
        } function ve(t, i) { var n = y.performance.now(); return function () { var e = y.performance.now(); i <= e - n && (t.apply(void 0, arguments), n = e) } } function ye() { } var _e, be = Object.freeze({ fixEvent: ue, on: he, off: de, trigger: pe, one: fe, any: me }); ye.prototype.allowedEvents_ = {}, ye.prototype.addEventListener = ye.prototype.on = function (e, t) { var i = this.addEventListener; this.addEventListener = function () { }, he(this, e, t), this.addEventListener = i }, ye.prototype.removeEventListener = ye.prototype.off = function (e, t) { de(this, e, t) }, ye.prototype.one =
            function (e, t) { var i = this.addEventListener; this.addEventListener = function () { }, fe(this, e, t), this.addEventListener = i }, ye.prototype.any = function (e, t) { var i = this.addEventListener; this.addEventListener = function () { }, me(this, e, t), this.addEventListener = i }, ye.prototype.dispatchEvent = ye.prototype.trigger = function (e) { var t = e.type || e; "string" == typeof e && (e = { type: t }), e = ue(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), pe(this, e) }, ye.prototype.queueTrigger = function (e) {
                var t = this; _e = _e || new Map; var i = e.type ||
                    e, n = _e.get(this); n || (n = new Map, _e.set(this, n)); var r = n.get(i); n.delete(i), y.clearTimeout(r); var s = y.setTimeout(function () { 0 === n.size && (n = null, _e.delete(t)), t.trigger(e) }, 0); n.set(i, s)
            }; function Te(e) { return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length } function Se(e) { if (!e.nodeName && !Le(e)) throw new Error("Invalid target; must be a DOM node or evented object."); } function ke(e) { if (!Te(e)) throw new Error("Invalid event type; must be a non-empty string or array."); } function Ce(e) {
                if ("function" !=
                    typeof e) throw new Error("Invalid listener; must be a function.");
            } function Ee(e, t) { var i, n, r, s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_; return r = s ? (i = e.eventBusEl_, 3 <= t.length && t.shift(), n = t[0], t[1]) : (i = t[0], n = t[1], t[2]), Se(i), ke(n), Ce(r), { isTargetingSelf: s, target: i, type: n, listener: r = ge(e, r) } } function we(e, t, i, n) { Se(e), e.nodeName ? be[t](e, i, n) : e[t](i, n) } var Le = function (t) { return t instanceof ye || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (e) { return "function" == typeof t[e] }) }, Pe =
            {
                on: function () { for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)i[n] = arguments[n]; var r = Ee(this, i), s = r.isTargetingSelf, a = r.target, o = r.type, u = r.listener; if (we(a, "on", o, u), !s) { var l = function () { return e.off(a, o, u) }; l.guid = u.guid; var c = function () { return e.off("dispose", l) }; c.guid = u.guid, we(this, "on", "dispose", l), we(a, "on", "dispose", c) } }, one: function () {
                    for (var r = this, e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; var n = Ee(this, t), s = n.isTargetingSelf, a = n.target, o = n.type, u = n.listener;
                    if (s) we(a, "one", o, u); else { var l = function e() { r.off(a, o, e); for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)i[n] = arguments[n]; u.apply(null, i) }; l.guid = u.guid, we(a, "one", o, l) }
                }, any: function () {
                    for (var r = this, e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; var n = Ee(this, t), s = n.isTargetingSelf, a = n.target, o = n.type, u = n.listener; if (s) we(a, "any", o, u); else {
                        var l = function e() { r.off(a, o, e); for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)i[n] = arguments[n]; u.apply(null, i) }; l.guid = u.guid,
                            we(a, "any", o, l)
                    }
                }, off: function (e, t, i) { if (!e || Te(e)) de(this.eventBusEl_, e, t); else { var n = e, r = t; Se(n), ke(r), Ce(i), i = ge(this, i), this.off("dispose", i), n.nodeName ? (de(n, r, i), de(n, "dispose", i)) : Le(n) && (n.off(r, i), n.off("dispose", i)) } }, trigger: function (e, t) { return pe(this.eventBusEl_, e, t) }
            }; function Ae(e, t) {
                void 0 === t && (t = {}); var i = t.eventBusKey; if (i) { if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.'); e.eventBusEl_ = e[i] } else e.eventBusEl_ = S("span", { className: "vjs-event-bus" });
                return m(e, Pe), e.eventedCallbacks && e.eventedCallbacks.forEach(function (e) { e() }), e.on("dispose", function () { e.off(), y.setTimeout(function () { e.eventBusEl_ = null }, 0) }), e
            } var Ie = { state: {}, setState: function (e) { var i, n = this; return "function" == typeof e && (e = e()), a(e, function (e, t) { n.state[t] !== e && ((i = i || {})[t] = { from: n.state[t], to: e }), n.state[t] = e }), i && Le(this) && this.trigger({ changes: i, type: "statechanged" }), i } }; function xe(e, t) {
                return m(e, Ie), e.state = m({}, e.state, t), "function" == typeof e.handleStateChanged && Le(e) &&
                    e.on("statechanged", e.handleStateChanged), e
            } function Oe(e) { return "string" != typeof e ? e : e.replace(/./, function (e) { return e.toLowerCase() }) } function De(e) { return "string" != typeof e ? e : e.replace(/./, function (e) { return e.toUpperCase() }) } function Re() { for (var i = {}, e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return t.forEach(function (e) { e && a(e, function (e, t) { u(e) ? (u(i[t]) || (i[t] = {}), i[t] = Re(i[t], e)) : i[t] = e }) }), i } var Ue = function () {
                function l(e, t, i) {
                    if (!e && this.play ? this.player_ = e = this : this.player_ =
                        e, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = Re({}, this.options_), t = this.options_ = Re(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) { var n = e && e.id && e.id() || "no_player"; this.id_ = n + "_component_" + ne() } var r; this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && Ae(this, { eventBusKey: this.el_ ? "el_" : null }), xe(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, y.Set || (r = function () {
                            function e() {
                                this.set_ =
                                {}
                            } var t = e.prototype; return t.has = function (e) { return e in this.set_ }, t.delete = function (e) { var t = this.has(e); return delete this.set_[e], t }, t.add = function (e) { return this.set_[e] = 1, this }, t.forEach = function (e, t) { for (var i in this.set_) e.call(t, i, i, this) }, e
                        }()), this.setTimeoutIds_ = y.Set ? new Set : new r, this.setIntervalIds_ = y.Set ? new Set : new r, this.rafIds_ = y.Set ? new Set : new r, (this.clearingTimersOnDispose_ = !1) !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
                }
                var e = l.prototype; return e.dispose = function () { if (!this.isDisposed_) { if (this.trigger({ type: "dispose", bubbles: !1 }), this.isDisposed_ = !0, this.children_) for (var e = this.children_.length - 1; 0 <= e; e--)this.children_[e].dispose && this.children_[e].dispose(); this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), se.has(this.el_) && se.delete(this.el_), this.el_ = null), this.player_ = null } }, e.isDisposed =
                    function () { return Boolean(this.isDisposed_) }, e.player = function () { return this.player_ }, e.options = function (e) { return e && (this.options_ = Re(this.options_, e)), this.options_ }, e.el = function () { return this.el_ }, e.createEl = function (e, t, i) { return S(e, t, i) }, e.localize = function (e, r, t) {
                        void 0 === t && (t = e); var i = this.player_.language && this.player_.language(), n = this.player_.languages && this.player_.languages(), s = n && n[i], a = i && i.split("-")[0], o = n && n[a], u = t; return s && s[e] ? u = s[e] : o && o[e] && (u = o[e]), r && (u = u.replace(/\{(\d+)\}/g,
                            function (e, t) { var i = r[t - 1], n = i; return "undefined" == typeof i && (n = e), n })), u
                    }, e.contentEl = function () { return this.contentEl_ || this.el_ }, e.id = function () { return this.id_ }, e.name = function () { return this.name_ }, e.children = function () { return this.children_ }, e.getChildById = function (e) { return this.childIndex_[e] }, e.getChild = function (e) { if (e) return this.childNameIndex_[e] }, e.addChild = function (e, t, i) {
                        var n, r; if (void 0 === t && (t = {}), void 0 === i && (i = this.children_.length), "string" == typeof e) {
                            r = De(e); var s = t.componentClass ||
                                r; t.name = r; var a = l.getComponent(s); if (!a) throw new Error("Component " + s + " does not exist"); if ("function" != typeof a) return null; n = new a(this.player_ || this, t)
                        } else n = e; if (n.parentComponent_ && n.parentComponent_.removeChild(n), this.children_.splice(i, 0, n), n.parentComponent_ = this, "function" == typeof n.id && (this.childIndex_[n.id()] = n), (r = r || n.name && De(n.name())) && (this.childNameIndex_[r] = n, this.childNameIndex_[Oe(r)] = n), "function" == typeof n.el && n.el()) {
                            var o = null; this.children_[i + 1] && this.children_[i + 1].el_ &&
                                (o = this.children_[i + 1].el_), this.contentEl().insertBefore(n.el(), o)
                        } return n
                    }, e.removeChild = function (e) { if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) { for (var t = !1, i = this.children_.length - 1; 0 <= i; i--)if (this.children_[i] === e) { t = !0, this.children_.splice(i, 1); break } if (t) { e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[De(e.name())] = null, this.childNameIndex_[Oe(e.name())] = null; var n = e.el(); n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el()) } } },
                    e.initChildren = function () {
                        var r = this, n = this.options_.children; if (n) {
                            var e, s = this.options_, i = l.getComponent("Tech"); (e = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter(function (t) { return !e.some(function (e) { return "string" == typeof e ? t === e : t === e.name }) })).map(function (e) { var t, i; return i = "string" == typeof e ? n[t = e] || r.options_[t] || {} : (t = e.name, e), { name: t, opts: i } }).filter(function (e) { var t = l.getComponent(e.opts.componentClass || De(e.name)); return t && !i.isTech(t) }).forEach(function (e) {
                                var t =
                                    e.name, i = e.opts; if (void 0 !== s[t] && (i = s[t]), !1 !== i) { !0 === i && (i = {}), i.playerOptions = r.options_.playerOptions; var n = r.addChild(t, i); n && (r[t] = n) }
                            })
                        }
                    }, e.buildCSSClass = function () { return "" }, e.ready = function (e, t) { if (void 0 === t && (t = !1), e) return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e)) }, e.triggerReady = function () {
                        this.isReady_ = !0, this.setTimeout(function () {
                            var e = this.readyQueue_; this.readyQueue_ = [], e && 0 < e.length && e.forEach(function (e) { e.call(this) },
                                this), this.trigger("ready")
                        }, 1)
                    }, e.$ = function (e, t) { return G(e, t || this.contentEl()) }, e.$$ = function (e, t) { return K(e, t || this.contentEl()) }, e.hasClass = function (e) { return E(this.el_, e) }, e.addClass = function (e) { w(this.el_, e) }, e.removeClass = function (e) { L(this.el_, e) }, e.toggleClass = function (e, t) { P(this.el_, e, t) }, e.show = function () { this.removeClass("vjs-hidden") }, e.hide = function () { this.addClass("vjs-hidden") }, e.lockShowing = function () { this.addClass("vjs-lock-showing") }, e.unlockShowing = function () { this.removeClass("vjs-lock-showing") },
                    e.getAttribute = function (e) { return x(this.el_, e) }, e.setAttribute = function (e, t) { O(this.el_, e, t) }, e.removeAttribute = function (e) { D(this.el_, e) }, e.width = function (e, t) { return this.dimension("width", e, t) }, e.height = function (e, t) { return this.dimension("height", e, t) }, e.dimensions = function (e, t) { this.width(e, !0), this.height(t) }, e.dimension = function (e, t, i) {
                        if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void (i ||
                            this.trigger("componentresize")); if (!this.el_) return 0; var n = this.el_.style[e], r = n.indexOf("px"); return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + De(e)], 10)
                    }, e.currentDimension = function (e) { var t = 0; if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value"); if (t = n(this.el_, e), 0 === (t = parseFloat(t)) || isNaN(t)) { var i = "offset" + De(e); t = this.el_[i] } return t }, e.currentDimensions = function () { return { width: this.currentDimension("width"), height: this.currentDimension("height") } },
                    e.currentWidth = function () { return this.currentDimension("width") }, e.currentHeight = function () { return this.currentDimension("height") }, e.focus = function () { this.el_.focus() }, e.blur = function () { this.el_.blur() }, e.handleKeyDown = function (e) { this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e)) }, e.handleKeyPress = function (e) { this.handleKeyDown(e) }, e.emitTapEvents = function () {
                        var n, t = 0, r = null; this.on("touchstart", function (e) {
                            1 === e.touches.length && (r = { pageX: e.touches[0].pageX, pageY: e.touches[0].pageY },
                                t = y.performance.now(), n = !0)
                        }), this.on("touchmove", function (e) { if (1 < e.touches.length) n = !1; else if (r) { var t = e.touches[0].pageX - r.pageX, i = e.touches[0].pageY - r.pageY; 10 < Math.sqrt(t * t + i * i) && (n = !1) } }); function e() { n = !1 } this.on("touchleave", e), this.on("touchcancel", e), this.on("touchend", function (e) { !(r = null) === n && y.performance.now() - t < 200 && (e.preventDefault(), this.trigger("tap")) })
                    }, e.enableTouchActivity = function () {
                        if (this.player() && this.player().reportUserActivity) {
                            var t, i = ge(this.player(), this.player().reportUserActivity);
                            this.on("touchstart", function () { i(), this.clearInterval(t), t = this.setInterval(i, 250) }); var e = function (e) { i(), this.clearInterval(t) }; this.on("touchmove", i), this.on("touchend", e), this.on("touchcancel", e)
                        }
                    }, e.setTimeout = function (e, t) { var i, n = this; return e = ge(this, e), this.clearTimersOnDispose_(), i = y.setTimeout(function () { n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i), e() }, t), this.setTimeoutIds_.add(i), i }, e.clearTimeout = function (e) {
                        return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e),
                            y.clearTimeout(e)), e
                    }, e.setInterval = function (e, t) { e = ge(this, e), this.clearTimersOnDispose_(); var i = y.setInterval(e, t); return this.setIntervalIds_.add(i), i }, e.clearInterval = function (e) { return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), y.clearInterval(e)), e }, e.requestAnimationFrame = function (e) {
                        var t, i = this; return this.supportsRaf_ ? (this.clearTimersOnDispose_(), e = ge(this, e), t = y.requestAnimationFrame(function () { i.rafIds_.has(t) && i.rafIds_.delete(t), e() }), this.rafIds_.add(t), t) : this.setTimeout(e,
                            1E3 / 60)
                    }, e.cancelAnimationFrame = function (e) { return this.supportsRaf_ ? (this.rafIds_.has(e) && (this.rafIds_.delete(e), y.cancelAnimationFrame(e)), e) : this.clearTimeout(e) }, e.clearTimersOnDispose_ = function () {
                        var n = this; this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", function () {
                            [["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(function (e) { var t = e[0], i = e[1]; n[t].forEach(n[i], n) }), n.clearingTimersOnDispose_ =
                                !1
                        }))
                    }, l.registerComponent = function (e, t) {
                        if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.'); var i, n = l.getComponent("Tech"), r = n && n.isTech(t), s = l === t || l.prototype.isPrototypeOf(t.prototype); if (r || !s) throw i = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + i + "."); e = De(e), l.components_ || (l.components_ = {}); var a = l.getComponent("Player"); if ("Player" === e && a && a.players) {
                            var o =
                                a.players, u = Object.keys(o); if (o && 0 < u.length && u.map(function (e) { return o[e] }).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
                        } return l.components_[e] = t, l.components_[Oe(e)] = t
                    }, l.getComponent = function (e) { if (e && l.components_) return l.components_[e] }, l
            }(); Ue.prototype.supportsRaf_ = "function" == typeof y.requestAnimationFrame && "function" == typeof y.cancelAnimationFrame, Ue.registerComponent("Component", Ue); var Me = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }; var Ne, Be, je, Fe, He = function (e, t) { e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t }, Ve = y.navigator && y.navigator.userAgent || "", qe = /AppleWebKit\/([\d.]+)/i.exec(Ve), We = qe ? parseFloat(qe.pop()) : null, ze = /iPod/i.test(Ve), Ge = (Ne = Ve.match(/OS (\d+)_/i)) && Ne[1] ? Ne[1] : null, Ke = /Android/i.test(Ve), Xe = function () {
                var e = Ve.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i); if (!e) return null; var t = e[1] && parseFloat(e[1]), i = e[2] && parseFloat(e[2]); return t && i ? parseFloat(e[1] + "." +
                    e[2]) : t || null
            }(), Ye = Ke && Xe < 5 && We < 537, $e = /Firefox/i.test(Ve), Qe = /Edge/i.test(Ve), Je = !Qe && (/Chrome/i.test(Ve) || /CriOS/i.test(Ve)), Ze = (Be = Ve.match(/(Chrome|CriOS)\/(\d+)/)) && Be[2] ? parseFloat(Be[2]) : null, et = (je = /MSIE\s(\d+)\.\d/.exec(Ve), !(Fe = je && parseFloat(je[1])) && /Trident\/7.0/i.test(Ve) && /rv:11.0/.test(Ve) && (Fe = 11), Fe), tt = /Safari/i.test(Ve) && !Je && !Ke && !Qe, it = /Windows/i.test(Ve), nt = v() && ("ontouchstart" in y || y.navigator.maxTouchPoints || y.DocumentTouch && y.document instanceof y.DocumentTouch), rt = /iPad/i.test(Ve) ||
                tt && nt && !/iPhone/i.test(Ve), st = /iPhone/i.test(Ve) && !rt, at = st || rt || ze, ot = (tt || at) && !Je, ut = Object.freeze({ IS_IPOD: ze, IOS_VERSION: Ge, IS_ANDROID: Ke, ANDROID_VERSION: Xe, IS_NATIVE_ANDROID: Ye, IS_FIREFOX: $e, IS_EDGE: Qe, IS_CHROME: Je, CHROME_VERSION: Ze, IE_VERSION: et, IS_SAFARI: tt, IS_WINDOWS: it, TOUCH_ENABLED: nt, IS_IPAD: rt, IS_IPHONE: st, IS_IOS: at, IS_ANY_SAFARI: ot }); function lt(e, t, i, n) {
                    return function (e, t, i) {
                        if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" +
                            t + ") is non-numeric or out of bounds (0-" + i + ").");
                    }(e, n, i.length - 1), i[n][t]
                } function ct(e) { return void 0 === e || 0 === e.length ? { length: 0, start: function () { throw new Error("This TimeRanges object is empty"); }, end: function () { throw new Error("This TimeRanges object is empty"); } } : { length: e.length, start: lt.bind(null, "start", 0, e), end: lt.bind(null, "end", 1, e) } } function ht(e, t) { return Array.isArray(e) ? ct(e) : void 0 === e || void 0 === t ? ct() : ct([[e, t]]) } function dt(e, t) {
                    var i, n, r = 0; if (!t) return 0; e && e.length || (e = ht(0,
                        0)); for (var s = 0; s < e.length; s++)i = e.start(s), t < (n = e.end(s)) && (n = t), r += n - i; return r / t
                } for (var pt, ft = { prefixed: !0 }, mt = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled",
                    "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], gt = mt[0], vt = 0; vt < mt.length; vt++)if (mt[vt][1] in h) { pt = mt[vt]; break } if (pt) { for (var yt = 0; yt < pt.length; yt++)ft[gt[yt]] = pt[yt]; ft.prefixed = pt[0] !== gt[0] } function _t(e) {
                        if (e instanceof _t) return e; "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : o(e) && ("number" == typeof e.code && (this.code =
                            e.code), m(this, e)), this.message || (this.message = _t.defaultMessages[this.code] || "")
                    } _t.prototype.code = 0, _t.prototype.message = "", _t.prototype.status = null, _t.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], _t.defaultMessages = {
                        1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it."
                    }; for (var bt = 0; bt < _t.errorTypes.length; bt++)_t[_t.errorTypes[bt]] = bt, _t.prototype[_t.errorTypes[bt]] = bt; var Tt = function (e, t) { var i, n = null; try { i = JSON.parse(e, t) } catch (e) { n = e } return [n, i] }; function St(e) { return null != e && "function" == typeof e.then } function kt(e) { St(e) && e.then(null, function (e) { }) } function Ct(n) {
                        return ["kind",
                            "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, t, i) { return n[t] && (e[t] = n[t]), e }, { cues: n.cues && Array.prototype.map.call(n.cues, function (e) { return { startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id } }) })
                    } var Et = function (e) {
                        var t = e.$$("track"), i = Array.prototype.map.call(t, function (e) { return e.track }); return Array.prototype.map.call(t, function (e) { var t = Ct(e.track); return e.src && (t.src = e.src), t }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
                            return -1 ===
                                i.indexOf(e)
                        }).map(Ct))
                    }, wt = function (e, i) { return e.forEach(function (e) { var t = i.addRemoteTextTrack(e).track; !e.src && e.cues && e.cues.forEach(function (e) { return t.addCue(e) }) }), i.textTracks() }, Lt = t(function (e, t) {
                        function i(e) { if (e && "object" == typeof e) { var t = e.which || e.keyCode || e.charCode; t && (e = t) } if ("number" == typeof e) return a[e]; var i, n = String(e); return (i = r[n.toLowerCase()]) ? i : (i = s[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0) } i.isEventKey = function (e, t) {
                            if (e && "object" == typeof e) {
                                var i = e.which ||
                                    e.keyCode || e.charCode; if (null == i) return !1; if ("string" == typeof t) { var n; if (n = r[t.toLowerCase()]) return n === i; if (n = s[t.toLowerCase()]) return n === i } else if ("number" == typeof t) return t === i; return !1
                            }
                        }; var r = (t = e.exports = i).code = t.codes = {
                            backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107,
                            "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "\x3d": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222
                        }, s = t.aliases = { windows: 91, "\u21e7": 16, "\u2325": 18, "\u2303": 17, "\u2318": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 }; for (n = 97; n < 123; n++)r[String.fromCharCode(n)] = n - 32; for (var n = 48; n < 58; n++)r[n - 48] = n; for (n = 1; n <
                            13; n++)r["f" + n] = n + 111; for (n = 0; n < 10; n++)r["numpad " + n] = n + 96; var a = t.names = t.title = {}; for (n in r) a[r[n]] = n; for (var o in s) r[o] = s[o]
                    }), Pt = (Lt.code, Lt.codes, Lt.aliases, Lt.names, Lt.title, "vjs-modal-dialog"), At = function (n) {
                        function e(e, t) {
                            var i; return (i = n.call(this, e, t) || this).opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = S("div", { className: Pt + "-content" }, { role: "document" }), i.descEl_ = S("p", {
                                className: Pt + "-description vjs-control-text",
                                id: i.el().getAttribute("aria-describedby")
                            }), k(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
                        } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": this.id() + "_description", "aria-hidden": "true", "aria-label": this.label(), role: "dialog" }) }, t.dispose = function () { this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, n.prototype.dispose.call(this) },
                            t.buildCSSClass = function () { return Pt + " vjs-hidden " + n.prototype.buildCSSClass.call(this) }, t.label = function () { return this.localize(this.options_.label || "Modal Window") }, t.description = function () { var e = this.options_.description || this.localize("This is a modal window."); return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e }, t.open = function () {
                                if (!this.opened_) {
                                    var e = this.player(); this.trigger("beforemodalopen"), this.opened_ =
                                        !0, !this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_) || this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                                }
                            }, t.opened = function (e) { return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_ }, t.close = function () {
                                if (this.opened_) {
                                    var e =
                                        this.player(); this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                                }
                            }, t.closeable = function (e) {
                                if ("boolean" == typeof e) {
                                    var t = this.closeable_ = !!e, i = this.getChild("closeButton"); if (t && !i) {
                                        var n = this.contentEl_; this.contentEl_ = this.el_,
                                            i = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = n, this.on(i, "close", this.close)
                                    } !t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                                } return this.closeable_
                            }, t.fill = function () { this.fillWith(this.content()) }, t.fillWith = function (e) {
                                var t = this.contentEl(), i = t.parentNode, n = t.nextSibling; this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), q(t, e), this.trigger("modalfill"), n ? i.insertBefore(t, n) : i.appendChild(t); var r = this.getChild("closeButton");
                                r && i.appendChild(r.el_)
                            }, t.empty = function () { this.trigger("beforemodalempty"), F(this.contentEl()), this.trigger("modalempty") }, t.content = function (e) { return "undefined" != typeof e && (this.content_ = e), this.content_ }, t.conditionalFocus_ = function () { var e = h.activeElement, t = this.player_.el_; this.previouslyActiveEl_ = null, !t.contains(e) && t !== e || (this.previouslyActiveEl_ = e, this.focus()) }, t.conditionalBlur_ = function () { this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null) }, t.handleKeyDown =
                            function (e) { if (e.stopPropagation(), Lt.isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(), void this.close(); if (Lt.isEventKey(e, "Tab")) { for (var t, i = this.focusableEls_(), n = this.el_.querySelector(":focus"), r = 0; r < i.length; r++)if (n === i[r]) { t = r; break } h.activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault()) } }, t.focusableEls_ = function () {
                                var e = this.el_.querySelectorAll("*"); return Array.prototype.filter.call(e,
                                    function (e) { return (e instanceof y.HTMLAnchorElement || e instanceof y.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof y.HTMLInputElement || e instanceof y.HTMLSelectElement || e instanceof y.HTMLTextAreaElement || e instanceof y.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof y.HTMLIFrameElement || e instanceof y.HTMLObjectElement || e instanceof y.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable") })
                            }, e
                    }(Ue); At.prototype.options_ =
                        { pauseOnOpen: !0, temporary: !0 }, Ue.registerComponent("ModalDialog", At); var It = function (n) {
                            function e(e) { var t; void 0 === e && (e = []), (t = n.call(this) || this).tracks_ = [], Object.defineProperty(Me(t), "length", { get: function () { return this.tracks_.length } }); for (var i = 0; i < e.length; i++)t.addTrack(e[i]); return t } He(e, n); var t = e.prototype; return t.addTrack = function (e) {
                                var t = this.tracks_.length; "" + t in this || Object.defineProperty(this, t, { get: function () { return this.tracks_[t] } }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e),
                                    this.trigger({ track: e, type: "addtrack", target: this }))
                            }, t.removeTrack = function (e) { for (var t, i = 0, n = this.length; i < n; i++)if (this[i] === e) { (t = this[i]).off && t.off(), this.tracks_.splice(i, 1); break } t && this.trigger({ track: t, type: "removetrack", target: this }) }, t.getTrackById = function (e) { for (var t = null, i = 0, n = this.length; i < n; i++) { var r = this[i]; if (r.id === e) { t = r; break } } return t }, e
                        }(ye); for (var xt in It.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack" }, It.prototype.allowedEvents_) It.prototype["on" +
                            xt] = null; function Ot(e, t) { for (var i = 0; i < e.length; i++)Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1) } function Dt(e, t) { for (var i = 0; i < e.length; i++)Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1) } function Rt(e) {
                                var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = h.createElement("a"); i.href = e; var n, r = "" === i.host && "file:" !== i.protocol; r && ((n = h.createElement("div")).innerHTML = '\x3ca href\x3d"' + e + '"\x3e\x3c/a\x3e', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"),
                                    h.body.appendChild(n)); for (var s = {}, a = 0; a < t.length; a++)s[t[a]] = i[t[a]]; return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = y.location.protocol), r && h.body.removeChild(n), s
                            } function Ut(e) { if (!e.match(/^https?:\/\//)) { var t = h.createElement("div"); t.innerHTML = '\x3ca href\x3d"' + e + '"\x3ex\x3c/a\x3e', e = t.firstChild.href } return e } function Mt(e) {
                                if ("string" == typeof e) {
                                    var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
                                    if (t) return t.pop().toLowerCase()
                                } return ""
                            } function Nt(e, t) { void 0 === t && (t = y.location); var i = Rt(e); return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host } var Bt = function (n) {
                                function e(e) { var t; void 0 === e && (e = []); for (var i = e.length - 1; 0 <= i; i--)if (e[i].enabled) { Ot(e, e[i]); break } return (t = n.call(this, e) || this).changing_ = !1, t } He(e, n); var t = e.prototype; return t.addTrack = function (e) {
                                    var t = this; e.enabled && Ot(this, e), n.prototype.addTrack.call(this, e), e.addEventListener && (e.enabledChange_ =
                                        function () { t.changing_ || (t.changing_ = !0, Ot(t, e), t.changing_ = !1, t.trigger("change")) }, e.addEventListener("enabledchange", e.enabledChange_))
                                }, t.removeTrack = function (e) { n.prototype.removeTrack.call(this, e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null) }, e
                            }(It), jt = function (n) {
                                function e(e) {
                                    var t; void 0 === e && (e = []); for (var i = e.length - 1; 0 <= i; i--)if (e[i].selected) { Dt(e, e[i]); break } return (t = n.call(this, e) || this).changing_ = !1, Object.defineProperty(Me(t),
                                        "selectedIndex", { get: function () { for (var e = 0; e < this.length; e++)if (this[e].selected) return e; return -1 }, set: function () { } }), t
                                } He(e, n); var t = e.prototype; return t.addTrack = function (e) { var t = this; e.selected && Dt(this, e), n.prototype.addTrack.call(this, e), e.addEventListener && (e.selectedChange_ = function () { t.changing_ || (t.changing_ = !0, Dt(t, e), t.changing_ = !1, t.trigger("change")) }, e.addEventListener("selectedchange", e.selectedChange_)) }, t.removeTrack = function (e) {
                                    n.prototype.removeTrack.call(this, e), e.removeEventListener &&
                                        e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null)
                                }, e
                            }(It), Ft = function (i) {
                                function e() { return i.apply(this, arguments) || this } He(e, i); var t = e.prototype; return t.addTrack = function (e) {
                                    var t = this; i.prototype.addTrack.call(this, e), this.queueChange_ || (this.queueChange_ = function () { return t.queueTrigger("change") }), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function () { return t.trigger("selectedlanguagechange") }), e.addEventListener("modechange",
                                        this.queueChange_); -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
                                }, t.removeTrack = function (e) { i.prototype.removeTrack.call(this, e), e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_)) }, e
                            }(It), Ht = function () {
                                function e(e) {
                                    void 0 === e && (e = []), this.trackElements_ = [], Object.defineProperty(this,
                                        "length", { get: function () { return this.trackElements_.length } }); for (var t = 0, i = e.length; t < i; t++)this.addTrackElement_(e[t])
                                } var t = e.prototype; return t.addTrackElement_ = function (e) { var t = this.trackElements_.length; "" + t in this || Object.defineProperty(this, t, { get: function () { return this.trackElements_[t] } }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e) }, t.getTrackElementByTrack_ = function (e) {
                                    for (var t, i = 0, n = this.trackElements_.length; i < n; i++)if (e === this.trackElements_[i].track) {
                                        t = this.trackElements_[i];
                                        break
                                    } return t
                                }, t.removeTrackElement_ = function (e) { for (var t = 0, i = this.trackElements_.length; t < i; t++)if (e === this.trackElements_[t]) { this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(), this.trackElements_.splice(t, 1); break } }, e
                            }(), Vt = function () {
                                function t(e) { t.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", { get: function () { return this.length_ } }) }
                                var e = t.prototype; return e.setCues_ = function (e) { var t = this.length || 0, i = 0, n = e.length; this.cues_ = e, this.length_ = e.length; function r(e) { "" + e in this || Object.defineProperty(this, "" + e, { get: function () { return this.cues_[e] } }) } if (t < n) for (i = t; i < n; i++)r.call(this, i) }, e.getCueById = function (e) { for (var t = null, i = 0, n = this.length; i < n; i++) { var r = this[i]; if (r.id === e) { t = r; break } } return t }, t
                            }(), qt = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" }, Wt =
                                    { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" }, zt = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" }, Gt = { disabled: "disabled", hidden: "hidden", showing: "showing" }, Kt = function (s) {
                                        function e(e) {
                                            var t; void 0 === e && (e = {}), t = s.call(this) || this; function i(e) { Object.defineProperty(Me(t), e, { get: function () { return n[e] }, set: function () { } }) } var n = {
                                                id: e.id || "vjs_track_" +
                                                    ne(), kind: e.kind || "", label: e.label || "", language: e.language || ""
                                            }; for (var r in n) i(r); return t
                                        } return He(e, s), e
                                    }(ye), Xt = Object.freeze({ parseUrl: Rt, getAbsoluteURL: Ut, getFileExtension: Mt, isCrossOrigin: Nt }), Yt = function (e) { var t = $t.call(e); return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt) }, $t = Object.prototype.toString; var Qt = function (e) {
                                        var r = {}; return e && e.trim().split("\n").forEach(function (e) {
                                            var t =
                                                e.indexOf(":"), i = e.slice(0, t).trim().toLowerCase(), n = e.slice(t + 1).trim(); "undefined" == typeof r[i] ? r[i] = n : Array.isArray(r[i]) ? r[i].push(n) : r[i] = [r[i], n]
                                        }), r
                                    }, Jt = ti, Zt = ti; function ei(e, t, i) { var n = e; return Yt(t) ? (i = t, "string" == typeof e && (n = { uri: e })) : n = r({}, t, { uri: e }), n.callback = i, n } function ti(e, t, i) { return ii(t = ei(e, t, i)) } function ii(n) {
                                        if ("undefined" == typeof n.callback) throw new Error("callback argument missing"); var r = !1, s = function (e, t, i) { r || (r = !0, n.callback(e, t, i)) }; function t(e) {
                                            return clearTimeout(o),
                                                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, s(e, m)
                                        } function e() {
                                            if (!a) {
                                                var e; clearTimeout(o), e = n.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status; var t = m, i = null; return 0 !== e ? (t = {
                                                    body: function () {
                                                        var e = void 0; if (e = u.response ? u.response : u.responseText || function (e) { try { if ("document" === e.responseType) return e.responseXML; var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName; if ("" === e.responseType && !t) return e.responseXML } catch (e) { } return null }(u),
                                                            f) try { e = JSON.parse(e) } catch (e) { } return e
                                                    }(), statusCode: e, method: c, headers: {}, url: l, rawRequest: u
                                                }, u.getAllResponseHeaders && (t.headers = Qt(u.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), s(i, t, t.body)
                                            }
                                        } var i, a, o, u = n.xhr || null, l = (u = u || (n.cors || n.useXDR ? new ti.XDomainRequest : new ti.XMLHttpRequest)).url = n.uri || n.url, c = u.method = n.method || "GET", h = n.body || n.data, d = u.headers = n.headers || {}, p = !!n.sync, f = !1, m = { body: void 0, headers: {}, statusCode: 0, method: c, url: l, rawRequest: u }; if ("json" in
                                            n && !1 !== n.json && (f = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), h = JSON.stringify(!0 === n.json ? h : n.json))), u.onreadystatechange = function () { 4 === u.readyState && setTimeout(e, 0) }, u.onload = e, u.onerror = t, u.onprogress = function () { }, u.onabort = function () { a = !0 }, u.ontimeout = t, u.open(c, l, !p, n.username, n.password), p || (u.withCredentials = !!n.withCredentials), !p && 0 < n.timeout && (o = setTimeout(function () {
                                                if (!a) {
                                                    a =
                                                    !0, u.abort("timeout"); var e = new Error("XMLHttpRequest timeout"); e.code = "ETIMEDOUT", t(e)
                                                }
                                            }, n.timeout)), u.setRequestHeader) for (i in d) d.hasOwnProperty(i) && u.setRequestHeader(i, d[i]); else if (n.headers && !function (e) { for (var t in e) if (e.hasOwnProperty(t)) return !1; return !0 }(n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object"); return "responseType" in n && (u.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(u), u.send(h || null), u
                                    } ti.XMLHttpRequest =
                                        y.XMLHttpRequest || function () { }, ti.XDomainRequest = "withCredentials" in new ti.XMLHttpRequest ? ti.XMLHttpRequest : y.XDomainRequest, function (e, t) { for (var i = 0; i < e.length; i++)t(e[i]) }(["get", "put", "post", "patch", "head", "delete"], function (n) { ti["delete" === n ? "del" : n] = function (e, t, i) { return (t = ei(e, t, i)).method = n.toUpperCase(), ii(t) } }), Jt.default = Zt; function ni(e, t) {
                                            var i = new y.WebVTT.Parser(y, y.vttjs, y.WebVTT.StringDecoder()), n = []; i.oncue = function (e) { t.addCue(e) }, i.onparsingerror = function (e) { n.push(e) }, i.onflush =
                                                function () { t.trigger({ type: "loadeddata", target: t }) }, i.parse(e), 0 < n.length && (y.console && y.console.groupCollapsed && y.console.groupCollapsed("Text Track parsing errors for " + t.src), n.forEach(function (e) { return p.error(e) }), y.console && y.console.groupEnd && y.console.groupEnd()), i.flush()
                                        } function ri(e, n) {
                                            var t = { uri: e }, i = Nt(e); i && (t.cors = i), Jt(t, ge(this, function (e, t, i) {
                                                if (e) return p.error(e, t); n.loaded_ = !0, "function" != typeof y.WebVTT ? n.tech_ && n.tech_.any(["vttjsloaded", "vttjserror"], function (e) {
                                                    if ("vttjserror" !==
                                                        e.type) return ni(i, n); p.error("vttjs failed to load, stopping trying to process " + n.src)
                                                }) : ni(i, n)
                                            }))
                                        } var si = function (l) {
                                            function e(e) {
                                                var t; if (void 0 === e && (e = {}), !e.tech) throw new Error("A tech was not provided."); var i = Re(e, { kind: zt[e.kind] || "subtitles", language: e.language || e.srclang || "" }), n = Gt[i.mode] || "disabled", r = i.default; "metadata" !== i.kind && "chapters" !== i.kind || (n = "hidden"), (t = l.call(this, i) || this).tech_ = i.tech, t.cues_ = [], t.activeCues_ = [], t.preload_ = !1 !== t.tech_.preloadTextTracks; var s = new Vt(t.cues_),
                                                    a = new Vt(t.activeCues_), o = !1, u = ge(Me(t), function () { this.activeCues = this.activeCues, o && (this.trigger("cuechange"), o = !1) }); return "disabled" !== n && t.tech_.ready(function () { t.tech_.on("timeupdate", u) }, !0), Object.defineProperties(Me(t), {
                                                        default: { get: function () { return r }, set: function () { } }, mode: {
                                                            get: function () { return n }, set: function (e) {
                                                                var t = this; Gt[e] && (n = e, this.preload_ || "disabled" === n || 0 !== this.cues.length || ri(this.src, this), "disabled" !== n ? this.tech_.ready(function () { t.tech_.on("timeupdate", u) }, !0) : this.tech_.off("timeupdate",
                                                                    u), this.trigger("modechange"))
                                                            }
                                                        }, cues: { get: function () { return this.loaded_ ? s : null }, set: function () { } }, activeCues: {
                                                            get: function () {
                                                                if (!this.loaded_) return null; if (0 === this.cues.length) return a; for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) { var r = this.cues[i]; r.startTime <= e && r.endTime >= e ? t.push(r) : r.startTime === r.endTime && r.startTime <= e && r.startTime + 0.5 >= e && t.push(r) } if (o = !1, t.length !== this.activeCues_.length) o = !0; else for (var s = 0; s < t.length; s++)-1 === this.activeCues_.indexOf(t[s]) &&
                                                                    (o = !0); return this.activeCues_ = t, a.setCues_(this.activeCues_), a
                                                            }, set: function () { }
                                                        }
                                                    }), i.src ? (t.src = i.src, t.preload_ || (t.loaded_ = !0), (t.preload_ || r || "subtitles" !== i.kind && "captions" !== i.kind) && ri(t.src, Me(t))) : t.loaded_ = !0, t
                                            } He(e, l); var t = e.prototype; return t.addCue = function (e) {
                                                var t = e; if (y.vttjs && !(e instanceof y.vttjs.VTTCue)) { for (var i in t = new y.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]); t.id = e.id, t.originalCue_ = e } for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++)n[r] !==
                                                    this && n[r].removeCue(t); this.cues_.push(t), this.cues.setCues_(this.cues_)
                                            }, t.removeCue = function (e) { for (var t = this.cues_.length; t--;) { var i = this.cues_[t]; if (i === e || i.originalCue_ && i.originalCue_ === e) { this.cues_.splice(t, 1), this.cues.setCues_(this.cues_); break } } }, e
                                        }(Kt); si.prototype.allowedEvents_ = { cuechange: "cuechange" }; var ai = function (r) {
                                            function e(e) {
                                                var t; void 0 === e && (e = {}); var i = Re(e, { kind: Wt[e.kind] || "" }); t = r.call(this, i) || this; var n = !1; return Object.defineProperty(Me(t), "enabled", {
                                                    get: function () { return n },
                                                    set: function (e) { "boolean" == typeof e && e !== n && (n = e, this.trigger("enabledchange")) }
                                                }), i.enabled && (t.enabled = i.enabled), t.loaded_ = !0, t
                                            } return He(e, r), e
                                        }(Kt), oi = function (r) { function e(e) { var t; void 0 === e && (e = {}); var i = Re(e, { kind: qt[e.kind] || "" }); t = r.call(this, i) || this; var n = !1; return Object.defineProperty(Me(t), "selected", { get: function () { return n }, set: function (e) { "boolean" == typeof e && e !== n && (n = e, this.trigger("selectedchange")) } }), i.selected && (t.selected = i.selected), t } return He(e, r), e }(Kt), ui = function (r) {
                                            function e(e) {
                                                var t,
                                                i; void 0 === e && (e = {}), t = r.call(this) || this; var n = new si(e); return t.kind = n.kind, t.src = n.src, t.srclang = n.language, t.label = n.label, t.default = n.default, Object.defineProperties(Me(t), { readyState: { get: function () { return i } }, track: { get: function () { return n } } }), i = 0, n.addEventListener("loadeddata", function () { i = 2, t.trigger({ type: "load", target: Me(t) }) }), t
                                            } return He(e, r), e
                                        }(ye); ui.prototype.allowedEvents_ = { load: "load" }, ui.NONE = 0, ui.LOADING = 1, ui.LOADED = 2, ui.ERROR = 3; var li = {
                                            audio: { ListClass: Bt, TrackClass: ai, capitalName: "Audio" },
                                            video: { ListClass: jt, TrackClass: oi, capitalName: "Video" }, text: { ListClass: Ft, TrackClass: si, capitalName: "Text" }
                                        }; Object.keys(li).forEach(function (e) { li[e].getterName = e + "Tracks", li[e].privateName = e + "Tracks_" }); var ci = { remoteText: { ListClass: Ft, TrackClass: si, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" }, remoteTextEl: { ListClass: Ht, TrackClass: ui, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" } }, hi = r({}, li, ci); ci.names =
                                            Object.keys(ci), li.names = Object.keys(li), hi.names = [].concat(ci.names).concat(li.names); var di = Object.create || function (e) { if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter."); return pi.prototype = e, new pi }; function pi() { } function fi(e, t) { this.name = "ParsingError", this.code = e.code, this.message = t || e.message } function mi(e) {
                                                function t(e, t, i, n) { return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | n) / 1E3 } var i = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/); return i ? i[3] ? t(i[1], i[2], i[3].replace(":",
                                                    ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
                                            } function gi() { this.values = di(null) } function vi(e, t, i, n) { var r = n ? e.split(n) : [e]; for (var s in r) if ("string" == typeof r[s]) { var a = r[s].split(i); if (2 === a.length) t(a[0], a[1]) } } function yi(t, e, a) {
                                                var i = t; function n() { var e = mi(t); if (null === e) throw new fi(fi.Errors.BadTimeStamp, "Malformed timestamp: " + i); return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e } function r() { t = t.replace(/^\s+/, "") } if (r(), e.startTime = n(), r(), "--\x3e" !== t.substr(0, 3)) throw new fi(fi.Errors.BadTimeStamp,
                                                    "Malformed time stamp (time stamps must be separated by '--\x3e'): " + i); t = t.substr(3), r(), e.endTime = n(), r(), function (e, t) {
                                                        var s = new gi; vi(e, function (e, t) {
                                                            switch (e) {
                                                                case "region": for (var i = a.length - 1; 0 <= i; i--)if (a[i].id === t) { s.set(e, a[i].region); break } break; case "vertical": s.alt(e, t, ["rl", "lr"]); break; case "line": var n = t.split(","), r = n[0]; s.integer(e, r), s.percent(e, r) && s.set("snapToLines", !1), s.alt(e, r, ["auto"]), 2 === n.length && s.alt("lineAlign", n[1], ["start", "center", "end"]); break; case "position": n =
                                                                    t.split(","), s.percent(e, n[0]), 2 === n.length && s.alt("positionAlign", n[1], ["start", "center", "end"]); break; case "size": s.percent(e, t); break; case "align": s.alt(e, t, ["start", "center", "end", "left", "right"])
                                                            }
                                                        }, /:/, /\s/), t.region = s.get("region", null), t.vertical = s.get("vertical", ""); try { t.line = s.get("line", "auto") } catch (e) { } t.lineAlign = s.get("lineAlign", "start"), t.snapToLines = s.get("snapToLines", !0), t.size = s.get("size", 100); try { t.align = s.get("align", "center") } catch (e) { t.align = s.get("align", "middle") } try {
                                                            t.position =
                                                            s.get("position", "auto")
                                                        } catch (e) { t.position = s.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, t.align) } t.positionAlign = s.get("positionAlign", { start: "start", left: "start", center: "center", middle: "center", end: "end", right: "end" }, t.align)
                                                    }(t, e)
                                            } ((fi.prototype = di(Error.prototype)).constructor = fi).Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, gi.prototype = {
                                                set: function (e, t) {
                                                    this.get(e) || "" === t || (this.values[e] =
                                                        t)
                                                }, get: function (e, t, i) { return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t }, has: function (e) { return e in this.values }, alt: function (e, t, i) { for (var n = 0; n < i.length; ++n)if (t === i[n]) { this.set(e, t); break } }, integer: function (e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)) }, percent: function (e, t) { return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0) }
                                            }; var _i = h.createElement("textarea"), bi = {
                                                c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span",
                                                lang: "span"
                                            }, Ti = { white: "rgba(255,255,255,1)", lime: "rgba(0,255,0,1)", cyan: "rgba(0,255,255,1)", red: "rgba(255,0,0,1)", yellow: "rgba(255,255,0,1)", magenta: "rgba(255,0,255,1)", blue: "rgba(0,0,255,1)", black: "rgba(0,0,0,1)" }, Si = { v: "title", lang: "lang" }, ki = { rt: "ruby" }; function Ci(s, i) {
                                                function e() { if (!i) return null; var e, t = i.match(/^([^<]*)(<[^>]*>?)?/); return e = t[1] ? t[1] : t[2], i = i.substr(e.length), e } function t(e, t) {
                                                    var i = bi[e]; if (!i) return null; var n = s.document.createElement(i), r = Si[e]; return r && t && (n[r] = t.trim()),
                                                        n
                                                } for (var n, r, a, o, u = s.document.createElement("div"), l = u, c = []; null !== (n = e());)if ("\x3c" !== n[0]) l.appendChild(s.document.createTextNode((r = n, _i.innerHTML = r, r = _i.textContent, _i.textContent = "", r))); else {
                                                    if ("/" === n[1]) { c.length && c[c.length - 1] === n.substr(2).replace("\x3e", "") && (c.pop(), l = l.parentNode); continue } var h, d = mi(n.substr(1, n.length - 2)); if (d) { h = s.document.createProcessingInstruction("timestamp", d), l.appendChild(h); continue } var p = n.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/); if (!p) continue;
                                                    if (!(h = t(p[1], p[3]))) continue; if (a = l, ki[(o = h).localName] && ki[o.localName] !== a.localName) continue; if (p[2]) { var f = p[2].split("."); f.forEach(function (e) { var t = /^bg_/.test(e), i = t ? e.slice(3) : e; if (Ti.hasOwnProperty(i)) { var n = t ? "background-color" : "color", r = Ti[i]; h.style[n] = r } }), h.className = f.join(" ") } c.push(p[1]), l.appendChild(h), l = h
                                                } return u
                                            } var Ei = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749],
                                            [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644],
                                            [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546],
                                            [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]]; function wi(e) { for (var t = 0; t < Ei.length; t++) { var i = Ei[t]; if (e >= i[0] && e <= i[1]) return !0 } return !1 } function Li() { } function Pi(e, t, i) {
                                                Li.call(this), this.cue = t, this.cueDiv = Ci(e, t.text); var n = {
                                                    color: "rgba(255, 255, 255, 1)",
                                                    backgroundColor: "rgba(0, 0, 0, 0.8)", position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline", writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext"
                                                }; this.applyStyles(n, this.cueDiv), this.div = e.document.createElement("div"), n = {
                                                    direction: function (e) {
                                                        var t = [], i = ""; if (!e || !e.childNodes) return "ltr"; function r(e, t) { for (var i = t.childNodes.length - 1; 0 <= i; i--)e.push(t.childNodes[i]) } function s(e) {
                                                            if (!e || !e.length) return null; var t = e.pop(),
                                                                i = t.textContent || t.innerText; if (i) { var n = i.match(/^.*(\n|\r)/); return n ? n[e.length = 0] : i } return "ruby" === t.tagName ? s(e) : t.childNodes ? (r(e, t), s(e)) : void 0
                                                        } for (r(t, e); i = s(t);)for (var n = 0; n < i.length; n++)if (wi(i.charCodeAt(n))) return "rtl"; return "ltr"
                                                    }(this.cueDiv), writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext", textAlign: "middle" === t.align ? "center" : t.align, font: i.font, whiteSpace: "pre-line", position: "absolute"
                                                }, this.applyStyles(n), this.div.appendChild(this.cueDiv);
                                                var r = 0; switch (t.positionAlign) { case "start": r = t.position; break; case "center": r = t.position - t.size / 2; break; case "end": r = t.position - t.size }"" === t.vertical ? this.applyStyles({ left: this.formatStyle(r, "%"), width: this.formatStyle(t.size, "%") }) : this.applyStyles({ top: this.formatStyle(r, "%"), height: this.formatStyle(t.size, "%") }), this.move = function (e) {
                                                    this.applyStyles({
                                                        top: this.formatStyle(e.top, "px"), bottom: this.formatStyle(e.bottom, "px"), left: this.formatStyle(e.left, "px"), right: this.formatStyle(e.right, "px"),
                                                        height: this.formatStyle(e.height, "px"), width: this.formatStyle(e.width, "px")
                                                    })
                                                }
                                            } function Ai(e) {
                                                var t, i, n, r; if (e.div) { i = e.div.offsetHeight, n = e.div.offsetWidth, r = e.div.offsetTop; var s = (s = e.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects(); e = e.div.getBoundingClientRect(), t = s ? Math.max(s[0] && s[0].height || 0, e.height / s.length) : 0 } this.left = e.left, this.right = e.right, this.top = e.top || r, this.height = e.height || i, this.bottom = e.bottom || r + (e.height || i), this.width = e.width || n, this.lineHeight = void 0 !== t ?
                                                    t : e.lineHeight
                                            } function Ii(e, t, o, u) {
                                                var i = new Ai(t), n = t.cue, r = function (e) { if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line; if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1; for (var t = e.track, i = t.textTrackList, n = 0, r = 0; r < i.length && i[r] !== t; r++)"showing" === i[r].mode && n++; return -1 * ++n }(n), s = []; if (n.snapToLines) {
                                                    var a; switch (n.vertical) {
                                                        case "": s = ["+y", "-y"], a = "height"; break; case "rl": s = ["+x", "-x"], a = "width"; break; case "lr": s = ["-x", "+x"],
                                                            a = "width"
                                                    }var l = i.lineHeight, c = l * Math.round(r), h = o[a] + l, d = s[0]; Math.abs(c) > h && (c = c < 0 ? -1 : 1, c *= Math.ceil(h / l) * l), r < 0 && (c += "" === n.vertical ? o.height : o.width, s = s.reverse()), i.move(d, c)
                                                } else { var p = i.lineHeight / o.height * 100; switch (n.lineAlign) { case "center": r -= p / 2; break; case "end": r -= p }switch (n.vertical) { case "": t.applyStyles({ top: t.formatStyle(r, "%") }); break; case "rl": t.applyStyles({ left: t.formatStyle(r, "%") }); break; case "lr": t.applyStyles({ right: t.formatStyle(r, "%") }) }s = ["+y", "-x", "+x", "-y"], i = new Ai(t) } var f =
                                                    function (e, t) { for (var i, n = new Ai(e), r = 1, s = 0; s < t.length; s++) { for (; e.overlapsOppositeAxis(o, t[s]) || e.within(o) && e.overlapsAny(u);)e.move(t[s]); if (e.within(o)) return e; var a = e.intersectPercentage(o); a < r && (i = new Ai(e), r = a), e = new Ai(n) } return i || n }(i, s); t.move(f.toCSSCompatValues(o))
                                            } function xi() { } Li.prototype.applyStyles = function (e, t) { for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i]) }, Li.prototype.formatStyle = function (e, t) { return 0 === e ? 0 : e + t }, (Pi.prototype = di(Li.prototype)).constructor =
                                                Pi, Ai.prototype.move = function (e, t) { switch (t = void 0 !== t ? t : this.lineHeight, e) { case "+x": this.left += t, this.right += t; break; case "-x": this.left -= t, this.right -= t; break; case "+y": this.top += t, this.bottom += t; break; case "-y": this.top -= t, this.bottom -= t } }, Ai.prototype.overlaps = function (e) { return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top }, Ai.prototype.overlapsAny = function (e) { for (var t = 0; t < e.length; t++)if (this.overlaps(e[t])) return !0; return !1 }, Ai.prototype.within = function (e) {
                                                    return this.top >=
                                                        e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
                                                }, Ai.prototype.overlapsOppositeAxis = function (e, t) { switch (t) { case "+x": return this.left < e.left; case "-x": return this.right > e.right; case "+y": return this.top < e.top; case "-y": return this.bottom > e.bottom } }, Ai.prototype.intersectPercentage = function (e) { return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width) }, Ai.prototype.toCSSCompatValues =
                                                function (e) { return { top: this.top - e.top, bottom: e.bottom - this.bottom, left: this.left - e.left, right: e.right - this.right, height: this.height, width: this.width } }, Ai.getSimpleBoxPosition = function (e) {
                                                    var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0, i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0, n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0; return {
                                                        left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left, right: e.right, top: e.top || n, height: e.height || t, bottom: e.bottom ||
                                                            n + (e.height || t), width: e.width || i
                                                    }
                                                }, xi.StringDecoder = function () { return { decode: function (e) { if (!e) return ""; if ("string" != typeof e) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e)) } } }, xi.convertCueToDOMTree = function (e, t) { return e && t ? Ci(e, t) : null }; xi.processCues = function (n, r, e) {
                                                    if (!n || !r || !e) return null; for (; e.firstChild;)e.removeChild(e.firstChild); var s = n.document.createElement("div"); if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top =
                                                        "0", s.style.bottom = "0", s.style.margin = "1.5%", e.appendChild(s), function (e) { for (var t = 0; t < e.length; t++)if (e[t].hasBeenReset || !e[t].displayState) return !0; return !1 }(r)) { var a = [], o = Ai.getSimpleBoxPosition(s), u = { font: Math.round(0.05 * o.height * 100) / 100 + "px sans-serif" }; !function () { for (var e, t, i = 0; i < r.length; i++)t = r[i], e = new Pi(n, t, u), s.appendChild(e.div), Ii(0, e, o, a), t.displayState = e.div, a.push(Ai.getSimpleBoxPosition(e)) }() } else for (var t = 0; t < r.length; t++)s.appendChild(r[t].displayState)
                                                }, (xi.Parser = function (e,
                                                    t, i) { i || (i = t, t = {}), t = t || {}, this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = [] }).prototype = {
                                                        reportOrThrowError: function (e) { if (!(e instanceof fi)) throw e; this.onparsingerror && this.onparsingerror(e) }, parse: function (e) {
                                                            var n = this; function t() { for (var e = n.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];)++t; var i = e.substr(0, t); return "\r" === e[t] && ++t, "\n" === e[t] && ++t, n.buffer = e.substr(t), i } function i(e) {
                                                                e.match(/X-TIMESTAMP-MAP/) ? vi(e,
                                                                    function (e, t) { switch (e) { case "X-TIMESTAMP-MAP": !function (e) { var i = new gi; vi(e, function (e, t) { switch (e) { case "MPEGT": i.integer(e + "S", t); break; case "LOCA": i.set(e + "L", mi(t)) } }, /[^\d]:/, /,/), n.ontimestampmap && n.ontimestampmap({ MPEGTS: i.get("MPEGTS"), LOCAL: i.get("LOCAL") }) }(t) } }, /=/) : vi(e, function (e, t) {
                                                                        switch (e) {
                                                                            case "Region": !function (e) {
                                                                                var r = new gi; if (vi(e, function (e, t) {
                                                                                    switch (e) {
                                                                                        case "id": r.set(e, t); break; case "width": r.percent(e, t); break; case "lines": r.integer(e, t); break; case "regionanchor": case "viewportanchor": var i =
                                                                                            t.split(","); if (2 !== i.length) break; var n = new gi; if (n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y")) break; r.set(e + "X", n.get("x")), r.set(e + "Y", n.get("y")); break; case "scroll": r.alt(e, t, ["up"])
                                                                                    }
                                                                                }, /=/, /\s/), r.has("id")) {
                                                                                    var t = new (n.vttjs.VTTRegion || n.window.VTTRegion); t.width = r.get("width", 100), t.lines = r.get("lines", 3), t.regionAnchorX = r.get("regionanchorX", 0), t.regionAnchorY = r.get("regionanchorY", 100), t.viewportAnchorX = r.get("viewportanchorX", 0), t.viewportAnchorY = r.get("viewportanchorY",
                                                                                        100), t.scroll = r.get("scroll", ""), n.onregion && n.onregion(t), n.regionList.push({ id: r.get("id"), region: t })
                                                                                }
                                                                            }(t)
                                                                        }
                                                                    }, /:/)
                                                            } e && (n.buffer += n.decoder.decode(e, { stream: !0 })); try {
                                                                var r; if ("INITIAL" === n.state) { if (!/\r\n|\n/.test(n.buffer)) return this; var s = (r = t()).match(/^WEBVTT([ \t].*)?$/); if (!s || !s[0]) throw new fi(fi.Errors.BadSignature); n.state = "HEADER" } for (var a = !1; n.buffer;) {
                                                                    if (!/\r\n|\n/.test(n.buffer)) return this; switch (a ? a = !1 : r = t(), n.state) {
                                                                        case "HEADER": /:/.test(r) ? i(r) : r || (n.state = "ID"); continue; case "NOTE": r ||
                                                                            (n.state = "ID"); continue; case "ID": if (/^NOTE($|[ \t])/.test(r)) { n.state = "NOTE"; break } if (!r) continue; n.cue = new (n.vttjs.VTTCue || n.window.VTTCue)(0, 0, ""); try { n.cue.align = "center" } catch (e) { n.cue.align = "middle" } if (n.state = "CUE", -1 === r.indexOf("--\x3e")) { n.cue.id = r; continue } case "CUE": try { yi(r, n.cue, n.regionList) } catch (e) { n.reportOrThrowError(e), n.cue = null, n.state = "BADCUE"; continue } n.state = "CUETEXT"; continue; case "CUETEXT": var o = -1 !== r.indexOf("--\x3e"); if (!r || o && (a = !0)) {
                                                                                n.oncue && n.oncue(n.cue), n.cue = null,
                                                                                n.state = "ID"; continue
                                                                            } n.cue.text && (n.cue.text += "\n"), n.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n"); continue; case "BADCUE": r || (n.state = "ID"); continue
                                                                    }
                                                                }
                                                            } catch (e) { n.reportOrThrowError(e), "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue), n.cue = null, n.state = "INITIAL" === n.state ? "BADWEBVTT" : "BADCUE" } return this
                                                        }, flush: function () {
                                                            var t = this; try {
                                                                if (t.buffer += t.decoder.decode(), !t.cue && "HEADER" !== t.state || (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new fi(fi.Errors.BadSignature);
                                                            } catch (e) { t.reportOrThrowError(e) } return t.onflush && t.onflush(), this
                                                        }
                                                    }; var Oi = xi, Di = { "": 1, lr: 1, rl: 1 }, Ri = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 }; function Ui(e) { return "string" == typeof e && (!!Ri[e.toLowerCase()] && e.toLowerCase()) } function Mi(e, t, i) {
                                                        this.hasBeenReset = !1; var n = "", r = !1, s = e, a = t, o = i, u = null, l = "", c = !0, h = "auto", d = "start", p = "auto", f = "auto", m = 100, g = "center"; Object.defineProperties(this, {
                                                            id: { enumerable: !0, get: function () { return n }, set: function (e) { n = "" + e } }, pauseOnExit: {
                                                                enumerable: !0,
                                                                get: function () { return r }, set: function (e) { r = !!e }
                                                            }, startTime: { enumerable: !0, get: function () { return s }, set: function (e) { if ("number" != typeof e) throw new TypeError("Start time must be set to a number."); s = e, this.hasBeenReset = !0 } }, endTime: { enumerable: !0, get: function () { return a }, set: function (e) { if ("number" != typeof e) throw new TypeError("End time must be set to a number."); a = e, this.hasBeenReset = !0 } }, text: { enumerable: !0, get: function () { return o }, set: function (e) { o = "" + e, this.hasBeenReset = !0 } }, region: {
                                                                enumerable: !0,
                                                                get: function () { return u }, set: function (e) { u = e, this.hasBeenReset = !0 }
                                                            }, vertical: { enumerable: !0, get: function () { return l }, set: function (e) { var t = function (e) { return "string" == typeof e && (!!Di[e.toLowerCase()] && e.toLowerCase()) }(e); if (!1 === t) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified."); l = t, this.hasBeenReset = !0 } }, snapToLines: { enumerable: !0, get: function () { return c }, set: function (e) { c = !!e, this.hasBeenReset = !0 } }, line: {
                                                                enumerable: !0, get: function () { return h }, set: function (e) {
                                                                    if ("number" !=
                                                                        typeof e && "auto" !== e) throw new SyntaxError("Line: an invalid number or illegal string was specified."); h = e, this.hasBeenReset = !0
                                                                }
                                                            }, lineAlign: { enumerable: !0, get: function () { return d }, set: function (e) { var t = Ui(e); t && (d = t, this.hasBeenReset = !0) } }, position: { enumerable: !0, get: function () { return p }, set: function (e) { if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100."); p = e, this.hasBeenReset = !0 } }, positionAlign: {
                                                                enumerable: !0, get: function () { return f }, set: function (e) {
                                                                    var t = Ui(e); t && (f = t, this.hasBeenReset =
                                                                        !0)
                                                                }
                                                            }, size: { enumerable: !0, get: function () { return m }, set: function (e) { if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100."); m = e, this.hasBeenReset = !0 } }, align: { enumerable: !0, get: function () { return g }, set: function (e) { var t = Ui(e); if (!t) throw new SyntaxError("align: an invalid or illegal alignment string was specified."); g = t, this.hasBeenReset = !0 } }
                                                        }), this.displayState = void 0
                                                    } Mi.prototype.getCueAsHTML = function () { return WebVTT.convertCueToDOMTree(window, this.text) }; var Ni = Mi, Bi = { "": !0, up: !0 }; function ji(e) {
                                                        return "number" ==
                                                            typeof e && 0 <= e && e <= 100
                                                    } function Fi() {
                                                        var t = 100, i = 3, n = 0, r = 100, s = 0, a = 100, o = ""; Object.defineProperties(this, {
                                                            width: { enumerable: !0, get: function () { return t }, set: function (e) { if (!ji(e)) throw new Error("Width must be between 0 and 100."); t = e } }, lines: { enumerable: !0, get: function () { return i }, set: function (e) { if ("number" != typeof e) throw new TypeError("Lines must be set to a number."); i = e } }, regionAnchorY: {
                                                                enumerable: !0, get: function () { return r }, set: function (e) {
                                                                    if (!ji(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                                                                    r = e
                                                                }
                                                            }, regionAnchorX: { enumerable: !0, get: function () { return n }, set: function (e) { if (!ji(e)) throw new Error("RegionAnchorY must be between 0 and 100."); n = e } }, viewportAnchorY: { enumerable: !0, get: function () { return a }, set: function (e) { if (!ji(e)) throw new Error("ViewportAnchorY must be between 0 and 100."); a = e } }, viewportAnchorX: { enumerable: !0, get: function () { return s }, set: function (e) { if (!ji(e)) throw new Error("ViewportAnchorX must be between 0 and 100."); s = e } }, scroll: {
                                                                enumerable: !0, get: function () { return o }, set: function (e) {
                                                                    var t =
                                                                        function (e) { return "string" == typeof e && (!!Bi[e.toLowerCase()] && e.toLowerCase()) }(e); !1 === t || (o = t)
                                                                }
                                                            }
                                                        })
                                                    } var Hi = t(function (e) { var t = e.exports = { WebVTT: Oi, VTTCue: Ni, VTTRegion: Fi }; y.vttjs = t, y.WebVTT = t.WebVTT; var i = t.VTTCue, n = t.VTTRegion, r = y.VTTCue, s = y.VTTRegion; t.shim = function () { y.VTTCue = i, y.VTTRegion = n }, t.restore = function () { y.VTTCue = r, y.VTTRegion = s }, y.VTTCue || t.shim() }); Hi.WebVTT, Hi.VTTCue, Hi.VTTRegion; var Vi = function (t) {
                                                        function i(i, e) {
                                                            var n; return void 0 === i && (i = {}), void 0 === e && (e = function () { }), i.reportTouchActivity =
                                                                !1, (n = t.call(this, null, i, e) || this).hasStarted_ = !1, n.on("playing", function () { this.hasStarted_ = !0 }), n.on("loadstart", function () { this.hasStarted_ = !1 }), hi.names.forEach(function (e) { var t = hi[e]; i && i[t.getterName] && (n[t.privateName] = i[t.getterName]) }), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (e) { !1 === i["native" + e + "Tracks"] && (n["featuresNative" + e + "Tracks"] = !1) }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ?
                                                                    n.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (n.featuresNativeTextTracks = !0), n.featuresNativeTextTracks || n.emulateTextTracks(), n.preloadTextTracks = !1 !== i.preloadTextTracks, n.autoRemoteTextTracks_ = new hi.text.ListClass, n.initTrackListeners(), i.nativeControlsForTouch || n.emitTapEvents(), n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n
                                                        } He(i, t); var e = i.prototype; return e.triggerSourceset = function (e) {
                                                            var t = this; this.isReady_ || this.one("ready", function () {
                                                                return t.setTimeout(function () { return t.triggerSourceset(e) },
                                                                    1)
                                                            }), this.trigger({ src: e, type: "sourceset" })
                                                        }, e.manualProgressOn = function () { this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress) }, e.manualProgressOff = function () { this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange) }, e.trackProgress = function (e) {
                                                            this.stopTrackingProgress(), this.progressInterval = this.setInterval(ge(this, function () {
                                                                var e = this.bufferedPercent(); this.bufferedPercent_ !== e && this.trigger("progress"),
                                                                    1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
                                                            }), 500)
                                                        }, e.onDurationChange = function (e) { this.duration_ = this.duration() }, e.buffered = function () { return ht(0, 0) }, e.bufferedPercent = function () { return dt(this.buffered(), this.duration_) }, e.stopTrackingProgress = function () { this.clearInterval(this.progressInterval) }, e.manualTimeUpdatesOn = function () { this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime) }, e.manualTimeUpdatesOff = function () {
                                                            this.manualTimeUpdates =
                                                            !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                                                        }, e.trackCurrentTime = function () { this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () { this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, 250) }, e.stopTrackingCurrentTime = function () { this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, e.dispose = function () {
                                                            this.clearTracks(li.names),
                                                            this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                                                        }, e.clearTracks = function (e) { var r = this; (e = [].concat(e)).forEach(function (e) { for (var t = r[e + "Tracks"]() || [], i = t.length; i--;) { var n = t[i]; "text" === e && r.removeRemoteTextTrack(n), t.removeTrack(n) } }) }, e.cleanupAutoTextTracks = function () { for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) { var i = e[t]; this.removeRemoteTextTrack(i) } }, e.reset = function () { }, e.error = function (e) {
                                                            return void 0 !==
                                                                e && (this.error_ = new _t(e), this.trigger("error")), this.error_
                                                        }, e.played = function () { return this.hasStarted_ ? ht(0, 0) : ht() }, e.setCurrentTime = function () { this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }) }, e.initTrackListeners = function () {
                                                            var r = this; li.names.forEach(function (e) {
                                                                function t() { r.trigger(e + "trackchange") } var i = li[e], n = r[i.getterName](); n.addEventListener("removetrack", t), n.addEventListener("addtrack", t), r.on("dispose", function () {
                                                                    n.removeEventListener("removetrack",
                                                                        t), n.removeEventListener("addtrack", t)
                                                                })
                                                            })
                                                        }, e.addWebVttScript_ = function () {
                                                            var e = this; if (!y.WebVTT) if (h.body.contains(this.el())) {
                                                                if (!this.options_["vtt.js"] && u(Hi) && 0 < Object.keys(Hi).length) return void this.trigger("vttjsloaded"); var t = h.createElement("script"); t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = function () { e.trigger("vttjsloaded") }, t.onerror = function () { e.trigger("vttjserror") }, this.on("dispose", function () { t.onload = null, t.onerror = null }), y.WebVTT =
                                                                    !0, this.el().parentNode.appendChild(t)
                                                            } else this.ready(this.addWebVttScript_)
                                                        }, e.emulateTextTracks = function () {
                                                            function t(e) { return n.addTrack(e.track) } function i(e) { return n.removeTrack(e.track) } var e = this, n = this.textTracks(), r = this.remoteTextTracks(); r.on("addtrack", t), r.on("removetrack", i), this.addWebVttScript_(); function s() { return e.trigger("texttrackchange") } function a() {
                                                                s(); for (var e = 0; e < n.length; e++) {
                                                                    var t = n[e]; t.removeEventListener("cuechange", s), "showing" === t.mode && t.addEventListener("cuechange",
                                                                        s)
                                                                }
                                                            } a(), n.addEventListener("change", a), n.addEventListener("addtrack", a), n.addEventListener("removetrack", a), this.on("dispose", function () { r.off("addtrack", t), r.off("removetrack", i), n.removeEventListener("change", a), n.removeEventListener("addtrack", a), n.removeEventListener("removetrack", a); for (var e = 0; e < n.length; e++)n[e].removeEventListener("cuechange", s) })
                                                        }, e.addTextTrack = function (e, t, i) {
                                                            if (!e) throw new Error("TextTrack kind is required but was not provided"); return function (e, t, i, n, r) {
                                                                void 0 === r &&
                                                                (r = {}); var s = e.textTracks(); r.kind = t, i && (r.label = i), n && (r.language = n), r.tech = e; var a = new hi.text.TrackClass(r); return s.addTrack(a), a
                                                            }(this, e, t, i)
                                                        }, e.createRemoteTextTrack = function (e) { var t = Re(e, { tech: this }); return new ci.remoteTextEl.TrackClass(t) }, e.addRemoteTextTrack = function (e, t) {
                                                            var i = this; void 0 === e && (e = {}); var n = this.createRemoteTextTrack(e); return !0 !== t && !1 !== t && (p.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
                                                                t = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), !0 !== t && this.ready(function () { return i.autoRemoteTextTracks_.addTrack(n.track) }), n
                                                        }, e.removeRemoteTextTrack = function (e) { var t = this.remoteTextTrackEls().getTrackElementByTrack_(e); this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e) }, e.getVideoPlaybackQuality = function () { return {} }, e.requestPictureInPicture = function () {
                                                            var e = this.options_.Promise ||
                                                                y.Promise; if (e) return e.reject()
                                                        }, e.setPoster = function () { }, e.playsinline = function () { }, e.setPlaysinline = function () { }, e.overrideNativeAudioTracks = function () { }, e.overrideNativeVideoTracks = function () { }, e.canPlayType = function () { return "" }, i.canPlayType = function () { return "" }, i.canPlaySource = function (e, t) { return i.canPlayType(e.type) }, i.isTech = function (e) { return e.prototype instanceof i || e instanceof i || e === i }, i.registerTech = function (e, t) {
                                                            if (i.techs_ || (i.techs_ = {}), !i.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
                                                            if (!i.canPlayType) throw new Error("Techs must have a static canPlayType method on them"); if (!i.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them"); return e = De(e), i.techs_[e] = t, i.techs_[Oe(e)] = t, "Tech" !== e && i.defaultTechOrder_.push(e), t
                                                        }, i.getTech = function (e) {
                                                            if (e) return i.techs_ && i.techs_[e] ? i.techs_[e] : (e = De(e), y && y.videojs && y.videojs[e] ? (p.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
                                                                y.videojs[e]) : void 0)
                                                        }, i
                                                    }(Ue); hi.names.forEach(function (e) { var t = hi[e]; Vi.prototype[t.getterName] = function () { return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName] } }), Vi.prototype.featuresVolumeControl = !0, Vi.prototype.featuresMuteControl = !0, Vi.prototype.featuresFullscreenResize = !1, Vi.prototype.featuresPlaybackRate = !1, Vi.prototype.featuresProgressEvents = !1, Vi.prototype.featuresSourceset = !1, Vi.prototype.featuresTimeupdateEvents = !1, Vi.prototype.featuresNativeTextTracks = !1,
                                                        Vi.withSourceHandlers = function (r) {
                                                            r.registerSourceHandler = function (e, t) { var i = r.sourceHandlers; i = i || (r.sourceHandlers = []), void 0 === t && (t = i.length), i.splice(t, 0, e) }, r.canPlayType = function (e) { for (var t, i = r.sourceHandlers || [], n = 0; n < i.length; n++)if (t = i[n].canPlayType(e)) return t; return "" }, r.selectSourceHandler = function (e, t) { for (var i = r.sourceHandlers || [], n = 0; n < i.length; n++)if (i[n].canHandleSource(e, t)) return i[n]; return null }, r.canPlaySource = function (e, t) {
                                                                var i = r.selectSourceHandler(e, t); return i ? i.canHandleSource(e,
                                                                    t) : ""
                                                            };["seekable", "seeking", "duration"].forEach(function (e) { var t = this[e]; "function" == typeof t && (this[e] = function () { return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments) }) }, r.prototype), r.prototype.setSource = function (e) {
                                                                var t = r.selectSourceHandler(e, this.options_); t || (r.nativeSourceHandler ? t = r.nativeSourceHandler : p.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose",
                                                                    this.disposeSourceHandler), t !== r.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = t.handleSource(e, this, this.options_), this.one("dispose", this.disposeSourceHandler)
                                                            }, r.prototype.disposeSourceHandler = function () { this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null) }
                                                        }, Ue.registerComponent("Tech", Vi), Vi.registerTech("Tech",
                                                            Vi), Vi.defaultTechOrder_ = []; var qi = {}, Wi = {}, zi = {}; function Gi(e, t, i) {
                                                                e.setTimeout(function () {
                                                                    return function i(n, e, r, s, a, o) {
                                                                        void 0 === n && (n = {}); void 0 === e && (e = []); void 0 === a && (a = []); void 0 === o && (o = !1); var t = e, u = t[0], l = t.slice(1); if ("string" == typeof u) i(n, qi[u], r, s, a, o); else if (u) { var c = Ji(s, u); if (!c.setSource) return a.push(c), i(n, l, r, s, a, o); c.setSource(m({}, n), function (e, t) { if (e) return i(n, l, r, s, a, o); a.push(c), i(t, n.type === t.type ? l : qi[t.type], r, s, a, o) }) } else l.length ? i(n, l, r, s, a, o) : o ? r(n, a) : i(n, qi["*"],
                                                                            r, s, a, !0)
                                                                    }(t, qi[t.type], i, e)
                                                                }, 1)
                                                            } function Ki(e, t, i, n) { void 0 === n && (n = null); var r = "call" + De(i), s = e.reduce(Qi(r), n), a = s === zi, o = a ? null : t[i](s); return function (e, t, i, n) { for (var r = e.length - 1; 0 <= r; r--) { var s = e[r]; s[t] && s[t](n, i) } }(e, i, o, a), o } var Xi = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1 }, Yi = { setCurrentTime: 1, setMuted: 1, setVolume: 1 }, $i = { play: 1, pause: 1 }; function Qi(i) { return function (e, t) { return e === zi ? zi : t[i] ? t[i](e) : e } } function Ji(e, t) {
                                                                var i = Wi[e.id()], n = null;
                                                                if (null == i) return n = t(e), Wi[e.id()] = [[t, n]], n; for (var r = 0; r < i.length; r++) { var s = i[r], a = s[0], o = s[1]; a === t && (n = o) } return null === n && (n = t(e), i.push([t, n])), n
                                                            } function Zi(e) { void 0 === e && (e = ""); var t = Mt(e); return en[t.toLowerCase()] || "" } var en = {
                                                                opus: "video/ogg", ogv: "video/ogg", mp4: "video/mp4", mov: "video/mp4", m4v: "video/mp4", mkv: "video/x-matroska", m4a: "audio/mp4", mp3: "audio/mpeg", aac: "audio/aac", oga: "audio/ogg", m3u8: "application/x-mpegURL", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", png: "image/png",
                                                                svg: "image/svg+xml", webp: "image/webp"
                                                            }; function tn(e) { if (!e.type) { var t = Zi(e.src); t && (e.type = t) } return e } var nn = function (l) { function e(e, t, i) { var n, r = Re({ createEl: !1 }, t); if (n = l.call(this, e, r, i) || this, t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources); else for (var s = 0, a = t.playerOptions.techOrder; s < a.length; s++) { var o = De(a[s]), u = Vi.getTech(o); if (o || (u = Ue.getComponent(o)), u && u.isSupported()) { e.loadTech_(o); break } } return n } return He(e, l), e }(Ue); Ue.registerComponent("MediaLoader",
                                                                nn); var rn = function (r) {
                                                                    function e(e, t) { var i; return (i = r.call(this, e, t) || this).emitTapEvents(), i.enable(), i } He(e, r); var t = e.prototype; return t.createEl = function (e, t, i) {
                                                                        void 0 === e && (e = "div"), void 0 === t && (t = {}), void 0 === i && (i = {}), t = m({ innerHTML: '\x3cspan aria-hidden\x3d"true" class\x3d"vjs-icon-placeholder"\x3e\x3c/span\x3e', className: this.buildCSSClass(), tabIndex: 0 }, t), "button" === e && p.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = m({ role: "button" },
                                                                            i), this.tabIndex_ = t.tabIndex; var n = r.prototype.createEl.call(this, e, t, i); return this.createControlTextEl(n), n
                                                                    }, t.dispose = function () { this.controlTextEl_ = null, r.prototype.dispose.call(this) }, t.createControlTextEl = function (e) { return this.controlTextEl_ = S("span", { className: "vjs-control-text" }, { "aria-live": "polite" }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_ }, t.controlText = function (e, t) {
                                                                        if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ ||
                                                                            "Need Text"; var i = this.localize(e); this.controlText_ = e, k(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
                                                                    }, t.buildCSSClass = function () { return "vjs-control vjs-button " + r.prototype.buildCSSClass.call(this) }, t.enable = function () {
                                                                        this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("keydown",
                                                                            this.handleKeyDown))
                                                                    }, t.disable = function () { this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver), this.off("mouseout", this.handleMouseOut), this.off(["tap", "click"], this.handleClick), this.off("keydown", this.handleKeyDown) }, t.handleClick = function (e) { this.options_.clickHandler && this.options_.clickHandler.call(this, arguments) }, t.handleKeyDown = function (e) {
                                                                        Lt.isEventKey(e,
                                                                            "Space") || Lt.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : r.prototype.handleKeyDown.call(this, e)
                                                                    }, e
                                                                }(Ue); Ue.registerComponent("ClickableComponent", rn); var sn = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).update(), e.on("posterchange", ge(Me(i), i.update)), i } He(e, n); var t = e.prototype; return t.dispose = function () { this.player().off("posterchange", this.update), n.prototype.dispose.call(this) }, t.createEl = function () {
                                                                        return S("div", {
                                                                            className: "vjs-poster",
                                                                            tabIndex: -1
                                                                        })
                                                                    }, t.update = function (e) { var t = this.player().poster(); this.setSrc(t), t ? this.show() : this.hide() }, t.setSrc = function (e) { var t = ""; e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t }, t.handleClick = function (e) { this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? kt(this.player_.play()) : this.player_.pause()) }, e
                                                                }(rn); Ue.registerComponent("PosterImage", sn); var an = "#222", on = {
                                                                    monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                                                                    monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                                                                }; function un(e, t) {
                                                                    var i; if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else { if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2."); i = e.slice(1) } return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2,
                                                                        4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
                                                                } function ln(e, t, i) { try { e.style[t] = i } catch (e) { return } } var cn = function (s) {
                                                                    function e(i, e, t) {
                                                                        var n; n = s.call(this, i, e, t) || this; var r = ge(Me(n), n.updateDisplay); return i.on("loadstart", ge(Me(n), n.toggleDisplay)), i.on("texttrackchange", r), i.on("loadedmetadata", ge(Me(n), n.preselectTrack)), i.ready(ge(Me(n), function () {
                                                                            if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide(); else {
                                                                                i.on("fullscreenchange", r), i.on("playerresize", r), y.addEventListener("orientationchange",
                                                                                    r), i.on("dispose", function () { return y.removeEventListener("orientationchange", r) }); for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++)this.player_.addRemoteTextTrack(e[t], !0); this.preselectTrack()
                                                                            }
                                                                        })), n
                                                                    } He(e, s); var t = e.prototype; return t.preselectTrack = function () {
                                                                        for (var e, t, i, n = { captions: 1, subtitles: 1 }, r = this.player_.textTracks(), s = this.player_.cache_.selectedLanguage, a = 0; a < r.length; a++) {
                                                                            var o = r[a]; s && s.enabled && s.language && s.language === o.language && o.kind in n ? i = o.kind === s.kind ?
                                                                                o : i || o : s && !s.enabled ? t = e = i = null : o.default && ("descriptions" !== o.kind || e ? o.kind in n && !t && (t = o) : e = o)
                                                                        } i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
                                                                    }, t.toggleDisplay = function () { this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show() }, t.createEl = function () { return s.prototype.createEl.call(this, "div", { className: "vjs-text-track-display" }, { "aria-live": "off", "aria-atomic": "true" }) }, t.clearDisplay = function () {
                                                                        "function" == typeof y.WebVTT && y.WebVTT.processCues(y, [],
                                                                            this.el_)
                                                                    }, t.updateDisplay = function () {
                                                                        var e = this.player_.textTracks(), t = this.options_.allowMultipleShowingTracks; if (this.clearDisplay(), t) { for (var i = [], n = 0; n < e.length; ++n) { var r = e[n]; "showing" === r.mode && i.push(r) } this.updateForTrack(i) } else {
                                                                            for (var s = null, a = null, o = e.length; o--;) { var u = e[o]; "showing" === u.mode && ("descriptions" === u.kind ? s = u : a = u) } a ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(a)) : s && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live",
                                                                                "assertive"), this.updateForTrack(s))
                                                                        }
                                                                    }, t.updateDisplayState = function (e) {
                                                                        for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--;) {
                                                                            var r = i[n]; if (r) {
                                                                                var s = r.displayState; if (t.color && (s.firstChild.style.color = t.color), t.textOpacity && ln(s.firstChild, "color", un(t.color || "#fff", t.textOpacity)), t.backgroundColor && (s.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && ln(s.firstChild, "backgroundColor", un(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor &&
                                                                                    (t.windowOpacity ? ln(s, "backgroundColor", un(t.windowColor, t.windowOpacity)) : s.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + an : "raised" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + an : "depressed" === t.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + an : "uniform" === t.edgeStyle && (s.firstChild.style.textShadow =
                                                                                        "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + an)), t.fontPercent && 1 !== t.fontPercent) { var a = y.parseFloat(s.style.fontSize); s.style.fontSize = a * t.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px" } t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = on[t.fontFamily])
                                                                            }
                                                                        }
                                                                    }, t.updateForTrack = function (e) {
                                                                        if (Array.isArray(e) || (e = [e]), "function" == typeof y.WebVTT && !e.every(function (e) { return !e.activeCues })) {
                                                                            for (var t =
                                                                                [], i = 0; i < e.length; ++i)for (var n = e[i], r = 0; r < n.activeCues.length; ++r)t.push(n.activeCues[r]); y.WebVTT.processCues(y, t, this.el_); for (var s = 0; s < e.length; ++s) { for (var a = e[s], o = 0; o < a.activeCues.length; ++o) { var u = a.activeCues[o].displayState; w(u, "vjs-text-track-cue"), w(u, "vjs-text-track-cue-" + (a.language ? a.language : s)) } this.player_.textTrackSettings && this.updateDisplayState(a) }
                                                                        }
                                                                    }, e
                                                                }(Ue); Ue.registerComponent("TextTrackDisplay", cn); var hn = function (r) {
                                                                    function e() { return r.apply(this, arguments) || this } return He(e,
                                                                        r), e.prototype.createEl = function () { var e = this.player_.isAudio(), t = this.localize(e ? "Audio Player" : "Video Player"), i = S("span", { className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [t]) }), n = r.prototype.createEl.call(this, "div", { className: "vjs-loading-spinner", dir: "ltr" }); return n.appendChild(i), n }, e
                                                                }(Ue); Ue.registerComponent("LoadingSpinner", hn); var dn = function (t) {
                                                                    function e() { return t.apply(this, arguments) || this } He(e, t); var i = e.prototype; return i.createEl = function (e, t, i) {
                                                                        void 0 ===
                                                                        t && (t = {}), void 0 === i && (i = {}), t = m({ innerHTML: '\x3cspan aria-hidden\x3d"true" class\x3d"vjs-icon-placeholder"\x3e\x3c/span\x3e', className: this.buildCSSClass() }, t), i = m({ type: "button" }, i); var n = Ue.prototype.createEl.call(this, "button", t, i); return this.createControlTextEl(n), n
                                                                    }, i.addChild = function (e, t) {
                                                                        void 0 === t && (t = {}); var i = this.constructor.name; return p.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Ue.prototype.addChild.call(this,
                                                                            e, t)
                                                                    }, i.enable = function () { t.prototype.enable.call(this), this.el_.removeAttribute("disabled") }, i.disable = function () { t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled") }, i.handleKeyDown = function (e) { Lt.isEventKey(e, "Space") || Lt.isEventKey(e, "Enter") ? e.stopPropagation() : t.prototype.handleKeyDown.call(this, e) }, e
                                                                }(rn); Ue.registerComponent("Button", dn); var pn = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i } He(e,
                                                                        n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-big-play-button" }, t.handleClick = function (e) {
                                                                            var t = this.player_.play(); if (this.mouseused_ && e.clientX && e.clientY) { var i = this.player_.usingPlugin("eme") && this.player_.eme.sessions && 0 < this.player_.eme.sessions.length; return kt(t), void (!this.player_.tech(!0) || (et || Qe) && i || this.player_.tech(!0).focus()) } var n = this.player_.getChild("controlBar"), r = n && n.getChild("playToggle"); if (r) {
                                                                                var s = function () { return r.focus() }; St(t) ? t.then(s, function () { }) :
                                                                                    this.setTimeout(s, 1)
                                                                            } else this.player_.tech(!0).focus()
                                                                        }, t.handleKeyDown = function (e) { this.mouseused_ = !1, n.prototype.handleKeyDown.call(this, e) }, t.handleMouseDown = function (e) { this.mouseused_ = !0 }, e
                                                                }(dn); pn.prototype.controlText_ = "Play Video", Ue.registerComponent("BigPlayButton", pn); var fn = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).controlText(t && t.controlText || i.localize("Close")), i } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-close-button " + n.prototype.buildCSSClass.call(this) },
                                                                        t.handleClick = function (e) { this.trigger({ type: "close", bubbles: !1 }) }, t.handleKeyDown = function (e) { Lt.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : n.prototype.handleKeyDown.call(this, e) }, e
                                                                }(dn); Ue.registerComponent("CloseButton", fn); var mn = function (n) {
                                                                    function e(e, t) { var i; return void 0 === t && (t = {}), i = n.call(this, e, t) || this, t.replay = void 0 === t.replay || t.replay, i.on(e, "play", i.handlePlay), i.on(e, "pause", i.handlePause), t.replay && i.on(e, "ended", i.handleEnded), i } He(e,
                                                                        n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-play-control " + n.prototype.buildCSSClass.call(this) }, t.handleClick = function (e) { this.player_.paused() ? this.player_.play() : this.player_.pause() }, t.handleSeeked = function (e) { this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e) }, t.handlePlay = function (e) { this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause") }, t.handlePause = function (e) {
                                                                            this.removeClass("vjs-playing"),
                                                                            this.addClass("vjs-paused"), this.controlText("Play")
                                                                        }, t.handleEnded = function (e) { this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked) }, e
                                                                }(dn); mn.prototype.controlText_ = "Play", Ue.registerComponent("PlayToggle", mn); function gn(e, t) {
                                                                    e = e < 0 ? 0 : e; var i = Math.floor(e % 60), n = Math.floor(e / 60 % 60), r = Math.floor(e / 3600), s = Math.floor(t / 60 % 60), a = Math.floor(t / 3600); return !isNaN(e) && e !== 1 / 0 || (r = n = i = "-"), (r = 0 < r || 0 < a ? r + ":" : "") + (n = ((r || 10 <=
                                                                        s) && n < 10 ? "0" + n : n) + ":") + (i = i < 10 ? "0" + i : i)
                                                                } var vn = gn; function yn(e, t) { return void 0 === t && (t = e), vn(e, t) } var _n = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).on(e, ["timeupdate", "ended"], i.updateContent), i.updateTextNode_(), i } He(e, n); var t = e.prototype; return t.createEl = function () {
                                                                        var e = this.buildCSSClass(), t = n.prototype.createEl.call(this, "div", {
                                                                            className: e + " vjs-time-control vjs-control", innerHTML: '\x3cspan class\x3d"vjs-control-text" role\x3d"presentation"\x3e' + this.localize(this.labelText_) +
                                                                                "\u00a0\x3c/span\x3e"
                                                                        }); return this.contentEl_ = S("span", { className: e + "-display" }, { "aria-live": "off", role: "presentation" }), t.appendChild(this.contentEl_), t
                                                                    }, t.dispose = function () { this.contentEl_ = null, this.textNode_ = null, n.prototype.dispose.call(this) }, t.updateTextNode_ = function (e) {
                                                                        var t = this; void 0 === e && (e = 0), e = yn(e), this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestAnimationFrame(function () {
                                                                            if (t.contentEl_) {
                                                                                var e = t.textNode_; t.textNode_ = h.createTextNode(t.formattedTime_), t.textNode_ && (e ?
                                                                                    t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_))
                                                                            }
                                                                        }))
                                                                    }, t.updateContent = function (e) { }, e
                                                                }(Ue); _n.prototype.labelText_ = "Time", _n.prototype.controlText_ = "Time", Ue.registerComponent("TimeDisplay", _n); var bn = function (e) {
                                                                    function t() { return e.apply(this, arguments) || this } He(t, e); var i = t.prototype; return i.buildCSSClass = function () { return "vjs-current-time" }, i.updateContent = function (e) {
                                                                        var t; t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime :
                                                                            this.player_.currentTime(), this.updateTextNode_(t)
                                                                    }, t
                                                                }(_n); bn.prototype.labelText_ = "Current Time", bn.prototype.controlText_ = "Current Time", Ue.registerComponent("CurrentTimeDisplay", bn); var Tn = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent), i.on(e, "loadstart", i.updateContent), i.on(e, "loadedmetadata", i.updateContent), i } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-duration" }, t.updateContent = function (e) {
                                                                        var t = this.player_.duration();
                                                                        this.updateTextNode_(t)
                                                                    }, e
                                                                }(_n); Tn.prototype.labelText_ = "Duration", Tn.prototype.controlText_ = "Duration", Ue.registerComponent("DurationDisplay", Tn); var Sn = function (e) { function t() { return e.apply(this, arguments) || this } return He(t, e), t.prototype.createEl = function () { return e.prototype.createEl.call(this, "div", { className: "vjs-time-control vjs-time-divider", innerHTML: "\x3cdiv\x3e\x3cspan\x3e/\x3c/span\x3e\x3c/div\x3e" }, { "aria-hidden": !0 }) }, t }(Ue); Ue.registerComponent("TimeDivider", Sn); var kn = function (n) {
                                                                    function e(e,
                                                                        t) { var i; return (i = n.call(this, e, t) || this).on(e, "durationchange", i.updateContent), i } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-remaining-time" }, t.createEl = function () { var e = n.prototype.createEl.call(this); return e.insertBefore(S("span", {}, { "aria-hidden": !0 }, "-"), this.contentEl_), e }, t.updateContent = function (e) {
                                                                            var t; "number" == typeof this.player_.duration() && (t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(),
                                                                                this.updateTextNode_(t))
                                                                        }, e
                                                                }(_n); kn.prototype.labelText_ = "Remaining Time", kn.prototype.controlText_ = "Remaining Time", Ue.registerComponent("RemainingTimeDisplay", kn); var Cn = function (n) {
                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i } He(e, n); var t = e.prototype; return t.createEl = function () {
                                                                        var e = n.prototype.createEl.call(this, "div", { className: "vjs-live-control vjs-control" }); return this.contentEl_ = S("div", {
                                                                            className: "vjs-live-display",
                                                                            innerHTML: '\x3cspan class\x3d"vjs-control-text"\x3e' + this.localize("Stream Type") + "\u00a0\x3c/span\x3e" + this.localize("LIVE")
                                                                        }, { "aria-live": "off" }), e.appendChild(this.contentEl_), e
                                                                    }, t.dispose = function () { this.contentEl_ = null, n.prototype.dispose.call(this) }, t.updateShowing = function (e) { this.player().duration() === 1 / 0 ? this.show() : this.hide() }, e
                                                                }(Ue); Ue.registerComponent("LiveDisplay", Cn); var En = function (n) {
                                                                    function e(e, t) {
                                                                        var i; return (i = n.call(this, e, t) || this).updateLiveEdgeStatus(), i.player_.liveTracker &&
                                                                            i.on(i.player_.liveTracker, "liveedgechange", i.updateLiveEdgeStatus), i
                                                                    } He(e, n); var t = e.prototype; return t.createEl = function () { var e = n.prototype.createEl.call(this, "button", { className: "vjs-seek-to-live-control vjs-control" }); return this.textEl_ = S("span", { className: "vjs-seek-to-live-text", innerHTML: this.localize("LIVE") }, { "aria-hidden": "true" }), e.appendChild(this.textEl_), e }, t.updateLiveEdgeStatus = function (e) {
                                                                        !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled",
                                                                            !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
                                                                    }, t.handleClick = function () { this.player_.liveTracker.seekToLiveEdge() }, t.dispose = function () { this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), this.textEl_ = null, n.prototype.dispose.call(this) }, e
                                                                }(dn); En.prototype.controlText_ =
                                                                    "Seek to live, currently playing live", Ue.registerComponent("SeekToLive", En); function wn(e, t, i) { return e = Number(e), Math.min(i, Math.max(t, isNaN(e) ? t : e)) } var Ln = function (n) {
                                                                        function e(e, t) { var i; return (i = n.call(this, e, t) || this).bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i } He(e, n); var t = e.prototype; return t.enabled = function () { return this.enabled_ }, t.enable = function () {
                                                                            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown),
                                                                                this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                                                                        }, t.disable = function () {
                                                                            if (this.enabled()) {
                                                                                var e = this.bar.el_.ownerDocument; this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("keydown", this.handleKeyDown), this.off("click", this.handleClick),
                                                                                    this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                                                                            }
                                                                        }, t.createEl = function (e, t, i) {
                                                                            return void 0 === t && (t = {}), void 0 === i && (i = {}), t.className = t.className + " vjs-slider", t = m({ tabIndex: 0 },
                                                                                t), i = m({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, i), n.prototype.createEl.call(this, e, t, i)
                                                                        }, t.handleMouseDown = function (e) {
                                                                            var t = this.bar.el_.ownerDocument; "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || Je || e.preventDefault(), R(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp),
                                                                                this.handleMouseMove(e)
                                                                        }, t.handleMouseMove = function (e) { }, t.handleMouseUp = function () { var e = this.bar.el_.ownerDocument; U(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update() }, t.update = function () {
                                                                            var t = this; if (this.el_ && this.bar) {
                                                                                var i = this.getProgress(); return i === this.progress_ || (this.progress_ = i, this.requestAnimationFrame(function () {
                                                                                    var e =
                                                                                        t.vertical() ? "height" : "width"; t.bar.el().style[e] = (100 * i).toFixed(2) + "%"
                                                                                })), i
                                                                            }
                                                                        }, t.getProgress = function () { return Number(wn(this.getPercent(), 0, 1).toFixed(4)) }, t.calculateDistance = function (e) { var t = B(this.el_, e); return this.vertical() ? t.y : t.x }, t.handleKeyDown = function (e) {
                                                                            Lt.isEventKey(e, "Left") || Lt.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : Lt.isEventKey(e, "Right") || Lt.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : n.prototype.handleKeyDown.call(this,
                                                                                e)
                                                                        }, t.handleClick = function (e) { e.stopPropagation(), e.preventDefault() }, t.vertical = function (e) { if (void 0 === e) return this.vertical_ || !1; this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal") }, e
                                                                    }(Ue); Ue.registerComponent("Slider", Ln); function Pn(e, t) { return wn(e / t * 100, 0, 100).toFixed(2) + "%" } var An = function (r) {
                                                                        function e(e, t) { var i; return (i = r.call(this, e, t) || this).partEls_ = [], i.on(e, "progress", i.update), i } He(e, r); var t = e.prototype; return t.createEl =
                                                                            function () { var e = r.prototype.createEl.call(this, "div", { className: "vjs-load-progress" }), t = S("span", { className: "vjs-control-text" }), i = S("span", { textContent: this.localize("Loaded") }), n = h.createTextNode(": "); return this.percentageEl_ = S("span", { className: "vjs-control-text-loaded-percentage", textContent: "0%" }), e.appendChild(t), t.appendChild(i), t.appendChild(n), t.appendChild(this.percentageEl_), e }, t.dispose = function () { this.partEls_ = null, this.percentageEl_ = null, r.prototype.dispose.call(this) }, t.update = function (e) {
                                                                                var h =
                                                                                    this; this.requestAnimationFrame(function () {
                                                                                        var e = h.player_.liveTracker, t = h.player_.buffered(), i = e && e.isLive() ? e.seekableEnd() : h.player_.duration(), n = h.player_.bufferedEnd(), r = h.partEls_, s = Pn(n, i); h.percent_ !== s && (h.el_.style.width = s, k(h.percentageEl_, s), h.percent_ = s); for (var a = 0; a < t.length; a++) { var o = t.start(a), u = t.end(a), l = r[a]; l || (l = h.el_.appendChild(S()), r[a] = l), l.dataset.start === o && l.dataset.end === u || (l.dataset.start = o, l.dataset.end = u, l.style.left = Pn(o, n), l.style.width = Pn(u - o, n)) } for (var c = r.length; c >
                                                                                            t.length; c--)h.el_.removeChild(r[c - 1]); r.length = t.length
                                                                                    })
                                                                            }, e
                                                                    }(Ue); Ue.registerComponent("LoadProgressBar", An); var In = function (n) {
                                                                        function e(e, t) { var i; return (i = n.call(this, e, t) || this).update = ve(ge(Me(i), i.update), 30), i } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: "vjs-time-tooltip" }, { "aria-hidden": "true" }) }, t.update = function (e, t, i) {
                                                                            var n = M(this.el_), r = M(this.player_.el()), s = e.width * t; if (r && n) {
                                                                                var a = e.left - r.left + s, o = e.width - s + (r.right -
                                                                                    e.right), u = n.width / 2; a < u ? u += u - a : o < u && (u = o), u < 0 ? u = 0 : u > n.width && (u = n.width), this.el_.style.right = "-" + u + "px", this.write(i)
                                                                            }
                                                                        }, t.write = function (e) { k(this.el_, e) }, t.updateTime = function (r, s, a, o) { var u = this; this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () { var e, t = u.player_.duration(); if (u.player_.liveTracker && u.player_.liveTracker.isLive()) { var i = u.player_.liveTracker.liveWindow(), n = i - s * i; e = (n < 1 ? "" : "-") + yn(n, i) } else e = yn(a, t); u.update(r, s, e), o && o() }) },
                                                                            e
                                                                    }(Ue); Ue.registerComponent("TimeTooltip", In); var xn = function (n) {
                                                                        function e(e, t) { var i; return (i = n.call(this, e, t) || this).update = ve(ge(Me(i), i.update), 30), i } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: "vjs-play-progress vjs-slider-bar" }, { "aria-hidden": "true" }) }, t.update = function (e, t) {
                                                                            var i = this.getChild("timeTooltip"); if (i) {
                                                                                var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(); i.updateTime(e, t,
                                                                                    n)
                                                                            }
                                                                        }, e
                                                                    }(Ue); xn.prototype.options_ = { children: [] }, at || Ke || xn.prototype.options_.children.push("timeTooltip"), Ue.registerComponent("PlayProgressBar", xn); var On = function (n) {
                                                                        function e(e, t) { var i; return (i = n.call(this, e, t) || this).update = ve(ge(Me(i), i.update), 30), i } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" }) }, t.update = function (e, t) {
                                                                            var i = this, n = t * this.player_.duration(); this.getChild("timeTooltip").updateTime(e, t, n, function () {
                                                                                i.el_.style.left =
                                                                                e.width * t + "px"
                                                                            })
                                                                        }, e
                                                                    }(Ue); On.prototype.options_ = { children: ["timeTooltip"] }, Ue.registerComponent("MouseTimeDisplay", On); var Dn = function (s) {
                                                                        function e(e, t) { var i; return (i = s.call(this, e, t) || this).setEventHandlers_(), i } He(e, s); var t = e.prototype; return t.setEventHandlers_ = function () {
                                                                            this.update_ = ge(this, this.update), this.update = ve(this.update_, 30), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
                                                                            this.updateInterval = null, this.on(this.player_, ["playing"], this.enableInterval_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_), "hidden" in h && "visibilityState" in h && this.on(h, "visibilitychange", this.toggleVisibility_)
                                                                        }, t.toggleVisibility_ = function (e) { h.hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.update()) }, t.enableInterval_ = function () { this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30)) }, t.disableInterval_ = function (e) {
                                                                            this.player_.liveTracker &&
                                                                            this.player_.liveTracker.isLive() && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null)
                                                                        }, t.createEl = function () { return s.prototype.createEl.call(this, "div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") }) }, t.update = function (e) {
                                                                            var n = this, r = s.prototype.update.call(this); return this.requestAnimationFrame(function () {
                                                                                var e = n.player_.ended() ? n.player_.duration() : n.getCurrentTime_(), t = n.player_.liveTracker, i = n.player_.duration();
                                                                                t && t.isLive() && (i = n.player_.liveTracker.liveCurrentTime()), n.percent_ !== r && (n.el_.setAttribute("aria-valuenow", (100 * r).toFixed(2)), n.percent_ = r), n.currentTime_ === e && n.duration_ === i || (n.el_.setAttribute("aria-valuetext", n.localize("progress bar timing: currentTime\x3d{1} duration\x3d{2}", [yn(e, i), yn(i, i)], "{1} of {2}")), n.currentTime_ = e, n.duration_ = i), n.bar && n.bar.update(M(n.el()), n.getProgress())
                                                                            }), r
                                                                        }, t.getCurrentTime_ = function () {
                                                                            return this.player_.scrubbing() ? this.player_.getCache().currentTime :
                                                                                this.player_.currentTime()
                                                                        }, t.getPercent = function () { var e, t = this.getCurrentTime_(), i = this.player_.liveTracker; return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), e }, t.handleMouseDown = function (e) { W(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), s.prototype.handleMouseDown.call(this, e)) }, t.handleMouseMove = function (e) {
                                                                            if (W(e)) {
                                                                                var t, i = this.calculateDistance(e), n = this.player_.liveTracker;
                                                                                if (n && n.isLive()) { var r = n.seekableStart(), s = n.liveCurrentTime(); if (s <= (t = r + i * n.liveWindow()) && (t = s), t <= r && (t = r + 0.1), t === 1 / 0) return } else (t = i * this.player_.duration()) === this.player_.duration() && (t -= 0.1); this.player_.currentTime(t)
                                                                            }
                                                                        }, t.enable = function () { s.prototype.enable.call(this); var e = this.getChild("mouseTimeDisplay"); e && e.show() }, t.disable = function () { s.prototype.disable.call(this); var e = this.getChild("mouseTimeDisplay"); e && e.hide() }, t.handleMouseUp = function (e) {
                                                                            s.prototype.handleMouseUp.call(this,
                                                                                e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: !0 }), this.videoWasPlaying ? kt(this.player_.play()) : this.update_()
                                                                        }, t.stepForward = function () { this.player_.currentTime(this.player_.currentTime() + 5) }, t.stepBack = function () { this.player_.currentTime(this.player_.currentTime() - 5) }, t.handleAction = function (e) { this.player_.paused() ? this.player_.play() : this.player_.pause() }, t.handleKeyDown = function (e) {
                                                                            if (Lt.isEventKey(e, "Space") || Lt.isEventKey(e,
                                                                                "Enter")) e.preventDefault(), e.stopPropagation(), this.handleAction(e); else if (Lt.isEventKey(e, "Home")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(0); else if (Lt.isEventKey(e, "End")) e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.duration()); else if (/^[0-9]$/.test(Lt(e))) { e.preventDefault(), e.stopPropagation(); var t = 10 * (Lt.codes[Lt(e)] - Lt.codes[0]) / 100; this.player_.currentTime(this.player_.duration() * t) } else Lt.isEventKey(e, "PgDn") ? (e.preventDefault(),
                                                                                    e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60)) : Lt.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60)) : s.prototype.handleKeyDown.call(this, e)
                                                                        }, e
                                                                    }(Ln); Dn.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" }, at || Ke || Dn.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Ue.registerComponent("SeekBar", Dn); var Rn = function (n) {
                                                                        function e(e, t) {
                                                                            var i; return (i = n.call(this,
                                                                                e, t) || this).handleMouseMove = ve(ge(Me(i), i.handleMouseMove), 30), i.throttledHandleMouseSeek = ve(ge(Me(i), i.handleMouseSeek), 30), i.enable(), i
                                                                        } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: "vjs-progress-control vjs-control" }) }, t.handleMouseMove = function (e) {
                                                                            var t = this.getChild("seekBar"); if (t) {
                                                                                var i = t.getChild("playProgressBar"), n = t.getChild("mouseTimeDisplay"); if (i || n) {
                                                                                    var r = t.el(), s = M(r), a = B(r, e).x; a = wn(0, 1, a), n && n.update(s, a), i && i.update(s,
                                                                                        t.getProgress())
                                                                                }
                                                                            }
                                                                        }, t.handleMouseSeek = function (e) { var t = this.getChild("seekBar"); t && t.handleMouseMove(e) }, t.enabled = function () { return this.enabled_ }, t.disable = function () { this.children().forEach(function (e) { return e.disable && e.disable() }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1) }, t.enable = function () {
                                                                            this.children().forEach(function (e) {
                                                                                return e.enable &&
                                                                                    e.enable()
                                                                            }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                                                                        }, t.handleMouseDown = function (e) { var t = this.el_.ownerDocument, i = this.getChild("seekBar"); i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp) }, t.handleMouseUp = function (e) {
                                                                            var t =
                                                                                this.el_.ownerDocument, i = this.getChild("seekBar"); i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
                                                                        }, e
                                                                    }(Ue); Rn.prototype.options_ = { children: ["seekBar"] }, Ue.registerComponent("ProgressControl", Rn); var Un = function (n) {
                                                                        function e(e, t) {
                                                                            var i; return (i = n.call(this, e, t) || this).on(e, ["enterpictureinpicture", "leavepictureinpicture"], i.handlePictureInPictureChange),
                                                                                h.pictureInPictureEnabled || i.disable(), i
                                                                        } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-picture-in-picture-control " + n.prototype.buildCSSClass.call(this) }, t.handlePictureInPictureChange = function (e) { this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture") }, t.handleClick = function (e) { this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture() }, e
                                                                    }(dn); Un.prototype.controlText_ =
                                                                        "Picture-in-Picture", Ue.registerComponent("PictureInPictureToggle", Un); var Mn = function (n) {
                                                                            function e(e, t) { var i; return (i = n.call(this, e, t) || this).on(e, "fullscreenchange", i.handleFullscreenChange), !1 === h[e.fsApi_.fullscreenEnabled] && i.disable(), i } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-fullscreen-control " + n.prototype.buildCSSClass.call(this) }, t.handleFullscreenChange = function (e) { this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen") },
                                                                                t.handleClick = function (e) { this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen() }, e
                                                                        }(dn); Mn.prototype.controlText_ = "Fullscreen", Ue.registerComponent("FullscreenToggle", Mn); var Nn = function (e) { function t() { return e.apply(this, arguments) || this } return He(t, e), t.prototype.createEl = function () { return e.prototype.createEl.call(this, "div", { className: "vjs-volume-level", innerHTML: '\x3cspan class\x3d"vjs-control-text"\x3e\x3c/span\x3e' }) }, t }(Ue); Ue.registerComponent("VolumeLevel",
                                                                            Nn); var Bn = function (n) {
                                                                                function e(e, t) { var i; return (i = n.call(this, e, t) || this).on("slideractive", i.updateLastVolume_), i.on(e, "volumechange", i.updateARIAAttributes), e.ready(function () { return i.updateARIAAttributes() }), i } He(e, n); var t = e.prototype; return t.createEl = function () { return n.prototype.createEl.call(this, "div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" }) }, t.handleMouseDown = function (e) {
                                                                                    W(e) && n.prototype.handleMouseDown.call(this,
                                                                                        e)
                                                                                }, t.handleMouseMove = function (e) { W(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e))) }, t.checkMuted = function () { this.player_.muted() && this.player_.muted(!1) }, t.getPercent = function () { return this.player_.muted() ? 0 : this.player_.volume() }, t.stepForward = function () { this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1) }, t.stepBack = function () { this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1) }, t.updateARIAAttributes = function (e) {
                                                                                    var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                                                                                    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                                                                                }, t.volumeAsPercentage_ = function () { return Math.round(100 * this.player_.volume()) }, t.updateLastVolume_ = function () { var e = this, t = this.player_.volume(); this.one("sliderinactive", function () { 0 === e.player_.volume() && e.player_.lastVolume_(t) }) }, e
                                                                            }(Ln); Bn.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" }, Bn.prototype.playerEvent = "volumechange", Ue.registerComponent("VolumeBar", Bn); var jn = function (n) {
                                                                                function e(e,
                                                                                    t) {
                                                                                        var i; return void 0 === t && (t = {}), t.vertical = t.vertical || !1, "undefined" != typeof t.volumeBar && !u(t.volumeBar) || (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical), i = n.call(this, e, t) || this, function (e, t) { t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function () { t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden") }) }(Me(i), e), i.throttledHandleMouseMove = ve(ge(Me(i), i.handleMouseMove), 30), i.on("mousedown", i.handleMouseDown),
                                                                                            i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function () { i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive") }), i.on(i.volumeBar, ["blur", "sliderinactive"], function () { i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive") }), i
                                                                                } He(e, n); var t = e.prototype; return t.createEl = function () {
                                                                                    var e = "vjs-volume-horizontal"; return this.options_.vertical && (e = "vjs-volume-vertical"), n.prototype.createEl.call(this,
                                                                                        "div", { className: "vjs-volume-control vjs-control " + e })
                                                                                }, t.handleMouseDown = function (e) { var t = this.el_.ownerDocument; this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp) }, t.handleMouseUp = function (e) {
                                                                                    var t = this.el_.ownerDocument; this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp),
                                                                                        this.off(t, "touchend", this.handleMouseUp)
                                                                                }, t.handleMouseMove = function (e) { this.volumeBar.handleMouseMove(e) }, e
                                                                            }(Ue); jn.prototype.options_ = { children: ["volumeBar"] }, Ue.registerComponent("VolumeControl", jn); var Fn = function (n) {
                                                                                function e(e, t) {
                                                                                    var i; return i = n.call(this, e, t) || this, function (e, t) { t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function () { t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden") }) }(Me(i), e), i.on(e, ["loadstart", "volumechange"],
                                                                                        i.update), i
                                                                                } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-mute-control " + n.prototype.buildCSSClass.call(this) }, t.handleClick = function (e) { var t = this.player_.volume(), i = this.player_.lastVolume_(); if (0 === t) { var n = i < 0.1 ? 0.1 : i; this.player_.volume(n), this.player_.muted(!1) } else this.player_.muted(!this.player_.muted()) }, t.update = function (e) { this.updateIcon_(), this.updateControlText_() }, t.updateIcon_ = function () {
                                                                                    var e = this.player_.volume(), t = 3; at && this.player_.tech_ && this.player_.tech_.el_ &&
                                                                                        this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < 0.33 ? t = 1 : e < 0.67 && (t = 2); for (var i = 0; i < 4; i++)L(this.el_, "vjs-vol-" + i); w(this.el_, "vjs-vol-" + t)
                                                                                }, t.updateControlText_ = function () { var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute"; this.controlText() !== e && this.controlText(e) }, e
                                                                            }(dn); Fn.prototype.controlText_ = "Mute", Ue.registerComponent("MuteToggle", Fn); var Hn = function (n) {
                                                                                function e(e, t) {
                                                                                    var i; return void 0 === t && (t = {}), "undefined" != typeof t.inline ? t.inline =
                                                                                        t.inline : t.inline = !0, "undefined" != typeof t.volumeControl && !u(t.volumeControl) || (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline), (i = n.call(this, e, t) || this).on(e, ["loadstart"], i.volumePanelState_), i.on(i.muteToggle, "keyup", i.handleKeyPress), i.on(i.volumeControl, "keyup", i.handleVolumeControlKeyUp), i.on("keydown", i.handleKeyPress), i.on("mouseover", i.handleMouseOver), i.on("mouseout", i.handleMouseOut), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"],
                                                                                            i.sliderInactive_), i
                                                                                } He(e, n); var t = e.prototype; return t.sliderActive_ = function () { this.addClass("vjs-slider-active") }, t.sliderInactive_ = function () { this.removeClass("vjs-slider-active") }, t.volumePanelState_ = function () { this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only") }, t.createEl = function () {
                                                                                    var e = "vjs-volume-panel-horizontal";
                                                                                    return this.options_.inline || (e = "vjs-volume-panel-vertical"), n.prototype.createEl.call(this, "div", { className: "vjs-volume-panel vjs-control " + e })
                                                                                }, t.dispose = function () { this.handleMouseOut(), n.prototype.dispose.call(this) }, t.handleVolumeControlKeyUp = function (e) { Lt.isEventKey(e, "Esc") && this.muteToggle.focus() }, t.handleMouseOver = function (e) { this.addClass("vjs-hover"), he(h, "keyup", ge(this, this.handleKeyPress)) }, t.handleMouseOut = function (e) { this.removeClass("vjs-hover"), de(h, "keyup", ge(this, this.handleKeyPress)) },
                                                                                    t.handleKeyPress = function (e) { Lt.isEventKey(e, "Esc") && this.handleMouseOut() }, e
                                                                            }(Ue); Hn.prototype.options_ = { children: ["muteToggle", "volumeControl"] }, Ue.registerComponent("VolumePanel", Hn); var Vn = function (n) {
                                                                                function e(e, t) { var i; return i = n.call(this, e, t) || this, t && (i.menuButton_ = t.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyDown), i.boundHandleBlur_ = ge(Me(i), i.handleBlur), i.boundHandleTapClick_ = ge(Me(i), i.handleTapClick), i } He(e, n); var t = e.prototype; return t.addEventListenerForItem = function (e) {
                                                                                    e instanceof
                                                                                    Ue && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
                                                                                }, t.removeEventListenerForItem = function (e) { e instanceof Ue && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_)) }, t.removeChild = function (e) { "string" == typeof e && (e = this.getChild(e)), this.removeEventListenerForItem(e), n.prototype.removeChild.call(this, e) }, t.addItem = function (e) { var t = this.addChild(e); t && this.addEventListenerForItem(t) }, t.createEl = function () {
                                                                                    var e =
                                                                                        this.options_.contentElType || "ul"; this.contentEl_ = S(e, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu"); var t = n.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" }); return t.appendChild(this.contentEl_), he(t, "click", function (e) { e.preventDefault(), e.stopImmediatePropagation() }), t
                                                                                }, t.dispose = function () { this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, n.prototype.dispose.call(this) }, t.handleBlur = function (e) {
                                                                                    var t = e.relatedTarget ||
                                                                                        h.activeElement; if (!this.children().some(function (e) { return e.el() === t })) { var i = this.menuButton_; i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton() }
                                                                                }, t.handleTapClick = function (t) { if (this.menuButton_) { this.menuButton_.unpressButton(); var e = this.children(); if (!Array.isArray(e)) return; var i = e.filter(function (e) { return e.el() === t.target })[0]; if (!i) return; "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus() } }, t.handleKeyDown = function (e) {
                                                                                    Lt.isEventKey(e, "Left") || Lt.isEventKey(e, "Down") ?
                                                                                    (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (Lt.isEventKey(e, "Right") || Lt.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
                                                                                }, t.stepForward = function () { var e = 0; void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e) }, t.stepBack = function () { var e = 0; void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e) }, t.focus = function (e) {
                                                                                    void 0 === e && (e = 0); var t = this.children().slice(); t.length && t[0].className && /vjs-menu-title/.test(t[0].className) &&
                                                                                        t.shift(), 0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
                                                                                }, e
                                                                            }(Ue); Ue.registerComponent("Menu", Vn); var qn = function (r) {
                                                                                function e(e, t) {
                                                                                    var i; void 0 === t && (t = {}), (i = r.call(this, e, t) || this).menuButton_ = new dn(e, t), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true"); var n = dn.prototype.buildCSSClass(); return i.menuButton_.el_.className = i.buildCSSClass() + " " + n, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_),
                                                                                        i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "keydown", i.handleKeyDown), i.on(i.menuButton_, "mouseenter", function () { i.addClass("vjs-hover"), i.menu.show(), he(h, "keyup", ge(Me(i), i.handleMenuKeyUp)) }), i.on("mouseleave", i.handleMouseLeave), i.on("keydown", i.handleSubmenuKeyDown), i
                                                                                } He(e, r); var t = e.prototype; return t.update = function () {
                                                                                    var e = this.createMenu(); this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu =
                                                                                        e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
                                                                                }, t.createMenu = function () {
                                                                                    var e = new Vn(this.player_, { menuButton: this }); if (this.hideThreshold_ = 0, this.options_.title) { var t = S("li", { className: "vjs-menu-title", innerHTML: De(this.options_.title), tabIndex: -1 }); this.hideThreshold_ += 1; var i = new Ue(this.player_, { el: t }); e.addItem(i) } if (this.items = this.createItems(), this.items) for (var n =
                                                                                        0; n < this.items.length; n++)e.addItem(this.items[n]); return e
                                                                                }, t.createItems = function () { }, t.createEl = function () { return r.prototype.createEl.call(this, "div", { className: this.buildWrapperCSSClass() }, {}) }, t.buildWrapperCSSClass = function () { var e = "vjs-menu-button"; return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + dn.prototype.buildCSSClass() + " " + r.prototype.buildCSSClass.call(this) }, t.buildCSSClass = function () {
                                                                                    var e = "vjs-menu-button"; return !0 === this.options_.inline ? e += "-inline" :
                                                                                        e += "-popup", "vjs-menu-button " + e + " " + r.prototype.buildCSSClass.call(this)
                                                                                }, t.controlText = function (e, t) { return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t) }, t.dispose = function () { this.handleMouseLeave(), r.prototype.dispose.call(this) }, t.handleClick = function (e) { this.buttonPressed_ ? this.unpressButton() : this.pressButton() }, t.handleMouseLeave = function (e) { this.removeClass("vjs-hover"), de(h, "keyup", ge(this, this.handleMenuKeyUp)) }, t.focus = function () { this.menuButton_.focus() }, t.blur =
                                                                                    function () { this.menuButton_.blur() }, t.handleKeyDown = function (e) { Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), Lt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (Lt.isEventKey(e, "Up") || Lt.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton())) }, t.handleMenuKeyUp = function (e) { (Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab")) && this.removeClass("vjs-hover") }, t.handleSubmenuKeyPress = function (e) { this.handleSubmenuKeyDown(e) },
                                                                                    t.handleSubmenuKeyDown = function (e) { (Lt.isEventKey(e, "Esc") || Lt.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), Lt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) }, t.pressButton = function () { if (this.enabled_) { if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), at && b()) return; this.menu.focus() } }, t.unpressButton = function () {
                                                                                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(),
                                                                                            this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                                                                                    }, t.disable = function () { this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable() }, t.enable = function () { this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable() }, e
                                                                            }(Ue); Ue.registerComponent("MenuButton", qn); var Wn = function (s) {
                                                                                function e(e, t) {
                                                                                    var i, n = t.tracks; if ((i = s.call(this, e, t) || this).items.length <= 1 && i.hide(), !n) return Me(i); var r = ge(Me(i), i.update); return n.addEventListener("removetrack",
                                                                                        r), n.addEventListener("addtrack", r), i.player_.on("ready", r), i.player_.on("dispose", function () { n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r) }), i
                                                                                } return He(e, s), e
                                                                            }(qn); Ue.registerComponent("TrackButton", Wn); var zn = ["Tab", "Esc", "Up", "Down", "Right", "Left"], Gn = function (n) {
                                                                                function e(e, t) {
                                                                                    var i; return (i = n.call(this, e, t) || this).selectable = t.selectable, i.isSelected_ = t.selected || !1, i.multiSelectable = t.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role",
                                                                                        "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i
                                                                                } He(e, n); var t = e.prototype; return t.createEl = function (e, t, i) { return this.nonIconControl = !0, n.prototype.createEl.call(this, "li", m({ className: "vjs-menu-item", innerHTML: '\x3cspan class\x3d"vjs-menu-item-text"\x3e' + this.localize(this.options_.label) + "\x3c/span\x3e", tabIndex: -1 }, t), i) }, t.handleKeyDown = function (t) { zn.some(function (e) { return Lt.isEventKey(t, e) }) || n.prototype.handleKeyDown.call(this, t) },
                                                                                    t.handleClick = function (e) { this.selected(!0) }, t.selected = function (e) { this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1)) }, e
                                                                            }(rn); Ue.registerComponent("MenuItem", Gn); var Kn = function (u) {
                                                                                function e(e, t) {
                                                                                    var n, i = t.track, r = e.textTracks(); t.label = i.label || i.language || "Unknown", t.selected =
                                                                                        "showing" === i.mode, (n = u.call(this, e, t) || this).track = i, n.kinds = (t.kinds || [t.kind || n.track.kind]).filter(Boolean); function s() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; n.handleTracksChange.apply(Me(n), t) } function a() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; n.handleSelectedLanguageChange.apply(Me(n), t) } var o; e.on(["loadstart", "texttrackchange"], s), r.addEventListener("change", s), r.addEventListener("selectedlanguagechange", a), n.on("dispose",
                                                                                            function () { e.off(["loadstart", "texttrackchange"], s), r.removeEventListener("change", s), r.removeEventListener("selectedlanguagechange", a) }), void 0 === r.onchange && n.on(["tap", "click"], function () { if ("object" != typeof y.Event) try { o = new y.Event("change") } catch (e) { } o || (o = h.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(o) }); return n.handleTracksChange(), n
                                                                                } He(e, u); var t = e.prototype; return t.handleClick = function (e) {
                                                                                    var t = this.track, i = this.player_.textTracks(); if (u.prototype.handleClick.call(this,
                                                                                        e), i) for (var n = 0; n < i.length; n++) { var r = i[n]; -1 !== this.kinds.indexOf(r.kind) && (r === t ? "showing" !== r.mode && (r.mode = "showing") : "disabled" !== r.mode && (r.mode = "disabled")) }
                                                                                }, t.handleTracksChange = function (e) { var t = "showing" === this.track.mode; t !== this.isSelected_ && this.selected(t) }, t.handleSelectedLanguageChange = function (e) {
                                                                                    if ("showing" === this.track.mode) {
                                                                                        var t = this.player_.cache_.selectedLanguage; if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return; this.player_.cache_.selectedLanguage =
                                                                                            { enabled: !0, language: this.track.language, kind: this.track.kind }
                                                                                    }
                                                                                }, t.dispose = function () { this.track = null, u.prototype.dispose.call(this) }, e
                                                                            }(Gn); Ue.registerComponent("TextTrackMenuItem", Kn); var Xn = function (i) {
                                                                                function e(e, t) { return t.track = { player: e, kind: t.kind, kinds: t.kinds, default: !1, mode: "disabled" }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, i.call(this, e, t) || this } He(e, i); var t = e.prototype; return t.handleTracksChange =
                                                                                    function (e) { for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) { var s = t[n]; if (-1 < this.options_.kinds.indexOf(s.kind) && "showing" === s.mode) { i = !1; break } } i !== this.isSelected_ && this.selected(i) }, t.handleSelectedLanguageChange = function (e) { for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) { var s = t[n]; if (-1 < ["captions", "descriptions", "subtitles"].indexOf(s.kind) && "showing" === s.mode) { i = !1; break } } i && (this.player_.cache_.selectedLanguage = { enabled: !1 }) }, e
                                                                            }(Kn); Ue.registerComponent("OffTextTrackMenuItem",
                                                                                Xn); var Yn = function (i) {
                                                                                    function e(e, t) { return void 0 === t && (t = {}), t.tracks = e.textTracks(), i.call(this, e, t) || this } return He(e, i), e.prototype.createItems = function (e, t) {
                                                                                        var i; void 0 === e && (e = []), void 0 === t && (t = Kn), this.label_ && (i = this.label_ + " off"), e.push(new Xn(this.player_, { kinds: this.kinds_, kind: this.kind_, label: i })), this.hideThreshold_ += 1; var n = this.player_.textTracks(); Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]); for (var r = 0; r < n.length; r++) {
                                                                                            var s = n[r]; if (-1 < this.kinds_.indexOf(s.kind)) {
                                                                                                var a =
                                                                                                    new t(this.player_, { track: s, kinds: this.kinds_, kind: this.kind_, selectable: !0, multiSelectable: !1 }); a.addClass("vjs-" + s.kind + "-menu-item"), e.push(a)
                                                                                            }
                                                                                        } return e
                                                                                    }, e
                                                                                }(Wn); Ue.registerComponent("TextTrackButton", Yn); var $n = function (a) {
                                                                                    function e(e, t) { var i, n = t.track, r = t.cue, s = e.currentTime(); return t.selectable = !0, t.multiSelectable = !1, t.label = r.text, t.selected = r.startTime <= s && s < r.endTime, (i = a.call(this, e, t) || this).track = n, i.cue = r, n.addEventListener("cuechange", ge(Me(i), i.update)), i } He(e, a); var t = e.prototype;
                                                                                    return t.handleClick = function (e) { a.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime) }, t.update = function (e) { var t = this.cue, i = this.player_.currentTime(); this.selected(t.startTime <= i && i < t.endTime) }, e
                                                                                }(Gn); Ue.registerComponent("ChaptersTrackMenuItem", $n); var Qn = function (n) {
                                                                                    function e(e, t, i) { return n.call(this, e, t, i) || this } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-chapters-button " + n.prototype.buildCSSClass.call(this) },
                                                                                        t.buildWrapperCSSClass = function () { return "vjs-chapters-button " + n.prototype.buildWrapperCSSClass.call(this) }, t.update = function (e) { this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), n.prototype.update.call(this) }, t.setTrack = function (e) {
                                                                                            if (this.track_ !== e) {
                                                                                                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                                                                                                    var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); t && t.removeEventListener("load", this.updateHandler_),
                                                                                                        this.track_ = null
                                                                                                } if (this.track_ = e, this.track_) { this.track_.mode = "hidden"; var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_); i && i.addEventListener("load", this.updateHandler_) }
                                                                                            }
                                                                                        }, t.findChaptersTrack = function () { for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) { var i = e[t]; if (i.kind === this.kind_) return i } }, t.getMenuCaption = function () { return this.track_ && this.track_.label ? this.track_.label : this.localize(De(this.kind_)) }, t.createMenu = function () {
                                                                                            return this.options_.title =
                                                                                                this.getMenuCaption(), n.prototype.createMenu.call(this)
                                                                                        }, t.createItems = function () { var e = []; if (!this.track_) return e; var t = this.track_.cues; if (!t) return e; for (var i = 0, n = t.length; i < n; i++) { var r = t[i], s = new $n(this.player_, { track: this.track_, cue: r }); e.push(s) } return e }, e
                                                                                }(Yn); Qn.prototype.kind_ = "chapters", Qn.prototype.controlText_ = "Chapters", Ue.registerComponent("ChaptersButton", Qn); var Jn = function (a) {
                                                                                    function e(e, t, i) {
                                                                                        var n; n = a.call(this, e, t, i) || this; var r = e.textTracks(), s = ge(Me(n), n.handleTracksChange);
                                                                                        return r.addEventListener("change", s), n.on("dispose", function () { r.removeEventListener("change", s) }), n
                                                                                    } He(e, a); var t = e.prototype; return t.handleTracksChange = function (e) { for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) { var s = t[n]; if (s.kind !== this.kind_ && "showing" === s.mode) { i = !0; break } } i ? this.disable() : this.enable() }, t.buildCSSClass = function () { return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this) }, t.buildWrapperCSSClass = function () { return "vjs-descriptions-button " + a.prototype.buildWrapperCSSClass.call(this) },
                                                                                        e
                                                                                }(Yn); Jn.prototype.kind_ = "descriptions", Jn.prototype.controlText_ = "Descriptions", Ue.registerComponent("DescriptionsButton", Jn); var Zn = function (n) { function e(e, t, i) { return n.call(this, e, t, i) || this } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-subtitles-button " + n.prototype.buildCSSClass.call(this) }, t.buildWrapperCSSClass = function () { return "vjs-subtitles-button " + n.prototype.buildWrapperCSSClass.call(this) }, e }(Yn); Zn.prototype.kind_ = "subtitles", Zn.prototype.controlText_ = "Subtitles",
                                                                                    Ue.registerComponent("SubtitlesButton", Zn); var er = function (n) { function e(e, t) { var i; return t.track = { player: e, kind: t.kind, label: t.kind + " settings", selectable: !1, default: !1, mode: "disabled" }, t.selectable = !1, t.name = "CaptionSettingsMenuItem", (i = n.call(this, e, t) || this).addClass("vjs-texttrack-settings"), i.controlText(", opens " + t.kind + " settings dialog"), i } return He(e, n), e.prototype.handleClick = function (e) { this.player().getChild("textTrackSettings").open() }, e }(Kn); Ue.registerComponent("CaptionSettingsMenuItem",
                                                                                        er); var tr = function (n) {
                                                                                            function e(e, t, i) { return n.call(this, e, t, i) || this } He(e, n); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-captions-button " + n.prototype.buildCSSClass.call(this) }, t.buildWrapperCSSClass = function () { return "vjs-captions-button " + n.prototype.buildWrapperCSSClass.call(this) }, t.createItems = function () {
                                                                                                var e = []; return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new er(this.player_, { kind: this.kind_ })),
                                                                                                    this.hideThreshold_ += 1), n.prototype.createItems.call(this, e)
                                                                                            }, e
                                                                                        }(Yn); tr.prototype.kind_ = "captions", tr.prototype.controlText_ = "Captions", Ue.registerComponent("CaptionsButton", tr); var ir = function (r) {
                                                                                            function e() { return r.apply(this, arguments) || this } return He(e, r), e.prototype.createEl = function (e, t, i) {
                                                                                                var n = '\x3cspan class\x3d"vjs-menu-item-text"\x3e' + this.localize(this.options_.label); return "captions" === this.options_.track.kind && (n += '\n        \x3cspan aria-hidden\x3d"true" class\x3d"vjs-icon-placeholder"\x3e\x3c/span\x3e\n        \x3cspan class\x3d"vjs-control-text"\x3e ' +
                                                                                                    this.localize("Captions") + "\x3c/span\x3e\n      "), n += "\x3c/span\x3e", r.prototype.createEl.call(this, e, m({ innerHTML: n }, t), i)
                                                                                            }, e
                                                                                        }(Kn); Ue.registerComponent("SubsCapsMenuItem", ir); var nr = function (n) {
                                                                                            function e(e, t) { var i; return void 0 === t && (t = {}), (i = n.call(this, e, t) || this).label_ = "subtitles", -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(De(i.label_)), i } He(e, n); var t = e.prototype; return t.buildCSSClass = function () {
                                                                                                return "vjs-subs-caps-button " +
                                                                                                    n.prototype.buildCSSClass.call(this)
                                                                                            }, t.buildWrapperCSSClass = function () { return "vjs-subs-caps-button " + n.prototype.buildWrapperCSSClass.call(this) }, t.createItems = function () { var e = []; return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new er(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), e = n.prototype.createItems.call(this, e, ir) }, e
                                                                                        }(Yn); nr.prototype.kinds_ = ["captions", "subtitles"], nr.prototype.controlText_ = "Subtitles",
                                                                                            Ue.registerComponent("SubsCapsButton", nr); var rr = function (a) {
                                                                                                function e(e, t) { var n, i = t.track, r = e.audioTracks(); t.label = i.label || i.language || "Unknown", t.selected = i.enabled, (n = a.call(this, e, t) || this).track = i, n.addClass("vjs-" + i.kind + "-menu-item"); function s() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; n.handleTracksChange.apply(Me(n), t) } return r.addEventListener("change", s), n.on("dispose", function () { r.removeEventListener("change", s) }), n } He(e, a); var t = e.prototype; return t.createEl =
                                                                                                    function (e, t, i) { var n = '\x3cspan class\x3d"vjs-menu-item-text"\x3e' + this.localize(this.options_.label); return "main-desc" === this.options_.track.kind && (n += '\n        \x3cspan aria-hidden\x3d"true" class\x3d"vjs-icon-placeholder"\x3e\x3c/span\x3e\n        \x3cspan class\x3d"vjs-control-text"\x3e ' + this.localize("Descriptions") + "\x3c/span\x3e\n      "), n += "\x3c/span\x3e", a.prototype.createEl.call(this, e, m({ innerHTML: n }, t), i) }, t.handleClick = function (e) {
                                                                                                        var t = this.player_.audioTracks(); a.prototype.handleClick.call(this,
                                                                                                            e); for (var i = 0; i < t.length; i++) { var n = t[i]; n.enabled = n === this.track }
                                                                                                    }, t.handleTracksChange = function (e) { this.selected(this.track.enabled) }, e
                                                                                            }(Gn); Ue.registerComponent("AudioTrackMenuItem", rr); var sr = function (i) {
                                                                                                function e(e, t) { return void 0 === t && (t = {}), t.tracks = e.audioTracks(), i.call(this, e, t) || this } He(e, i); var t = e.prototype; return t.buildCSSClass = function () { return "vjs-audio-button " + i.prototype.buildCSSClass.call(this) }, t.buildWrapperCSSClass = function () { return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this) },
                                                                                                    t.createItems = function (e) { void 0 === e && (e = []), this.hideThreshold_ = 1; for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) { var n = t[i]; e.push(new rr(this.player_, { track: n, selectable: !0, multiSelectable: !1 })) } return e }, e
                                                                                            }(Wn); sr.prototype.controlText_ = "Audio Track", Ue.registerComponent("AudioTrackButton", sr); var ar = function (s) {
                                                                                                function e(e, t) {
                                                                                                    var i, n = t.rate, r = parseFloat(n, 10); return t.label = n, t.selected = 1 === r, t.selectable = !0, t.multiSelectable = !1, (i = s.call(this, e, t) || this).label = n, i.rate = r, i.on(e, "ratechange",
                                                                                                        i.update), i
                                                                                                } He(e, s); var t = e.prototype; return t.handleClick = function (e) { s.prototype.handleClick.call(this), this.player().playbackRate(this.rate) }, t.update = function (e) { this.selected(this.player().playbackRate() === this.rate) }, e
                                                                                            }(Gn); ar.prototype.contentElType = "button", Ue.registerComponent("PlaybackRateMenuItem", ar); var or = function (n) {
                                                                                                function e(e, t) { var i; return (i = n.call(this, e, t) || this).updateVisibility(), i.updateLabel(), i.on(e, "loadstart", i.updateVisibility), i.on(e, "ratechange", i.updateLabel), i } He(e,
                                                                                                    n); var t = e.prototype; return t.createEl = function () { var e = n.prototype.createEl.call(this); return this.labelEl_ = S("div", { className: "vjs-playback-rate-value", innerHTML: "1x" }), e.appendChild(this.labelEl_), e }, t.dispose = function () { this.labelEl_ = null, n.prototype.dispose.call(this) }, t.buildCSSClass = function () { return "vjs-playback-rate " + n.prototype.buildCSSClass.call(this) }, t.buildWrapperCSSClass = function () { return "vjs-playback-rate " + n.prototype.buildWrapperCSSClass.call(this) }, t.createMenu = function () {
                                                                                                        var e =
                                                                                                            new Vn(this.player()), t = this.playbackRates(); if (t) for (var i = t.length - 1; 0 <= i; i--)e.addChild(new ar(this.player(), { rate: t[i] + "x" })); return e
                                                                                                    }, t.updateARIAAttributes = function () { this.el().setAttribute("aria-valuenow", this.player().playbackRate()) }, t.handleClick = function (e) { for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)if (i[r] > t) { n = i[r]; break } this.player().playbackRate(n) }, t.playbackRates = function () {
                                                                                                        return this.options_.playbackRates || this.options_.playerOptions &&
                                                                                                            this.options_.playerOptions.playbackRates
                                                                                                    }, t.playbackRateSupported = function () { return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length }, t.updateVisibility = function (e) { this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden") }, t.updateLabel = function (e) { this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x") }, e
                                                                                            }(qn); or.prototype.controlText_ = "Playback Rate", Ue.registerComponent("PlaybackRateMenuButton",
                                                                                                or); var ur = function (e) { function t() { return e.apply(this, arguments) || this } He(t, e); var i = t.prototype; return i.buildCSSClass = function () { return "vjs-spacer " + e.prototype.buildCSSClass.call(this) }, i.createEl = function () { return e.prototype.createEl.call(this, "div", { className: this.buildCSSClass() }) }, t }(Ue); Ue.registerComponent("Spacer", ur); var lr = function (t) {
                                                                                                    function e() { return t.apply(this, arguments) || this } He(e, t); var i = e.prototype; return i.buildCSSClass = function () { return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this) },
                                                                                                        i.createEl = function () { var e = t.prototype.createEl.call(this, { className: this.buildCSSClass() }); return e.innerHTML = "\u00a0", e }, e
                                                                                                }(ur); Ue.registerComponent("CustomControlSpacer", lr); var cr = function (e) { function t() { return e.apply(this, arguments) || this } return He(t, e), t.prototype.createEl = function () { return e.prototype.createEl.call(this, "div", { className: "vjs-control-bar", dir: "ltr" }) }, t }(Ue); cr.prototype.options_ = {
                                                                                                    children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl",
                                                                                                        "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
                                                                                                }, "exitPictureInPicture" in h && cr.prototype.options_.children.splice(cr.prototype.options_.children.length - 1, 0, "pictureInPictureToggle"), Ue.registerComponent("ControlBar", cr); var hr = function (n) {
                                                                                                    function e(e, t) { var i; return (i = n.call(this, e, t) || this).on(e, "error", i.open), i } He(e, n); var t = e.prototype; return t.buildCSSClass =
                                                                                                        function () { return "vjs-error-display " + n.prototype.buildCSSClass.call(this) }, t.content = function () { var e = this.player().error(); return e ? this.localize(e.message) : "" }, e
                                                                                                }(At); hr.prototype.options_ = r({}, At.prototype.options_, { pauseOnOpen: !1, fillAlways: !0, temporary: !1, uncloseable: !0 }), Ue.registerComponent("ErrorDisplay", hr); var dr = "vjs-text-track-settings", pr = ["#000", "Black"], fr = ["#00F", "Blue"], mr = ["#0FF", "Cyan"], gr = ["#0F0", "Green"], vr = ["#F0F", "Magenta"], yr = ["#F00", "Red"], _r = ["#FFF", "White"], br = ["#FF0",
                                                                                                    "Yellow"], Tr = ["1", "Opaque"], Sr = ["0.5", "Semi-Transparent"], kr = ["0", "Transparent"], Cr = {
                                                                                                        backgroundColor: { selector: ".vjs-bg-color \x3e select", id: "captions-background-color-%s", label: "Color", options: [pr, _r, yr, gr, fr, br, vr, mr] }, backgroundOpacity: { selector: ".vjs-bg-opacity \x3e select", id: "captions-background-opacity-%s", label: "Transparency", options: [Tr, Sr, kr] }, color: { selector: ".vjs-fg-color \x3e select", id: "captions-foreground-color-%s", label: "Color", options: [_r, pr, yr, gr, fr, br, vr, mr] }, edgeStyle: {
                                                                                                            selector: ".vjs-edge-style \x3e select",
                                                                                                            id: "%s", label: "Text Edge Style", options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                                                                                                        }, fontFamily: { selector: ".vjs-font-family \x3e select", id: "captions-font-family-%s", label: "Font Family", options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]] },
                                                                                                        fontPercent: { selector: ".vjs-font-percent \x3e select", id: "captions-font-size-%s", label: "Font Size", options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], default: 2, parser: function (e) { return "1.00" === e ? null : Number(e) } }, textOpacity: { selector: ".vjs-text-opacity \x3e select", id: "captions-foreground-opacity-%s", label: "Transparency", options: [Tr, Sr] }, windowColor: {
                                                                                                            selector: ".vjs-window-color \x3e select", id: "captions-window-color-%s",
                                                                                                            label: "Color"
                                                                                                        }, windowOpacity: { selector: ".vjs-window-opacity \x3e select", id: "captions-window-opacity-%s", label: "Transparency", options: [kr, Sr, Tr] }
                                                                                                    }; function Er(e, t) { if (t && (e = t(e)), e && "none" !== e) return e } Cr.windowColor.options = Cr.backgroundColor.options; var wr = function (n) {
                                                                                                        function e(e, t) {
                                                                                                            var i; return t.temporary = !1, (i = n.call(this, e, t) || this).updateDisplay = ge(Me(i), i.updateDisplay), i.fill(), i.hasBeenOpened_ = i.hasBeenFilled_ = !0, i.endDialog = S("p", { className: "vjs-control-text", textContent: i.localize("End of dialog window.") }),
                                                                                                                i.el().appendChild(i.endDialog), i.setDefaults(), void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings), i.on(i.$(".vjs-done-button"), "click", function () { i.saveSettings(), i.close() }), i.on(i.$(".vjs-default-button"), "click", function () { i.setDefaults(), i.updateDisplay() }), a(Cr, function (e) { i.on(i.$(e.selector), "change", i.updateDisplay) }), i.options_.persistTextTrackSettings && i.restoreSettings(), i
                                                                                                        } He(e, n); var t = e.prototype; return t.dispose =
                                                                                                            function () { this.endDialog = null, n.prototype.dispose.call(this) }, t.createElSelect_ = function (e, t, i) {
                                                                                                                var n = this; void 0 === t && (t = ""), void 0 === i && (i = "label"); var r = Cr[e], s = r.id.replace("%s", this.id_), a = [t, s].join(" ").trim(); return ["\x3c" + i + ' id\x3d"' + s + '" class\x3d"' + ("label" === i ? "vjs-label" : "") + '"\x3e', this.localize(r.label), "\x3c/" + i + "\x3e", '\x3cselect aria-labelledby\x3d"' + a + '"\x3e'].concat(r.options.map(function (e) {
                                                                                                                    var t = s + "-" + e[1].replace(/\W+/g, ""); return ['\x3coption id\x3d"' + t + '" value\x3d"' + e[0] +
                                                                                                                        '" ', 'aria-labelledby\x3d"' + a + " " + t + '"\x3e', n.localize(e[1]), "\x3c/option\x3e"].join("")
                                                                                                                })).concat("\x3c/select\x3e").join("")
                                                                                                            }, t.createElFgColor_ = function () { var e = "captions-text-legend-" + this.id_; return ['\x3cfieldset class\x3d"vjs-fg-color vjs-track-setting"\x3e', '\x3clegend id\x3d"' + e + '"\x3e', this.localize("Text"), "\x3c/legend\x3e", this.createElSelect_("color", e), '\x3cspan class\x3d"vjs-text-opacity vjs-opacity"\x3e', this.createElSelect_("textOpacity", e), "\x3c/span\x3e", "\x3c/fieldset\x3e"].join("") },
                                                                                                            t.createElBgColor_ = function () { var e = "captions-background-" + this.id_; return ['\x3cfieldset class\x3d"vjs-bg-color vjs-track-setting"\x3e', '\x3clegend id\x3d"' + e + '"\x3e', this.localize("Background"), "\x3c/legend\x3e", this.createElSelect_("backgroundColor", e), '\x3cspan class\x3d"vjs-bg-opacity vjs-opacity"\x3e', this.createElSelect_("backgroundOpacity", e), "\x3c/span\x3e", "\x3c/fieldset\x3e"].join("") }, t.createElWinColor_ = function () {
                                                                                                                var e = "captions-window-" + this.id_; return ['\x3cfieldset class\x3d"vjs-window-color vjs-track-setting"\x3e',
                                                                                                                    '\x3clegend id\x3d"' + e + '"\x3e', this.localize("Window"), "\x3c/legend\x3e", this.createElSelect_("windowColor", e), '\x3cspan class\x3d"vjs-window-opacity vjs-opacity"\x3e', this.createElSelect_("windowOpacity", e), "\x3c/span\x3e", "\x3c/fieldset\x3e"].join("")
                                                                                                            }, t.createElColors_ = function () { return S("div", { className: "vjs-track-settings-colors", innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("") }) }, t.createElFont_ = function () {
                                                                                                                return S("div", {
                                                                                                                    className: "vjs-track-settings-font",
                                                                                                                    innerHTML: ['\x3cfieldset class\x3d"vjs-font-percent vjs-track-setting"\x3e', this.createElSelect_("fontPercent", "", "legend"), "\x3c/fieldset\x3e", '\x3cfieldset class\x3d"vjs-edge-style vjs-track-setting"\x3e', this.createElSelect_("edgeStyle", "", "legend"), "\x3c/fieldset\x3e", '\x3cfieldset class\x3d"vjs-font-family vjs-track-setting"\x3e', this.createElSelect_("fontFamily", "", "legend"), "\x3c/fieldset\x3e"].join("")
                                                                                                                })
                                                                                                            }, t.createElControls_ = function () {
                                                                                                                var e = this.localize("restore all settings to the default values");
                                                                                                                return S("div", { className: "vjs-track-settings-controls", innerHTML: ['\x3cbutton type\x3d"button" class\x3d"vjs-default-button" title\x3d"' + e + '"\x3e', this.localize("Reset"), '\x3cspan class\x3d"vjs-control-text"\x3e ' + e + "\x3c/span\x3e", "\x3c/button\x3e", '\x3cbutton type\x3d"button" class\x3d"vjs-done-button"\x3e' + this.localize("Done") + "\x3c/button\x3e"].join("") })
                                                                                                            }, t.content = function () { return [this.createElColors_(), this.createElFont_(), this.createElControls_()] }, t.label = function () { return this.localize("Caption Settings Dialog") },
                                                                                                            t.description = function () { return this.localize("Beginning of dialog window. Escape will cancel and close the window.") }, t.buildCSSClass = function () { return n.prototype.buildCSSClass.call(this) + " vjs-text-track-settings" }, t.getValues = function () {
                                                                                                                var r = this; return function (i, n, e) { return void 0 === e && (e = 0), s(i).reduce(function (e, t) { return n(e, i[t], t) }, e) }(Cr, function (e, t, i) { var n = function (e, t) { return Er(e.options[e.options.selectedIndex].value, t) }(r.$(t.selector), t.parser); return void 0 !== n && (e[i] = n), e },
                                                                                                                    {})
                                                                                                            }, t.setValues = function (i) { var n = this; a(Cr, function (e, t) { !function (e, t, i) { if (t) for (var n = 0; n < e.options.length; n++)if (Er(e.options[n].value, i) === t) { e.selectedIndex = n; break } }(n.$(e.selector), i[t], e.parser) }) }, t.setDefaults = function () { var i = this; a(Cr, function (e) { var t = e.hasOwnProperty("default") ? e.default : 0; i.$(e.selector).selectedIndex = t }) }, t.restoreSettings = function () { var e; try { e = JSON.parse(y.localStorage.getItem(dr)) } catch (e) { p.warn(e) } e && this.setValues(e) }, t.saveSettings = function () {
                                                                                                                if (this.options_.persistTextTrackSettings) {
                                                                                                                    var e =
                                                                                                                        this.getValues(); try { Object.keys(e).length ? y.localStorage.setItem(dr, JSON.stringify(e)) : y.localStorage.removeItem(dr) } catch (e) { p.warn(e) }
                                                                                                                }
                                                                                                            }, t.updateDisplay = function () { var e = this.player_.getChild("textTrackDisplay"); e && e.updateDisplay() }, t.conditionalBlur_ = function () { this.previouslyActiveEl_ = null; var e = this.player_.controlBar, t = e && e.subsCapsButton, i = e && e.captionsButton; t ? t.focus() : i && i.focus() }, e
                                                                                                    }(At); Ue.registerComponent("TextTrackSettings", wr); var Lr = function (s) {
                                                                                                        function e(e, t) {
                                                                                                            var i, n = t.ResizeObserver ||
                                                                                                                y.ResizeObserver; null === t.ResizeObserver && (n = !1); var r = Re({ createEl: !n, reportTouchActivity: !1 }, t); return (i = s.call(this, e, r) || this).ResizeObserver = t.ResizeObserver || y.ResizeObserver, i.loadListener_ = null, i.resizeObserver_ = null, i.debouncedHandler_ = function (n, r, s, a) { var o; void 0 === a && (a = y); function e() { var e = this, t = arguments, i = function () { i = o = null, s || n.apply(e, t) }; !o && s && n.apply(e, t), a.clearTimeout(o), o = a.setTimeout(i, r) } return e.cancel = function () { a.clearTimeout(o), o = null }, e }(function () { i.resizeHandler() },
                                                                                                                    100, !1, Me(i)), n ? (i.resizeObserver_ = new i.ResizeObserver(i.debouncedHandler_), i.resizeObserver_.observe(e.el())) : (i.loadListener_ = function () { if (i.el_ && i.el_.contentWindow) { var e = i.debouncedHandler_, t = i.unloadListener_ = function () { de(this, "resize", e), de(this, "unload", t), t = null }; he(i.el_.contentWindow, "unload", t), he(i.el_.contentWindow, "resize", e) } }, i.one("load", i.loadListener_)), i
                                                                                                        } He(e, s); var t = e.prototype; return t.createEl = function () {
                                                                                                            return s.prototype.createEl.call(this, "iframe", {
                                                                                                                className: "vjs-resize-manager",
                                                                                                                tabIndex: -1
                                                                                                            }, { "aria-hidden": "true" })
                                                                                                        }, t.resizeHandler = function () { this.player_ && this.player_.trigger && this.player_.trigger("playerresize") }, t.dispose = function () {
                                                                                                            this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
                                                                                                            this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, s.prototype.dispose.call(this)
                                                                                                        }, e
                                                                                                    }(Ue); Ue.registerComponent("ResizeManager", Lr); var Pr = function (r) {
                                                                                                        function e(e, t) { var i, n = Re({ createEl: !1 }, t); return (i = r.call(this, e, n) || this).reset_(), i.on(i.player_, "durationchange", i.handleDurationchange), et && "hidden" in h && "visibilityState" in h && i.on(h, "visibilitychange", i.handleVisibilityChange), i } He(e, r); var t = e.prototype; return t.handleVisibilityChange = function () {
                                                                                                            this.player_.duration() ===
                                                                                                            1 / 0 && (h.hidden ? this.stopTracking() : this.startTracking())
                                                                                                        }, t.isBehind_ = function () { if (!this.timeupdateSeen_) return !1; var e = this.liveCurrentTime(), t = this.player_.currentTime(), i = 2 * this.seekableIncrement_ + 0.07; return e !== 1 / 0 && t <= e - i }, t.trackLive_ = function () {
                                                                                                            this.pastSeekEnd_ = this.pastSeekEnd_; var e = this.player_.seekable(); if (e && e.length) {
                                                                                                                var t = this.seekableEnd(); t !== this.lastSeekEnd_ && (this.lastSeekEnd_ && (this.seekableIncrementList_ = this.seekableIncrementList_.slice(-11), this.seekableIncrementList_.push(Math.abs(t -
                                                                                                                    this.lastSeekEnd_)), 3 < this.seekableIncrementList_.length && (this.seekableIncrement_ = function (e) { var t = Math.floor(e.length / 2), i = [].concat(e).sort(function (e, t) { return e - t }); return e.length % 2 != 0 ? i[t] : (i[t - 1] + i[t]) / 2 }(this.seekableIncrementList_))), this.pastSeekEnd_ = 0, this.lastSeekEnd_ = t, this.trigger("seekableendchange")), this.pastSeekEnd() > 1.5 * this.seekableIncrement_ ? this.pastSeekEnd_ = 0 : this.pastSeekEnd_ = this.pastSeekEnd() + 0.03, this.isBehind_() !== this.behindLiveEdge() && (this.behindLiveEdge_ = this.isBehind_(),
                                                                                                                        this.trigger("liveedgechange"))
                                                                                                            }
                                                                                                        }, t.handleDurationchange = function () { this.player_.duration() === 1 / 0 ? this.startTracking() : this.stopTracking() }, t.startTracking = function () {
                                                                                                            var e = this; this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLive_, 30), this.trackLive_(), this.on(this.player_, "play", this.trackLive_), this.on(this.player_, "pause", this.trackLive_), this.timeupdateSeen_ || (this.one(this.player_, "play", this.handlePlay),
                                                                                                                this.handleTimeupdate = function () { e.timeupdateSeen_ = !0, e.handleTimeupdate = null }, this.one(this.player_, "timeupdate", this.handleTimeupdate)))
                                                                                                        }, t.handlePlay = function () { this.one(this.player_, "timeupdate", this.seekToLiveEdge) }, t.reset_ = function () {
                                                                                                            this.pastSeekEnd_ = 0, this.lastSeekEnd_ = null, this.behindLiveEdge_ = null, this.timeupdateSeen_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.seekableIncrement_ = 12, this.seekableIncrementList_ = [], this.off(this.player_, "play", this.trackLive_),
                                                                                                            this.off(this.player_, "pause", this.trackLive_), this.off(this.player_, "play", this.handlePlay), this.off(this.player_, "timeupdate", this.seekToLiveEdge), this.handleTimeupdate && (this.off(this.player_, "timeupdate", this.handleTimeupdate), this.handleTimeupdate = null)
                                                                                                        }, t.stopTracking = function () { this.isTracking() && this.reset_() }, t.seekableEnd = function () { for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--;)t.push(e.end(i)); return t.length ? t.sort()[t.length - 1] : 1 / 0 }, t.seekableStart = function () {
                                                                                                            for (var e = this.player_.seekable(),
                                                                                                                t = [], i = e ? e.length : 0; i--;)t.push(e.start(i)); return t.length ? t.sort()[0] : 0
                                                                                                        }, t.liveWindow = function () { var e = this.liveCurrentTime(); return e === 1 / 0 ? 1 / 0 : e - this.seekableStart() }, t.isLive = function () { return this.isTracking() }, t.atLiveEdge = function () { return !this.behindLiveEdge() }, t.liveCurrentTime = function () { return this.pastSeekEnd() + this.seekableEnd() }, t.pastSeekEnd = function () { return this.pastSeekEnd_ }, t.behindLiveEdge = function () { return this.behindLiveEdge_ }, t.isTracking = function () { return "number" == typeof this.trackingInterval_ },
                                                                                                            t.seekToLiveEdge = function () { this.atLiveEdge() || (this.player_.currentTime(this.liveCurrentTime()), this.player_.paused() && this.player_.play()) }, t.dispose = function () { this.stopTracking(), r.prototype.dispose.call(this) }, e
                                                                                                    }(Ue); Ue.registerComponent("LiveTracker", Pr); function Ar(e) {
                                                                                                        var t = e.el(); if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0; var i = e.$$("source"), n = [], r = ""; if (!i.length) return !1; for (var s = 0; s < i.length; s++) { var a = i[s].src; a && -1 === n.indexOf(a) && n.push(a) } return !!n.length && (1 ===
                                                                                                            n.length && (r = n[0]), e.triggerSourceset(r), !0)
                                                                                                    } function Ir(e, t) { for (var i = {}, n = 0; n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get); n++); return i.enumerable = !0, i.configurable = !0, i } function xr(s) {
                                                                                                        var a = s.el(); if (!a.resetSourceWatch_) {
                                                                                                            var t = {}, e = function (e) { return Ir([e.el(), y.HTMLMediaElement.prototype, y.Element.prototype, Ur], "innerHTML") }(s), i = function (r) { return function () { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; var n = r.apply(a, t); return Ar(s), n } };
                                                                                                            ["append", "appendChild", "insertAdjacentHTML"].forEach(function (e) { a[e] && (t[e] = a[e], a[e] = i(t[e])) }), Object.defineProperty(a, "innerHTML", Re(e, { set: i(e.set) })), a.resetSourceWatch_ = function () { a.resetSourceWatch_ = null, Object.keys(t).forEach(function (e) { a[e] = t[e] }), Object.defineProperty(a, "innerHTML", e) }, s.one("sourceset", a.resetSourceWatch_)
                                                                                                        }
                                                                                                    } function Or(n) {
                                                                                                        if (n.featuresSourceset) {
                                                                                                            var r = n.el(); if (!r.resetSourceset_) {
                                                                                                                var i = function (e) { return Ir([e.el(), y.HTMLMediaElement.prototype, Mr], "src") }(n), s = r.setAttribute,
                                                                                                                t = r.load; Object.defineProperty(r, "src", Re(i, { set: function (e) { var t = i.set.call(r, e); return n.triggerSourceset(r.src), t } })), r.setAttribute = function (e, t) { var i = s.call(r, e, t); return /src/i.test(e) && n.triggerSourceset(r.src), i }, r.load = function () { var e = t.call(r); return Ar(n) || (n.triggerSourceset(""), xr(n)), e }, r.currentSrc ? n.triggerSourceset(r.currentSrc) : Ar(n) || xr(n), r.resetSourceset_ = function () { r.resetSourceset_ = null, r.load = t, r.setAttribute = s, Object.defineProperty(r, "src", i), r.resetSourceWatch_ && r.resetSourceWatch_() }
                                                                                                            }
                                                                                                        }
                                                                                                    }
    function Dr(t, i, n, e) { function r(e) { return Object.defineProperty(t, i, { value: e, enumerable: !0, writable: !0 }) } void 0 === e && (e = !0); var s = { configurable: !0, enumerable: !0, get: function () { var e = n(); return r(e), e } }; return e && (s.set = r), Object.defineProperty(t, i, s) } var Rr, Ur = Object.defineProperty({}, "innerHTML", {
        get: function () { return this.cloneNode(!0).innerHTML }, set: function (e) {
            var t = h.createElement(this.nodeName.toLowerCase()); t.innerHTML = e; for (var i = h.createDocumentFragment(); t.childNodes.length;)i.appendChild(t.childNodes[0]);
            return this.innerText = "", y.Element.prototype.appendChild.call(this, i), this.innerHTML
        }
    }), Mr = Object.defineProperty({}, "src", { get: function () { return this.hasAttribute("src") ? Ut(y.Element.prototype.getAttribute.call(this, "src")) : "" }, set: function (e) { return y.Element.prototype.setAttribute.call(this, "src", e), e } }), Nr = function (c) {
        function o(e, t) {
            var i; i = c.call(this, e, t) || this; var n = e.source, r = !1; if (n && (i.el_.currentSrc !== n.src || e.tag && 3 === e.tag.initNetworkState_) ? i.setSource(n) : i.handleLateInit_(i.el_), e.enableSourceset &&
                i.setupSourcesetHandling_(), i.el_.hasChildNodes()) { for (var s = i.el_.childNodes, a = s.length, o = []; a--;) { var u = s[a]; "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), r || i.el_.hasAttribute("crossorigin") || !Nt(u.src) || (r = !0)) : o.push(u)) } for (var l = 0; l < o.length; l++)i.el_.removeChild(o[l]) } return i.proxyNativeTracks_(), i.featuresNativeTextTracks && r && p.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."),
                    i.restoreMetadataTracksInIOSNativePlayer_(), (nt || st || Ye) && !0 === e.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
        } He(o, c); var e = o.prototype; return e.dispose = function () { this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), o.disposeMediaElement(this.el_), this.options_ = null, c.prototype.dispose.call(this) }, e.setupSourcesetHandling_ = function () { Or(this) }, e.restoreMetadataTracksInIOSNativePlayer_ = function () {
            function e() {
                i = []; for (var e = 0; e < n.length; e++) {
                    var t =
                        n[e]; "metadata" === t.kind && i.push({ track: t, storedMode: t.mode })
                }
            } var i, n = this.textTracks(); e(), n.addEventListener("change", e), this.on("dispose", function () { return n.removeEventListener("change", e) }); function r() { for (var e = 0; e < i.length; e++) { var t = i[e]; "disabled" === t.track.mode && t.track.mode !== t.storedMode && (t.track.mode = t.storedMode) } n.removeEventListener("change", r) } this.on("webkitbeginfullscreen", function () {
                n.removeEventListener("change", e), n.removeEventListener("change", r), n.addEventListener("change",
                    r)
            }), this.on("webkitendfullscreen", function () { n.removeEventListener("change", e), n.addEventListener("change", e), n.removeEventListener("change", r) })
        }, e.overrideNative_ = function (e, t) { var i = this; if (t === this["featuresNative" + e + "Tracks"]) { var n = e.toLowerCase(); this[n + "TracksListeners_"] && Object.keys(this[n + "TracksListeners_"]).forEach(function (e) { i.el()[n + "Tracks"].removeEventListener(e, i[n + "TracksListeners_"][e]) }), this["featuresNative" + e + "Tracks"] = !t, this[n + "TracksListeners_"] = null, this.proxyNativeTracksForType_(n) } },
            e.overrideNativeAudioTracks = function (e) { this.overrideNative_("Audio", e) }, e.overrideNativeVideoTracks = function (e) { this.overrideNative_("Video", e) }, e.proxyNativeTracksForType_ = function (e) {
                var n = this, t = li[e], r = this.el()[t.getterName], s = this[t.getterName](); if (this["featuresNative" + t.capitalName + "Tracks"] && r && r.addEventListener) {
                    var a = { change: function (e) { s.trigger({ type: "change", target: s, currentTarget: s, srcElement: s }) }, addtrack: function (e) { s.addTrack(e.track) }, removetrack: function (e) { s.removeTrack(e.track) } },
                    i = function () { for (var e = [], t = 0; t < s.length; t++) { for (var i = !1, n = 0; n < r.length; n++)if (r[n] === s[t]) { i = !0; break } i || e.push(s[t]) } for (; e.length;)s.removeTrack(e.shift()) }; this[t.getterName + "Listeners_"] = a, Object.keys(a).forEach(function (t) { var i = a[t]; r.addEventListener(t, i), n.on("dispose", function (e) { return r.removeEventListener(t, i) }) }), this.on("loadstart", i), this.on("dispose", function (e) { return n.off("loadstart", i) })
                }
            }, e.proxyNativeTracks_ = function () { var t = this; li.names.forEach(function (e) { t.proxyNativeTracksForType_(e) }) },
            e.createEl = function () {
                var e = this.options_.tag; if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) { if (e) { var t = e.cloneNode(!0); e.parentNode && e.parentNode.insertBefore(t, e), o.disposeMediaElement(e), e = t } else { e = h.createElement("video"); var i = Re({}, this.options_.tag && I(this.options_.tag)); nt && !0 === this.options_.nativeControlsForTouch || delete i.controls, A(e, m(i, { id: this.options_.techId, class: "vjs-tech" })) } e.playerId = this.options_.playerId } "undefined" != typeof this.options_.preload && O(e,
                    "preload", this.options_.preload); for (var n = ["loop", "muted", "playsinline", "autoplay"], r = 0; r < n.length; r++) { var s = n[r], a = this.options_[s]; "undefined" != typeof a && (a ? O(e, s, s) : D(e, s), e[s] = a) } return e
            }, e.handleLateInit_ = function (e) {
                if (0 !== e.networkState && 3 !== e.networkState) {
                    if (0 === e.readyState) {
                        var t = !1, i = function () { t = !0 }; this.on("loadstart", i); var n = function () { t || this.trigger("loadstart") }; return this.on("loadedmetadata", n), void this.ready(function () {
                            this.off("loadstart", i), this.off("loadedmetadata", n),
                            t || this.trigger("loadstart")
                        })
                    } var r = ["loadstart"]; r.push("loadedmetadata"), 2 <= e.readyState && r.push("loadeddata"), 3 <= e.readyState && r.push("canplay"), 4 <= e.readyState && r.push("canplaythrough"), this.ready(function () { r.forEach(function (e) { this.trigger(e) }, this) })
                }
            }, e.setCurrentTime = function (e) { try { this.el_.currentTime = e } catch (e) { p(e, "Video is not ready. (Video.js)") } }, e.duration = function () {
                var t = this; if (this.el_.duration === 1 / 0 && Ke && Je && 0 === this.el_.currentTime) return this.on("timeupdate", function e() {
                    0 <
                    t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                }), NaN; return this.el_.duration || NaN
            }, e.width = function () { return this.el_.offsetWidth }, e.height = function () { return this.el_.offsetHeight }, e.proxyWebkitFullscreen_ = function () {
                var e = this; if ("webkitDisplayingFullscreen" in this.el_) {
                    var t = function () { this.trigger("fullscreenchange", { isFullscreen: !1 }) }, i = function () {
                        "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen",
                            t), this.trigger("fullscreenchange", { isFullscreen: !0 }))
                    }; this.on("webkitbeginfullscreen", i), this.on("dispose", function () { e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t) })
                }
            }, e.supportsFullScreen = function () { if ("function" == typeof this.el_.webkitEnterFullScreen) { var e = y.navigator && y.navigator.userAgent || ""; if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0 } return !1 }, e.enterFullScreen = function () {
                var e = this.el_; e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                    e.pause(),
                    e.webkitEnterFullScreen()
                }, 0)) : e.webkitEnterFullScreen()
            }, e.exitFullScreen = function () { this.el_.webkitExitFullScreen() }, e.requestPictureInPicture = function () { return this.el_.requestPictureInPicture() }, e.src = function (e) { if (void 0 === e) return this.el_.src; this.setSrc(e) }, e.reset = function () { o.resetMediaElement(this.el_) }, e.currentSrc = function () { return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc }, e.setControls = function (e) { this.el_.controls = !!e }, e.addTextTrack = function (e, t, i) {
                return this.featuresNativeTextTracks ?
                    this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i)
            }, e.createRemoteTextTrack = function (e) { if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e); var t = h.createElement("track"); return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t }, e.addRemoteTextTrack = function (e, t) {
                var i = c.prototype.addRemoteTextTrack.call(this,
                    e, t); return this.featuresNativeTextTracks && this.el().appendChild(i), i
            }, e.removeRemoteTextTrack = function (e) { if (c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var t = this.$$("track"), i = t.length; i--;)e !== t[i] && e !== t[i].track || this.el().removeChild(t[i]) }, e.getVideoPlaybackQuality = function () {
                if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality(); var e = {}; return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" !=
                    typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), y.performance && "function" == typeof y.performance.now ? e.creationTime = y.performance.now() : y.performance && y.performance.timing && "number" == typeof y.performance.timing.navigationStart && (e.creationTime = y.Date.now() - y.performance.timing.navigationStart), e
            }, o
    }(Vi); Dr(Nr, "TEST_VID", function () {
        if (v()) {
            var e = h.createElement("video"), t = h.createElement("track");
            return t.kind = "captions", t.srclang = "en", t.label = "English", e.appendChild(t), e
        }
    }), Nr.isSupported = function () { try { Nr.TEST_VID.volume = 0.5 } catch (e) { return !1 } return !(!Nr.TEST_VID || !Nr.TEST_VID.canPlayType) }, Nr.canPlayType = function (e) { return Nr.TEST_VID.canPlayType(e) }, Nr.canPlaySource = function (e, t) { return Nr.canPlayType(e.type) }, Nr.canControlVolume = function () { try { var e = Nr.TEST_VID.volume; return Nr.TEST_VID.volume = e / 2 + 0.1, e !== Nr.TEST_VID.volume } catch (e) { return !1 } }, Nr.canMuteVolume = function () {
        try {
            var e = Nr.TEST_VID.muted;
            return Nr.TEST_VID.muted = !e, Nr.TEST_VID.muted ? O(Nr.TEST_VID, "muted", "muted") : D(Nr.TEST_VID, "muted"), e !== Nr.TEST_VID.muted
        } catch (e) { return !1 }
    }, Nr.canControlPlaybackRate = function () { if (Ke && Je && Ze < 58) return !1; try { var e = Nr.TEST_VID.playbackRate; return Nr.TEST_VID.playbackRate = e / 2 + 0.1, e !== Nr.TEST_VID.playbackRate } catch (e) { return !1 } }, Nr.canOverrideAttributes = function () {
        try {
            var e = function () { }; Object.defineProperty(h.createElement("video"), "src", { get: e, set: e }), Object.defineProperty(h.createElement("audio"),
                "src", { get: e, set: e }), Object.defineProperty(h.createElement("video"), "innerHTML", { get: e, set: e }), Object.defineProperty(h.createElement("audio"), "innerHTML", { get: e, set: e })
        } catch (e) { return !1 } return !0
    }, Nr.supportsNativeTextTracks = function () { return ot || at && Je }, Nr.supportsNativeVideoTracks = function () { return !(!Nr.TEST_VID || !Nr.TEST_VID.videoTracks) }, Nr.supportsNativeAudioTracks = function () { return !(!Nr.TEST_VID || !Nr.TEST_VID.audioTracks) }, Nr.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled",
        "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [["featuresVolumeControl", "canControlVolume"], ["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks",
            "supportsNativeAudioTracks"]].forEach(function (e) { var t = e[0], i = e[1]; Dr(Nr.prototype, t, function () { return Nr[i]() }, !0) }), Nr.prototype.movingMediaElementInDOM = !at, Nr.prototype.featuresFullscreenResize = !0, Nr.prototype.featuresProgressEvents = !0, Nr.prototype.featuresTimeupdateEvents = !0, Nr.patchCanPlayType = function () {
                4 <= Xe && !$e && !Je && (Rr = Nr.TEST_VID && Nr.TEST_VID.constructor.prototype.canPlayType, Nr.TEST_VID.constructor.prototype.canPlayType = function (e) {
                    return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ?
                        "maybe" : Rr.call(this, e)
                })
            }, Nr.unpatchCanPlayType = function () { var e = Nr.TEST_VID.constructor.prototype.canPlayType; return Rr && (Nr.TEST_VID.constructor.prototype.canPlayType = Rr), e }, Nr.patchCanPlayType(), Nr.disposeMediaElement = function (e) { if (e) { for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();)e.removeChild(e.firstChild); e.removeAttribute("src"), "function" == typeof e.load && function () { try { e.load() } catch (e) { } }() } }, Nr.resetMediaElement = function (e) {
                if (e) {
                    for (var t = e.querySelectorAll("source"),
                        i = t.length; i--;)e.removeChild(t[i]); e.removeAttribute("src"), "function" == typeof e.load && function () { try { e.load() } catch (e) { } }()
                }
            }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) { Nr.prototype[e] = function () { return this.el_[e] || this.el_.hasAttribute(e) } }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) { Nr.prototype["set" + De(t)] = function (e) { (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t) } }), ["paused", "currentTime",
                "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (e) { Nr.prototype[e] = function () { return this.el_[e] } }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (t) { Nr.prototype["set" + De(t)] = function (e) { this.el_[t] = e } }), ["pause", "load", "play"].forEach(function (e) { Nr.prototype[e] = function () { return this.el_[e]() } }), Vi.withSourceHandlers(Nr),
        Nr.nativeSourceHandler = {}, Nr.nativeSourceHandler.canPlayType = function (e) { try { return Nr.TEST_VID.canPlayType(e) } catch (e) { return "" } }, Nr.nativeSourceHandler.canHandleSource = function (e, t) { if (e.type) return Nr.nativeSourceHandler.canPlayType(e.type); if (e.src) { var i = Mt(e.src); return Nr.nativeSourceHandler.canPlayType("video/" + i) } return "" }, Nr.nativeSourceHandler.handleSource = function (e, t, i) { t.setSrc(e.src) }, Nr.nativeSourceHandler.dispose = function () { }, Nr.registerSourceHandler(Nr.nativeSourceHandler), Vi.registerTech("Html5",
            Nr); var Br = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"], jr = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" }, Fr = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], Hr = {}; Fr.forEach(function (e) { var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e; Hr[e] = "vjs-layout-" + t }); var Vr = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 }, qr = function (c) {
                function l(e,
                    t, i) {
                        var n; if (e.id = e.id || t.id || "vjs_video_" + ne(), (t = m(l.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language) if ("function" == typeof e.closest) { var r = e.closest("[lang]"); r && r.getAttribute && (t.language = r.getAttribute("lang")) } else for (var s = e; s && 1 === s.nodeType;) { if (I(s).hasOwnProperty("lang")) { t.language = s.getAttribute("lang"); break } s = s.parentNode } if ((n = c.call(this, null, t, i) || this).boundDocumentFullscreenChange_ = ge(Me(n), n.documentFullscreenChange_), n.boundFullWindowOnEscKey_ =
                            ge(Me(n), n.fullWindowOnEscKey), n.isFullscreen_ = !1, n.log = f(n.id_), n.fsApi_ = ft, n.isPosterFromTech_ = !1, n.queuedCallbacks_ = [], n.isReady_ = !1, n.hasStarted_ = !1, n.userActive_ = !1, !n.options_ || !n.options_.techOrder || !n.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?"); if (n.tag = e, n.tagAttributes = e && I(e), n.language(n.options_.language), t.languages) {
                                var a = {}; Object.getOwnPropertyNames(t.languages).forEach(function (e) {
                                    a[e.toLowerCase()] =
                                    t.languages[e]
                                }), n.languages_ = a
                            } else n.languages_ = l.prototype.options_.languages; n.resetCache_(), n.poster_ = t.poster || "", n.controls_ = !!t.controls, e.controls = !1, e.removeAttribute("controls"), n.changingSrc_ = !1, n.playCallbacks_ = [], n.playTerminatedQueue_ = [], e.hasAttribute("autoplay") ? n.autoplay(!0) : n.autoplay(n.options_.autoplay), t.plugins && Object.keys(t.plugins).forEach(function (e) { if ("function" != typeof n[e]) throw new Error('plugin "' + e + '" does not exist'); }), n.scrubbing_ = !1, n.el_ = n.createEl(), Ae(Me(n),
                                { eventBusKey: "el_" }), n.fsApi_.requestFullscreen && (he(h, n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_), n.on(n.fsApi_.fullscreenchange, n.boundDocumentFullscreenChange_)), n.fluid_ && n.on("playerreset", n.updateStyleEl_); var o = Re(n.options_); t.plugins && Object.keys(t.plugins).forEach(function (e) { n[e](t.plugins[e]) }), n.options_.playerOptions = o, n.middleware_ = [], n.initChildren(), n.isAudio("audio" === e.nodeName.toLowerCase()), n.controls() ? n.addClass("vjs-controls-enabled") : n.addClass("vjs-controls-disabled"),
                                    n.el_.setAttribute("role", "region"), n.isAudio() ? n.el_.setAttribute("aria-label", n.localize("Audio Player")) : n.el_.setAttribute("aria-label", n.localize("Video Player")), n.isAudio() && n.addClass("vjs-audio"), n.flexNotSupported_() && n.addClass("vjs-no-flex"), nt && n.addClass("vjs-touch-enabled"), at || n.addClass("vjs-workinghover"), l.players[n.id_] = Me(n); var u = d.split(".")[0]; return n.addClass("vjs-v" + u), n.userActive(!0), n.reportUserActivity(), n.one("play", n.listenForUserActivity_), n.on("stageclick", n.handleStageClick_),
                                        n.on("keydown", n.handleKeyDown), n.breakpoints(n.options_.breakpoints), n.responsive(n.options_.responsive), n
                } He(l, c); var e = l.prototype; return e.dispose = function () {
                    var n = this; this.trigger("dispose"), this.off("dispose"), de(h, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), de(h, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), l.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player =
                        null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), function (e) { Wi[e.id()] = null }(this), hi.names.forEach(function (e) { var t = hi[e], i = n[t.getterName](); i && i.off && i.off() }), c.prototype.dispose.call(this)
                }, e.createEl = function () {
                    var t, i = this.tag, e = this.playerElIngest_ = i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute("data-vjs-player"),
                    n = "video-js" === this.tag.tagName.toLowerCase(); e ? t = this.el_ = i.parentNode : n || (t = this.el_ = c.prototype.createEl.call(this, "div")); var r = I(i); if (n) { for (t = this.el_ = i, i = this.tag = h.createElement("video"); t.children.length;)i.appendChild(t.firstChild); E(t, "video-js") || w(t, "video-js"), t.appendChild(i), e = this.playerElIngest_ = t, Object.keys(t).forEach(function (e) { try { i[e] = t[e] } catch (e) { } }) } if (i.setAttribute("tabindex", "-1"), r.tabindex = "-1", (et || Je && it) && (i.setAttribute("role", "application"), r.role = "application"),
                        i.removeAttribute("width"), i.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function (e) { n && "class" === e || t.setAttribute(e, r[e]), n && i.setAttribute(e, r[e]) }), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = t.player = this, this.addClass("vjs-paused"), !0 !== y.VIDEOJS_NO_DYNAMIC_STYLE) {
                            this.styleEl_ = Z("vjs-styles-dimensions"); var s = G(".vjs-styles-defaults"), a = G("head"); a.insertBefore(this.styleEl_, s ? s.nextSibling :
                                a.firstChild)
                    } this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio); for (var o = i.getElementsByTagName("a"), u = 0; u < o.length; u++) { var l = o.item(u); w(l, "vjs-hidden"), l.setAttribute("hidden", "hidden") } return i.initNetworkState_ = i.networkState, i.parentNode && !e && i.parentNode.insertBefore(t, i), C(i, t), this.children_.unshift(i), this.el_.setAttribute("lang", this.language_),
                        this.el_ = t
                }, e.width = function (e) { return this.dimension("width", e) }, e.height = function (e) { return this.dimension("height", e) }, e.dimension = function (e, t) { var i = e + "_"; if (void 0 === t) return this[i] || 0; if ("" === t || "auto" === t) return this[i] = void 0, void this.updateStyleEl_(); var n = parseFloat(t); isNaN(n) ? p.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = n, this.updateStyleEl_()) }, e.fluid = function (e) {
                    if (void 0 === e) return !!this.fluid_; this.fluid_ = !!e, Le(this) && this.off("playerreset", this.updateStyleEl_),
                        e ? (this.addClass("vjs-fluid"), this.fill(!1), function (e, t) { Le(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t)) }(function () { this.on("playerreset", this.updateStyleEl_) })) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                }, e.fill = function (e) { if (void 0 === e) return !!this.fill_; this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill") }, e.aspectRatio = function (e) {
                    if (void 0 === e) return this.aspectRatio_; if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                    this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                }, e.updateStyleEl_ = function () {
                    if (!0 !== y.VIDEOJS_NO_DYNAMIC_STYLE) {
                        var e, t, i, n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"), r = n[1] / n[0]; e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * r, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() +
                            "-dimensions", this.addClass(i), ee(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
                    } else { var s = "number" == typeof this.width_ ? this.width_ : this.options_.width, a = "number" == typeof this.height_ ? this.height_ : this.options_.height, o = this.tech_ && this.tech_.el(); o && (0 <= s && (o.width = s), 0 <= a && (o.height = a)) }
                }, e.loadTech_ = function (e, t) {
                    var i = this; this.tech_ && this.unloadTech_(); var n = De(e), r = e.charAt(0).toLowerCase() +
                        e.slice(1); "Html5" !== n && this.tag && (Vi.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = n, this.isReady_ = !1; var s = {
                            source: t, autoplay: "string" != typeof this.autoplay() && this.autoplay(), nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: this.id() + "_" + r + "_api", playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, muted: this.options_.muted, poster: this.poster(), language: this.language(),
                            playerElIngest: this.playerElIngest_ || !1, "vtt.js": this.options_["vtt.js"], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset, Promise: this.options_.Promise
                        }; hi.names.forEach(function (e) { var t = hi[e]; s[t.getterName] = i[t.privateName] }), m(s, this.options_[n]), m(s, this.options_[r]), m(s, this.options_[e.toLowerCase()]), this.tag && (s.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (s.startTime = this.cache_.currentTime); var a = Vi.getTech(e);
                    if (!a) throw new Error("No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'"); this.tech_ = new a(s), this.tech_.ready(ge(this, this.handleTechReady_), !0), wt(this.textTracksJson_ || [], this.tech_), Br.forEach(function (e) { i.on(i.tech_, e, i["handleTech" + De(e) + "_"]) }), Object.keys(jr).forEach(function (t) {
                        i.on(i.tech_, t, function (e) {
                            0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({ callback: i["handleTech" + jr[t] + "_"].bind(i), event: e }) : i["handleTech" + jr[t] +
                                "_"](e)
                        })
                    }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
                        this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_), this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_),
                        this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === n && this.tag || C(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                }, e.unloadTech_ = function () {
                    var i = this; hi.names.forEach(function (e) { var t = hi[e]; i[t.privateName] = i[t.getterName]() }), this.textTracksJson_ = Et(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ =
                        "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                }, e.tech = function (e) { return void 0 === e && p.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_ }, e.addTechControlsListeners_ = function () {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "mouseup", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_),
                    this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                }, e.removeTechControlsListeners_ = function () {
                    this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mouseup", this.handleTechClick_), this.off(this.tech_, "dblclick",
                        this.handleTechDoubleClick_)
                }, e.handleTechReady_ = function () { this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_() }, e.handleTechLoadStart_ = function () { this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay()) },
                    e.manualAutoplay_ = function (t) { var n = this; if (this.tech_ && "string" == typeof t) { var e, i = function () { var e = n.muted(); n.muted(!0); function t() { n.muted(e) } n.playTerminatedQueue_.push(t); var i = n.play(); if (St(i)) return i.catch(t) }; if ("any" === t && !0 !== this.muted() ? St(e = this.play()) && (e = e.catch(i)) : e = "muted" === t && !0 !== this.muted() ? i() : this.play(), St(e)) return e.then(function () { n.trigger({ type: "autoplay-success", autoplay: t }) }).catch(function (e) { n.trigger({ type: "autoplay-failure", autoplay: t }) }) } }, e.updateSourceCaches_ =
                    function (e) {
                        void 0 === e && (e = ""); var t = e, i = ""; "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function (e, t) { if (!t) return ""; if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type; var i = e.cache_.sources.filter(function (e) { return e.src === t }); if (i.length) return i[0].type; for (var n = e.$$("source"), r = 0; r < n.length; r++) { var s = n[r]; if (s.type && s.src && s.src === t) return s.type } return Zi(t) }(this, t)), this.cache_.source =
                            Re({}, e, { src: t, type: i }); for (var n = this.cache_.sources.filter(function (e) { return e.src && e.src === t }), r = [], s = this.$$("source"), a = [], o = 0; o < s.length; o++) { var u = I(s[o]); r.push(u), u.src && u.src === t && a.push(u.src) } a.length && !n.length ? this.cache_.sources = r : n.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
                    }, e.handleTechSourceset_ = function (e) {
                        var i = this; if (!this.changingSrc_) {
                            var t = function (e) { return i.updateSourceCaches_(e) }, n = this.currentSource().src, r = e.src; n && !/^blob:/.test(n) && /^blob:/.test(r) &&
                                (this.lastSource_ && (this.lastSource_.tech === r || this.lastSource_.player === n) || (t = function () { })), t(r), e.src || this.tech_.any(["sourceset", "loadstart"], function (e) { if ("sourceset" !== e.type) { var t = i.techGet("currentSrc"); i.lastSource_.tech = t, i.updateSourceCaches_(t) } })
                        } this.lastSource_ = { player: this.currentSource().src, tech: e.src }, this.trigger({ src: e.src, type: "sourceset" })
                    }, e.hasStarted = function (e) {
                        if (void 0 === e) return this.hasStarted_; e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"),
                            this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                    }, e.handleTechPlay_ = function () { this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play") }, e.handleTechRateChange_ = function () { 0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (e) { return e.callback(e.event) }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange") },
                    e.handleTechWaiting_ = function () { var t = this; this.addClass("vjs-waiting"), this.trigger("waiting"); var i = this.currentTime(); this.on("timeupdate", function e() { i !== t.currentTime() && (t.removeClass("vjs-waiting"), t.off("timeupdate", e)) }) }, e.handleTechCanPlay_ = function () { this.removeClass("vjs-waiting"), this.trigger("canplay") }, e.handleTechCanPlayThrough_ = function () { this.removeClass("vjs-waiting"), this.trigger("canplaythrough") }, e.handleTechPlaying_ = function () { this.removeClass("vjs-waiting"), this.trigger("playing") },
                    e.handleTechSeeking_ = function () { this.addClass("vjs-seeking"), this.trigger("seeking") }, e.handleTechSeeked_ = function () { this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked") }, e.handleTechFirstPlay_ = function () { this.options_.starttime && (p.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay") }, e.handleTechPause_ = function () {
                        this.removeClass("vjs-playing"),
                        this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.handleTechEnded_ = function () { this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended") }, e.handleTechDurationChange_ = function () { this.duration(this.techGet_("duration")) }, e.handleTechClick_ = function (e) { W(e) && this.controls_ && (this.paused() ? kt(this.play()) : this.pause()) }, e.handleTechDoubleClick_ = function (t) {
                        this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),
                            function (e) { return e.contains(t.target) }) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, t) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
                    }, e.handleTechTap_ = function () { this.userActive(!this.userActive()) }, e.handleTechTouchStart_ =
                    function () { this.userWasActive = this.userActive() }, e.handleTechTouchMove_ = function () { this.userWasActive && this.reportUserActivity() }, e.handleTechTouchEnd_ = function (e) { e.preventDefault() }, e.handleStageClick_ = function () { this.reportUserActivity() }, e.toggleFullscreenClass_ = function () { this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen") }, e.documentFullscreenChange_ = function (e) {
                        var t = e.target.player; if (!t || t === this) {
                            var i = this.el(), n = h[this.fsApi_.fullscreenElement] === i; !n &&
                                i.matches ? n = i.matches(":" + this.fsApi_.fullscreen) : !n && i.msMatchesSelector && (n = i.msMatchesSelector(":" + this.fsApi_.fullscreen)), this.isFullscreen(n)
                        }
                    }, e.handleTechFullscreenChange_ = function (e, t) { t && this.isFullscreen(t.isFullscreen) }, e.togglePictureInPictureClass_ = function () { this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture") }, e.handleTechEnterPictureInPicture_ = function (e) { this.isInPictureInPicture(!0) }, e.handleTechLeavePictureInPicture_ = function (e) { this.isInPictureInPicture(!1) },
                    e.handleTechError_ = function () { var e = this.tech_.error(); this.error(e) }, e.handleTechTextData_ = function (e, t) { var i = null; 1 < arguments.length && (i = t), this.trigger("textdata", i) }, e.getCache = function () { return this.cache_ }, e.resetCache_ = function () { this.cache_ = { currentTime: 0, inactivityTimeout: this.options_.inactivityTimeout, duration: NaN, lastVolume: 1, lastPlaybackRate: this.defaultPlaybackRate(), media: null, src: "", source: {}, sources: [], volume: 1 } }, e.techCall_ = function (e, t) {
                        this.ready(function () {
                            if (e in Yi) return function (e,
                                t, i, n) { return t[i](e.reduce(Qi(i), n)) }(this.middleware_, this.tech_, e, t); if (e in $i) return Ki(this.middleware_, this.tech_, e, t); try { this.tech_ && this.tech_[e](t) } catch (e) { throw p(e), e; }
                        }, !0)
                    }, e.techGet_ = function (t) {
                        if (this.tech_ && this.tech_.isReady_) {
                            if (t in Xi) return function (e, t, i) { return e.reduceRight(Qi(i), t[i]()) }(this.middleware_, this.tech_, t); if (t in $i) return Ki(this.middleware_, this.tech_, t); try { return this.tech_[t]() } catch (e) {
                                if (void 0 === this.tech_[t]) throw p("Video.js: " + t + " method not defined for " +
                                    this.techName_ + " playback technology.", e), e; if ("TypeError" === e.name) throw p("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e; throw p(e), e;
                            }
                        }
                    }, e.play = function () { var t = this, e = this.options_.Promise || y.Promise; return e ? new e(function (e) { t.play_(e) }) : this.play_() }, e.play_ = function (e) {
                        var t = this; void 0 === e && (e = kt), this.playCallbacks_.push(e); var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc())); if (this.waitToPlay_ && (this.off(["ready",
                            "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !i) return this.waitToPlay_ = function (e) { t.play_() }, this.one(["ready", "loadstart"], this.waitToPlay_), void (i || !ot && !at || this.load()); var n = this.techGet_("play"); null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
                    }, e.runPlayTerminatedQueue_ = function () { var e = this.playTerminatedQueue_.slice(0); this.playTerminatedQueue_ = [], e.forEach(function (e) { e() }) }, e.runPlayCallbacks_ = function (t) {
                        var e = this.playCallbacks_.slice(0); this.playCallbacks_ =
                            [], this.playTerminatedQueue_ = [], e.forEach(function (e) { e(t) })
                    }, e.pause = function () { this.techCall_("pause") }, e.paused = function () { return !1 !== this.techGet_("paused") }, e.played = function () { return this.techGet_("played") || ht(0, 0) }, e.scrubbing = function (e) { if ("undefined" == typeof e) return this.scrubbing_; this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing") }, e.currentTime = function (e) {
                        return "undefined" != typeof e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime =
                            this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, e.duration = function (e) { if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN; (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? (this.addClass("vjs-live"), this.options_.liveui && this.player_.liveTracker && this.addClass("vjs-liveui")) : (this.removeClass("vjs-live"), this.removeClass("vjs-liveui")), isNaN(e) || this.trigger("durationchange")) }, e.remainingTime = function () {
                        return this.duration() -
                            this.currentTime()
                    }, e.remainingTimeDisplay = function () { return Math.floor(this.duration()) - Math.floor(this.currentTime()) }, e.buffered = function () { var e = this.techGet_("buffered"); return e && e.length || (e = ht(0, 0)), e }, e.bufferedPercent = function () { return dt(this.buffered(), this.duration()) }, e.bufferedEnd = function () { var e = this.buffered(), t = this.duration(), i = e.end(e.length - 1); return t < i && (i = t), i }, e.volume = function (e) {
                        var t; return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume",
                            t), void (0 < t && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                    }, e.muted = function (e) { if (void 0 === e) return this.techGet_("muted") || !1; this.techCall_("setMuted", e) }, e.defaultMuted = function (e) { return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1 }, e.lastVolume_ = function (e) { if (void 0 === e || 0 === e) return this.cache_.lastVolume; this.cache_.lastVolume = e }, e.supportsFullScreen = function () { return this.techGet_("supportsFullScreen") || !1 }, e.isFullscreen =
                    function (e) { if (void 0 === e) return this.isFullscreen_; var t = this.isFullscreen_; return this.isFullscreen_ = Boolean(e), this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), void this.toggleFullscreenClass_() }, e.requestFullscreen = function (e) {
                        var t, i = this; if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) {
                            var n = this.el_[this.fsApi_.requestFullscreen](t); return n && n.then(function () { return i.isFullscreen(!0) },
                                function () { return i.isFullscreen(!1) }), n
                        } this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : this.enterFullWindow()
                    }, e.exitFullscreen = function () { var e = this; if (this.fsApi_.requestFullscreen) { var t = h[this.fsApi_.exitFullscreen](); return t && t.then(function () { return e.isFullscreen(!1) }), t } this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : this.exitFullWindow() }, e.enterFullWindow = function () {
                        this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = h.documentElement.style.overflow,
                        he(h, "keydown", this.boundFullWindowOnEscKey_), h.documentElement.style.overflow = "hidden", w(h.body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.fullWindowOnEscKey = function (e) { Lt.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow()) }, e.exitFullWindow = function () { this.isFullscreen(!1), this.isFullWindow = !1, de(h, "keydown", this.boundFullWindowOnEscKey_), h.documentElement.style.overflow = this.docOrigOverflow, L(h.body, "vjs-full-window"), this.trigger("exitFullWindow") },
                    e.isInPictureInPicture = function (e) { return void 0 !== e ? (this.isInPictureInPicture_ = !!e, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_ }, e.requestPictureInPicture = function () { if ("pictureInPictureEnabled" in h) return this.techGet_("requestPictureInPicture") }, e.exitPictureInPicture = function () { if ("pictureInPictureEnabled" in h) return h.exitPictureInPicture() }, e.handleKeyDown = function (e) {
                        var t = this.options_.userActions; if (t && t.hotkeys) !function (e) {
                            var t = e.tagName.toLowerCase(); if (e.isContentEditable) return !0;
                            if ("input" === t) return -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type); return -1 !== ["textarea"].indexOf(t)
                        }(this.el_.ownerDocument.activeElement) && ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e))
                    }, e.handleHotkeys = function (e) {
                        var t = this.options_.userActions ? this.options_.userActions.hotkeys : {}, i = t.fullscreenKey, n = void 0 === i ? function (e) { return Lt.isEventKey(e, "f") } : i, r = t.muteKey, s = void 0 === r ? function (e) { return Lt.isEventKey(e, "m") } : r, a = t.playPauseKey,
                        o = void 0 === a ? function (e) { return Lt.isEventKey(e, "k") || Lt.isEventKey(e, "Space") } : a; if (n.call(this, e)) { e.preventDefault(), e.stopPropagation(); var u = Ue.getComponent("FullscreenToggle"); !1 !== h[this.fsApi_.fullscreenEnabled] && u.prototype.handleClick.call(this, e) } else if (s.call(this, e)) e.preventDefault(), e.stopPropagation(), Ue.getComponent("MuteToggle").prototype.handleClick.call(this, e); else if (o.call(this, e)) e.preventDefault(), e.stopPropagation(), Ue.getComponent("PlayToggle").prototype.handleClick.call(this,
                            e)
                    }, e.canPlayType = function (e) { for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) { var r = n[i], s = Vi.getTech(r); if (s = s || Ue.getComponent(r)) { if (s.isSupported() && (t = s.canPlayType(e))) return t } else p.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.') } return "" }, e.selectSource = function (e) {
                        function t(e, i, n) { var r; return e.some(function (t) { return i.some(function (e) { if (r = n(t, e)) return !0 }) }), r } function i(e, t) {
                            var i = e[0]; if (e[1].canPlaySource(t, r.options_[i.toLowerCase()])) return {
                                source: t,
                                tech: i
                            }
                        } var n, r = this, s = this.options_.techOrder.map(function (e) { return [e, Vi.getTech(e)] }).filter(function (e) { var t = e[0], i = e[1]; return i ? i.isSupported() : (p.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1) }); return (this.options_.sourceOrder ? t(e, s, (n = i, function (e, t) { return n(t, e) })) : t(s, e, i)) || !1
                    }, e.src = function (e) {
                        var i = this; if ("undefined" == typeof e) return this.cache_.src || ""; var n = function t(e) {
                            if (Array.isArray(e)) {
                                var i = []; e.forEach(function (e) {
                                    e = t(e), Array.isArray(e) ?
                                        i = i.concat(e) : o(e) && i.push(e)
                                }), e = i
                            } else e = "string" == typeof e && e.trim() ? [tn({ src: e })] : o(e) && "string" == typeof e.src && e.src && e.src.trim() ? [tn(e)] : []; return e
                        }(e); n.length ? (this.changingSrc_ = !0, this.cache_.sources = n, this.updateSourceCaches_(n[0]), Gi(this, n[0], function (e, t) {
                            if (i.middleware_ = t, i.cache_.sources = n, i.updateSourceCaches_(e), i.src_(e)) return 1 < n.length ? i.src(n.slice(1)) : (i.changingSrc_ = !1, i.setTimeout(function () { this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) }) },
                                0), void i.triggerReady()); !function (e, t) { e.forEach(function (e) { return e.setTech && e.setTech(t) }) }(t, i.tech_)
                        })) : this.setTimeout(function () { this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) }) }, 0)
                    }, e.src_ = function (e) {
                        var t = this, i = this.selectSource([e]); return !i || (function (e, t) { return De(e) === De(t) }(i.tech, this.techName_) ? this.ready(function () {
                            this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ =
                                !1
                        }, !0) : (this.changingSrc_ = !0, this.loadTech_(i.tech, i.source), this.tech_.ready(function () { t.changingSrc_ = !1 })), !1)
                    }, e.load = function () { this.techCall_("load") }, e.reset = function () { var e = this, t = this.options_.Promise || y.Promise; this.paused() || !t ? this.doReset_() : kt(this.play().then(function () { return e.doReset_() })) }, e.doReset_ = function () {
                        this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(),
                        Le(this) && this.trigger("playerreset")
                    }, e.resetControlBarUI_ = function () { this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_() }, e.resetProgressBar_ = function () { this.currentTime(0); var e = this.controlBar, t = e.durationDisplay, i = e.remainingTimeDisplay; t && t.updateContent(), i && i.updateContent() }, e.resetPlaybackRate_ = function () { this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_() }, e.resetVolumeBar_ = function () { this.volume(1), this.trigger("volumechange") }, e.currentSources =
                    function () { var e = this.currentSource(), t = []; return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t }, e.currentSource = function () { return this.cache_.source || {} }, e.currentSrc = function () { return this.currentSource() && this.currentSource().src || "" }, e.currentType = function () { return this.currentSource() && this.currentSource().type || "" }, e.preload = function (e) { return void 0 !== e ? (this.techCall_("setPreload", e), void (this.options_.preload = e)) : this.techGet_("preload") }, e.autoplay = function (e) {
                        if (void 0 ===
                            e) return this.options_.autoplay || !1; var t; "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = "undefined" == typeof t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
                    }, e.playsinline = function (e) { return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline") }, e.loop = function (e) {
                        return void 0 !== e ? (this.techCall_("setLoop", e), void (this.options_.loop = e)) :
                            this.techGet_("loop")
                    }, e.poster = function (e) { if (void 0 === e) return this.poster_; (e = e || "") !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange")) }, e.handleTechPosterChange_ = function () { if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) { var e = this.tech_.poster() || ""; e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange")) } }, e.controls = function (e) {
                        if (void 0 === e) return !!this.controls_;
                        e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                    }, e.usingNativeControls = function (e) {
                        if (void 0 ===
                            e) return !!this.usingNativeControls_; e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                    }, e.error = function (e) {
                        if (void 0 === e) return this.error_ || null; if (this.options_.suppressNotSupportedError && e && 4 === e.code) {
                            var t = function () { this.error(e) }; return this.options_.suppressNotSupportedError = !1, this.any(["click",
                                "touchstart"], t), void this.one("loadstart", function () { this.off(["click", "touchstart"], t) })
                        } if (null === e) return this.error_ = e, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close()); this.error_ = new _t(e), this.addClass("vjs-error"), p.error("(CODE:" + this.error_.code + " " + _t.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error")
                    }, e.reportUserActivity = function (e) { this.userActivity_ = !0 }, e.userActive = function (e) {
                        if (void 0 === e) return this.userActive_;
                        if ((e = !!e) !== this.userActive_) { if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive"); this.tech_ && this.tech_.one("mousemove", function (e) { e.stopPropagation(), e.preventDefault() }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive") }
                    }, e.listenForUserActivity_ = function () {
                        function e(e) { r(), this.clearInterval(t) } var t, i,
                            n, r = ge(this, this.reportUserActivity); this.on("mousedown", function () { r(), this.clearInterval(t), t = this.setInterval(r, 250) }), this.on("mousemove", function (e) { e.screenX === i && e.screenY === n || (i = e.screenX, n = e.screenY, r()) }), this.on("mouseup", e), this.on("mouseleave", e); var s, a = this.getChild("controlBar"); !a || at || Ke || (a.on("mouseenter", function (e) { this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout, this.player().options_.inactivityTimeout = 0 }), a.on("mouseleave", function (e) {
                                this.player().options_.inactivityTimeout =
                                this.player().cache_.inactivityTimeout
                            })), this.on("keydown", r), this.on("keyup", r), this.setInterval(function () { if (this.userActivity_) { this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s); var e = this.options_.inactivityTimeout; e <= 0 || (s = this.setTimeout(function () { this.userActivity_ || this.userActive(!1) }, e)) } }, 250)
                    }, e.playbackRate = function (e) {
                        if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1; this.techCall_("setPlaybackRate",
                            e)
                    }, e.defaultPlaybackRate = function (e) { return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1 }, e.isAudio = function (e) { if (void 0 === e) return !!this.isAudio_; this.isAudio_ = !!e }, e.addTextTrack = function (e, t, i) { if (this.tech_) return this.tech_.addTextTrack(e, t, i) }, e.addRemoteTextTrack = function (e, t) { if (this.tech_) return this.tech_.addRemoteTextTrack(e, t) }, e.removeRemoteTextTrack = function (e) {
                        void 0 === e && (e = {}); var t = e.track;
                        if (t = t || e, this.tech_) return this.tech_.removeRemoteTextTrack(t)
                    }, e.getVideoPlaybackQuality = function () { return this.techGet_("getVideoPlaybackQuality") }, e.videoWidth = function () { return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0 }, e.videoHeight = function () { return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0 }, e.language = function (e) { if (void 0 === e) return this.language_; this.language_ = String(e).toLowerCase() }, e.languages = function () {
                        return Re(l.prototype.options_.languages,
                            this.languages_)
                    }, e.toJSON = function () { var e = Re(this.options_), t = e.tracks; e.tracks = []; for (var i = 0; i < t.length; i++) { var n = t[i]; (n = Re(n)).player = void 0, e.tracks[i] = n } return e }, e.createModal = function (e, t) { var i = this; (t = t || {}).content = e || ""; var n = new At(this, t); return this.addChild(n), n.on("dispose", function () { i.removeChild(n) }), n.open(), n }, e.updateCurrentBreakpoint_ = function () {
                        if (this.responsive()) for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Fr.length; i++) {
                            var n = Fr[i]; if (t <= this.breakpoints_[n]) {
                                if (e ===
                                    n) return; e && this.removeClass(Hr[e]), this.addClass(Hr[n]), this.breakpoint_ = n; break
                            }
                        }
                    }, e.removeCurrentBreakpoint_ = function () { var e = this.currentBreakpointClass(); this.breakpoint_ = "", e && this.removeClass(e) }, e.breakpoints = function (e) { return void 0 === e || (this.breakpoint_ = "", this.breakpoints_ = m({}, Vr, e), this.updateCurrentBreakpoint_()), m(this.breakpoints_) }, e.responsive = function (e) {
                        return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? ((this.responsive_ = e) ? (this.on("playerresize", this.updateCurrentBreakpoint_),
                            this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
                    }, e.currentBreakpoint = function () { return this.breakpoint_ }, e.currentBreakpointClass = function () { return Hr[this.breakpoint_] || "" }, e.loadMedia = function (e, t) {
                        var i = this; if (e && "object" == typeof e) {
                            this.reset(), this.cache_.media = Re(e); var n = this.cache_.media, r = n.artwork, s = n.poster, a = n.src, o = n.textTracks; !r && s && (this.cache_.media.artwork = [{ src: s, type: Zi(s) }]), a && this.src(a), s &&
                                this.poster(s), Array.isArray(o) && o.forEach(function (e) { return i.addRemoteTextTrack(e, !1) }), this.ready(t)
                        }
                    }, e.getMedia = function () { if (this.cache_.media) return Re(this.cache_.media); var e = this.poster(), t = { src: this.currentSources(), textTracks: Array.prototype.map.call(this.remoteTextTracks(), function (e) { return { kind: e.kind, label: e.label, language: e.language, src: e.src } }) }; return e && (t.poster = e, t.artwork = [{ src: t.poster, type: Zi(t.poster) }]), t }, l.getTagSettings = function (e) {
                        var t = { sources: [], tracks: [] }, i = I(e),
                        n = i["data-setup"]; if (E(e, "vjs-fill") && (i.fill = !0), E(e, "vjs-fluid") && (i.fluid = !0), null !== n) { var r = Tt(n || "{}"), s = r[0], a = r[1]; s && p.error(s), m(i, a) } if (m(t, i), e.hasChildNodes()) for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) { var c = o[u], h = c.nodeName.toLowerCase(); "source" === h ? t.sources.push(I(c)) : "track" === h && t.tracks.push(I(c)) } return t
                    }, e.flexNotSupported_ = function () {
                        var e = h.createElement("i"); return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style ||
                            "msFlexOrder" in e.style)
                    }, l
            }(Ue); hi.names.forEach(function (e) { var t = hi[e]; qr.prototype[t.getterName] = function () { return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]) } }), qr.players = {}; var Wr = y.navigator; qr.prototype.options_ = {
                techOrder: Vi.defaultTechOrder_, html5: {}, flash: {}, inactivityTimeout: 2E3, playbackRates: [], liveui: !1, children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar",
                    "errorDisplay", "textTrackSettings", "resizeManager"], language: Wr && (Wr.languages && Wr.languages[0] || Wr.userLanguage || Wr.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media.", fullscreen: { options: { navigationUI: "hide" } }, breakpoints: {}, responsive: !1
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) { qr.prototype[e] = function () { return this.techGet_(e) } }), Br.forEach(function (e) { qr.prototype["handleTech" + De(e) + "_"] = function () { return this.trigger(e) } }),
                Ue.registerComponent("Player", qr); function zr(e) { return es.hasOwnProperty(e) } function Gr(e) { return zr(e) ? es[e] : void 0 } function Kr(e, t) { e[Zr] = e[Zr] || {}, e[Zr][t] = !0 } function Xr(e, t, i) { var n = (i ? "before" : "") + "pluginsetup"; e.trigger(n, t), e.trigger(n + ":" + t.name, t) } function Yr(r, s) {
                    return s.prototype.name = r, function () {
                        Xr(this, { name: r, plugin: s, instance: null }, !0); for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; var n = Qr(s, [this].concat(t)); return this[r] = function () { return n }, Xr(this,
                            n.getEventHash()), n
                    }
                } var $r = t(function (i) { function n(e, t) { return i.exports = n = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e }, n(e, t) } i.exports = n }), Qr = t(function (n) {
                    function r(e, t, i) {
                        return !function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0 } catch (e) { return !1 } }() ? n.exports = r = function (e, t, i) {
                            var n = [null]; n.push.apply(n,
                                t); var r = new (Function.bind.apply(e, n)); return i && $r(r, i.prototype), r
                        } : n.exports = r = Reflect.construct, r.apply(null, arguments)
                    } n.exports = r
                }), Jr = "plugin", Zr = "activePlugins_", es = {}, ts = function () {
                    function i(e) { if (this.constructor === i) throw new Error("Plugin must be sub-classed; not directly instantiated."); this.player = e, Ae(this), delete this.trigger, xe(this, this.constructor.defaultState), Kr(e, this.name), this.dispose = ge(this, this.dispose), e.on("dispose", this.dispose) } var e = i.prototype; return e.version = function () { return this.constructor.VERSION },
                        e.getEventHash = function (e) { return void 0 === e && (e = {}), e.name = this.name, e.plugin = this.constructor, e.instance = this, e }, e.trigger = function (e, t) { return void 0 === t && (t = {}), pe(this.eventBusEl_, e, this.getEventHash(t)) }, e.handleStateChanged = function (e) { }, e.dispose = function () { var e = this.name, t = this.player; this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[Zr][e] = !1, this.player = this.state = null, t[e] = Yr(e, es[e]) }, i.isBasic = function (e) {
                            var t = "string" == typeof e ? Gr(e) : e; return "function" == typeof t &&
                                !i.prototype.isPrototypeOf(t.prototype)
                        }, i.registerPlugin = function (e, t) {
                            if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + typeof e + "."); if (zr(e)) p.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (qr.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!'); if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' +
                                typeof t + "."); return es[e] = t, e !== Jr && (i.isBasic(t) ? qr.prototype[e] = function (t, i) { function n() { Xr(this, { name: t, plugin: i, instance: null }, !0); var e = i.apply(this, arguments); return Kr(this, t), Xr(this, { name: t, plugin: i, instance: e }), e } return Object.keys(i).forEach(function (e) { n[e] = i[e] }), n }(e, t) : qr.prototype[e] = Yr(e, t)), t
                        }, i.deregisterPlugin = function (e) { if (e === Jr) throw new Error("Cannot de-register base plugin."); zr(e) && (delete es[e], delete qr.prototype[e]) }, i.getPlugins = function (e) {
                            var i; return void 0 ===
                                e && (e = Object.keys(es)), e.forEach(function (e) { var t = Gr(e); t && ((i = i || {})[e] = t) }), i
                        }, i.getPluginVersion = function (e) { var t = Gr(e); return t && t.VERSION || "" }, i
                }(); ts.getPlugin = Gr, ts.BASE_PLUGIN_NAME = Jr, ts.registerPlugin(Jr, ts), qr.prototype.usingPlugin = function (e) { return !!this[Zr] && !0 === this[Zr][e] }, qr.prototype.hasPlugin = function (e) { return !!zr(e) }; var is = function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype,
                        { constructor: { value: e, writable: !0, configurable: !0 } }), t && $r(e, t)
                }, ns = function (e) { return 0 === e.indexOf("#") ? e.slice(1) : e }; function rs(e, i, t) {
                    var n = rs.getPlayer(e); if (n) return i && p.warn('Player "' + e + '" is already initialised. Options will not be applied.'), t && n.ready(t), n; var r = "string" == typeof e ? G("#" + ns(e)) : e; if (!_(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)"); r.ownerDocument.defaultView && r.ownerDocument.body.contains(r) || p.warn("The element supplied is not included in the DOM"),
                        i = i || {}, rs.hooks("beforesetup").forEach(function (e) { var t = e(r, Re(i)); o(t) && !Array.isArray(t) ? i = Re(i, t) : p.error("please return an object in beforesetup hooks") }); var s = Ue.getComponent("Player"); return n = new s(r, i, t), rs.hooks("setup").forEach(function (e) { return e(n) }), n
                } if (rs.hooks_ = {}, rs.hooks = function (e, t) { return rs.hooks_[e] = rs.hooks_[e] || [], t && (rs.hooks_[e] = rs.hooks_[e].concat(t)), rs.hooks_[e] }, rs.hook = function (e, t) { rs.hooks(e, t) }, rs.hookOnce = function (i, e) {
                    rs.hooks(i, [].concat(e).map(function (t) {
                        return function e() {
                            return rs.removeHook(i,
                                e), t.apply(void 0, arguments)
                        }
                    }))
                }, rs.removeHook = function (e, t) { var i = rs.hooks(e).indexOf(t); return !(i <= -1) && (rs.hooks_[e] = rs.hooks_[e].slice(), rs.hooks_[e].splice(i, 1), !0) }, !0 !== y.VIDEOJS_NO_DYNAMIC_STYLE && v()) { var ss = G(".vjs-styles-defaults"); if (!ss) { ss = Z("vjs-styles-defaults"); var as = G("head"); as && as.insertBefore(ss, as.firstChild), ee(ss, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ") } } Q(1, rs), rs.VERSION =
                    d, rs.options = qr.prototype.options_, rs.getPlayers = function () { return qr.players }, rs.getPlayer = function (e) { var t, i = qr.players; if ("string" == typeof e) { var n = ns(e), r = i[n]; if (r) return r; t = G("#" + n) } else t = e; if (_(t)) { var s = t, a = s.player, o = s.playerId; if (a || i[o]) return a || i[o] } }, rs.getAllPlayers = function () { return Object.keys(qr.players).map(function (e) { return qr.players[e] }).filter(Boolean) }, rs.players = qr.players, rs.getComponent = Ue.getComponent, rs.registerComponent = function (e, t) {
                        Vi.isTech(t) && p.warn("The " + e +
                            " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Ue.registerComponent.call(Ue, e, t)
                    }, rs.getTech = Vi.getTech, rs.registerTech = Vi.registerTech, rs.use = function (e, t) { qi[e] = qi[e] || [], qi[e].push(t) }, Object.defineProperty(rs, "middleware", { value: {}, writeable: !1, enumerable: !0 }), Object.defineProperty(rs.middleware, "TERMINATOR", { value: zi, writeable: !1, enumerable: !0 }), rs.browser = ut, rs.TOUCH_ENABLED = nt, rs.extend = function (e, t) {
                        void 0 === t && (t = {}); var i = function () {
                            e.apply(this,
                                arguments)
                        }, n = {}; for (var r in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), n = t) : "function" == typeof t && (i = t), is(i, e), e && (i.super_ = e), n) n.hasOwnProperty(r) && (i.prototype[r] = n[r]); return i
                    }, rs.mergeOptions = Re, rs.bind = ge, rs.registerPlugin = ts.registerPlugin, rs.deregisterPlugin = ts.deregisterPlugin, rs.plugin = function (e, t) { return p.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), ts.registerPlugin(e, t) }, rs.getPlugins = ts.getPlugins, rs.getPlugin =
                    ts.getPlugin, rs.getPluginVersion = ts.getPluginVersion, rs.addLanguage = function (e, t) { var i; return e = ("" + e).toLowerCase(), rs.options.languages = Re(rs.options.languages, ((i = {})[e] = t, i)), rs.options.languages[e] }, rs.log = p, rs.createLogger = f, rs.createTimeRange = rs.createTimeRanges = ht, rs.formatTime = yn, rs.setFormatTime = function (e) { vn = e }, rs.resetFormatTime = function () { vn = gn }, rs.parseUrl = Rt, rs.isCrossOrigin = Nt, rs.EventTarget = ye, rs.on = he, rs.one = fe, rs.off = de, rs.trigger = pe, rs.xhr = Jt, rs.TextTrack = si, rs.AudioTrack = ai,
                    rs.VideoTrack = oi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (e) { rs[e] = function () { return p.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), X[e].apply(null, arguments) } }), rs.computedStyle = n, rs.dom = X, rs.url = Xt, rs.defineLazyProperty = Dr; var os = t(function (e, t) {
                        var i, c, n, r, h; i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                            c = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, h = {
                                buildAbsoluteURL: function (e, t, i) {
                                    if (i = i || {}, e = e.trim(), !(t = t.trim())) { if (!i.alwaysNormalize) return e; var n = h.parseURL(e); if (!n) throw new Error("Error trying to parse base URL."); return n.path = h.normalizePath(n.path), h.buildURLFromParts(n) } var r = h.parseURL(t); if (!r) throw new Error("Error trying to parse relative URL."); if (r.scheme) return i.alwaysNormalize ? (r.path = h.normalizePath(r.path), h.buildURLFromParts(r)) : t; var s =
                                        h.parseURL(e); if (!s) throw new Error("Error trying to parse base URL."); if (!s.netLoc && s.path && "/" !== s.path[0]) { var a = c.exec(s.path); s.netLoc = a[1], s.path = a[2] } s.netLoc && !s.path && (s.path = "/"); var o = { scheme: s.scheme, netLoc: r.netLoc, path: null, params: r.params, query: r.query, fragment: r.fragment }; if (!r.netLoc && (o.netLoc = s.netLoc, "/" !== r.path[0])) if (r.path) { var u = s.path, l = u.substring(0, u.lastIndexOf("/") + 1) + r.path; o.path = h.normalizePath(l) } else o.path = s.path, r.params || (o.params = s.params, r.query || (o.query = s.query));
                                    return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(r.path) : r.path), h.buildURLFromParts(o)
                                }, parseURL: function (e) { var t = i.exec(e); return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null }, normalizePath: function (e) { for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length;); return e.split("").reverse().join("") }, buildURLFromParts: function (e) { return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment }
                            },
                            e.exports = h
                    }); function us() { return (us = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e }).apply(this, arguments) } function ls(e, t) { e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t } function cs(e) {
                        for (var t, i = e.split(new RegExp('(?:^|,)((?:[^\x3d]*)\x3d(?:"[^"]*"|[^,]*))')), n = {}, r = i.length; r--;)"" !== i[r] && ((t = /([^=]*)=(.*)/.exec(i[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g,
                            ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), n[t[0]] = t[1]); return n
                    } var hs = function () {
                        function e() { this.listeners = {} } var t = e.prototype; return t.on = function (e, t) { this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t) }, t.off = function (e, t) { if (!this.listeners[e]) return !1; var i = this.listeners[e].indexOf(t); return this.listeners[e].splice(i, 1), -1 < i }, t.trigger = function (e, t) {
                            var i, n, r, s = this.listeners[e]; if (s) if (2 === arguments.length) for (n = s.length, i = 0; i < n; ++i)s[i].call(this,
                                t); else for (r = Array.prototype.slice.call(arguments, 1), n = s.length, i = 0; i < n; ++i)s[i].apply(this, r)
                        }, t.dispose = function () { this.listeners = {} }, t.pipe = function (t) { this.on("data", function (e) { t.push(e) }) }, e
                    }(), ds = function (t) { function e() { var e; return (e = t.call(this) || this).buffer = "", e } return ls(e, t), e.prototype.push = function (e) { var t; for (this.buffer += e, t = this.buffer.indexOf("\n"); -1 < t; t = this.buffer.indexOf("\n"))this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1) }, e }(hs),
                        ps = function (t) {
                            function e() { var e; return (e = t.call(this) || this).customParsers = [], e.tagMappers = [], e } ls(e, t); var i = e.prototype; return i.push = function (n) {
                                var u, l, c = this; 0 !== (n = n.trim()).length && ("#" === n[0] ? this.tagMappers.reduce(function (e, t) { var i = t(n); return i === n ? e : e.concat([i]) }, [n]).forEach(function (e) {
                                    for (var t = 0; t < c.customParsers.length; t++)if (c.customParsers[t].call(c, e)) return; if (0 === e.indexOf("#EXT")) if (e = e.replace("\r", ""), u = /^#EXTM3U/.exec(e)) c.trigger("data", { type: "tag", tagType: "m3u" }); else {
                                        if (u =
                                            /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return l = { type: "tag", tagType: "inf" }, u[1] && (l.duration = parseFloat(u[1])), u[2] && (l.title = u[2]), void c.trigger("data", l); if (u = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return l = { type: "tag", tagType: "targetduration" }, u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l); if (u = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return l = { type: "tag", tagType: "totalduration" }, u[1] && (l.duration = parseInt(u[1], 10)), void c.trigger("data", l); if (u = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return l =
                                                { type: "tag", tagType: "version" }, u[1] && (l.version = parseInt(u[1], 10)), void c.trigger("data", l); if (u = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = { type: "tag", tagType: "media-sequence" }, u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l); if (u = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return l = { type: "tag", tagType: "discontinuity-sequence" }, u[1] && (l.number = parseInt(u[1], 10)), void c.trigger("data", l); if (u = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return l = { type: "tag", tagType: "playlist-type" },
                                                    u[1] && (l.playlistType = u[1]), void c.trigger("data", l); if (u = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return l = { type: "tag", tagType: "byterange" }, u[1] && (l.length = parseInt(u[1], 10)), u[2] && (l.offset = parseInt(u[2], 10)), void c.trigger("data", l); if (u = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return l = { type: "tag", tagType: "allow-cache" }, u[1] && (l.allowed = !/NO/.test(u[1])), void c.trigger("data", l); if (u = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
                                                        if (l = { type: "tag", tagType: "map" }, u[1]) {
                                                            var i = cs(u[1]); if (i.URI && (l.uri =
                                                                i.URI), i.BYTERANGE) { var n = i.BYTERANGE.split("@"), r = n[0], s = n[1]; l.byterange = {}, r && (l.byterange.length = parseInt(r, 10)), s && (l.byterange.offset = parseInt(s, 10)) }
                                                        } c.trigger("data", l)
                                                    } else if (u = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
                                                        if (l = { type: "tag", tagType: "stream-inf" }, u[1]) {
                                                            if (l.attributes = cs(u[1]), l.attributes.RESOLUTION) { var a = l.attributes.RESOLUTION.split("x"), o = {}; a[0] && (o.width = parseInt(a[0], 10)), a[1] && (o.height = parseInt(a[1], 10)), l.attributes.RESOLUTION = o } l.attributes.BANDWIDTH && (l.attributes.BANDWIDTH =
                                                                parseInt(l.attributes.BANDWIDTH, 10)), l.attributes["PROGRAM-ID"] && (l.attributes["PROGRAM-ID"] = parseInt(l.attributes["PROGRAM-ID"], 10))
                                                        } c.trigger("data", l)
                                                    } else {
                                                        if (u = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return l = { type: "tag", tagType: "media" }, u[1] && (l.attributes = cs(u[1])), void c.trigger("data", l); if (u = /^#EXT-X-ENDLIST/.exec(e)) c.trigger("data", { type: "tag", tagType: "endlist" }); else if (u = /^#EXT-X-DISCONTINUITY/.exec(e)) c.trigger("data", { type: "tag", tagType: "discontinuity" }); else {
                                                            if (u = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return l =
                                                                { type: "tag", tagType: "program-date-time" }, u[1] && (l.dateTimeString = u[1], l.dateTimeObject = new Date(u[1])), void c.trigger("data", l); if (u = /^#EXT-X-KEY:?(.*)$/.exec(e)) return l = { type: "tag", tagType: "key" }, u[1] && (l.attributes = cs(u[1]), l.attributes.IV && ("0x" === l.attributes.IV.substring(0, 2).toLowerCase() && (l.attributes.IV = l.attributes.IV.substring(2)), l.attributes.IV = l.attributes.IV.match(/.{8}/g), l.attributes.IV[0] = parseInt(l.attributes.IV[0], 16), l.attributes.IV[1] = parseInt(l.attributes.IV[1], 16), l.attributes.IV[2] =
                                                                    parseInt(l.attributes.IV[2], 16), l.attributes.IV[3] = parseInt(l.attributes.IV[3], 16), l.attributes.IV = new Uint32Array(l.attributes.IV))), void c.trigger("data", l); if (u = /^#EXT-X-START:?(.*)$/.exec(e)) return l = { type: "tag", tagType: "start" }, u[1] && (l.attributes = cs(u[1]), l.attributes["TIME-OFFSET"] = parseFloat(l.attributes["TIME-OFFSET"]), l.attributes.PRECISE = /YES/.test(l.attributes.PRECISE)), void c.trigger("data", l); if (u = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return l = { type: "tag", tagType: "cue-out-cont" }, u[1] ?
                                                                        l.data = u[1] : l.data = "", void c.trigger("data", l); if (u = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return l = { type: "tag", tagType: "cue-out" }, u[1] ? l.data = u[1] : l.data = "", void c.trigger("data", l); if (u = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return l = { type: "tag", tagType: "cue-in" }, u[1] ? l.data = u[1] : l.data = "", void c.trigger("data", l); c.trigger("data", { type: "tag", data: e.slice(4) })
                                                        }
                                        }
                                    } else c.trigger("data", { type: "comment", text: e.slice(1) })
                                }) : this.trigger("data", { type: "uri", uri: n }))
                            }, i.addParser = function (e) {
                                var t = this, i = e.expression,
                                n = e.customType, r = e.dataParser, s = e.segment; "function" != typeof r && (r = function (e) { return e }), this.customParsers.push(function (e) { if (i.exec(e)) return t.trigger("data", { type: "custom", data: r(e), customType: n, segment: s }), !0 })
                            }, i.addTagMapper = function (e) { var t = e.expression, i = e.map; this.tagMappers.push(function (e) { return t.test(e) ? i(e) : e }) }, e
                        }(hs); function fs(e) { return !!e && "object" == typeof e } function ms() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)t[i] = arguments[i]; return t.reduce(function (t, i) {
                                return Object.keys(i).forEach(function (e) {
                                    Array.isArray(t[e]) &&
                                    Array.isArray(i[e]) ? t[e] = t[e].concat(i[e]) : fs(t[e]) && fs(i[e]) ? t[e] = ms(t[e], i[e]) : t[e] = i[e]
                                }), t
                            }, {})
                        } function gs(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function vs(e) { if (!e.length) return []; for (var t = [], i = 0; i < e.length; i++)t.push(e[i]); return t } var ys = function (t) {
                            function e() {
                                var e; (e = t.call(this) || this).lineStream = new ds, e.parseStream = new ps, e.lineStream.pipe(e.parseStream); var r, s, a = function (e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e), o = [], u = {}, l = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, c = 0; return e.manifest = { allowCache: !0, discontinuityStarts: [], segments: [] }, e.parseStream.on("data", function (t) {
                                    var i, n; ({
                                        tag: function () {
                                            ({
                                                "allow-cache": function () { this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", { message: "defaulting allowCache to YES" }), this.manifest.allowCache = !0) }, byterange: function () {
                                                    var e = {}; "length" in t && ((u.byterange = e).length = t.length, "offset" in t || (this.trigger("info", { message: "defaulting offset to zero" }),
                                                        t.offset = 0)), "offset" in t && ((u.byterange = e).offset = t.offset)
                                                }, endlist: function () { this.manifest.endList = !0 }, inf: function () {
                                                    "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", { message: "defaulting media sequence to zero" })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", { message: "defaulting discontinuity sequence to zero" })), 0 < t.duration && (u.duration = t.duration), 0 === t.duration && (u.duration = 0.01, this.trigger("info",
                                                        { message: "updating zero segment duration to a small value" })), this.manifest.segments = o
                                                }, key: function () {
                                                    if (t.attributes) if ("NONE" !== t.attributes.METHOD) if (t.attributes.URI) {
                                                        if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === t.attributes.KEYFORMAT) return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD) ? void this.trigger("warn", { message: "invalid key method provided for Widevine" }) : ("SAMPLE-AES-CENC" === t.attributes.METHOD && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }),
                                                            "data:text/plain;base64," !== t.attributes.URI.substring(0, 23) ? void this.trigger("warn", { message: "invalid key URI provided for Widevine" }) : t.attributes.KEYID && "0x" === t.attributes.KEYID.substring(0, 2) ? void (this.manifest.contentProtection = { "com.widevine.alpha": { attributes: { schemeIdUri: t.attributes.KEYFORMAT, keyId: t.attributes.KEYID.substring(2) }, pssh: function (e) { for (var t = y.atob(e || ""), i = new Uint8Array(t.length), n = 0; n < t.length; n++)i[n] = t.charCodeAt(n); return i }(t.attributes.URI.split(",")[1]) } }) : void this.trigger("warn",
                                                                { message: "invalid key ID provided for Widevine" })); t.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }), s = { method: t.attributes.METHOD || "AES-128", uri: t.attributes.URI }, "undefined" != typeof t.attributes.IV && (s.iv = t.attributes.IV)
                                                    } else this.trigger("warn", { message: "ignoring key declaration without URI" }); else s = null; else this.trigger("warn", { message: "ignoring key declaration without attribute list" })
                                                }, "media-sequence": function () {
                                                    isFinite(t.number) ? this.manifest.mediaSequence =
                                                        t.number : this.trigger("warn", { message: "ignoring invalid media sequence: " + t.number })
                                                }, "discontinuity-sequence": function () { isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, c = t.number) : this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + t.number }) }, "playlist-type": function () { /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", { message: "ignoring unknown playlist type: " + t.playlist }) }, map: function () {
                                                    r = {}, t.uri && (r.uri = t.uri),
                                                    t.byterange && (r.byterange = t.byterange)
                                                }, "stream-inf": function () { this.manifest.playlists = o, this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes ? (u.attributes || (u.attributes = {}), us(u.attributes, t.attributes)) : this.trigger("warn", { message: "ignoring empty stream-inf attributes" }) }, media: function () {
                                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                                        var e = this.manifest.mediaGroups[t.attributes.TYPE]; e[t.attributes["GROUP-ID"]] =
                                                            e[t.attributes["GROUP-ID"]] || {}, i = e[t.attributes["GROUP-ID"]], (n = { default: /yes/i.test(t.attributes.DEFAULT) }).default ? n.autoselect = !0 : n.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE), t.attributes.URI && (n.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)),
                                                            i[t.attributes.NAME] = n
                                                    } else this.trigger("warn", { message: "ignoring incomplete or missing media group" })
                                                }, discontinuity: function () { c += 1, u.discontinuity = !0, this.manifest.discontinuityStarts.push(o.length) }, "program-date-time": function () { "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), u.dateTimeString = t.dateTimeString, u.dateTimeObject = t.dateTimeObject }, targetduration: function () {
                                                    !isFinite(t.duration) || t.duration <
                                                        0 ? this.trigger("warn", { message: "ignoring invalid target duration: " + t.duration }) : this.manifest.targetDuration = t.duration
                                                }, totalduration: function () { !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", { message: "ignoring invalid total duration: " + t.duration }) : this.manifest.totalDuration = t.duration }, start: function () { t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = { timeOffset: t.attributes["TIME-OFFSET"], precise: t.attributes.PRECISE } : this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" }) },
                                                "cue-out": function () { u.cueOut = t.data }, "cue-out-cont": function () { u.cueOutCont = t.data }, "cue-in": function () { u.cueIn = t.data }
                                            }[t.tagType] || function () { }).call(a)
                                        }, uri: function () { u.uri = t.uri, o.push(u), !this.manifest.targetDuration || "duration" in u || (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), u.duration = this.manifest.targetDuration), s && (u.key = s), u.timeline = c, r && (u.map = r), u = {} }, comment: function () { }, custom: function () {
                                            t.segment ? (u.custom = u.custom || {}, u.custom[t.customType] =
                                                t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
                                        }
                                    })[t.type].call(a)
                                }), e
                            } ls(e, t); var i = e.prototype; return i.push = function (e) { this.lineStream.push(e) }, i.end = function () { this.lineStream.push("\n") }, i.addParser = function (e) { this.parseStream.addParser(e) }, i.addTagMapper = function (e) { this.parseStream.addTagMapper(e) }, e
                        }(hs), _s = "INVALID_NUMBER_OF_PERIOD", bs = "DASH_EMPTY_MANIFEST", Ts = "DASH_INVALID_XML", Ss = "NO_BASE_URL", ks = "SEGMENT_TIME_UNSPECIFIED", Cs = "UNSUPPORTED_UTC_TIMING_SCHEME";
    function Es(e, t) { return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = Ws.buildAbsoluteURL(y.location.href, e)), Ws.buildAbsoluteURL(e, t)) } function ws(e) { var t = e.baseUrl, i = void 0 === t ? "" : t, n = e.source, r = void 0 === n ? "" : n, s = e.range, a = void 0 === s ? "" : s, o = e.indexRange, u = void 0 === o ? "" : o, l = { uri: r, resolvedUri: Es(i || "", r) }; if (a || u) { var c = (a || u).split("-"), h = parseInt(c[0], 10), d = parseInt(c[1], 10); l.byterange = { length: d - h + 1, offset: h } } return l } function Ls(e) {
        var t = e.type, i = void 0 === t ? "static" : t, n = e.duration, r = e.timescale,
        s = void 0 === r ? 1 : r, a = e.sourceDuration, o = zs[i](e), u = function (e, t) { for (var i = [], n = e; n < t; n++)i.push(n); return i }(o.start, o.end).map(function (o) { return function (e, t) { var i = o.duration, n = o.timescale, r = void 0 === n ? 1 : n, s = o.periodIndex, a = o.startNumber; return { number: (void 0 === a ? 1 : a) + e, duration: i / r, timeline: s, time: t * i } } }(e)); if ("static" === i) { var l = u.length - 1; u[l].duration = a - n / s * l } return u
    } function Ps(e) {
        var t = e.baseUrl, i = e.initialization, n = void 0 === i ? {} : i, r = e.sourceDuration, s = e.timescale, a = void 0 === s ? 1 : s, o = e.indexRange,
        u = void 0 === o ? "" : o, l = e.duration; if (!t) throw new Error(Ss); var c = ws({ baseUrl: t, source: n.sourceURL, range: n.range }), h = ws({ baseUrl: t, source: t, indexRange: u }); if (h.map = c, l) { var d = Ls(e); d.length && (h.duration = d[0].duration, h.timeline = d[0].timeline) } else r && (h.duration = r / a, h.timeline = 0); return h.number = 0, [h]
    } function As(e, t, i) {
        for (var n = e.sidx.map ? e.sidx.map : null, r = e.sidx.duration, s = e.timeline || 0, a = e.sidx.byterange, o = a.offset + a.length, u = t.timescale, l = t.references.filter(function (e) { return 1 !== e.referenceType }),
            c = [], h = o + t.firstOffset, d = 0; d < l.length; d++) { var p = t.references[d], f = p.referencedSize, m = p.subsegmentDuration, g = Ps({ baseUrl: i, timescale: u, timeline: s, periodIndex: s, duration: m, sourceDuration: r, indexRange: h + "-" + (h + f - 1) })[0]; n && (g.map = n), c.push(g), h += f } return e.segments = c, e
    } function Is(e) {
        return function (t) { return Object.keys(t).map(function (e) { return t[e] }) }(e.reduce(function (e, t) {
            var i, n = t.attributes.id + (t.attributes.lang || ""); e[n] ? (t.segments[0] && (t.segments[0].discontinuity = !0), (i = e[n].segments).push.apply(i,
                t.segments), t.attributes.contentProtection && (e[n].attributes.contentProtection = t.attributes.contentProtection)) : e[n] = t; return e
        }, {})).map(function (e) { return e.discontinuityStarts = function (e, n) { return e.reduce(function (e, t, i) { return t[n] && e.push(i), e }, []) }(e.segments, "discontinuity"), e })
    } function xs(e, t) {
        if (void 0 === t && (t = {}), !Object.keys(t).length) return e; for (var i in e) {
            var n = e[i]; if (n.sidx) {
                var r = n.sidx.uri + "-" + (a = n.sidx.byterange, void 0, o = a.offset + a.length - 1, a.offset + "-" + o), s = t[r] && t[r].sidx;
                n.sidx && s && As(n, s, n.sidx.resolvedUri)
            }
        } var a, o; return e
    } function Os(e) {
        var t, i = e.attributes, n = e.segments, r = e.sidx, s = { attributes: (t = { NAME: i.id, AUDIO: "audio", SUBTITLES: "subs", RESOLUTION: { width: i.width, height: i.height }, CODECS: i.codecs, BANDWIDTH: i.bandwidth }, t["PROGRAM-ID"] = 1, t), uri: "", endList: "static" === (i.type || "static"), timeline: i.periodIndex, resolvedUri: "", targetDuration: i.duration, segments: n, mediaSequence: n.length ? n[0].number : 1 }; return i.contentProtection && (s.contentProtection = i.contentProtection),
            r && (s.sidx = r), s
    } function Ds(e, t) {
        var i; if (void 0 === t && (t = {}), !e.length) return {}; var n = e[0].attributes, r = n.sourceDuration, s = n.minimumUpdatePeriod, a = void 0 === s ? 0 : s, o = Is(e.filter(function (e) { var t = e.attributes; return "video/mp4" === t.mimeType || "video" === t.contentType })).map(Os), u = Is(e.filter(function (e) { var t = e.attributes; return "audio/mp4" === t.mimeType || "audio" === t.contentType })), l = e.filter(function (e) { var t = e.attributes; return "text/vtt" === t.mimeType || "text" === t.contentType }), c = {
            allowCache: !0, discontinuityStarts: [],
            segments: [], endList: !0, mediaGroups: (i = { AUDIO: {}, VIDEO: {} }, i["CLOSED-CAPTIONS"] = {}, i.SUBTITLES = {}, i), uri: "", duration: r, playlists: xs(o, t), minimumUpdatePeriod: 1E3 * a
        }; return u.length && (c.mediaGroups.AUDIO.audio = function (e, a) {
            var o; void 0 === a && (a = {}); var t = e.reduce(function (e, t) {
                var i = t.attributes.role && t.attributes.role.value || "", n = t.attributes.lang || "", r = "main"; if (n) { var s = i ? " (" + i + ")" : ""; r = t.attributes.lang + s } return e[r] && e[r].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth || (e[r] = {
                    language: n,
                    autoselect: !0, default: "main" === i, playlists: xs([function (e) { var t, i = e.attributes, n = e.segments, r = e.sidx, s = { attributes: (t = { NAME: i.id, BANDWIDTH: i.bandwidth, CODECS: i.codecs }, t["PROGRAM-ID"] = 1, t), uri: "", endList: "static" === (i.type || "static"), timeline: i.periodIndex, resolvedUri: "", targetDuration: i.duration, segments: n, mediaSequence: n.length ? n[0].number : 1 }; return i.contentProtection && (s.contentProtection = i.contentProtection), r && (s.sidx = r), s }(t)], a), uri: ""
                }, "undefined" == typeof o && "main" === i && ((o = t).default = !0)),
                    e
            }, {}); o || (t[Object.keys(t)[0]].default = !0); return t
        }(u, t)), l.length && (c.mediaGroups.SUBTITLES.subs = function (e, n) {
            return void 0 === n && (n = {}), e.reduce(function (e, t) {
                var i = t.attributes.lang || "text"; return e[i] || (e[i] = {
                    language: i, default: !1, autoselect: !1, playlists: xs([function (e) {
                        var t, i = e.attributes, n = e.segments; return "undefined" == typeof n && (n = [{ uri: i.baseUrl, timeline: i.periodIndex, resolvedUri: i.baseUrl || "", duration: i.sourceDuration, number: 0 }], i.duration = i.sourceDuration), {
                            attributes: (t = { NAME: i.id, BANDWIDTH: i.bandwidth },
                                t["PROGRAM-ID"] = 1, t), uri: "", endList: "static" === (i.type || "static"), timeline: i.periodIndex, resolvedUri: i.baseUrl || "", targetDuration: i.duration, segments: n, mediaSequence: n.length ? n[0].number : 1
                        }
                    }(t)], n), uri: ""
                }), e
            }, {})
        }(l, t)), c
    } function Rs(e, t) {
        for (var i, n, r, s, a, o, u, l, c, h, d, p, f = e.type, m = void 0 === f ? "static" : f, g = e.minimumUpdatePeriod, v = void 0 === g ? 0 : g, y = e.media, _ = void 0 === y ? "" : y, b = e.sourceDuration, T = e.timescale, S = void 0 === T ? 1 : T, k = e.startNumber, C = void 0 === k ? 1 : k, E = e.periodIndex, w = [], L = -1, P = 0; P < t.length; P++) {
            var A =
                t[P], I = A.d, x = A.r || 0, O = A.t || 0; L < 0 && (L = O), O && L < O && (L = O); var D = void 0; if (x < 0) { var R = P + 1; D = R === t.length ? "dynamic" === m && 0 < v && 0 < _.indexOf("$Number$") ? (n = L, r = I, void 0, s = (i = e).NOW, a = i.clientOffset, o = i.availabilityStartTime, u = i.timescale, l = void 0 === u ? 1 : u, c = i.start, h = void 0 === c ? 0 : c, d = i.minimumUpdatePeriod, p = (s + a) / 1E3 + (void 0 === d ? 0 : d) - (o + h), Math.ceil((p * l - n) / r)) : (b * S - L) / I : (t[R].t - L) / I } else D = x + 1; for (var U = C + w.length + D, M = C + w.length; M < U;)w.push({ number: M, duration: I / S, time: L, timeline: E }), L += I, M++
        } return w
    } function Us(e,
        t) { return e.replace(Gs, function (s) { return function (e, t, i, n) { if ("$$" === e) return "$"; if ("undefined" == typeof s[t]) return e; var r = "" + s[t]; return "RepresentationID" === t ? r : (n = i ? parseInt(n, 10) : 1) <= r.length ? r : (new Array(n - r.length + 1)).join("0") + r } }(t)) } function Ms(i, e) {
            var n = { RepresentationID: i.id, Bandwidth: i.bandwidth || 0 }, t = i.initialization, r = void 0 === t ? { sourceURL: "", range: "" } : t, s = ws({ baseUrl: i.baseUrl, source: Us(r.sourceURL, n), range: r.range }); return function (e, t) {
                return e.duration || t ? e.duration ? Ls(e) : Rs(e,
                    t) : [{ number: e.startNumber || 1, duration: e.sourceDuration, time: 0, timeline: e.periodIndex }]
            }(i, e).map(function (e) { n.Number = e.number, n.Time = e.time; var t = Us(i.media || "", n); return { uri: t, timeline: e.timeline, duration: e.duration, resolvedUri: Es(i.baseUrl || "", t), map: s, number: e.number } })
        } function Ns(t, e) {
            var i = t.duration, n = t.segmentUrls, r = void 0 === n ? [] : n; if (!i && !e || i && e) throw new Error(ks); var s, a = r.map(function (e) {
                return function (e, t) {
                    var i = e.baseUrl, n = e.initialization, r = void 0 === n ? {} : n, s = ws({
                        baseUrl: i, source: r.sourceURL,
                        range: r.range
                    }), a = ws({ baseUrl: i, source: t.media, range: t.mediaRange }); return a.map = s, a
                }(t, e)
            }); return i && (s = Ls(t)), e && (s = Rs(t, e)), s.map(function (e, t) { if (a[t]) { var i = a[t]; return i.timeline = e.timeline, i.duration = e.duration, i.number = e.number, i } }).filter(function (e) { return e })
        } function Bs(e) {
            var t, i, n = e.attributes, r = e.segmentInfo; r.template ? (i = Ms, t = ms(n, r.template)) : r.base ? (i = Ps, t = ms(n, r.base)) : r.list && (i = Ns, t = ms(n, r.list)); var s = { attributes: n }; if (!i) return s; var a = i(t, r.timeline); if (t.duration) {
                var o =
                    t, u = o.duration, l = o.timescale, c = void 0 === l ? 1 : l; t.duration = u / c
            } else a.length ? t.duration = a.reduce(function (e, t) { return Math.max(e, Math.ceil(t.duration)) }, 0) : t.duration = 0; return s.attributes = t, s.segments = a, r.base && t.indexRange && (s.sidx = a[0], s.segments = []), s
        } function js(e, t) { return vs(e.childNodes).filter(function (e) { return e.tagName === t }) } function Fs(e) { return e.textContent.trim() } function Hs(e) {
            var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e); if (!t) return 0;
            var i = t.slice(1), n = i[0], r = i[1], s = i[2], a = i[3], o = i[4], u = i[5]; return 31536E3 * parseFloat(n || 0) + 2592E3 * parseFloat(r || 0) + 86400 * parseFloat(s || 0) + 3600 * parseFloat(a || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
        } function Vs(e) { return e && e.attributes ? vs(e.attributes).reduce(function (e, t) { var i = Ks[t.name] || Ks.DEFAULT; return e[t.name] = i(t.value), e }, {}) : {} } var qs, Ws = (function (e, t) {
            var i, c, n, r, h; i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g,
                r = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, h = {
                    buildAbsoluteURL: function (e, t, i) {
                        if (i = i || {}, e = e.trim(), !(t = t.trim())) { if (!i.alwaysNormalize) return e; var n = h.parseURL(e); if (!n) throw new Error("Error trying to parse base URL."); return n.path = h.normalizePath(n.path), h.buildURLFromParts(n) } var r = h.parseURL(t); if (!r) throw new Error("Error trying to parse relative URL."); if (r.scheme) return i.alwaysNormalize ? (r.path = h.normalizePath(r.path), h.buildURLFromParts(r)) : t; var s = h.parseURL(e); if (!s) throw new Error("Error trying to parse base URL.");
                        if (!s.netLoc && s.path && "/" !== s.path[0]) { var a = c.exec(s.path); s.netLoc = a[1], s.path = a[2] } s.netLoc && !s.path && (s.path = "/"); var o = { scheme: s.scheme, netLoc: r.netLoc, path: null, params: r.params, query: r.query, fragment: r.fragment }; if (!r.netLoc && (o.netLoc = s.netLoc, "/" !== r.path[0])) if (r.path) { var u = s.path, l = u.substring(0, u.lastIndexOf("/") + 1) + r.path; o.path = h.normalizePath(l) } else o.path = s.path, r.params || (o.params = s.params, r.query || (o.query = s.query)); return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(r.path) :
                            r.path), h.buildURLFromParts(o)
                    }, parseURL: function (e) { var t = i.exec(e); return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null }, normalizePath: function (e) { for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(r, "")).length;); return e.split("").reverse().join("") }, buildURLFromParts: function (e) { return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment }
                }, e.exports = h
        }(qs = { exports: {} }, qs.exports), qs.exports), zs = {
            static: function (e) {
                var t =
                    e.duration, i = e.timescale, n = void 0 === i ? 1 : i, r = e.sourceDuration; return { start: 0, end: Math.ceil(r / (t / n)) }
            }, dynamic: function (e) { var t = e.NOW, i = e.clientOffset, n = e.availabilityStartTime, r = e.timescale, s = void 0 === r ? 1 : r, a = e.duration, o = e.start, u = void 0 === o ? 0 : o, l = e.minimumUpdatePeriod, c = void 0 === l ? 0 : l, h = e.timeShiftBufferDepth, d = void 0 === h ? 1 / 0 : h, p = (t + i) / 1E3, f = n + u, m = p + c - f, g = Math.ceil(m * s / a), v = Math.floor((p - f - d) * s / a), y = Math.floor((p - f) * s / a); return { start: Math.max(0, v), end: Math.min(g, y) } }
        }, Gs = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
            Ks = {
                mediaPresentationDuration: function (e) { return Hs(e) }, availabilityStartTime: function (e) { return function (e) { return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), Date.parse(e) }(e) / 1E3 }, minimumUpdatePeriod: function (e) { return Hs(e) }, timeShiftBufferDepth: function (e) { return Hs(e) }, start: function (e) { return Hs(e) }, width: function (e) { return parseInt(e, 10) }, height: function (e) { return parseInt(e, 10) }, bandwidth: function (e) { return parseInt(e, 10) }, startNumber: function (e) { return parseInt(e, 10) }, timescale: function (e) {
                    return parseInt(e,
                        10)
                }, duration: function (e) { var t = parseInt(e, 10); return isNaN(t) ? Hs(e) : t }, d: function (e) { return parseInt(e, 10) }, t: function (e) { return parseInt(e, 10) }, r: function (e) { return parseInt(e, 10) }, DEFAULT: function (e) { return e }
            }; function Xs(e, i) { return i.length ? gs(e.map(function (t) { return i.map(function (e) { return Es(t, Fs(e)) }) })) : e } function Ys(e) {
                var t = js(e, "SegmentTemplate")[0], i = js(e, "SegmentList")[0], n = i && js(i, "SegmentURL").map(function (e) { return ms({ tag: "SegmentURL" }, Vs(e)) }), r = js(e, "SegmentBase")[0], s = i || t,
                a = s && js(s, "SegmentTimeline")[0], o = i || r || t, u = o && js(o, "Initialization")[0], l = t && Vs(t); l && u ? l.initialization = u && Vs(u) : l && l.initialization && (l.initialization = { sourceURL: l.initialization }); var c = { template: l, timeline: a && js(a, "S").map(function (e) { return Vs(e) }), list: i && ms(Vs(i), { segmentUrls: n, initialization: Vs(u) }), base: r && ms(Vs(r), { initialization: Vs(u) }) }; return Object.keys(c).forEach(function (e) { c[e] || delete c[e] }), c
            } function $s(e) {
                return e.reduce(function (e, t) {
                    var i = Vs(t), n = da[i.schemeIdUri]; if (n) {
                        e[n] =
                        { attributes: i }; var r = js(t, "cenc:pssh")[0]; if (r) { var s = Fs(r), a = s && function (e) { for (var t = y.atob(e), i = new Uint8Array(t.length), n = 0; n < t.length; n++)i[n] = t.charCodeAt(n); return i }(s); e[n].pssh = a }
                    } return e
                }, {})
            } function Qs(c, h, d) {
                return function (e) {
                    var t = Vs(e), i = Xs(h, js(e, "BaseURL")), n = js(e, "Role")[0], r = { role: Vs(n) }, s = ms(c, t, r), a = $s(js(e, "ContentProtection")); Object.keys(a).length && (s = ms(s, { contentProtection: a })); var o = Ys(e), u = js(e, "Representation"), l = ms(d, o); return gs(u.map(function (s, a, o) {
                        return function (e) {
                            var t =
                                js(e, "BaseURL"), i = Xs(a, t), n = ms(s, Vs(e)), r = Ys(e); return i.map(function (e) { return { segmentInfo: ms(o, r), attributes: ms(n, { baseUrl: e }) } })
                        }
                    }(s, i, l)))
                }
            } function Js(e, t) {
                void 0 === t && (t = {}); var i = t, n = i.manifestUri, r = void 0 === n ? "" : n, s = i.NOW, a = void 0 === s ? Date.now() : s, o = i.clientOffset, u = void 0 === o ? 0 : o, l = js(e, "Period"); if (!l.length) throw new Error(_s); var c = Vs(e), h = Xs([r], js(e, "BaseURL")); return c.sourceDuration = c.mediaPresentationDuration || 0, c.NOW = a, c.clientOffset = u, gs(l.map(function (l, c) {
                    return function (e, t) {
                        var i =
                            Xs(c, js(e, "BaseURL")), n = Vs(e), r = parseInt(n.id, 10), s = y.isNaN(r) ? t : r, a = ms(l, { periodIndex: s }), o = js(e, "AdaptationSet"), u = Ys(e); return gs(o.map(Qs(a, i, u)))
                    }
                }(c, h)))
            } function Zs(e) { if ("" === e) throw new Error(bs); var t = (new y.DOMParser).parseFromString(e, "application/xml"), i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null; if (!i || i && 0 < i.getElementsByTagName("parsererror").length) throw new Error(Ts); return i } function ea(e, t) {
                return void 0 === t && (t = {}), Ds(function (e) { return e.map(Bs) }(Js(Zs(e), t)),
                    t.sidxMapping)
            } function ta(e) {
                return function (e) {
                    var t = js(e, "UTCTiming")[0]; if (!t) return null; var i = Vs(t); switch (i.schemeIdUri) {
                        case "urn:mpeg:dash:utc:http-head:2014": case "urn:mpeg:dash:utc:http-head:2012": i.method = "HEAD"; break; case "urn:mpeg:dash:utc:http-xsdate:2014": case "urn:mpeg:dash:utc:http-iso:2014": case "urn:mpeg:dash:utc:http-xsdate:2012": case "urn:mpeg:dash:utc:http-iso:2012": i.method = "GET"; break; case "urn:mpeg:dash:utc:direct:2014": case "urn:mpeg:dash:utc:direct:2012": i.method = "DIRECT",
                            i.value = Date.parse(i.value); break; case "urn:mpeg:dash:utc:http-ntp:2014": case "urn:mpeg:dash:utc:ntp:2014": case "urn:mpeg:dash:utc:sntp:2014": default: throw new Error(Cs);
                    }return i
                }(Zs(e))
            } function ia(e) { return new Date(1E3 * e - 20828448E5) } function na(e) { return { isLeading: (12 & e[0]) >>> 2, dependsOn: 3 & e[0], isDependedOn: (192 & e[1]) >>> 6, hasRedundancy: (48 & e[1]) >>> 4, paddingValue: (14 & e[1]) >>> 1, isNonSyncSample: 1 & e[1], degradationPriority: e[2] << 8 | e[3] } } function ra(e) {
                var t = ""; return t += String.fromCharCode(e[0]), t +=
                    String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
            } var sa, aa, oa, ua, la, ca, ha, da = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha", "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready", "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime" }, pa = function (e) { return e >>> 0 }, fa = function (e) { return ("00" + e.toString(16)).slice(-2) }, ma = pa, ga = {
                avc1: function (e) {
                    var t =
                        new DataView(e.buffer, e.byteOffset, e.byteLength); return { dataReferenceIndex: t.getUint16(6), width: t.getUint16(24), height: t.getUint16(26), horizresolution: t.getUint16(28) + t.getUint16(30) / 16, vertresolution: t.getUint16(32) + t.getUint16(34) / 16, frameCount: t.getUint16(40), depth: t.getUint16(74), config: sa(e.subarray(78, e.byteLength)) }
                }, avcC: function (e) {
                    var t, i, n, r, s = new DataView(e.buffer, e.byteOffset, e.byteLength), a = {
                        configurationVersion: e[0], avcProfileIndication: e[1], profileCompatibility: e[2], avcLevelIndication: e[3],
                        lengthSizeMinusOne: 3 & e[4], sps: [], pps: []
                    }, o = 31 & e[5]; for (n = 6, r = 0; r < o; r++)i = s.getUint16(n), n += 2, a.sps.push(new Uint8Array(e.subarray(n, n + i))), n += i; for (t = e[n], n++, r = 0; r < t; r++)i = s.getUint16(n), n += 2, a.pps.push(new Uint8Array(e.subarray(n, n + i))), n += i; return a
                }, btrt: function (e) { var t = new DataView(e.buffer, e.byteOffset, e.byteLength); return { bufferSizeDB: t.getUint32(0), maxBitrate: t.getUint32(4), avgBitrate: t.getUint32(8) } }, esds: function (e) {
                    return {
                        version: e[0], flags: new Uint8Array(e.subarray(1, 4)), esId: e[6] <<
                            8 | e[7], streamPriority: 31 & e[8], decoderConfig: { objectProfileIndication: e[11], streamType: e[12] >>> 2 & 63, bufferSize: e[13] << 16 | e[14] << 8 | e[15], maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19], avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23], decoderConfigDescriptor: { tag: e[24], length: e[25], audioObjectType: e[26] >>> 3 & 31, samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1, channelConfiguration: e[27] >>> 3 & 15 } }
                    }
                }, ftyp: function (e) {
                    for (var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
                        majorBrand: ra(e.subarray(0, 4)), minorVersion: t.getUint32(4),
                        compatibleBrands: []
                    }, n = 8; n < e.byteLength;)i.compatibleBrands.push(ra(e.subarray(n, n + 4))), n += 4; return i
                }, dinf: function (e) { return { boxes: sa(e) } }, dref: function (e) { return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), dataReferences: sa(e.subarray(8)) } }, hdlr: function (e) {
                    var t = { version: (new DataView(e.buffer, e.byteOffset, e.byteLength)).getUint8(0), flags: new Uint8Array(e.subarray(1, 4)), handlerType: ra(e.subarray(8, 12)), name: "" }, i = 8; for (i = 24; i < e.byteLength; i++) { if (0 === e[i]) { i++; break } t.name += String.fromCharCode(e[i]) } return t.name =
                        decodeURIComponent(escape(t.name)), t
                }, mdat: function (e) {
                    return {
                        byteLength: e.byteLength, nals: function (e) {
                            var t, i, n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = []; for (t = 0; t + 4 < e.length; t += i)if (i = n.getUint32(t), t += 4, i <= 0) r.push("\x3cspan style\x3d'color:red;'\x3eMALFORMED DATA\x3c/span\x3e"); else switch (31 & e[t]) {
                                case 1: r.push("slice_layer_without_partitioning_rbsp"); break; case 5: r.push("slice_layer_without_partitioning_rbsp_idr"); break; case 6: r.push("sei_rbsp"); break; case 7: r.push("seq_parameter_set_rbsp");
                                    break; case 8: r.push("pic_parameter_set_rbsp"); break; case 9: r.push("access_unit_delimiter_rbsp"); break; default: r.push("UNKNOWN NAL - " + e[t] & 31)
                            }return r
                        }(e)
                    }
                }, mdhd: function (e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = 4, r = { version: i.getUint8(0), flags: new Uint8Array(e.subarray(1, 4)), language: "" }; return 1 === r.version ? (n += 4, r.creationTime = ia(i.getUint32(n)), n += 8, r.modificationTime = ia(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 8) : (r.creationTime = ia(i.getUint32(n)), n += 4, r.modificationTime =
                        ia(i.getUint32(n)), n += 4, r.timescale = i.getUint32(n), n += 4), r.duration = i.getUint32(n), n += 4, t = i.getUint16(n), r.language += String.fromCharCode(96 + (t >> 10)), r.language += String.fromCharCode(96 + ((992 & t) >> 5)), r.language += String.fromCharCode(96 + (31 & t)), r
                }, mdia: function (e) { return { boxes: sa(e) } }, mfhd: function (e) { return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7] } }, minf: function (e) { return { boxes: sa(e) } }, mp4a: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset,
                        e.byteLength), i = { dataReferenceIndex: t.getUint16(6), channelcount: t.getUint16(16), samplesize: t.getUint16(18), samplerate: t.getUint16(24) + t.getUint16(26) / 65536 }; return 28 < e.byteLength && (i.streamDescriptor = sa(e.subarray(28))[0]), i
                }, moof: function (e) { return { boxes: sa(e) } }, moov: function (e) { return { boxes: sa(e) } }, mvex: function (e) { return { boxes: sa(e) } }, mvhd: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = 4, n = { version: t.getUint8(0), flags: new Uint8Array(e.subarray(1, 4)) }; return 1 === n.version ?
                        (i += 4, n.creationTime = ia(t.getUint32(i)), i += 8, n.modificationTime = ia(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 8) : (n.creationTime = ia(t.getUint32(i)), i += 4, n.modificationTime = ia(t.getUint32(i)), i += 4, n.timescale = t.getUint32(i), i += 4), n.duration = t.getUint32(i), i += 4, n.rate = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.volume = t.getUint8(i) + t.getUint8(i + 1) / 8, i += 2, i += 2, i += 8, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, i += 24, n.nextTrackId = t.getUint32(i), n
                }, pdin: function (e) {
                    var t = new DataView(e.buffer,
                        e.byteOffset, e.byteLength); return { version: t.getUint8(0), flags: new Uint8Array(e.subarray(1, 4)), rate: t.getUint32(4), initialDelay: t.getUint32(8) }
                }, sdtp: function (e) { var t, i = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: [] }; for (t = 4; t < e.byteLength; t++)i.samples.push({ dependsOn: (48 & e[t]) >> 4, isDependedOn: (12 & e[t]) >> 2, hasRedundancy: 3 & e[t] }); return i }, sidx: function (e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = {
                        version: e[0], flags: new Uint8Array(e.subarray(1, 4)), references: [], referenceId: i.getUint32(4),
                        timescale: i.getUint32(8), earliestPresentationTime: i.getUint32(12), firstOffset: i.getUint32(16)
                    }, r = i.getUint16(22); for (t = 24; r; t += 12, r--)n.references.push({ referenceType: (128 & e[t]) >>> 7, referencedSize: 2147483647 & i.getUint32(t), subsegmentDuration: i.getUint32(t + 4), startsWithSap: !!(128 & e[t + 8]), sapType: (112 & e[t + 8]) >>> 4, sapDeltaTime: 268435455 & i.getUint32(t + 8) }); return n
                }, smhd: function (e) { return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), balance: e[4] + e[5] / 256 } }, stbl: function (e) { return { boxes: sa(e) } },
                stco: function (e) { var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), chunkOffsets: [] }, r = i.getUint32(4); for (t = 8; r; t += 4, r--)n.chunkOffsets.push(i.getUint32(t)); return n }, stsc: function (e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = i.getUint32(4), r = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), sampleToChunks: [] }; for (t = 8; n; t += 12, n--)r.sampleToChunks.push({
                        firstChunk: i.getUint32(t), samplesPerChunk: i.getUint32(t + 4), sampleDescriptionIndex: i.getUint32(t +
                            8)
                    }); return r
                }, stsd: function (e) { return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), sampleDescriptions: sa(e.subarray(8)) } }, stsz: function (e) { var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), sampleSize: i.getUint32(4), entries: [] }; for (t = 12; t < e.byteLength; t += 4)n.entries.push(i.getUint32(t)); return n }, stts: function (e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), timeToSamples: [] },
                    r = i.getUint32(4); for (t = 8; r; t += 8, r--)n.timeToSamples.push({ sampleCount: i.getUint32(t), sampleDelta: i.getUint32(t + 4) }); return n
                }, styp: function (e) { return ga.ftyp(e) }, tfdt: function (e) { var t = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), baseMediaDecodeTime: ma(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]) }; return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += ma(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), t }, tfhd: function (e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength), n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)), trackId: i.getUint32(4)
                    }, r = 1 & n.flags[2], s = 2 & n.flags[2], a = 8 & n.flags[2], o = 16 & n.flags[2], u = 32 & n.flags[2], l = 65536 & n.flags[0], c = 131072 & n.flags[0]; return t = 8, r && (t += 4, n.baseDataOffset = i.getUint32(12), t += 4), s && (n.sampleDescriptionIndex = i.getUint32(t), t += 4), a && (n.defaultSampleDuration = i.getUint32(t), t += 4), o && (n.defaultSampleSize = i.getUint32(t), t += 4), u && (n.defaultSampleFlags = i.getUint32(t)), l && (n.durationIsEmpty = !0), !r && c && (n.baseDataOffsetIsMoof = !0), n
                }, tkhd: function (e) {
                    var t =
                        new DataView(e.buffer, e.byteOffset, e.byteLength), i = 4, n = { version: t.getUint8(0), flags: new Uint8Array(e.subarray(1, 4)) }; return 1 === n.version ? (i += 4, n.creationTime = ia(t.getUint32(i)), i += 8, n.modificationTime = ia(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 8) : (n.creationTime = ia(t.getUint32(i)), i += 4, n.modificationTime = ia(t.getUint32(i)), i += 4, n.trackId = t.getUint32(i), i += 4, i += 4), n.duration = t.getUint32(i), i += 4, i += 8, n.layer = t.getUint16(i), i += 2, n.alternateGroup = t.getUint16(i), i += 2, n.volume = t.getUint8(i) +
                            t.getUint8(i + 1) / 8, i += 2, i += 2, n.matrix = new Uint32Array(e.subarray(i, i + 36)), i += 36, n.width = t.getUint16(i) + t.getUint16(i + 2) / 16, i += 4, n.height = t.getUint16(i) + t.getUint16(i + 2) / 16, n
                }, traf: function (e) { return { boxes: sa(e) } }, trak: function (e) { return { boxes: sa(e) } }, trex: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength); return {
                        version: e[0], flags: new Uint8Array(e.subarray(1, 4)), trackId: t.getUint32(4), defaultSampleDescriptionIndex: t.getUint32(8), defaultSampleDuration: t.getUint32(12), defaultSampleSize: t.getUint32(16),
                        sampleDependsOn: 3 & e[20], sampleIsDependedOn: (192 & e[21]) >> 6, sampleHasRedundancy: (48 & e[21]) >> 4, samplePaddingValue: (14 & e[21]) >> 1, sampleIsDifferenceSample: !!(1 & e[21]), sampleDegradationPriority: t.getUint16(22)
                    }
                }, trun: function (e) {
                    var t, i = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: [] }, n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = 1 & i.flags[2], s = 4 & i.flags[2], a = 1 & i.flags[1], o = 2 & i.flags[1], u = 4 & i.flags[1], l = 8 & i.flags[1], c = n.getUint32(4), h = 8; for (r && (i.dataOffset = n.getInt32(h), h += 4), s &&
                        c && (t = { flags: na(e.subarray(h, h + 4)) }, h += 4, a && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t), c--); c--;)t = {}, a && (t.duration = n.getUint32(h), h += 4), o && (t.size = n.getUint32(h), h += 4), u && (t.flags = na(e.subarray(h, h + 4)), h += 4), l && (t.compositionTimeOffset = n.getUint32(h), h += 4), i.samples.push(t); return i
                }, "url ": function (e) { return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)) } }, vmhd: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset,
                        e.byteLength); return { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), graphicsmode: t.getUint16(4), opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)]) }
                }
            }, va = {
                inspect: sa = function (e) {
                    for (var t, i, n, r, s, a = 0, o = [], u = new ArrayBuffer(e.length), l = new Uint8Array(u), c = 0; c < e.length; ++c)l[c] = e[c]; for (t = new DataView(u); a < e.byteLength;)i = t.getUint32(a), n = ra(e.subarray(a + 4, a + 8)), r = 1 < i ? a + i : e.byteLength, (s = (ga[n] || function (e) { return { data: e } })(e.subarray(a + 8, r))).size = i, s.type = n, o.push(s), a = r;
                    return o
                }, textify: aa = function (e, t) {
                    var s; return t = t || 0, s = (new Array(2 * t + 1)).join(" "), e.map(function (r, e) {
                        return s + r.type + "\n" + Object.keys(r).filter(function (e) { return "type" !== e && "boxes" !== e }).map(function (e) {
                            var t = s + "  " + e + ": ", i = r[e]; if (i instanceof Uint8Array || i instanceof Uint32Array) {
                                var n = Array.prototype.slice.call(new Uint8Array(i.buffer, i.byteOffset, i.byteLength)).map(function (e) { return " " + ("00" + e.toString(16)).slice(-2) }).join("").match(/.{1,24}/g); return n ? 1 === n.length ? t + "\x3c" + n.join("").slice(1) +
                                    "\x3e" : t + "\x3c\n" + n.map(function (e) { return s + "  " + e }).join("\n") + "\n" + s + "  \x3e" : t + "\x3c\x3e"
                            } return t + JSON.stringify(i, null, 2).split("\n").map(function (e, t) { return 0 === t ? e : s + "  " + e }).join("\n")
                        }).join("\n") + (r.boxes ? "\n" + aa(r.boxes, t + 1) : "")
                    }).join("\n")
                }, parseType: ra, findBox: function e(t, i) {
                    var n, r, s, a, o, u = []; if (!i.length) return null; for (n = 0; n < t.byteLength;)r = ma(t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3]), s = ra(t.subarray(n + 4, n + 8)), a = 1 < r ? n + r : t.byteLength, s === i[0] && (1 === i.length ? u.push(t.subarray(n + 8, a)) :
                        (o = e(t.subarray(n + 8, a), i.slice(1))).length && (u = u.concat(o))), n = a; return u
                }, parseTraf: ga.traf, parseTfdt: ga.tfdt, parseHdlr: ga.hdlr, parseTfhd: ga.tfhd, parseTrun: ga.trun, parseSidx: ga.sidx
            }, ya = pa, _a = fa; oa = function (e) {
                return va.findBox(e, ["moov", "trak"]).reduce(function (e, t) { var i, n, r, s, a; return (i = va.findBox(t, ["tkhd"])[0]) ? (n = i[0], s = ya(i[r = 0 === n ? 12 : 20] << 24 | i[r + 1] << 16 | i[r + 2] << 8 | i[r + 3]), (a = va.findBox(t, ["mdia", "mdhd"])[0]) ? (r = 0 === (n = a[0]) ? 12 : 20, e[s] = ya(a[r] << 24 | a[r + 1] << 16 | a[r + 2] << 8 | a[r + 3]), e) : null) : null },
                    {})
            }, ua = function (r, e) { var t, i, n; return t = va.findBox(e, ["moof", "traf"]), i = [].concat.apply([], t.map(function (n) { return va.findBox(n, ["tfhd"]).map(function (e) { var t, i; return t = ya(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), i = r[t] || 9E4, (va.findBox(n, ["tfdt"]).map(function (e) { var t, i; return t = e[0], i = ya(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (i *= Math.pow(2, 32), i += ya(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), i })[0] || 1 / 0) / i }) })), n = Math.min.apply(null, i), isFinite(n) ? n : 0 }, la = function (e, t) {
                var i, n = va.findBox(t, ["moof", "traf"]),
                r = 0, s = 0; if (n && n.length) for (var a = va.parseTraf(n[0]), o = 0; o < a.boxes.length; o++)"tfhd" === a.boxes[o].type ? i = a.boxes[o].trackId : "tfdt" === a.boxes[o].type ? r = a.boxes[o].baseMediaDecodeTime : "trun" === a.boxes[o].type && a.boxes[o].samples.length && (s = a.boxes[o].samples[0].compositionTimeOffset || 0); return (r + s) / (e[i] || 9E4)
            }, ca = function (e) {
                var t = va.findBox(e, ["moov", "trak"]), o = []; return t.forEach(function (e) {
                    var t = va.findBox(e, ["mdia", "hdlr"]), a = va.findBox(e, ["tkhd"]); t.forEach(function (e, t) {
                        var i, n, r = va.parseType(e.subarray(8,
                            12)), s = a[t]; "vide" === r && (n = 0 === (i = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0) ? i.getUint32(12) : i.getUint32(20), o.push(n))
                    })
                }), o
            }, ha = function (e) {
                var t = va.findBox(e, ["moov", "trak"]), p = []; return t.forEach(function (e) {
                    var t, i, n = {}, r = va.findBox(e, ["tkhd"])[0]; r && (i = (t = new DataView(r.buffer, r.byteOffset, r.byteLength)).getUint8(0), n.id = 0 === i ? t.getUint32(12) : t.getUint32(20)); var s = va.findBox(e, ["mdia", "hdlr"])[0]; if (s) {
                        var a = va.parseType(s.subarray(8, 12)); n.type = "vide" === a ? "video" : "soun" ===
                            a ? "audio" : a
                    } var o = va.findBox(e, ["mdia", "minf", "stbl", "stsd"])[0]; if (o) {
                        var u = o.subarray(8); n.codec = va.parseType(u.subarray(4, 8)); var l, c = va.findBox(u, [n.codec])[0]; c && (/^[a-z]vc[1-9]$/i.test(n.codec) ? (l = c.subarray(78), "avcC" === va.parseType(l.subarray(4, 8)) && 11 < l.length ? (n.codec += ".", n.codec += _a(l[9]), n.codec += _a(l[10]), n.codec += _a(l[11])) : n.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(n.codec) && (l = c.subarray(28), "esds" === va.parseType(l.subarray(4, 8)) && 20 < l.length && 0 !== l[19] ? (n.codec += "." + _a(l[19]), n.codec +=
                            "." + _a(l[20] >>> 2 & 63).replace(/^0/, "")) : n.codec = "mp4a.40.2"))
                    } var h = va.findBox(e, ["mdia", "mdhd"])[0]; if (h && r) { var d = 0 === i ? 12 : 20; n.timescale = ya(h[d] << 24 | h[1 + d] << 16 | h[2 + d] << 8 | h[3 + d]) } p.push(n)
                }), p
            }; function ba() {
                this.init = function () {
                    var s = {}; this.on = function (e, t) { s[e] || (s[e] = []), s[e] = s[e].concat(t) }, this.off = function (e, t) { var i; return !!s[e] && (i = s[e].indexOf(t), s[e] = s[e].slice(), s[e].splice(i, 1), -1 < i) }, this.trigger = function (e) {
                        var t, i, n, r; if (t = s[e]) if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i)t[i].call(this,
                            arguments[1]); else { for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i)r.push(arguments[i]); for (n = t.length, i = 0; i < n; ++i)t[i].apply(this, r) }
                    }, this.dispose = function () { s = {} }
                }
            } var Ta = { findBox: va.findBox, parseType: va.parseType, timescale: oa, startTime: ua, compositionStartTime: la, videoTrackIds: ca, tracks: ha }, Sa = function (e) {
                for (var t = 0, i = { payloadType: -1, payloadSize: 0 }, n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                    for (; 255 === e[t];)n += 255, t++; for (n += e[t++]; 255 === e[t];)r += 255, t++; if (r += e[t++], !i.payload && 4 === n) {
                        i.payloadType =
                        n, i.payloadSize = r, i.payload = e.subarray(t, t + r); break
                    } t += r, r = n = 0
                } return i
            }, ka = function (e) { return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1) }, Ca = function (e, t) { var i, n, r, s, a = []; if (!(64 & t[0])) return a; for (n = 31 & t[0], i = 0; i < n; i++)s = { type: 3 & t[2 + (r = 3 * i)], pts: e }, 4 & t[2 + r] && (s.ccData = t[3 + r] << 8 | t[4 + r], a.push(s)); return a }, Ea = function (e) {
                for (var t,
                    i, n = e.byteLength, r = [], s = 1; s < n - 2;)0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++; if (0 === r.length) return e; t = n - r.length, i = new Uint8Array(t); var a = 0; for (s = 0; s < t; a++, s++)a === r[0] && (a++, r.shift()), i[s] = e[a]; return i
            }, wa = 4; ba.prototype.pipe = function (t) { return this.on("data", function (e) { t.push(e) }), this.on("done", function (e) { t.flush(e) }), this.on("partialdone", function (e) { t.partialFlush(e) }), this.on("endedtimeline", function (e) { t.endTimeline(e) }), this.on("reset", function (e) { t.reset(e) }), t }, ba.prototype.push =
                function (e) { this.trigger("data", e) }, ba.prototype.flush = function (e) { this.trigger("done", e) }, ba.prototype.partialFlush = function (e) { this.trigger("partialdone", e) }, ba.prototype.endTimeline = function (e) { this.trigger("endedtimeline", e) }, ba.prototype.reset = function (e) { this.trigger("reset", e) }; function La() {
                    La.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Da(0, 0), new Da(0, 1), new Da(1, 0), new Da(1, 1)], this.reset(), this.ccStreams_.forEach(function (e) {
                        e.on("data", this.trigger.bind(this,
                            "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"))
                    }, this)
                } var Pa = ba; (La.prototype = new Pa).push = function (e) {
                    var t, i, n; if ("sei_rbsp" === e.nalUnitType && (t = Sa(e.escapedRBSP)).payloadType === wa && (i = ka(t))) if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0; else {
                        if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1)); n = Ca(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n),
                            this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
                    }
                }, La.prototype.flushCCStreams = function (t) { this.ccStreams_.forEach(function (e) { return "flush" === t ? e.flush() : e.partialFlush() }, this) }, La.prototype.flushStream = function (e) {
                    this.captionPackets_.length && (this.captionPackets_.forEach(function (e, t) { e.presortIndex = t }), this.captionPackets_.sort(function (e, t) { return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts }), this.captionPackets_.forEach(function (e) {
                        e.type < 2 &&
                        this.dispatchCea608Packet(e)
                    }, this), this.captionPackets_.length = 0), this.flushCCStreams(e)
                }, La.prototype.flush = function () { return this.flushStream("flush") }, La.prototype.partialFlush = function () { return this.flushStream("partialFlush") }, La.prototype.reset = function () { this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (e) { e.reset() }) }, La.prototype.dispatchCea608Packet = function (e) {
                    this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] =
                        null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
                }, La.prototype.setsChannel1Active = function (e) { return 4096 == (30720 & e.ccData) }, La.prototype.setsChannel2Active = function (e) { return 6144 == (30720 & e.ccData) }, La.prototype.setsTextOrXDSActive = function (e) {
                    return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 ==
                        (30974 & e.ccData)
                }; function Aa(e) { return null === e ? "" : (e = xa[e] || e, String.fromCharCode(e)) } function Ia() { for (var e = [], t = 15; t--;)e.push(""); return e } var xa = {
                    42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189, 307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194,
                    562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228, 818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496
                }, Oa = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], Da = function e(t, i) {
                    e.prototype.init.call(this), this.field_ =
                        t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (e) {
                            var t, i, n, r, s; if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                                if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn"; else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_,
                                    this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts; else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts); else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts); else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts); else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts; else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] =
                                        this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1); else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = Ia(); else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Ia(); else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Ia()), this.mode_ = "paintOn", this.startPts_ = e.pts; else if (this.isSpecialCharacter(n, r)) s = Aa((n = (3 & n) << 8) | r), this[this.mode_](e.pts,
                                            s), this.column_++; else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), s = Aa((n = (3 & n) << 8) | r), this[this.mode_](e.pts, s), this.column_++; else if (this.isMidRowCode(n, r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(e.pts, ["i"]), 1 == (1 & r) && this.addFormatting(e.pts, ["u"]); else if (this.isOffsetControlCode(n, r)) this.column_ +=
                                                3 & r; else if (this.isPAC(n, r)) { var a = Oa.indexOf(7968 & t); "rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)), a !== this.row_ && (this.clearFormatting(e.pts), this.row_ = a), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"]) } else this.isNormalChar(n) && (0 === r && (r = null), s = Aa(n), s += Aa(r), this[this.mode_](e.pts, s), this.column_ += s.length)
                            } else this.lastControlCode_ =
                                null
                        }
                }; Da.prototype = new Pa, Da.prototype.flushDisplayed = function (e) { var t = this.displayed_.map(function (e) { try { return e.trim() } catch (e) { return "" } }).join("\n").replace(/^\n+|\n+$/g, ""); t.length && this.trigger("data", { startPts: this.startPts_, endPts: e, text: t, stream: this.name_ }) }, Da.prototype.reset = function () { this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = Ia(), this.nonDisplayed_ = Ia(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = [] }, Da.prototype.setConstants =
                    function () {
                        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 |
                            this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                    }, Da.prototype.isSpecialCharacter = function (e, t) { return e === this.EXT_ && 48 <= t && t <= 63 }, Da.prototype.isExtCharacter = function (e, t) { return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63 }, Da.prototype.isMidRowCode = function (e, t) { return e === this.EXT_ && 32 <= t && t <= 47 }, Da.prototype.isOffsetControlCode = function (e, t) { return e === this.OFFSET_ && 33 <= t && t <= 35 }, Da.prototype.isPAC =
                    function (e, t) { return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127 }, Da.prototype.isColorPAC = function (e) { return 64 <= e && e <= 79 || 96 <= e && e <= 127 }, Da.prototype.isNormalChar = function (e) { return 32 <= e && e <= 127 }, Da.prototype.setRollUp = function (e, t) {
                        if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Ia(), this.displayed_ = Ia()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++)this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ -
                            i] = ""; void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
                    }, Da.prototype.addFormatting = function (e, t) { this.formatting_ = this.formatting_.concat(t); var i = t.reduce(function (e, t) { return e + "\x3c" + t + "\x3e" }, ""); this[this.mode_](e, i) }, Da.prototype.clearFormatting = function (e) { if (this.formatting_.length) { var t = this.formatting_.reverse().reduce(function (e, t) { return e + "\x3c/" + t + "\x3e" }, ""); this.formatting_ = [], this[this.mode_](e, t) } }, Da.prototype.popOn = function (e, t) {
                        var i = this.nonDisplayed_[this.row_];
                        i += t, this.nonDisplayed_[this.row_] = i
                    }, Da.prototype.rollUp = function (e, t) { var i = this.displayed_[this.row_]; i += t, this.displayed_[this.row_] = i }, Da.prototype.shiftRowsUp_ = function () { var e; for (e = 0; e < this.topRow_; e++)this.displayed_[e] = ""; for (e = this.row_ + 1; e < 15; e++)this.displayed_[e] = ""; for (e = this.topRow_; e < this.row_; e++)this.displayed_[e] = this.displayed_[e + 1]; this.displayed_[this.row_] = "" }, Da.prototype.paintOn = function (e, t) { var i = this.displayed_[this.row_]; i += t, this.displayed_[this.row_] = i }; function Ra(e,
                        t) { for (var i = e, n = 0; n < t.length; n++) { var r = t[n]; if (i < r.size) return r; i -= r.size } return null } function Ua(e, c) {
                            var n = Ta.findBox(e, ["moof", "traf"]), t = Ta.findBox(e, ["mdat"]), h = {}, r = []; return t.forEach(function (e, t) { var i = n[t]; r.push({ mdat: e, traf: i }) }), r.forEach(function (e) {
                                var t, i = e.mdat, n = e.traf, r = Ta.findBox(n, ["tfhd"]), s = va.parseTfhd(r[0]), a = s.trackId, o = Ta.findBox(n, ["tfdt"]), u = 0 < o.length ? va.parseTfdt(o[0]).baseMediaDecodeTime : 0, l = Ta.findBox(n, ["trun"]); c === a && 0 < l.length && (t = function (e, t, i) {
                                    var n, r, s,
                                    a, o = new DataView(e.buffer, e.byteOffset, e.byteLength), u = []; for (r = 0; r + 4 < e.length; r += s)if (s = o.getUint32(r), r += 4, !(s <= 0)) switch (31 & e[r]) { case 6: var l = e.subarray(r + 1, r + 1 + s), c = Ra(r, t); n = { nalUnitType: "sei_rbsp", size: s, data: l, escapedRBSP: Na(l), trackId: i }, c ? (n.pts = c.pts, n.dts = c.dts, a = c) : (n.pts = a.pts, n.dts = a.dts), u.push(n) }return u
                                }(i, function (e, t, i) {
                                    var n = t, r = i.defaultSampleDuration || 0, s = i.defaultSampleSize || 0, a = i.trackId, o = []; return e.forEach(function (e) {
                                        var t = va.parseTrun(e).samples; t.forEach(function (e) {
                                            void 0 ===
                                            e.duration && (e.duration = r), void 0 === e.size && (e.size = s), e.trackId = a, e.dts = n, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), e.pts = n + e.compositionTimeOffset, n += e.duration
                                        }), o = o.concat(t)
                                    }), o
                                }(l, u, s), a), h[a] || (h[a] = []), h[a] = h[a].concat(t))
                            }), h
                        } function Ma(e, t) { var i = 1; for (t < e && (i = -1); 4294967296 < Math.abs(t - e);)e += 8589934592 * i; return e } var Na = Ea, Ba = La, ja = function () {
                            var t, s, a, o, u, i, n = !1; this.isInitialized = function () { return n }, this.init = function (e) {
                                t = new Ba, n = !0, i = !!e && e.isPartial, t.on("data",
                                    function (e) { e.startTime = e.startPts / o, e.endTime = e.endPts / o, u.captions.push(e), u.captionStreams[e.stream] = !0 })
                            }, this.isNewInit = function (e, t) { return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length) && (a !== e[0] || o !== t[a]) }, this.parse = function (e, t, i) {
                                var n; if (!this.isInitialized()) return null; if (!t || !i) return null; if (this.isNewInit(t, i)) a = t[0], o = i[a]; else if (null === a || !o) return s.push(e), null; for (; 0 < s.length;) { var r = s.shift(); this.parse(r, t, i) } return null !== (n = function (e, t, i) {
                                    return null ===
                                        t ? null : { seiNals: Ua(e, t)[t], timescale: i }
                                }(e, a, o)) && n.seiNals ? (this.pushNals(n.seiNals), this.flushStream(), u) : null
                            }, this.pushNals = function (e) { if (!this.isInitialized() || !e || 0 === e.length) return null; e.forEach(function (e) { t.push(e) }) }, this.flushStream = function () { if (!this.isInitialized()) return null; i ? t.partialFlush() : t.flush() }, this.clearParsedCaptions = function () { u.captions = [], u.captionStreams = {} }, this.resetCaptionStream = function () { if (!this.isInitialized()) return null; t.reset() }, this.clearAllCaptions =
                                function () { this.clearParsedCaptions(), this.resetCaptionStream() }, this.reset = function () { s = [], o = a = null, u ? this.clearParsedCaptions() : u = { captions: [], captionStreams: {} }, this.resetCaptionStream() }, this.reset()
                        }, Fa = 27, Ha = 15, Va = 21; new Pa; function qa(e) { var t = 31 & e[1]; return t <<= 8, t |= e[2] } function Wa(e) { return !!(64 & e[1]) } function za(e) { var t = 0; return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t } function Ga(e) {
                            switch (e) {
                                case 5: return "slice_layer_without_partitioning_rbsp_idr"; case 6: return "sei_rbsp"; case 7: return "seq_parameter_set_rbsp";
                                case 8: return "pic_parameter_set_rbsp"; case 9: return "access_unit_delimiter_rbsp"; default: return null
                            }
                        } function Ka(e) { return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3] } var Xa, Ya, $a, Qa, Ja = {
                            parseType: function (e, t) { var i = qa(e); return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null }, parsePat: function (e) { var t = Wa(e), i = 4 + za(e); return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11] }, parsePmt: function (e) {
                                var t = {}, i = Wa(e), n = 4 + za(e); if (i && (n += e[n] + 1), 1 & e[n + 5]) {
                                    var r; r = 3 + ((15 & e[n + 1]) << 8 | e[n + 2]) - 4; for (var s = 12 + ((15 & e[n + 10]) << 8 | e[n + 11]); s < r;) {
                                        var a =
                                            n + s; t[(31 & e[a + 1]) << 8 | e[a + 2]] = e[a], s += 5 + ((15 & e[a + 3]) << 8 | e[a + 4])
                                    } return t
                                }
                            }, parsePayloadUnitStartIndicator: Wa, parsePesType: function (e, t) { switch (t[qa(e)]) { case Fa: return "video"; case Ha: return "audio"; case Va: return "timed-metadata"; default: return null } }, parsePesTime: function (e) {
                                if (!Wa(e)) return null; var t = 4 + za(e); if (t >= e.byteLength) return null; var i, n = null; return 192 & (i = e[t + 7]) && ((n = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, n.pts *= 4, n.pts += (6 & e[t + 13]) >>>
                                    1, n.dts = n.pts, 64 & i && (n.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, n.dts *= 4, n.dts += (6 & e[t + 18]) >>> 1)), n
                            }, videoPacketContainsKeyFrame: function (e) {
                                for (var t = 4 + za(e), i = e.subarray(t), n = 0, r = 0, s = !1; r < i.byteLength - 3; r++)if (1 === i[r + 2]) { n = r + 5; break } for (; n < i.byteLength;)switch (i[n]) {
                                    case 0: if (0 !== i[n - 1]) { n += 2; break } if (0 !== i[n - 2]) { n++; break } for (r + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === Ga(31 & i[r + 3]) && (s = !0); 1 !== i[++n] && n < i.length;); r = n - 2, n += 3; break;
                                    case 1: if (0 !== i[n - 1] || 0 !== i[n - 2]) { n += 3; break } "slice_layer_without_partitioning_rbsp_idr" === Ga(31 & i[r + 3]) && (s = !0), r = n - 2, n += 3; break; default: n += 3
                                }return i = i.subarray(r), n -= r, r = 0, i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === Ga(31 & i[r + 3]) && (s = !0), s
                            }
                        }, Za = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350], eo = {
                            isLikelyAacData: function (e) { return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0) }, parseId3TagSize: function (e, t) {
                                var i = e[t + 6] << 21 |
                                    e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9]; return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i
                            }, parseAdtsSize: function (e, t) { var i = (224 & e[t + 5]) >> 5, n = e[t + 4] << 3; return 6144 & e[t + 3] | n | i }, parseType: function (e, t) { return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null }, parseSampleRate: function (e) { for (var t = 0; t + 5 < e.length;) { if (255 === e[t] && 240 == (246 & e[t + 1])) return Za[(60 & e[t + 2]) >>> 2]; t++ } return null }, parseAacTimestamp: function (e) {
                                var t, i, n; t = 10, 64 & e[5] &&
                                    (t += 4, t += Ka(e.subarray(10, 14))); do { if ((i = Ka(e.subarray(t + 4, t + 8))) < 1) return null; if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) { n = e.subarray(t + 10, t + i + 10); for (var r = 0; r < n.byteLength; r++)if (0 === n[r]) { if ("com.apple.streaming.transportStreamTimestamp" !== unescape(function (e, t, i) { var n, r = ""; for (n = t; n < i; n++)r += "%" + ("00" + e[n].toString(16)).slice(-2); return r }(n, 0, r))) break; var s = n.subarray(r + 1), a = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2; return a *= 4, a += 3 & s[7] } } t += 10, t += i } while (t < e.byteLength);
                                return null
                            }
                        }, to = 9E4, io = (Xa = function (e) { return 9E4 * e }, Ya = function (e, t) { return e * t }, $a = function (e) { return e / 9E4 }, Qa = function (e, t) { return e / t }, Ma), no = {}; no.ts = Ja, no.aac = eo; function ro(e, t, i) {
                            for (var n, r, s, a, o = 0, u = uo, l = !1; u <= e.byteLength;)if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o++, u++; else {
                                switch (n = e.subarray(o, u), no.ts.parseType(n, t.pid)) {
                                    case "pes": r = no.ts.parsePesType(n, t.table), s = no.ts.parsePayloadUnitStartIndicator(n), "audio" === r && s && (a = no.ts.parsePesTime(n)) && (a.type = "audio", i.audio.push(a),
                                        l = !0)
                                }if (l) break; o += uo, u += uo
                            } for (o = (u = e.byteLength) - uo, l = !1; 0 <= o;)if (71 !== e[o] || 71 !== e[u] && u !== e.byteLength) o--, u--; else { switch (n = e.subarray(o, u), no.ts.parseType(n, t.pid)) { case "pes": r = no.ts.parsePesType(n, t.table), s = no.ts.parsePayloadUnitStartIndicator(n), "audio" === r && s && (a = no.ts.parsePesTime(n)) && (a.type = "audio", i.audio.push(a), l = !0) }if (l) break; o -= uo, u -= uo }
                        } function so(e, t, i) {
                            for (var n, r, s, a, o, u, l, c = 0, h = uo, d = !1, p = { data: [], size: 0 }; h < e.byteLength;)if (71 !== e[c] || 71 !== e[h]) c++, h++; else {
                                switch (n = e.subarray(c,
                                    h), no.ts.parseType(n, t.pid)) { case "pes": if (r = no.ts.parsePesType(n, t.table), s = no.ts.parsePayloadUnitStartIndicator(n), "video" === r && (s && !d && (a = no.ts.parsePesTime(n)) && (a.type = "video", i.video.push(a), d = !0), !i.firstKeyFrame)) { if (s && 0 !== p.size) { for (o = new Uint8Array(p.size), u = 0; p.data.length;)l = p.data.shift(), o.set(l, u), u += l.byteLength; if (no.ts.videoPacketContainsKeyFrame(o)) { var f = no.ts.parsePesTime(o); f && (i.firstKeyFrame = f, i.firstKeyFrame.type = "video") } p.size = 0 } p.data.push(n), p.size += n.byteLength } }if (d &&
                                        i.firstKeyFrame) break; c += uo, h += uo
                            } for (c = (h = e.byteLength) - uo, d = !1; 0 <= c;)if (71 !== e[c] || 71 !== e[h]) c--, h--; else { switch (n = e.subarray(c, h), no.ts.parseType(n, t.pid)) { case "pes": r = no.ts.parsePesType(n, t.table), s = no.ts.parsePayloadUnitStartIndicator(n), "video" === r && s && (a = no.ts.parsePesTime(n)) && (a.type = "video", i.video.push(a), d = !0) }if (d) break; c -= uo, h -= uo }
                        } function ao(e) {
                            var t = { pid: null, table: null }, i = {}; for (var n in function (e, t) {
                                for (var i, n = 0, r = uo; r < e.byteLength;)if (71 !== e[n] || 71 !== e[r]) n++, r++; else {
                                    switch (i =
                                    e.subarray(n, r), no.ts.parseType(i, t.pid)) { case "pat": t.pid || (t.pid = no.ts.parsePat(i)); break; case "pmt": t.table || (t.table = no.ts.parsePmt(i)) }if (t.pid && t.table) return; n += uo, r += uo
                                }
                            }(e, t), t.table) if (t.table.hasOwnProperty(n)) switch (t.table[n]) { case Fa: i.video = [], so(e, t, i), 0 === i.video.length && delete i.video; break; case Ha: i.audio = [], ro(e, t, i), 0 === i.audio.length && delete i.audio }return i
                        } var oo = to, uo = 188, lo = function (e, t) {
                            var i; return (i = no.aac.isLikelyAacData(e) ? function (e) {
                                for (var t, i = !1, n = 0, r = null, s = null,
                                    a = 0, o = 0; 3 <= e.length - o;) { switch (no.aac.parseType(e, o)) { case "timed-metadata": if (e.length - o < 10) { i = !0; break } if ((a = no.aac.parseId3TagSize(e, o)) > e.length) { i = !0; break } null === s && (t = e.subarray(o, o + a), s = no.aac.parseAacTimestamp(t)), o += a; break; case "audio": if (e.length - o < 7) { i = !0; break } if ((a = no.aac.parseAdtsSize(e, o)) > e.length) { i = !0; break } null === r && (t = e.subarray(o, o + a), r = no.aac.parseSampleRate(t)), n++, o += a; break; default: o++ }if (i) return null } if (null === r || null === s) return null; var u = oo / r; return {
                                        audio: [{
                                            type: "audio",
                                            dts: s, pts: s
                                        }, { type: "audio", dts: s + 1024 * n * u, pts: s + 1024 * n * u }]
                                    }
                            }(e) : ao(e)) && (i.audio || i.video) ? (function (e, t) {
                                if (e.audio && e.audio.length) { var i = t; "undefined" == typeof i && (i = e.audio[0].dts), e.audio.forEach(function (e) { e.dts = io(e.dts, i), e.pts = io(e.pts, i), e.dtsTime = e.dts / oo, e.ptsTime = e.pts / oo }) } if (e.video && e.video.length) {
                                    var n = t; if ("undefined" == typeof n && (n = e.video[0].dts), e.video.forEach(function (e) { e.dts = io(e.dts, n), e.pts = io(e.pts, n), e.dtsTime = e.dts / oo, e.ptsTime = e.pts / oo }), e.firstKeyFrame) {
                                        var r = e.firstKeyFrame;
                                        r.dts = io(r.dts, n), r.pts = io(r.pts, n), r.dtsTime = r.dts / oo, r.ptsTime = r.dts / oo
                                    }
                                }
                            }(i, t), i) : null
                        }; function co(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function"); } var ho = function (e, t, i) { return t && po(e.prototype, t), i && po(e, i), e }; function po(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } var fo = null, mo = (go.prototype.decrypt = function (e, t, i, n, r, s) {
                            var a = this._key[1], o = e ^
                                a[0], u = n ^ a[1], l = i ^ a[2], c = t ^ a[3], h = void 0, d = void 0, p = void 0, f = a.length / 4 - 2, m = void 0, g = 4, v = this._tables[1], y = v[0], _ = v[1], b = v[2], T = v[3], S = v[4]; for (m = 0; m < f; m++)h = y[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ a[g], d = y[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ a[g + 1], p = y[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ a[g + 2], c = y[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ a[g + 3], g += 4, o = h, u = d, l = p; for (m = 0; m < 4; m++)r[(3 & -m) + s] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ a[g++], h = o, o = u, u = l, l = c, c = h
                        }, go); function go(e) {
                            co(this,
                                go), fo = fo || function () { var e = [[[], [], [], [], []], [[], [], [], [], []]], t = e[0], i = e[1], n = t[4], r = i[4], s = void 0, a = void 0, o = void 0, u = [], l = [], c = void 0, h = void 0, d = void 0, p = void 0, f = void 0; for (s = 0; s < 256; s++)l[(u[s] = s << 1 ^ 283 * (s >> 7)) ^ s] = s; for (a = o = 0; !n[a]; a ^= c || 1, o = l[o] || 1)for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[r[n[a] = d] = a]]] ^ 65537 * h ^ 257 * c ^ 16843008 * a, p = 257 * u[d] ^ 16843008 * d, s = 0; s < 4; s++)t[s][a] = p = p << 24 ^ p >>> 8, i[s][d] = f = f << 24 ^ f >>> 8; for (s = 0; s < 5; s++)t[s] = t[s].slice(0), i[s] = i[s].slice(0); return e }(),
                            this._tables = [[fo[0][0].slice(), fo[0][1].slice(), fo[0][2].slice(), fo[0][3].slice(), fo[0][4].slice()], [fo[1][0].slice(), fo[1][1].slice(), fo[1][2].slice(), fo[1][3].slice(), fo[1][4].slice()]]; var t = void 0, i = void 0, n = void 0, r = void 0, s = void 0, a = this._tables[0][4], o = this._tables[1], u = e.length, l = 1; if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size"); for (r = e.slice(0), s = [], this._key = [r, s], t = u; t < 4 * u + 28; t++)n = r[t - 1], (t % u == 0 || 8 === u && t % u == 4) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n],
                                t % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[t] = r[t - u] ^ n; for (i = 0; t; i++, t--)n = r[3 & i ? t : t - 4], s[i] = t <= 4 || i < 4 ? n : o[0][a[n >>> 24]] ^ o[1][a[n >> 16 & 255]] ^ o[2][a[n >> 8 & 255]] ^ o[3][a[255 & n]]
                        } var vo = (yo.prototype.on = function (e, t) { this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t) }, yo.prototype.off = function (e, t) { if (!this.listeners[e]) return !1; var i = this.listeners[e].indexOf(t); return this.listeners[e].splice(i, 1), -1 < i }, yo.prototype.trigger = function (e, t) {
                            var i = this.listeners[e]; if (i) if (2 === arguments.length) for (var n =
                                i.length, r = 0; r < n; ++r)i[r].call(this, t); else for (var s = Array.prototype.slice.call(arguments, 1), a = i.length, o = 0; o < a; ++o)i[o].apply(this, s)
                        }, yo.prototype.dispose = function () { this.listeners = {} }, yo.prototype.pipe = function (t) { this.on("data", function (e) { t.push(e) }) }, yo); function yo() { co(this, yo), this.listeners = {} } var _o, bo = (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1, writable: !0, configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(To, _o = vo), To.prototype.processJob_ = function () { this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null }, To.prototype.push = function (e) { this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay)) }, To); function To() {
                            co(this, To); var e = function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, _o.call(this, vo)); return e.jobs = [], e.delay = 1, e.timeout_ = null, e
                        } function So(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24 } function ko(e, t, i) {
                            var n = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2), r = new mo(Array.prototype.slice.call(t)), s = new Uint8Array(e.byteLength), a = new Int32Array(s.buffer), o = void 0, u = void 0, l = void 0, c = void 0, h = void 0, d = void 0, p = void 0, f = void 0, m = void 0; for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < n.length; m += 4)h = So(n[m]),
                                d = So(n[m + 1]), p = So(n[m + 2]), f = So(n[m + 3]), r.decrypt(h, d, p, f, a, m), a[m] = So(a[m] ^ o), a[m + 1] = So(a[m + 1] ^ u), a[m + 2] = So(a[m + 2] ^ l), a[m + 3] = So(a[m + 3] ^ c), o = h, u = d, l = p, c = f; return s
                        } var Co = (Eo.prototype.decryptChunk_ = function (t, i, n, r) { return function () { var e = ko(t, i, n); r.set(e, t.byteOffset) } }, ho(Eo, null, [{ key: "STEP", get: function () { return 32E3 } }]), Eo); function Eo(e, t, i, n) {
                            co(this, Eo); var r = Eo.STEP, s = new Int32Array(e.buffer), a = new Uint8Array(e.byteLength), o = 0; for (this.asyncStream_ = new bo, this.asyncStream_.push(this.decryptChunk_(s.subarray(o,
                                o + r), t, i, a)), o = r; o < s.length; o += r)i = new Uint32Array([So(s[o - 4]), So(s[o - 3]), So(s[o - 2]), So(s[o - 1])]), this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a)); this.asyncStream_.push(function () { n(null, function (e) { return e.subarray(0, e.byteLength - e[e.byteLength - 1]) }(a)) })
                        } function wo(e, t) { return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = os.buildAbsoluteURL(y.location.href, e)), os.buildAbsoluteURL(e, t)) } function Lo(e, t, i) { return e && i.responseURL && t !== i.responseURL ? i.responseURL : t } function Po(e,
                            t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function"); } var Ao = function (e, t, i) { return t && Io(e.prototype, t), i && Io(e, i), e }; function Io(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } function xo(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1, writable: !0, configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            } function Oo(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function Do(r, s) { ["AUDIO", "SUBTITLES"].forEach(function (e) { for (var t in r.mediaGroups[e]) for (var i in r.mediaGroups[e][t]) { var n = r.mediaGroups[e][t][i]; s(n, e, t, i) } }) } function Ro(e, t) {
                                var i = jo(e, {}), n = i.playlists[t.uri]; if (!n) return null;
                                if (n.segments && t.segments && n.segments.length === t.segments.length && n.endList === t.endList && n.mediaSequence === t.mediaSequence) return null; var r = jo(n, t); n.segments && (r.segments = function (e, t, i) { var n = t.slice(); i = i || 0; for (var r = Math.min(e.length, t.length + i), s = i; s < r; s++)n[s - i] = jo(e[s], n[s - i]); return n }(n.segments, t.segments, t.mediaSequence - n.mediaSequence)), r.segments.forEach(function (e) {
                                    !function (e, t) {
                                        e.resolvedUri || (e.resolvedUri = wo(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = wo(t, e.key.uri)),
                                        e.map && !e.map.resolvedUri && (e.map.resolvedUri = wo(t, e.map.uri))
                                    }(e, r.resolvedUri)
                                }); for (var s = 0; s < i.playlists.length; s++)i.playlists[s].uri === t.uri && (i.playlists[s] = r); return i.playlists[t.uri] = r, i
                            } function Uo(e) { for (var t = e.playlists.length; t--;) { var i = e.playlists[t]; (e.playlists[i.uri] = i).resolvedUri = wo(e.uri, i.uri), i.id = t, i.attributes || (i.attributes = {}, Fo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")) } } function Mo(t) { Do(t, function (e) { e.uri && (e.resolvedUri = wo(t.uri, e.uri)) }) }
    function No(e, t) { var i = e.segments[e.segments.length - 1]; return t && i && i.duration ? 1E3 * i.duration : 500 * (e.targetDuration || 10) } var Bo = function (e, t) {
        if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { var i = [], n = !0, r = !1, s = void 0; try { for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0); } catch (e) { r = !0, s = e } finally { try { !n && o.return && o.return() } finally { if (r) throw s; } } return i }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, jo = rs.mergeOptions, Fo = rs.log, Ho = (xo(Vo, rs.EventTarget), Ao(Vo, [{ key: "playlistRequestError", value: function (e, t, i) { this.request = null, i && (this.state = i), this.error = { playlist: this.master.playlists[t], status: e.status, message: "HLS playlist request error at URL: " + t + ".", responseText: e.responseText, code: 500 <= e.status ? 4 : 2 }, this.trigger("error") } }, {
        key: "haveMetadata", value: function (e, t) {
            var i = this; this.request = null, this.state = "HAVE_METADATA"; var n = new ys; this.customTagParsers.forEach(function (e) { return n.addParser(e) }),
                this.customTagMappers.forEach(function (e) { return n.addTagMapper(e) }), n.push(e.responseText), n.end(), n.manifest.uri = t, n.manifest.attributes = n.manifest.attributes || {}; var r = Ro(this.master, n.manifest); this.targetDuration = n.manifest.targetDuration, r ? (this.master = r, this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (y.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = y.setTimeout(function () { i.trigger("mediaupdatetimeout") }, No(this.media(),
                    !!r))), this.trigger("loadedplaylist")
        }
    }, { key: "dispose", value: function () { this.stopRequest(), y.clearTimeout(this.mediaUpdateTimeout), y.clearTimeout(this.finalRenditionTimeout) } }, { key: "stopRequest", value: function () { if (this.request) { var e = this.request; this.request = null, e.onreadystatechange = null, e.abort() } } }, {
        key: "media", value: function (i, e) {
            var n = this; if (!i) return this.media_; if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state); if ("string" == typeof i) {
                if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " +
                    i); i = this.master.playlists[i]
            } if (y.clearTimeout(this.finalRenditionTimeout), e) { var t = i.targetDuration / 2 * 1E3 || 5E3; this.finalRenditionTimeout = y.setTimeout(this.media.bind(this, i, !1), t) } else {
                var r = this.state, s = !this.media_ || i.uri !== this.media_.uri; if (this.master.playlists[i.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, void (s && (this.trigger("mediachanging"), this.trigger("mediachange"))); if (s) {
                    if (this.state =
                        "SWITCHING_MEDIA", this.request) { if (i.resolvedUri === this.request.url) return; this.request.onreadystatechange = null, this.request.abort(), this.request = null } this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({ uri: i.resolvedUri, withCredentials: this.withCredentials }, function (e, t) { if (n.request) { if (i.resolvedUri = Lo(n.handleManifestRedirects, i.resolvedUri, t), e) return n.playlistRequestError(n.request, i.uri, r); n.haveMetadata(t, i.uri), "HAVE_MASTER" === r ? n.trigger("loadedmetadata") : n.trigger("mediachange") } })
                }
            }
        }
    },
    { key: "pause", value: function () { this.stopRequest(), y.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA") } }, {
        key: "load", value: function (e) {
            var t = this; y.clearTimeout(this.mediaUpdateTimeout); var i = this.media(); if (e) {
                var n = i ? i.targetDuration / 2 * 1E3 : 5E3; this.mediaUpdateTimeout = y.setTimeout(function () { return t.load() },
                    n)
            } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
        }
    }, {
        key: "start", value: function () {
            var n = this; this.started = !0, this.request = this.hls_.xhr({ uri: this.srcUrl, withCredentials: this.withCredentials }, function (e, t) {
                if (n.request) {
                    if (n.request = null, e) return n.error = { status: t.status, message: "HLS playlist request error at URL: " + n.srcUrl + ".", responseText: t.responseText, code: 2 }, "HAVE_NOTHING" === n.state && (n.started = !1), n.trigger("error"); var i = new ys;
                    return n.customTagParsers.forEach(function (e) { return i.addParser(e) }), n.customTagMappers.forEach(function (e) { return i.addTagMapper(e) }), i.push(t.responseText), i.end(), n.state = "HAVE_MASTER", n.srcUrl = Lo(n.handleManifestRedirects, n.srcUrl, t), i.manifest.uri = n.srcUrl, i.manifest.playlists ? (n.master = i.manifest, Uo(n.master), Mo(n.master), n.trigger("loadedplaylist"), void (n.request || n.media(i.manifest.playlists[0]))) : (n.master = {
                        mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: y.location.href,
                        playlists: [{ uri: n.srcUrl, id: 0, resolvedUri: n.srcUrl, attributes: {} }]
                    }, n.master.playlists[n.srcUrl] = n.master.playlists[0], n.haveMetadata(t, n.srcUrl), n.trigger("loadedmetadata"))
                }
            })
        }
    }]), Vo); function Vo(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; Po(this, Vo); var n = Oo(this, (Vo.__proto__ || Object.getPrototypeOf(Vo)).call(this)), r = i.withCredentials, s = void 0 !== r && r, a = i.handleManifestRedirects, o = void 0 !== a && a; n.srcUrl = e, n.hls_ = t, n.withCredentials = s, n.handleManifestRedirects = o; var u =
            t.options_; if (n.customTagParsers = u && u.customTagParsers || [], n.customTagMappers = u && u.customTagMappers || [], !n.srcUrl) throw new Error("A non-empty playlist URL is required"); return n.state = "HAVE_NOTHING", n.on("mediaupdatetimeout", function () {
                "HAVE_METADATA" === n.state && (n.state = "HAVE_CURRENT_METADATA", n.request = n.hls_.xhr({ uri: wo(n.master.uri, n.media().uri), withCredentials: n.withCredentials }, function (e, t) {
                    if (n.request) return e ? n.playlistRequestError(n.request, n.media().uri, "HAVE_METADATA") : void n.haveMetadata(n.request,
                        n.media().uri)
                }))
            }), n
    } function qo(e, t, i) {
        var n, r; return "undefined" == typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence ? 0 : (n = function (e, t) {
            var i = 0, n = t - e.mediaSequence, r = e.segments[n]; if (r) { if ("undefined" != typeof r.start) return { result: r.start, precise: !0 }; if ("undefined" != typeof r.end) return { result: r.end - r.duration, precise: !0 } } for (; n--;) { if ("undefined" != typeof (r = e.segments[n]).end) return { result: i + r.end, precise: !0 }; if (i += r.duration, "undefined" != typeof r.start) return { result: i + r.start, precise: !0 } } return {
                result: i,
                precise: !1
            }
        }(e, t)).precise ? n.result : (r = function (e, t) { for (var i = 0, n = void 0, r = t - e.mediaSequence; r < e.segments.length; r++) { if ("undefined" != typeof (n = e.segments[r]).start) return { result: n.start - i, precise: !0 }; if (i += n.duration, "undefined" != typeof n.end) return { result: n.end - i, precise: !0 } } return { result: -1, precise: !1 } }(e, t)).precise ? r.result : n.result + i
    } function Wo(e, t, i) {
        if (!e) return 0; if ("number" != typeof i && (i = 0), "undefined" == typeof t) { if (e.totalDuration) return e.totalDuration; if (!e.endList) return y.Infinity } return qo(e,
            t, i)
    } function zo(e, t, i) { var n = 0; if (i < t) { var r = [i, t]; t = r[0], i = r[1] } if (t < 0) { for (var s = t; s < Math.min(0, i); s++)n += e.targetDuration; t = 0 } for (var a = t; a < i; a++)n += e.segments[a].duration; return n } function Go(e) { if (!e.segments.length) return 0; for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, n = i + 2 * e.targetDuration; t-- && !(n <= (i += e.segments[t].duration));); return Math.max(0, t) } function Ko(e, t, i) {
        if (!e || !e.segments) return null; if (e.endList) return Wo(e); if (null === t) return null; t = t || 0; var n =
            i ? Go(e) : e.segments.length; return qo(e, e.mediaSequence + n, t)
    } function Xo(e) { return e - Math.floor(e) == 0 } function Yo(e, t) { if (Xo(t)) return t + 0.1 * e; for (var i = t.toString().split(".")[1].length, n = 1; n <= i; n++) { var r = Math.pow(10, n), s = t * r; if (Xo(s) || n === i) return (s + e) / r } } function $o(e) { return e.excludeUntil && e.excludeUntil > Date.now() } function Qo(e) { return e.excludeUntil && e.excludeUntil === 1 / 0 } function Jo(e) { var t = $o(e); return !e.disabled && !t } function Zo(e, t) { return t.attributes && t.attributes[e] } function eu(e, t) {
        if (1 ===
            e.playlists.length) return !0; var i = t.attributes.BANDWIDTH || Number.MAX_VALUE; return 0 === e.playlists.filter(function (e) { return !!Jo(e) && (e.attributes.BANDWIDTH || 0) < i }).length
    } function tu() {
        return function e(t, n) {
            t = Cu({ timeout: 45E3 }, t); var i = e.beforeRequest || rs.Hls.xhr.beforeRequest; if (i && "function" == typeof i) { var r = i(t); r && (t = r) } var s = ku(t, function (e, t) {
                var i = s.response; !e && i && (s.responseTime = Date.now(), s.roundTripTime = s.responseTime - s.requestTime, s.bytesReceived = i.byteLength || i.length, s.bandwidth || (s.bandwidth =
                    Math.floor(s.bytesReceived / s.roundTripTime * 8 * 1E3))), t.headers && (s.responseHeaders = t.headers), e && "ETIMEDOUT" === e.code && (s.timedout = !0), e || s.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (s && (i || s.responseText)))), n(e, s)
            }), a = s.abort; return s.abort = function () { return s.aborted = !0, a.apply(s, arguments) }, s.uri = t.uri, s.requestTime = Date.now(), s
        }
    } function iu(e) {
        var t = {}; return e.byterange && (t.Range = function (e) {
            var t; return t = e.offset + e.length -
                1, "bytes\x3d" + e.offset + "-" + t
        }(e.byterange)), t
    } function nu(e, t) { var i = e.toString(16); return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "") } function ru(e) { return 32 <= e && e < 126 ? String.fromCharCode(e) : "." } function su(i) { var n = {}; return Object.keys(i).forEach(function (e) { var t = i[e]; ArrayBuffer.isView(t) ? n[e] = { bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength } : n[e] = t }), n } function au(e) { var t = e.byterange || { length: 1 / 0, offset: 0 }; return [t.length, t.offset, e.resolvedUri].join(",") } function ou(e) { return e.resolvedUri }
    function uu(e) { for (var t = Array.prototype.slice.call(e), i = "", n = 0; n < t.length / 16; n++)i += t.slice(16 * n, 16 * n + 16).map(nu).join("") + " " + t.slice(16 * n, 16 * n + 16).map(ru).join("") + "\n"; return i } function lu(e) {
        var t = e.playlist, i = e.time, n = void 0 === i ? void 0 : i, r = e.callback; if (!r) throw new Error("getProgramTime: callback must be provided"); if (!t || void 0 === n) return r({ message: "getProgramTime: playlist and time must be provided" }); var s = function (e, t) {
            if (!t || !t.segments || 0 === t.segments.length) return null; for (var i = 0,
                n = void 0, r = 0; r < t.segments.length && !(e <= (i = (n = t.segments[r]).videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationEnd : i + n.duration)); r++); var s = t.segments[t.segments.length - 1]; if (s.videoTimingInfo && s.videoTimingInfo.transmuxedPresentationEnd < e) return null; if (i < e) { if (e > i + 0.25 * s.duration) return null; n = s } return { segment: n, estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : i - n.duration, type: n.videoTimingInfo ? "accurate" : "estimate" }
        }(n, t); if (!s) return r({ message: "valid programTime was not found" });
        if ("estimate" === s.type) return r({ message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime: s.estimatedStart }); var a = { mediaSeconds: n }, o = function (e, t) { if (!t.dateTimeObject) return null; var i = t.videoTimingInfo.transmuxerPrependedSeconds, n = e - (t.videoTimingInfo.transmuxedPresentationStart + i); return new Date(t.dateTimeObject.getTime() + 1E3 * n) }(n, s.segment); return o && (a.programDateTime = o.toISOString()), r(null, a)
    } function cu(e) {
        var t = e.programTime, i = e.playlist,
        n = e.retryCount, r = void 0 === n ? 2 : n, s = e.seekTo, a = e.pauseAfterSeek, o = void 0 === a || a, u = e.tech, l = e.callback; if (!l) throw new Error("seekToProgramTime: callback must be provided"); if ("undefined" == typeof t || !i || !s) return l({ message: "seekToProgramTime: programTime, seekTo and playlist must be provided" }); if (!i.endList && !u.hasStarted_) return l({ message: "player must be playing a live stream to start buffering" }); if (!function (e) {
            if (!e.segments || 0 === e.segments.length) return !1; for (var t = 0; t < e.segments.length; t++)if (!e.segments[t].dateTimeObject) return !1;
            return !0
        }(i)) return l({ message: "programDateTime tags must be provided in the manifest " + i.resolvedUri }); var c = function (e, t) {
            var i = void 0; try { i = new Date(e) } catch (e) { return null } if (!t || !t.segments || 0 === t.segments.length) return null; var n = t.segments[0]; if (i < n.dateTimeObject) return null; for (var r = 0; r < t.segments.length - 1; r++)if (n = t.segments[r], i < t.segments[r + 1].dateTimeObject) break; var s = t.segments[t.segments.length - 1], a = s.dateTimeObject, o = s.videoTimingInfo ? function (e) {
                return e.transmuxedPresentationEnd -
                    e.transmuxedPresentationStart - e.transmuxerPrependedSeconds
            }(s.videoTimingInfo) : s.duration + 0.25 * s.duration; return new Date(a.getTime() + 1E3 * o) < i ? null : (a < i && (n = s), { segment: n, estimatedStart: n.videoTimingInfo ? n.videoTimingInfo.transmuxedPresentationStart : Su.duration(t, t.mediaSequence + t.segments.indexOf(n)), type: n.videoTimingInfo ? "accurate" : "estimate" })
        }(t, i); if (!c) return l({ message: t + " was not found in the stream" }); var h = c.segment, d = function (e, t) {
            var i = void 0, n = void 0; try { i = new Date(e), n = new Date(t) } catch (e) { } var r =
                i.getTime(); return (n.getTime() - r) / 1E3
        }(h.dateTimeObject, t); if ("estimate" === c.type) return 0 === r ? l({ message: t + " is not buffered yet. Try again" }) : (s(c.estimatedStart + d), void u.one("seeked", function () { cu({ programTime: t, playlist: i, retryCount: r - 1, seekTo: s, pauseAfterSeek: o, tech: u, callback: l }) })); var p = h.start + d; u.one("seeked", function () { return l(null, u.currentTime()) }), o && u.pause(), s(p)
    } function hu(e, t) {
        var i = [], n = void 0; if (e && e.length) for (n = 0; n < e.length; n++)t(e.start(n), e.end(n)) && i.push([e.start(n), e.end(n)]);
        return rs.createTimeRanges(i)
    } function du(e, i) { return hu(e, function (e, t) { return e - 0.1 <= i && i <= t + 0.1 }) } function pu(e, t) { return hu(e, function (e) { return t <= e - 1 / 30 }) } function fu(e) { var t = []; if (!e || !e.length) return ""; for (var i = 0; i < e.length; i++)t.push(e.start(i) + " \x3d\x3e " + e.end(i)); return t.join(", ") } function mu(e) { for (var t = [], i = 0; i < e.length; i++)t.push({ start: e.start(i), end: e.end(i) }); return t } function gu(e, t, i) {
        var n = void 0, r = void 0; if (i && i.cues) for (n = i.cues.length; n--;)(r = i.cues[n]).startTime <= t &&
            r.endTime >= e && i.removeCue(r)
    } function vu(e) { return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e } function yu(e, t, i) {
        var n = y.WebKitDataCue || y.VTTCue; if (t && t.forEach(function (e) { var t = e.stream; this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text)) }, e), i) {
            var r = vu(e.mediaSource_.duration); if (i.forEach(function (e) {
                var i = e.cueTime + this.timestampOffset; !("number" != typeof i || y.isNaN(i) || i < 0) && i < 1 / 0 && e.frames.forEach(function (e) {
                    var t = new n(i, i, e.value ||
                        e.url || e.data || ""); t.frame = e, t.value = e, function (e) { Object.defineProperties(e.frame, { id: { get: function () { return rs.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key } }, value: { get: function () { return rs.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data } }, privateData: { get: function () { return rs.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data } } }) }(t), this.metadataTrack_.addCue(t)
                }, this)
            }, e), e.metadataTrack_ &&
            e.metadataTrack_.cues && e.metadataTrack_.cues.length) { for (var s = e.metadataTrack_.cues, a = [], o = 0; o < s.length; o++)s[o] && a.push(s[o]); var u = a.reduce(function (e, t) { var i = e[t.startTime] || []; return i.push(t), e[t.startTime] = i, e }, {}), l = Object.keys(u).sort(function (e, t) { return Number(e) - Number(t) }); l.forEach(function (e, t) { var i = u[e], n = Number(l[t + 1]) || r; i.forEach(function (e) { e.endTime = n }) }) }
        }
    } var _u = rs.createTimeRange, bu = Yo.bind(null, 1), Tu = Yo.bind(null, -1), Su = {
        duration: Wo, seekable: function (e, t) {
            var i = t || 0, n = Ko(e,
                t, !0); return null === n ? _u() : _u(i, n)
        }, safeLiveIndex: Go, getMediaInfoForTime: function (e, t, i, n) { var r = void 0, s = void 0, a = e.segments.length, o = t - n; if (o < 0) { if (0 < i) for (r = i - 1; 0 <= r; r--)if (s = e.segments[r], 0 < (o += Tu(s.duration))) return { mediaIndex: r, startTime: n - zo(e, i, r) }; return { mediaIndex: 0, startTime: t } } if (i < 0) { for (r = i; r < 0; r++)if ((o -= e.targetDuration) < 0) return { mediaIndex: 0, startTime: t }; i = 0 } for (r = i; r < a; r++)if (s = e.segments[r], (o -= bu(s.duration)) < 0) return { mediaIndex: r, startTime: n + zo(e, i, r) }; return { mediaIndex: a - 1, startTime: t } },
        isEnabled: Jo, isDisabled: function (e) { return e.disabled }, isBlacklisted: $o, isIncompatible: Qo, playlistEnd: Ko, isAes: function (e) { for (var t = 0; t < e.segments.length; t++)if (e.segments[t].key) return !0; return !1 }, isFmp4: function (e) { for (var t = 0; t < e.segments.length; t++)if (e.segments[t].map) return !0; return !1 }, hasAttribute: Zo, estimateSegmentRequestTime: function (e, t, i, n) { var r = 3 < arguments.length && void 0 !== n ? n : 0; return Zo("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * r) / t : NaN }, isLowestEnabledRendition: eu
    }, ku = rs.xhr, Cu =
            rs.mergeOptions, Eu = Object.freeze({ createTransferableMessage: su, initSegmentId: au, segmentKeyId: ou, hexDump: uu, tagDump: function (e) { var t = e.bytes; return uu(t) }, textRanges: function (e) { var t, i, n = "", r = void 0; for (r = 0; r < e.length; r++)n += (i = r, (t = e).start(i) + "-" + t.end(i) + " "); return n } }), wu = "undefined" != typeof window ? window : {}, Lu = "undefined" == typeof Symbol ? "__target" : Symbol(), Pu = "application/javascript", Au = wu.BlobBuilder || wu.WebKitBlobBuilder || wu.MozBlobBuilder || wu.MSBlobBuilder, Iu = wu.URL || wu.webkitURL || Iu && Iu.msURL,
        xu = wu.Worker; function Ou(r, s) {
            return function (e) {
                var t = this; if (!s) return new xu(r); if (xu && !e) { var i = Mu(s.toString().replace(/^function.+?{/, "").slice(0, -1)); return this[Lu] = new xu(i), function (e, t) { if (!e || !t) return; var i = e.terminate; e.objURL = t, e.terminate = function () { e.objURL && Iu.revokeObjectURL(e.objURL), i.call(e) } }(this[Lu], i), this[Lu] } var n = { postMessage: function (e) { t.onmessage && setTimeout(function () { t.onmessage({ data: e, target: n }) }) } }; s.call(n), this.postMessage = function (e) {
                    setTimeout(function () {
                        n.onmessage({
                            data: e,
                            target: t
                        })
                    })
                }, this.isThisThread = !0
            }
        } if (xu) { var Du, Ru = Mu("self.onmessage \x3d function () {}"), Uu = new Uint8Array(1); try { (Du = new xu(Ru)).postMessage(Uu, [Uu.buffer]) } catch (e) { xu = null } finally { Iu.revokeObjectURL(Ru), Du && Du.terminate() } } function Mu(t) { try { return Iu.createObjectURL(new Blob([t], { type: Pu })) } catch (e) { var i = new Au; return i.append(t), Iu.createObjectURL(i.getBlob(type)) } } function Nu(e) {
            return e.map(function (e) {
                return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
                    return "avc1." + ("00" + Number(t).toString(16)).slice(-2) +
                        "00" + ("00" + Number(i).toString(16)).slice(-2)
                })
            })
        } function Bu(e) { var t, i = 0 < arguments.length && void 0 !== e ? e : "", n = { codecCount: 0 }; return n.codecCount = i.split(",").length, n.codecCount = n.codecCount || 2, (t = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(i)) && (n.videoCodec = t[2], n.videoObjectTypeIndicator = t[3]), n.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(i), n.audioProfile = n.audioProfile && n.audioProfile[2], n } function ju(e, t, i) {
            return e + "/" + t + '; codecs\x3d"' + i.filter(function (e) { return !!e }).join(", ") +
                '"'
        } function Fu(e, t) {
            var i = function (e) { return e.segments && e.segments.length && e.segments[0].map ? "mp4" : "mp2t" }(t), n = function (e) { var t = e.attributes || {}; return t.CODECS ? Bu(t.CODECS) : zu }(t), r = t.attributes || {}, s = !0, a = !1; if (!t) return []; if (e.mediaGroups.AUDIO && r.AUDIO) { var o = e.mediaGroups.AUDIO[r.AUDIO]; if (o) for (var u in s = !(a = !0), o) if (!o[u].uri && !o[u].playlists) { s = !0; break } } a && !n.audioProfile && (s || (n.audioProfile = function (e, t) {
                if (!e.mediaGroups.AUDIO || !t) return null; var i = e.mediaGroups.AUDIO[t]; if (!i) return null;
                for (var n in i) { var r = i[n]; if (r.default && r.playlists) return Bu(r.playlists[0].attributes.CODECS).audioProfile } return null
            }(e, r.AUDIO)), n.audioProfile || (rs.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), n.audioProfile = zu.audioProfile)); var l = {}; n.videoCodec && (l.video = "" + n.videoCodec + n.videoObjectTypeIndicator), n.audioProfile && (l.audio = "mp4a.40." + n.audioProfile); var c = ju("audio", i, [l.audio]), h = ju("video", i, [l.video]),
                d = ju("video", i, [l.video, l.audio]); return a ? !s && l.video ? [h, c] : s || l.video ? [d, c] : [c, c] : l.video ? [d] : [c]
        } function Hu(e) { var r = { type: "", parameters: {} }, t = e.trim().split(";"); return r.type = t.shift().trim(), t.forEach(function (e) { var t = e.trim().split("\x3d"); if (1 < t.length) { var i = t[0].replace(/"/g, "").trim(), n = t[1].replace(/"/g, "").trim(); r.parameters[i] = n } }), r } function Vu(e) { return /mp4a\.\d+.\d+/i.test(e) } function qu(e) { return /avc1\.[\da-f]+/i.test(e) } var Wu = new Ou("./transmuxer-worker.worker.js", function (e,
            t) {
                var kt = this; !function () {
                    function e() {
                        this.init = function () {
                            var s = {}; this.on = function (e, t) { s[e] || (s[e] = []), s[e] = s[e].concat(t) }, this.off = function (e, t) { var i; return !!s[e] && (i = s[e].indexOf(t), s[e] = s[e].slice(), s[e].splice(i, 1), -1 < i) }, this.trigger = function (e) { var t, i, n, r; if (t = s[e]) if (2 === arguments.length) for (n = t.length, i = 0; i < n; ++i)t[i].call(this, arguments[1]); else { for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i)r.push(arguments[i]); for (n = t.length, i = 0; i < n; ++i)t[i].apply(this, r) } }, this.dispose =
                                function () { s = {} }
                        }
                    } e.prototype.pipe = function (t) { return this.on("data", function (e) { t.push(e) }), this.on("done", function (e) { t.flush(e) }), this.on("partialdone", function (e) { t.partialFlush(e) }), this.on("endedtimeline", function (e) { t.endTimeline(e) }), this.on("reset", function (e) { t.reset(e) }), t }, e.prototype.push = function (e) { this.trigger("data", e) }, e.prototype.flush = function (e) { this.trigger("done", e) }, e.prototype.partialFlush = function (e) { this.trigger("partialdone", e) }, e.prototype.endTimeline = function (e) {
                        this.trigger("endedtimeline",
                            e)
                    }, e.prototype.reset = function (e) { this.trigger("reset", e) }; var l, t, i, r, s, n, a, o, u, c, h, d, p, f, m, g, v, y, _, b, T, S, k, C, E, w, L, P, A, I, x, O, D, R, U, M, N, B, j, F, H = e, V = Math.pow(2, 32) - 1; !function () {
                        var e; if (S = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], pasp: [], sdtp: [], smhd: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], styp: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [] }, "undefined" != typeof Uint8Array) {
                            for (e in S) S.hasOwnProperty(e) &&
                                (S[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]); k = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), E = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), C = new Uint8Array([0, 0, 0, 1]), w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100,
                                    72, 97, 110, 100, 108, 101, 114, 0]), P = { video: w, audio: L }, x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), D = O, R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), U = O, A = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                        }
                    }(), l = function (e) {
                        var t, i, n = [], r = 0; for (t = 1; t < arguments.length; t++)n.push(arguments[t]); for (t = n.length; t--;)r += n[t].byteLength; for (i = new Uint8Array(r + 8), (new DataView(i.buffer, i.byteOffset, i.byteLength)).setUint32(0,
                            i.byteLength), i.set(e, 4), t = 0, r = 8; t < n.length; t++)i.set(n[t], r), r += n[t].byteLength; return i
                    }, t = function () { return l(S.dinf, l(S.dref, x)) }, i = function (e) { return l(S.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2])) }, m = function (e) { return l(S.hdlr, P[e]) }, f = function (e) {
                        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>>
                            8 & 255, 255 & e.duration, 85, 196, 0, 0]); return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), l(S.mdhd, t)
                    }, p = function (e) { return l(S.mdia, f(e), m(e.type), n(e)) }, s = function (e) { return l(S.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])) }, n = function (e) { return l(S.minf, "video" === e.type ? l(S.vmhd, A) : l(S.smhd, I), t(), v(e)) }, a = function (e, t) {
                        for (var i = [], n = t.length; n--;)i[n] = _(t[n]); return l.apply(null,
                            [S.moof, s(e)].concat(i))
                    }, o = function (e) { for (var t = e.length, i = []; t--;)i[t] = h(e[t]); return l.apply(null, [S.moov, c(4294967295)].concat(i).concat(u(e))) }, u = function (e) { for (var t = e.length, i = []; t--;)i[t] = b(e[t]); return l.apply(null, [S.mvex].concat(i)) }, c = function (e) {
                        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return l(S.mvhd, t)
                    }, g = function (e) { var t, i, n = e.samples || [], r = new Uint8Array(4 + n.length); for (i = 0; i < n.length; i++)t = n[i].flags, r[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy; return l(S.sdtp, r) }, v = function (e) { return l(S.stbl, y(e), l(S.stts, U), l(S.stsc, D), l(S.stsz, R), l(S.stco, O)) }, y = function (e) { return l(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? M(e) : N(e)) }, M = function (e) {
                        var t, i, n = e.sps || [], r = e.pps || [], s = [], a = []; for (t = 0; t < n.length; t++)s.push((65280 &
                            n[t].byteLength) >>> 8), s.push(255 & n[t].byteLength), s = s.concat(Array.prototype.slice.call(n[t])); for (t = 0; t < r.length; t++)a.push((65280 & r[t].byteLength) >>> 8), a.push(255 & r[t].byteLength), a = a.concat(Array.prototype.slice.call(r[t])); if (i = [S.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24,
                                17, 17]), l(S.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([n.length], s, [r.length], a))), l(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio) { var o = e.sarRatio[0], u = e.sarRatio[1]; i.push(l(S.pasp, new Uint8Array([(4278190080 & o) >> 24, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o, (4278190080 & u) >> 24, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u]))) } return l.apply(null, i)
                    }, N = function (e) {
                        return l(S.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >>
                            8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), i(e))
                    }, d = function (e) {
                        var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >>
                            8, 255 & e.height, 0, 0]); return l(S.tkhd, t)
                    }, _ = function (e) {
                        var t, i, n, r, s, a; return t = l(S.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), s = Math.floor(e.baseMediaDecodeTime / (1 + V)), a = Math.floor(e.baseMediaDecodeTime % (1 + V)), i = l(S.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a])), 92, "audio" === e.type ? (n = T(e, 92), l(S.traf, t, i, n)) : (r = g(e), n = T(e, r.length + 92), l(S.traf, t, i,
                            n, r))
                    }, h = function (e) { return e.duration = e.duration || 4294967295, l(S.trak, d(e), p(e)) }, b = function (e) { var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]); return "video" !== e.type && (t[t.length - 1] = 0), l(S.trex, t) }, F = function (e, t) {
                        var i = 0, n = 0, r = 0, s = 0; return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (n = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (s = 8)), [0, 0, i | n | r | s, 1, (4278190080 & e.length) >>>
                            24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
                    }, j = function (e, t) {
                        var i, n, r, s; for (t += 20 + 16 * (n = e.samples || []).length, i = F(n, t), s = 0; s < n.length; s++)r = n[s], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>> 24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size, r.flags.isLeading << 2 | r.flags.dependsOn, r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue <<
                            1 | r.flags.isNonSyncSample, 61440 & r.flags.degradationPriority, 15 & r.flags.degradationPriority, (4278190080 & r.compositionTimeOffset) >>> 24, (16711680 & r.compositionTimeOffset) >>> 16, (65280 & r.compositionTimeOffset) >>> 8, 255 & r.compositionTimeOffset]); return l(S.trun, new Uint8Array(i))
                    }, B = function (e, t) {
                        var i, n, r, s; for (t += 20 + 8 * (n = e.samples || []).length, i = F(n, t), s = 0; s < n.length; s++)r = n[s], i = i.concat([(4278190080 & r.duration) >>> 24, (16711680 & r.duration) >>> 16, (65280 & r.duration) >>> 8, 255 & r.duration, (4278190080 & r.size) >>>
                            24, (16711680 & r.size) >>> 16, (65280 & r.size) >>> 8, 255 & r.size]); return l(S.trun, new Uint8Array(i))
                    }, T = function (e, t) { return "audio" === e.type ? B(e, t) : j(e, t) }; r = function () { return l(S.ftyp, k, C, k, E) }; function q(e, t) { var i = { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } }; return i.dataOffset = t, i.compositionTimeOffset = e.pts - e.dts, i.duration = e.duration, i.size = 4 * e.length, i.size += e.byteLength, e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0), i }
                    function W(e) { for (var t = []; e--;)t.push(0); return t } function z() { z.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Ae(0, 0), new Ae(0, 1), new Ae(1, 0), new Ae(1, 1)], this.reset(), this.ccStreams_.forEach(function (e) { e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done")) }, this) } var G, K, X, Y, $, Q = function (e) { return l(S.mdat, e) }, J = a, Z = function (e) {
                        var t, i = r(), n = o(e); return (t = new Uint8Array(i.byteLength +
                            n.byteLength)).set(i), t.set(n, i.byteLength), t
                    }, ee = function (e) {
                        var t, i, n = [], r = []; for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, t = n.byteLength = 0; t < e.length; t++)"access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (n.length && (n.duration = i.dts - n.dts, r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, r.push(n)), (n = [i]).byteLength = i.data.byteLength, n.pts = i.pts, n.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (n.keyFrame = !0), n.duration = i.dts - n.dts, n.byteLength +=
                            i.data.byteLength, n.push(i)); return r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.length, r.duration += n.duration, r.push(n), r
                    }, te = function (e) {
                        var t, i, n = [], r = []; for (n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++)(i = e[t]).keyFrame ? (n.length && (r.push(n), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration),
                            (n = [i]).nalCount = i.length, n.byteLength = i.byteLength, n.pts = i.pts, n.dts = i.dts, n.duration = i.duration) : (n.duration += i.duration, n.nalCount += i.length, n.byteLength += i.byteLength, n.push(i)); return r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration), r.byteLength += n.byteLength, r.nalCount += n.nalCount, r.duration += n.duration, r.push(n), r
                    }, ie = function (e) {
                        var t; return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration +=
                            t.duration), e
                    }, ne = function (e, t) { var i, n, r, s, a, o = t || 0, u = []; for (i = 0; i < e.length; i++)for (s = e[i], n = 0; n < s.length; n++)a = s[n], o += (r = q(a, o)).size, u.push(r); return u }, re = function (e) { var t, i, n, r, s, a, o = 0, u = e.byteLength, l = e.nalCount, c = new Uint8Array(u + 4 * l), h = new DataView(c.buffer); for (t = 0; t < e.length; t++)for (r = e[t], i = 0; i < r.length; i++)for (s = r[i], n = 0; n < s.length; n++)a = s[n], h.setUint32(o, a.data.byteLength), o += 4, c.set(a.data, o), o += a.data.byteLength; return c }, se = [33, 16, 5, 32, 164, 27], ae = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8,
                        17, 191, 252], oe = {
                            96E3: [se, [227, 64], W(154), [56]], 88200: [se, [231], W(170), [56]], 64E3: [se, [248, 192], W(240), [56]], 48E3: [se, [255, 192], W(268), [55, 148, 128], W(54), [112]], 44100: [se, [255, 192], W(268), [55, 163, 128], W(84), [112]], 32E3: [se, [255, 192], W(268), [55, 234], W(226), [112]], 24E3: [se, [255, 192], W(268), [55, 255, 128], W(268), [111, 112], W(126), [224]], 16E3: [se, [255, 192], W(268), [55, 255, 128], W(268), [111, 255], W(269), [223, 108], W(195), [1, 192]], 12E3: [ae, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 253,
                                128], W(259), [56]], 11025: [ae, W(268), [3, 127, 248], W(268), [6, 255, 240], W(268), [13, 255, 224], W(268), [27, 255, 192], W(268), [55, 175, 128], W(108), [112]], 8E3: [ae, W(268), [3, 121, 16], W(47), [7]]
                        }, ue = (G = oe, Object.keys(G).reduce(function (e, t) { return e[t] = new Uint8Array(G[t].reduce(function (e, t) { return e.concat(t) }, [])), e }, {})), le = 9E4, ce = (K = function (e) { return 9E4 * e }, X = function (e, t) { return e * t }, Y = function (e) { return e / 9E4 }, $ = function (e, t) { return e / t }, function (e, t) { return K($(e, t)) }), he = function (e, t) { return X(Y(e), t) }, de =
                            function (e, t, i) { return Y(i ? e : e - t) }, pe = function (e, t, i, n) { var r, s, a, o, u, l = 0, c = 0, h = 0; if (t.length && (r = ce(e.baseMediaDecodeTime, e.samplerate), s = Math.ceil(le / (e.samplerate / 1024)), i && n && (l = r - Math.max(i, n), h = (c = Math.floor(l / s)) * s), !(c < 1 || le / 2 < h))) { for (a = (a = ue[e.samplerate]) || t[0].data, o = 0; o < c; o++)u = t[0], t.splice(0, 0, { data: a, dts: u.dts - s, pts: u.pts - s }); e.baseMediaDecodeTime -= Math.floor(he(h, e.samplerate)) } }, fe = function (e, t, i) {
                                return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter(function (e) {
                                    return e.dts >=
                                        i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                                }))
                            }, me = function (e) { var t, i, n = []; for (t = 0; t < e.length; t++)i = e[t], n.push({ size: i.data.byteLength, duration: 1024 }); return n }, ge = function (e) { var t, i, n = 0, r = new Uint8Array(function (e) { var t, i = 0; for (t = 0; t < e.length; t++)i += e[t].data.byteLength; return i }(e)); for (t = 0; t < e.length; t++)i = e[t], r.set(i.data, n), n += i.data.byteLength; return r }, ve = le, ye = function (e) {
                                delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts,
                                delete e.maxSegmentPts
                            }, _e = function (e, t) { var i, n = e.minSegmentDts; return t || (n -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, i += n, i = Math.max(0, i), "audio" === e.type && (i *= e.samplerate / ve, i = Math.floor(i)), i }, be = function (e, t) {
                                "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts,
                                    t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
                            }, Te = function (e) {
                                for (var t = 0, i = { payloadType: -1, payloadSize: 0 }, n = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                                    for (; 255 === e[t];)n += 255, t++; for (n += e[t++]; 255 === e[t];)r += 255, t++; if (r += e[t++], !i.payload && 4 === n) {
                                        i.payloadType = n,
                                        i.payloadSize = r, i.payload = e.subarray(t, t + r); break
                                    } t += r, r = n = 0
                                } return i
                            }, Se = function (e) { return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1) }, ke = function (e, t) { var i, n, r, s, a = []; if (!(64 & t[0])) return a; for (n = 31 & t[0], i = 0; i < n; i++)s = { type: 3 & t[2 + (r = 3 * i)], pts: e }, 4 & t[2 + r] && (s.ccData = t[3 + r] << 8 | t[4 + r], a.push(s)); return a }, Ce = 4; (z.prototype = new H).push =
                                function (e) { var t, i, n; if ("sei_rbsp" === e.nalUnitType && (t = Te(e.escapedRBSP)).payloadType === Ce && (i = Se(t))) if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0; else { if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1)); n = ke(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(n), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts } }, z.prototype.flushCCStreams = function (t) {
                                    this.ccStreams_.forEach(function (e) {
                                        return "flush" ===
                                            t ? e.flush() : e.partialFlush()
                                    }, this)
                                }, z.prototype.flushStream = function (e) { this.captionPackets_.length && (this.captionPackets_.forEach(function (e, t) { e.presortIndex = t }), this.captionPackets_.sort(function (e, t) { return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts }), this.captionPackets_.forEach(function (e) { e.type < 2 && this.dispatchCea608Packet(e) }, this), this.captionPackets_.length = 0), this.flushCCStreams(e) }, z.prototype.flush = function () { return this.flushStream("flush") }, z.prototype.partialFlush = function () { return this.flushStream("partialFlush") },
                                z.prototype.reset = function () { this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (e) { e.reset() }) }, z.prototype.dispatchCea608Packet = function (e) { this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e) },
                                z.prototype.setsChannel1Active = function (e) { return 4096 == (30720 & e.ccData) }, z.prototype.setsChannel2Active = function (e) { return 6144 == (30720 & e.ccData) }, z.prototype.setsTextOrXDSActive = function (e) { return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData) }; function Ee(e) { return null === e ? "" : (e = Le[e] || e, String.fromCharCode(e)) } function we() { for (var e = [], t = 15; t--;)e.push(""); return e } var Le = {
                                    42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189,
                                    307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194, 562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228,
                                    818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496
                                }, Pe = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], Ae = function e(t, i) {
                                    e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (e) {
                                        var t, i, n, r, s; if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                                            if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !==
                                                this.PADDING_ && (this.lastControlCode_ = null), n = t >>> 8, r = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn"; else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts; else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts); else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts); else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ =
                                                    4, this.setRollUp(e.pts); else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts; else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1); else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = we(); else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = we(); else if (t ===
                                                        this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = we()), this.mode_ = "paintOn", this.startPts_ = e.pts; else if (this.isSpecialCharacter(n, r)) s = Ee((n = (3 & n) << 8) | r), this[this.mode_](e.pts, s), this.column_++; else if (this.isExtCharacter(n, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), s = Ee((n = (3 & n) << 8) | r), this[this.mode_](e.pts, s), this.column_++; else if (this.isMidRowCode(n,
                                                            r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & r) && this.addFormatting(e.pts, ["i"]), 1 == (1 & r) && this.addFormatting(e.pts, ["u"]); else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r; else if (this.isPAC(n, r)) {
                                                                var a = Pe.indexOf(7968 & t); "rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)), a !== this.row_ && (this.clearFormatting(e.pts), this.row_ = a), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) &&
                                                                    (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(r) && 14 == (14 & r) && this.addFormatting(e.pts, ["i"])
                                                            } else this.isNormalChar(n) && (0 === r && (r = null), s = Ee(n), s += Ee(r), this[this.mode_](e.pts, s), this.column_ += s.length)
                                        } else this.lastControlCode_ = null
                                    }
                                }; Ae.prototype = new H, Ae.prototype.flushDisplayed = function (e) { var t = this.displayed_.map(function (e) { try { return e.trim() } catch (e) { return "" } }).join("\n").replace(/^\n+|\n+$/g, ""); t.length && this.trigger("data", { startPts: this.startPts_, endPts: e, text: t, stream: this.name_ }) },
                                    Ae.prototype.reset = function () { this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = we(), this.nonDisplayed_ = we(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = [] }, Ae.prototype.setConstants = function () {
                                        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ =
                                            32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                                    }, Ae.prototype.isSpecialCharacter = function (e, t) { return e === this.EXT_ && 48 <= t && t <= 63 }, Ae.prototype.isExtCharacter = function (e,
                                        t) { return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63 }, Ae.prototype.isMidRowCode = function (e, t) { return e === this.EXT_ && 32 <= t && t <= 47 }, Ae.prototype.isOffsetControlCode = function (e, t) { return e === this.OFFSET_ && 33 <= t && t <= 35 }, Ae.prototype.isPAC = function (e, t) { return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127 }, Ae.prototype.isColorPAC = function (e) { return 64 <= e && e <= 79 || 96 <= e && e <= 127 }, Ae.prototype.isNormalChar = function (e) { return 32 <= e && e <= 127 }, Ae.prototype.setRollUp = function (e, t) {
                                            if ("rollUp" !== this.mode_ &&
                                                (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = we(), this.displayed_ = we()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++)this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = ""; void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
                                        }, Ae.prototype.addFormatting = function (e, t) { this.formatting_ = this.formatting_.concat(t); var i = t.reduce(function (e, t) { return e + "\x3c" + t + "\x3e" }, ""); this[this.mode_](e, i) }, Ae.prototype.clearFormatting =
                                    function (e) { if (this.formatting_.length) { var t = this.formatting_.reverse().reduce(function (e, t) { return e + "\x3c/" + t + "\x3e" }, ""); this.formatting_ = [], this[this.mode_](e, t) } }, Ae.prototype.popOn = function (e, t) { var i = this.nonDisplayed_[this.row_]; i += t, this.nonDisplayed_[this.row_] = i }, Ae.prototype.rollUp = function (e, t) { var i = this.displayed_[this.row_]; i += t, this.displayed_[this.row_] = i }, Ae.prototype.shiftRowsUp_ = function () {
                                        var e; for (e = 0; e < this.topRow_; e++)this.displayed_[e] = ""; for (e = this.row_ + 1; e < 15; e++)this.displayed_[e] =
                                            ""; for (e = this.topRow_; e < this.row_; e++)this.displayed_[e] = this.displayed_[e + 1]; this.displayed_[this.row_] = ""
                                    }, Ae.prototype.paintOn = function (e, t) { var i = this.displayed_[this.row_]; i += t, this.displayed_[this.row_] = i }; function Ie(e, t) { var i = 1; for (t < e && (i = -1); 4294967296 < Math.abs(t - e);)e += 8589934592 * i; return e } function xe(e) {
                                        var t, i; xe.prototype.init.call(this), this.type_ = e || "shared", this.push = function (e) {
                                            "shared" !== this.type_ && e.type !== this.type_ || (void 0 === i && (i = e.dts), e.dts = Ie(e.dts, i), e.pts = Ie(e.pts,
                                                i), t = e.dts, this.trigger("data", e))
                                        }, this.flush = function () { i = t, this.trigger("done") }, this.endTimeline = function () { this.flush(), this.trigger("endedtimeline") }, this.discontinuity = function () { t = i = void 0 }, this.reset = function () { this.discontinuity(), this.trigger("reset") }
                                    } var Oe = { CaptionStream: z, Cea608Stream: Ae }, De = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 }; xe.prototype = new H; function Re(e, t, i) { var n, r = ""; for (n = t; n < i; n++)r += "%" + ("00" + e[n].toString(16)).slice(-2); return r } function Ue(e,
                                        t, i) { return decodeURIComponent(Re(e, t, i)) } function Me(e) { return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3] } var Ne, Be = xe, je = {
                                            TXXX: function (e) { var t; if (3 === e.data[0]) { for (t = 1; t < e.data.length; t++)if (0 === e.data[t]) { e.description = Ue(e.data, 1, t), e.value = Ue(e.data, t + 1, e.data.length).replace(/\0*$/, ""); break } e.data = e.value } }, WXXX: function (e) { var t; if (3 === e.data[0]) for (t = 1; t < e.data.length; t++)if (0 === e.data[t]) { e.description = Ue(e.data, 1, t), e.url = Ue(e.data, t + 1, e.data.length); break } }, PRIV: function (e) {
                                                var t, i; for (t = 0; t < e.data.length; t++)if (0 ===
                                                    e.data[t]) { e.owner = (i = e.data, unescape(Re(i, 0, t))); break } e.privateData = e.data.subarray(t + 1), e.data = e.privateData
                                            }
                                        }; (Ne = function (e) {
                                            var t, u = { debug: !(!e || !e.debug), descriptor: e && e.descriptor }, l = 0, c = [], h = 0; if (Ne.prototype.init.call(this), this.dispatchType = De.METADATA_STREAM_TYPE.toString(16), u.descriptor) for (t = 0; t < u.descriptor.length; t++)this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice(-2); this.push = function (e) {
                                                var t, i, n, r, s; if ("timed-metadata" === e.type) if (e.dataAlignmentIndicator && (h = 0, c.length =
                                                    0), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) u.debug; else if (c.push(e), h += e.data.byteLength, 1 === c.length && (l = Me(e.data.subarray(6, 10)), l += 10), !(h < l)) {
                                                        for (t = { data: new Uint8Array(l), frames: [], pts: c[0].pts, dts: c[0].dts }, s = 0; s < l;)t.data.set(c[0].data.subarray(0, l - s), s), s += c[0].data.byteLength, h -= c[0].data.byteLength, c.shift(); i = 10, 64 & t.data[5] && (i += 4, i += Me(t.data.subarray(10, 14)), l -= Me(t.data.subarray(16, 20))); do {
                                                            if ((n =
                                                                Me(t.data.subarray(i + 4, i + 8))) < 1) return; if ((r = { id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]), data: t.data.subarray(i + 10, i + n + 10) }).key = r.id, je[r.id] && (je[r.id](r), "com.apple.streaming.transportStreamTimestamp" === r.owner)) { var a = r.data, o = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2; o *= 4, o += 3 & a[7], r.timeStamp = o, void 0 === t.pts && void 0 === t.dts && (t.pts = r.timeStamp, t.dts = r.timeStamp), this.trigger("timestamp", r) } t.frames.push(r), i += 10, i += n
                                                        } while (i < l); this.trigger("data", t)
                                                    }
                                            }
                                        }).prototype =
                                            new H; var Fe, He, Ve, qe = Ne, We = Be; (Fe = function () {
                                                var r = new Uint8Array(188), s = 0; Fe.prototype.init.call(this), this.push = function (e) { var t, i = 0, n = 188; for (s ? ((t = new Uint8Array(e.byteLength + s)).set(r.subarray(0, s)), t.set(e, s), s = 0) : t = e; n < t.byteLength;)71 !== t[i] || 71 !== t[n] ? (i++, n++) : (this.trigger("data", t.subarray(i, n)), i += 188, n += 188); i < t.byteLength && (r.set(t.subarray(i), 0), s = t.byteLength - i) }, this.flush = function () { 188 === s && 71 === r[0] && (this.trigger("data", r), s = 0), this.trigger("done") }, this.endTimeline = function () {
                                                    this.flush(),
                                                    this.trigger("endedtimeline")
                                                }, this.reset = function () { s = 0, this.trigger("reset") }
                                            }).prototype = new H, (He = function () {
                                                var n, r, s, a; He.prototype.init.call(this), (a = this).packetsWaitingForPmt = [], this.programMapTable = void 0, n = function (e, t) { var i = 0; t.payloadUnitStartIndicator && (i += e[i] + 1), "pat" === t.type ? r(e.subarray(i), t) : s(e.subarray(i), t) }, r = function (e, t) { t.section_number = e[7], t.last_section_number = e[8], a.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = a.pmtPid }, s = function (e, t) {
                                                    var i, n; if (1 & e[5]) {
                                                        for (a.programMapTable =
                                                            { video: null, audio: null, "timed-metadata": {} }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, n = 12 + ((15 & e[10]) << 8 | e[11]); n < i;) { var r = e[n], s = (31 & e[n + 1]) << 8 | e[n + 2]; r === De.H264_STREAM_TYPE && null === a.programMapTable.video ? a.programMapTable.video = s : r === De.ADTS_STREAM_TYPE && null === a.programMapTable.audio ? a.programMapTable.audio = s : r === De.METADATA_STREAM_TYPE && (a.programMapTable["timed-metadata"][s] = r), n += 5 + ((15 & e[n + 3]) << 8 | e[n + 4]) } t.programMapTable = a.programMapTable
                                                    }
                                                }, this.push = function (e) {
                                                    var t = {}, i = 4; if (t.payloadUnitStartIndicator =
                                                        !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat", n(e.subarray(i), t), this.trigger("data", t); else if (t.pid === this.pmtPid) for (t.type = "pmt", n(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;)this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
                                                }, this.processPes_ = function (e, t, i) {
                                                    i.pid === this.programMapTable.video ? i.streamType =
                                                        De.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = De.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
                                                }
                                            }).prototype = new H, He.STREAM_TYPES = { h264: 27, adts: 15 }, (Ve = function () {
                                                function n(e, t, i) {
                                                    var n, r, s = new Uint8Array(e.size), a = { type: t }, o = 0, u = 0; if (e.data.length && !(e.size < 9)) {
                                                        for (a.trackId = e.data[0].pid, o = 0; o < e.data.length; o++)r = e.data[o], s.set(r.data, u), u += r.data.byteLength; !function (e, t) {
                                                            var i; t.packetLength =
                                                                6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = 0 != (4 & e[6]), 192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1)), t.data = e.subarray(9 + e[8])
                                                        }(s, a), n = "video" === t || a.packetLength <= e.size, (i || n) && (e.size = 0, e.data.length = 0), n && l.trigger("data", a)
                                                    }
                                                } var t, l = this, r = { data: [], size: 0 }, s = { data: [], size: 0 }, a = {
                                                    data: [],
                                                    size: 0
                                                }; Ve.prototype.init.call(this), this.push = function (i) {
                                                    ({
                                                        pat: function () { }, pes: function () { var e, t; switch (i.streamType) { case De.H264_STREAM_TYPE: case De.H264_STREAM_TYPE: e = r, t = "video"; break; case De.ADTS_STREAM_TYPE: e = s, t = "audio"; break; case De.METADATA_STREAM_TYPE: e = a, t = "timed-metadata"; break; default: return }i.payloadUnitStartIndicator && n(e, t, !0), e.data.push(i), e.size += i.data.byteLength }, pmt: function () {
                                                            var e = { type: "metadata", tracks: [] }; null !== (t = i.programMapTable).video && e.tracks.push({
                                                                timelineStartInfo: { baseMediaDecodeTime: 0 },
                                                                id: +t.video, codec: "avc", type: "video"
                                                            }), null !== t.audio && e.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +t.audio, codec: "adts", type: "audio" }), l.trigger("data", e)
                                                        }
                                                    })[i.type]()
                                                }, this.reset = function () { r.size = 0, r.data.length = 0, s.size = 0, s.data.length = 0, this.trigger("reset") }, this.flushStreams_ = function () { n(r, "video"), n(s, "audio"), n(a, "timed-metadata") }, this.flush = function () { this.flushStreams_(), this.trigger("done") }
                                            }).prototype = new H; var ze = {
                                                PAT_PID: 0, MP2T_PACKET_LENGTH: 188, TransportPacketStream: Fe,
                                                TransportParseStream: He, ElementaryStream: Ve, TimestampRolloverStream: We, CaptionStream: Oe.CaptionStream, Cea608Stream: Oe.Cea608Stream, MetadataStream: qe
                                            }; for (var Ge in De) De.hasOwnProperty(Ge) && (ze[Ge] = De[Ge]); var Ke, Xe = ze, Ye = le, $e = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350]; (Ke = function (u) {
                                                var l, c = 0; Ke.prototype.init.call(this), this.push = function (e) {
                                                    var t, i, n, r, s, a, o = 0; if (u || (c = 0), "audio" === e.type) for (l ? (r = l, (l = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), l.set(e.data,
                                                        r.byteLength)) : l = e.data; o + 5 < l.length;)if (255 === l[o] && 240 == (246 & l[o + 1])) {
                                                            if (i = 2 * (1 & ~l[o + 1]), t = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, a = (s = 1024 * (1 + (3 & l[o + 6]))) * Ye / $e[(60 & l[o + 2]) >>> 2], n = o + t, l.byteLength < n) return; if (this.trigger("data", { pts: e.pts + c * a, dts: e.dts + c * a, sampleCount: s, audioobjecttype: 1 + (l[o + 2] >>> 6 & 3), channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6, samplerate: $e[(60 & l[o + 2]) >>> 2], samplingfrequencyindex: (60 & l[o + 2]) >>> 2, samplesize: 16, data: l.subarray(o + 7 + i, n) }), c++, l.byteLength === n) return void (l = void 0);
                                                            l = l.subarray(n)
                                                        } else o++
                                                }, this.flush = function () { c = 0, this.trigger("done") }, this.reset = function () { l = void 0, this.trigger("reset") }, this.endTimeline = function () { l = void 0, this.trigger("endedtimeline") }
                                            }).prototype = new H; var Qe, Je, Ze, et = Ke, tt = function (n) {
                                                var r = n.byteLength, s = 0, a = 0; this.length = function () { return 8 * r }, this.bitsAvailable = function () { return 8 * r + a }, this.loadWord = function () {
                                                    var e = n.byteLength - r, t = new Uint8Array(4), i = Math.min(4, r); if (0 === i) throw new Error("no bytes available"); t.set(n.subarray(e,
                                                        e + i)), s = (new DataView(t.buffer)).getUint32(0), a = 8 * i, r -= i
                                                }, this.skipBits = function (e) { var t; e < a || (e -= a, e -= 8 * (t = Math.floor(e / 8)), r -= t, this.loadWord()), s <<= e, a -= e }, this.readBits = function (e) { var t = Math.min(a, e), i = s >>> 32 - t; return 0 < (a -= t) ? s <<= t : 0 < r && this.loadWord(), 0 < (t = e - t) ? i << t | this.readBits(t) : i }, this.skipLeadingZeros = function () { var e; for (e = 0; e < a; ++e)if (0 != (s & 2147483648 >>> e)) return s <<= e, a -= e, e; return this.loadWord(), e + this.skipLeadingZeros() }, this.skipUnsignedExpGolomb = function () { this.skipBits(1 + this.skipLeadingZeros()) },
                                                    this.skipExpGolomb = function () { this.skipBits(1 + this.skipLeadingZeros()) }, this.readUnsignedExpGolomb = function () { var e = this.skipLeadingZeros(); return this.readBits(e + 1) - 1 }, this.readExpGolomb = function () { var e = this.readUnsignedExpGolomb(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1) }, this.readBoolean = function () { return 1 === this.readBits(1) }, this.readUnsignedByte = function () { return this.readBits(8) }, this.loadWord()
                                            }; (Je = function () {
                                                var n, r, s = 0; Je.prototype.init.call(this), this.push = function (e) {
                                                    for (var t, i = (r = r ? ((t = new Uint8Array(r.byteLength +
                                                        e.data.byteLength)).set(r), t.set(e.data, r.byteLength), t) : e.data).byteLength; s < i - 3; s++)if (1 === r[s + 2]) { n = s + 5; break } for (; n < i;)switch (r[n]) { case 0: if (0 !== r[n - 1]) { n += 2; break } if (0 !== r[n - 2]) { n++; break } for (s + 3 !== n - 2 && this.trigger("data", r.subarray(s + 3, n - 2)); 1 !== r[++n] && n < i;); s = n - 2, n += 3; break; case 1: if (0 !== r[n - 1] || 0 !== r[n - 2]) { n += 3; break } this.trigger("data", r.subarray(s + 3, n - 2)), s = n - 2, n += 3; break; default: n += 3 }r = r.subarray(s), n -= s, s = 0
                                                }, this.reset = function () { r = null, s = 0, this.trigger("reset") }, this.flush = function () {
                                                    r &&
                                                    3 < r.byteLength && this.trigger("data", r.subarray(s + 3)), r = null, s = 0, this.trigger("done")
                                                }, this.endTimeline = function () { this.flush(), this.trigger("endedtimeline") }
                                            }).prototype = new H, Ze = { 100: !0, 110: !0, 122: !0, 244: !0, 44: !0, 83: !0, 86: !0, 118: !0, 128: !0, 138: !0, 139: !0, 134: !0 }, (Qe = function () {
                                                var i, n, r, s, a, o, _, t = new Je; Qe.prototype.init.call(this), (i = this).push = function (e) { "video" === e.type && (n = e.trackId, r = e.pts, s = e.dts, t.push(e)) }, t.on("data", function (e) {
                                                    var t = { trackId: n, pts: r, dts: s, data: e }; switch (31 & e[0]) {
                                                        case 5: t.nalUnitType =
                                                            "slice_layer_without_partitioning_rbsp_idr"; break; case 6: t.nalUnitType = "sei_rbsp", t.escapedRBSP = a(e.subarray(1)); break; case 7: t.nalUnitType = "seq_parameter_set_rbsp", t.escapedRBSP = a(e.subarray(1)), t.config = o(t.escapedRBSP); break; case 8: t.nalUnitType = "pic_parameter_set_rbsp"; break; case 9: t.nalUnitType = "access_unit_delimiter_rbsp"
                                                    }i.trigger("data", t)
                                                }), t.on("done", function () { i.trigger("done") }), t.on("partialdone", function () { i.trigger("partialdone") }), t.on("reset", function () { i.trigger("reset") }), t.on("endedtimeline",
                                                    function () { i.trigger("endedtimeline") }), this.flush = function () { t.flush() }, this.partialFlush = function () { t.partialFlush() }, this.reset = function () { t.reset() }, this.endTimeline = function () { t.endTimeline() }, _ = function (e, t) { var i, n = 8, r = 8; for (i = 0; i < e; i++)0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), n = 0 === r ? n : r }, a = function (e) {
                                                        for (var t, i, n = e.byteLength, r = [], s = 1; s < n - 2;)0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (r.push(s + 2), s += 2) : s++; if (0 === r.length) return e; t = n - r.length, i = new Uint8Array(t); var a = 0; for (s = 0; s < t; a++, s++)a ===
                                                            r[0] && (a++, r.shift()), i[s] = e[a]; return i
                                                    }, o = function (e) {
                                                        var t, i, n, r, s, a, o, u, l, c, h, d, p, f = 0, m = 0, g = 0, v = 0, y = 1; if (i = (t = new tt(e)).readUnsignedByte(), r = t.readUnsignedByte(), n = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), Ze[i] && (3 === (s = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean())) for (h = 3 !== s ? 8 : 12, p = 0; p < h; p++)t.readBoolean() && _(p < 6 ? 16 : 64, t); if (t.skipUnsignedExpGolomb(), 0 === (a = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                                                        else if (1 === a) for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++)t.skipExpGolomb(); if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), l = t.readUnsignedExpGolomb(), 0 === (c = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), v = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                                                            switch (t.readUnsignedByte()) {
                                                                case 1: d = [1, 1]; break; case 2: d = [12,
                                                                    11]; break; case 3: d = [10, 11]; break; case 4: d = [16, 11]; break; case 5: d = [40, 33]; break; case 6: d = [24, 11]; break; case 7: d = [20, 11]; break; case 8: d = [32, 11]; break; case 9: d = [80, 33]; break; case 10: d = [18, 11]; break; case 11: d = [15, 11]; break; case 12: d = [64, 33]; break; case 13: d = [160, 99]; break; case 14: d = [4, 3]; break; case 15: d = [3, 2]; break; case 16: d = [2, 1]; break; case 255: d = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                                                            }d && (y = d[0] / d[1])
                                                        } return {
                                                            profileIdc: i, levelIdc: n, profileCompatibility: r,
                                                            width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * y), height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * v, sarRatio: d
                                                        }
                                                    }
                                            }).prototype = new H; var it, nt = { H264Stream: Qe, NalByteStream: Je }, rt = function (e) { return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0) }, st = function (e, t) { var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9]; return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i }, at = function (e, t) { var i = (224 & e[t + 5]) >> 5, n = e[t + 4] << 3; return 6144 & e[t + 3] | n | i }; (it = function () {
                                                var o = new Uint8Array, u = 0; it.prototype.init.call(this), this.setTimestamp = function (e) {
                                                    u =
                                                    e
                                                }, this.push = function (e) {
                                                    var t, i, n, r, s = 0, a = 0; for (o.length ? (r = o.length, (o = new Uint8Array(e.byteLength + r)).set(o.subarray(0, r)), o.set(e, r)) : o = e; 3 <= o.length - a;)if (o[a] !== "I".charCodeAt(0) || o[a + 1] !== "D".charCodeAt(0) || o[a + 2] !== "3".charCodeAt(0)) if (255 != (255 & o[a]) || 240 != (240 & o[a + 1])) a++; else { if (o.length - a < 7) break; if (a + (s = at(o, a)) > o.length) break; n = { type: "audio", data: o.subarray(a, a + s), pts: u, dts: u }, this.trigger("data", n), a += s } else {
                                                        if (o.length - a < 10) break; if (a + (s = st(o, a)) > o.length) break; i = {
                                                            type: "timed-metadata",
                                                            data: o.subarray(a, a + s)
                                                        }, this.trigger("data", i), a += s
                                                    } t = o.length - a, o = 0 < t ? o.subarray(a) : new Uint8Array
                                                }, this.reset = function () { o = new Uint8Array, this.trigger("reset") }, this.endTimeline = function () { o = new Uint8Array, this.trigger("endedtimeline") }
                                            }).prototype = new H; function ot(e, t) { var i; if (e.length !== t.length) return !1; for (i = 0; i < e.length; i++)if (e[i] !== t[i]) return !1; return !0 } function ut(e, t, i, n, r, s) { return { start: { dts: e, pts: e + (i - t) }, end: { dts: e + (n - t), pts: e + (r - i) }, prependedContentDuration: s, baseMediaDecodeTime: e } }
                    var lt, ct, ht, dt, pt = it, ft = nt.H264Stream, mt = rt, gt = le, vt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], yt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"]; (ct = function (s, a) {
                        var o = [], u = 0, l = 0, c = 0, h = 1 / 0; a = a || {}, ct.prototype.init.call(this), this.push = function (t) { be(s, t), s && vt.forEach(function (e) { s[e] = t[e] }), o.push(t) }, this.setEarliestDts = function (e) { l = e - s.timelineStartInfo.baseMediaDecodeTime }, this.setVideoBaseMediaDecodeTime = function (e) {
                            h =
                            e
                        }, this.setAudioAppendStart = function (e) { c = e }, this.flush = function () { var e, t, i, n, r; 0 !== o.length && (e = fe(o, s, l), s.baseMediaDecodeTime = _e(s, a.keepOriginalTimestamps), pe(s, e, c, h), s.samples = me(e), i = Q(ge(e)), o = [], t = J(u, [s]), n = new Uint8Array(t.byteLength + i.byteLength), u++, n.set(t), n.set(i, t.byteLength), ye(s), r = Math.ceil(1024 * gt / s.samplerate), e.length && this.trigger("timingInfo", { start: e[0].dts, end: e[0].dts + e.length * r }), this.trigger("data", { track: s, boxes: n })), this.trigger("done", "AudioSegmentStream") }, this.reset =
                            function () { ye(s), o = [], this.trigger("reset") }
                    }).prototype = new H, (lt = function (c, h) {
                        var t, i, d = 0, p = [], f = []; h = h || {}, lt.prototype.init.call(this), delete c.minPTS, this.gopCache_ = [], this.push = function (e) { be(c, e), "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, c.sps = [e.data], yt.forEach(function (e) { c[e] = t[e] }, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, c.pps = [e.data]), p.push(e) }, this.flush = function () {
                            for (var e, t, i, n, r, s, a, o, u = 0; p.length && "access_unit_delimiter_rbsp" !== p[0].nalUnitType;)p.shift();
                            if (0 === p.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream"); if (e = ee(p), (i = te(e))[0][0].keyFrame || ((t = this.getGopForFusion_(p[0], c)) ? (u = t.duration, i.unshift(t), i.byteLength += t.byteLength, i.nalCount += t.nalCount, i.pts = t.pts, i.dts = t.dts, i.duration += t.duration) : i = ie(i)), f.length) {
                                var l; if (!(l = h.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({ gop: i.pop(), pps: c.pps, sps: c.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length),
                                    p = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream"); ye(c), i = l
                            } be(c, i), c.samples = ne(i), r = Q(re(i)), c.baseMediaDecodeTime = _e(c, h.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function (e) { return { pts: e.pts, dts: e.dts, byteLength: e.byteLength } })), a = i[0], o = i[i.length - 1], this.trigger("segmentTimingInfo", ut(c.baseMediaDecodeTime, a.dts, a.pts, o.dts + o.duration, o.pts + o.duration, u)), this.trigger("timingInfo", { start: i[0].dts, end: i[i.length - 1].dts + i[i.length - 1].duration }), this.gopCache_.unshift({
                                gop: i.pop(),
                                pps: c.pps, sps: c.sps
                            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.trigger("baseMediaDecodeTime", c.baseMediaDecodeTime), this.trigger("timelineStartInfo", c.timelineStartInfo), n = J(d, [c]), s = new Uint8Array(n.byteLength + r.byteLength), d++, s.set(n), s.set(r, n.byteLength), this.trigger("data", { track: c, boxes: s }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                        }, this.reset = function () { this.resetStream_(), p = [], this.gopCache_.length = 0, f.length = 0, this.trigger("reset") }, this.resetStream_ =
                            function () { ye(c), i = t = void 0 }, this.getGopForFusion_ = function (e) { var t, i, n, r, s, a = 1 / 0; for (s = 0; s < this.gopCache_.length; s++)n = (r = this.gopCache_[s]).gop, c.pps && ot(c.pps[0], r.pps[0]) && c.sps && ot(c.sps[0], r.sps[0]) && (n.dts < c.timelineStartInfo.dts || -1E4 <= (t = e.dts - n.dts - n.duration) && t <= 45E3 && (!i || t < a) && (i = r, a = t)); return i ? i.gop : null }, this.alignGopsAtStart_ = function (e) {
                                var t, i, n, r, s, a, o, u; for (s = e.byteLength, a = e.nalCount, o = e.duration, t = i = 0; t < f.length && i < e.length && (n = f[t], r = e[i], n.pts !== r.pts);)r.pts > n.pts ? t++ :
                                    (i++, s -= r.byteLength, a -= r.nalCount, o -= r.duration); return 0 === i ? e : i === e.length ? null : ((u = e.slice(i)).byteLength = s, u.duration = o, u.nalCount = a, u.pts = u[0].pts, u.dts = u[0].dts, u)
                            }, this.alignGopsAtEnd_ = function (e) {
                                var t, i, n, r, s, a, o; for (t = f.length - 1, i = e.length - 1, s = null, a = !1; 0 <= t && 0 <= i;) { if (n = f[t], r = e[i], n.pts === r.pts) { a = !0; break } n.pts > r.pts ? t-- : (t === f.length - 1 && (s = i), i--) } if (!a && null === s) return null; if (0 === (o = a ? i : s)) return e; var u = e.slice(o), l = u.reduce(function (e, t) {
                                    return e.byteLength += t.byteLength, e.duration +=
                                        t.duration, e.nalCount += t.nalCount, e
                                }, { byteLength: 0, duration: 0, nalCount: 0 }); return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
                            }, this.alignGopsWith = function (e) { f = e }
                    }).prototype = new H, (dt = function (e, t) {
                        this.numberOfTracks = 0, this.metadataStream = t, "undefined" != typeof (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps =
                            !1, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, dt.prototype.init.call(this), this.push = function (e) { return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), void ("audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes)))) }
                    }).prototype =
                        new H, dt.prototype.flush = function (e) {
                            var t, i, n, r, s = 0, a = { captions: [], captionStreams: {}, metadata: [], info: {} }, o = 0; if (this.pendingTracks.length < this.numberOfTracks) { if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return; if (this.remuxTracks) return; if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)) } if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, yt.forEach(function (e) { a.info[e] = this.videoTrack[e] },
                                this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, vt.forEach(function (e) { a.info[e] = this.audioTrack[e] }, this)), this.videoTrack || this.audioTrack) {
                                    for (1 === this.pendingTracks.length ? a.type = this.pendingTracks[0].type : a.type = "combined", this.emittedTracks += this.pendingTracks.length, n = Z(this.pendingTracks), a.initSegment = new Uint8Array(n.byteLength), a.initSegment.set(n), a.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++)a.data.set(this.pendingBoxes[r], s), s += this.pendingBoxes[r].byteLength;
                                for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = de(t.startPts, o, this.keepOriginalTimestamps), t.endTime = de(t.endPts, o, this.keepOriginalTimestamps), a.captionStreams[t.stream] = !0, a.captions.push(t); for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = de(i.pts, o, this.keepOriginalTimestamps), a.metadata.push(i); for (a.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0,
                                    this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a), r = 0; r < a.captions.length; r++)t = a.captions[r], this.trigger("caption", t); for (r = 0; r < a.metadata.length; r++)i = a.metadata[r], this.trigger("id3Frame", i)
                            } this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                        }, dt.prototype.setRemux = function (e) { this.remuxTracks = e }, (ht = function (n) {
                            var r, s, a = this, i = !0; ht.prototype.init.call(this), n = n || {}, this.baseMediaDecodeTime = n.baseMediaDecodeTime ||
                                0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
                                    var t = {}; (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new Xe.MetadataStream, t.aacStream = new pt, t.audioTimestampRolloverStream = new Xe.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new Xe.TimestampRolloverStream("timed-metadata"), t.adtsStream = new et, t.coalesceStream = new dt(n, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),
                                        t.metadataStream.on("timestamp", function (e) { t.aacStream.setTimestamp(e.timeStamp) }), t.aacStream.on("data", function (e) {
                                            "timed-metadata" !== e.type || t.audioSegmentStream || (s = s || { timelineStartInfo: { baseMediaDecodeTime: a.baseMediaDecodeTime }, codec: "adts", type: "audio" }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new ct(s, n), t.audioSegmentStream.on("timingInfo", a.trigger.bind(a, "audioTimingInfo")), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream)), a.trigger("trackinfo", {
                                                hasAudio: !!s,
                                                hasVideo: !!r
                                            })
                                        }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done"))
                                }, this.setupTsPipeline = function () {
                                    var i = {}; (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new Xe.MetadataStream, i.packetStream = new Xe.TransportPacketStream, i.parseStream = new Xe.TransportParseStream, i.elementaryStream = new Xe.ElementaryStream, i.timestampRolloverStream = new Xe.TimestampRolloverStream, i.adtsStream = new et, i.h264Stream = new ft, i.captionStream = new Xe.CaptionStream,
                                        i.coalesceStream = new dt(n, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream).pipe(i.timestampRolloverStream), i.timestampRolloverStream.pipe(i.h264Stream), i.timestampRolloverStream.pipe(i.adtsStream), i.timestampRolloverStream.pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (e) {
                                            var t; if ("metadata" === e.type) {
                                                for (t = e.tracks.length; t--;)r || "video" !== e.tracks[t].type ?
                                                    s || "audio" !== e.tracks[t].type || ((s = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = a.baseMediaDecodeTime) : (r = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = a.baseMediaDecodeTime; r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new lt(r, n), i.videoSegmentStream.on("timelineStartInfo", function (e) { s && (s.timelineStartInfo = e, i.audioSegmentStream.setEarliestDts(e.dts)) }), i.videoSegmentStream.on("processedGopsInfo", a.trigger.bind(a, "gopInfo")), i.videoSegmentStream.on("segmentTimingInfo",
                                                        a.trigger.bind(a, "videoSegmentTimingInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (e) { s && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e) }), i.videoSegmentStream.on("timingInfo", a.trigger.bind(a, "videoTimingInfo")), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), s && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new ct(s, n), i.audioSegmentStream.on("timingInfo", a.trigger.bind(a, "audioTimingInfo")), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream)),
                                                        a.trigger("trackinfo", { hasAudio: !!s, hasVideo: !!r })
                                            }
                                        }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("id3Frame", function (e) { e.dispatchType = i.metadataStream.dispatchType, a.trigger("id3Frame", e) }), i.coalesceStream.on("caption", this.trigger.bind(this, "caption")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
                                }, this.setBaseMediaDecodeTime = function (e) {
                                    var t = this.transmuxPipeline_; n.keepOriginalTimestamps || (this.baseMediaDecodeTime = e), s && (s.timelineStartInfo.dts =
                                        void 0, s.timelineStartInfo.pts = void 0, ye(s), n.keepOriginalTimestamps || (s.timelineStartInfo.baseMediaDecodeTime = e), t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()), r && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = []), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, ye(r), t.captionStream.reset(), n.keepOriginalTimestamps || (r.timelineStartInfo.baseMediaDecodeTime = e)), t.timestampRolloverStream && t.timestampRolloverStream.discontinuity()
                                }, this.setAudioAppendStart =
                                function (e) { s && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e) }, this.setRemux = function (e) { var t = this.transmuxPipeline_; n.remux = e, t && t.coalesceStream && t.coalesceStream.setRemux(e) }, this.alignGopsWith = function (e) { r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e) }, this.push = function (e) {
                                    if (i) {
                                        var t = mt(e); t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i =
                                            !1
                                    } this.transmuxPipeline_.headOfPipeline.push(e)
                                }, this.flush = function () { i = !0, this.transmuxPipeline_.headOfPipeline.flush() }, this.endTimeline = function () { this.transmuxPipeline_.headOfPipeline.endTimeline() }, this.reset = function () { this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset() }, this.resetCaptions = function () { this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset() }
                        }).prototype = new H; var _t = {
                            Transmuxer: ht, VideoSegmentStream: lt, AudioSegmentStream: ct,
                            AUDIO_PROPERTIES: vt, VIDEO_PROPERTIES: yt, generateVideoSegmentTimingInfo: ut
                        }; function bt(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } var Tt = (function (e, t, i) { return t && bt(e.prototype, t), i && bt(e, i), e }(St, [{
                            key: "init", value: function () {
                                this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new _t.Transmuxer(this.options), function (n, e) {
                                    e.on("data", function (e) {
                                        var t = e.initSegment; e.initSegment =
                                            { data: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength }; var i = e.data; e.data = i.buffer, n.postMessage({ action: "data", segment: e, byteOffset: i.byteOffset, byteLength: i.byteLength }, [e.data])
                                    }), e.captionStream && e.captionStream.on("data", function (e) { n.postMessage({ action: "caption", data: e }) }), e.on("done", function (e) { n.postMessage({ action: "done" }) }), e.on("gopInfo", function (e) { n.postMessage({ action: "gopInfo", gopInfo: e }) }), e.on("videoSegmentTimingInfo", function (e) {
                                        n.postMessage({
                                            action: "videoSegmentTimingInfo",
                                            videoSegmentTimingInfo: e
                                        })
                                    })
                                }(this.self, this.transmuxer)
                            }
                        }, { key: "push", value: function (e) { var t = new Uint8Array(e.data, e.byteOffset, e.byteLength); this.transmuxer.push(t) } }, { key: "reset", value: function () { this.init() } }, { key: "setTimestampOffset", value: function (e) { var t = e.timestampOffset || 0; this.transmuxer.setBaseMediaDecodeTime(Math.round(9E4 * t)) } }, { key: "setAudioAppendStart", value: function (e) { this.transmuxer.setAudioAppendStart(Math.ceil(9E4 * e.appendStart)) } }, { key: "flush", value: function (e) { this.transmuxer.flush() } },
                        { key: "resetCaptions", value: function () { this.transmuxer.resetCaptions() } }, { key: "alignGopsWith", value: function (e) { this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice()) } }]), St); function St(e, t) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function"); }(this, St), this.options = t || {}, this.self = e, this.init() } new function (t) {
                            t.onmessage = function (e) {
                                "init" === e.data.action && e.data.options ? this.messageHandlers = new Tt(t, e.data.options) : (this.messageHandlers || (this.messageHandlers =
                                    new Tt(t)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
                            }
                        }(kt)
                }()
        }), zu = { videoCodec: "avc1", videoObjectTypeIndicator: ".4d400d", audioProfile: "2" }, Gu = (xo(Ku, rs.EventTarget), Ao(Ku, [{
            key: "data_", value: function (e) {
                var t = e.data.segment; t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength), t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength), function (e, t, i) {
                    var n = t.player_;
                    if (i.captions && i.captions.length) for (var r in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}), i.captionStreams) if (!e.inbandTextTracks_[r]) { n.tech_.trigger({ type: "usage", name: "hls-608" }); var s = n.textTracks().getTrackById(r); e.inbandTextTracks_[r] = s || n.addRemoteTextTrack({ kind: "captions", id: r, label: r }, !1).track } i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = n.addRemoteTextTrack({ kind: "metadata", label: "Timed Metadata" }, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
                }(this,
                    this.mediaSource_, t), this.pendingBuffers_.push(t)
            }
        }, { key: "done_", value: function (e) { "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0 } }, {
            key: "videoSegmentTimingInfo_", value: function (e) {
                var t = { start: { decode: e.start.dts / 9E4, presentation: e.start.pts / 9E4 }, end: { decode: e.end.dts / 9E4, presentation: e.end.pts / 9E4 }, baseMediaDecodeTime: e.baseMediaDecodeTime / 9E4 }; e.prependedContentDuration && (t.prependedContentDuration = e.prependedContentDuration / 9E4), this.trigger({
                    type: "videoSegmentTimingInfo",
                    videoSegmentTimingInfo: t
                })
            }
        }, {
            key: "createRealSourceBuffers_", value: function () {
                var n = this, r = ["audio", "video"]; r.forEach(function (t) {
                    if (n[t + "Codec_"] && !n[t + "Buffer_"]) {
                        var i = null; if (n.mediaSource_[t + "Buffer_"]) (i = n.mediaSource_[t + "Buffer_"]).updating = !1; else {
                            var e = t + '/mp4;codecs\x3d"' + n[t + "Codec_"] + '"'; i = function (e, t) {
                                var i = e.addSourceBuffer(t), n = Object.create(null); function r(t) {
                                    "function" == typeof i[t] ? n[t] = function () { return i[t].apply(i, arguments) } : "undefined" == typeof n[t] && Object.defineProperty(n,
                                        t, { get: function () { return i[t] }, set: function (e) { return i[t] = e } })
                                } for (var s in n.updating = !1, n.realBuffer_ = i) r(s); return n
                            }(n.mediaSource_.nativeMediaSource_, e), n.mediaSource_[t + "Buffer_"] = i
                        } n[t + "Buffer_"] = i, ["update", "updatestart", "updateend"].forEach(function (e) {
                            i.addEventListener(e, function () {
                                if ("audio" !== t || !n.audioDisabled_) return "updateend" === e && (n[t + "Buffer_"].updating = !1), r.every(function (e) { return !("audio" !== e || !n.audioDisabled_) || t === e || !n[e + "Buffer_"] || !n[e + "Buffer_"].updating }) ? n.trigger(e) :
                                    void 0
                            })
                        })
                    }
                })
            }
        }, {
            key: "appendBuffer", value: function (e) {
                if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) { var t = this.audioBuffer_.buffered; this.transmuxer_.postMessage({ action: "setAudioAppendStart", appendStart: t.end(t.length - 1) }) } this.videoBuffer_ && this.transmuxer_.postMessage({
                    action: "alignGopsWith", gopsToAlignWith: function (e, t, i) { if ("undefined" == typeof t || null === t || !e.length) return []; var n = Math.ceil(9E4 * (t - i + 3)), r = void 0; for (r = 0; r < e.length && !(e[r].pts > n); r++); return e.slice(r) }(this.gopBuffer_,
                        this.mediaSource_.player_ ? this.mediaSource_.player_.currentTime() : null, this.timeMapping_)
                }), this.transmuxer_.postMessage({ action: "push", data: e.buffer, byteOffset: e.byteOffset, byteLength: e.byteLength }, [e.buffer]), this.transmuxer_.postMessage({ action: "flush" })
            }
        }, { key: "appendGopInfo_", value: function (e) { this.gopBuffer_ = function (e, t, i) { if (!t.length) return e; if (i) return t.slice(); for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++); return e.slice(0, r).concat(t) }(this.gopBuffer_, e.data.gopInfo, this.safeAppend_) } },
        {
            key: "remove", value: function (e, t) {
                if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = function (e, t, i, n) { for (var r = Math.ceil(9E4 * (t - n)), s = Math.ceil(9E4 * (i - n)), a = e.slice(), o = e.length; o-- && !(e[o].pts <= s);); if (-1 === o) return a; for (var u = o + 1; u-- && !(e[u].pts <= r);); return u = Math.max(u, 0), a.splice(u, o - u + 1), a }(this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), gu(e, t, this.metadataTrack_),
                    this.inbandTextTracks_) for (var i in this.inbandTextTracks_) gu(e, t, this.inbandTextTracks_[i])
            }
        }, {
            key: "processPendingSegments_", value: function () {
                var e = { video: { segments: [], bytes: 0 }, audio: { segments: [], bytes: 0 }, captions: [], metadata: [] }; if (!this.pendingBuffers_.length) return this.trigger("updateend"), void (this.bufferUpdating_ = !1); e = this.pendingBuffers_.reduce(function (e, t) {
                    var i = t.type, n = t.data, r = t.initSegment; return e[i].segments.push(n), e[i].bytes += n.byteLength, e[i].initSegment = r, t.captions && (e.captions =
                        e.captions.concat(t.captions)), t.info && (e[i].info = t.info), t.metadata && (e.metadata = e.metadata.concat(t.metadata)), e
                }, e), this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), e.audio.info && this.mediaSource_.trigger({ type: "audioinfo", info: e.audio.info }), e.video.info && this.mediaSource_.trigger({ type: "videoinfo", info: e.video.info }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ &&
                    (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1); var t = !1; this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0), yu(this, e.captions, e.metadata), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_),
                        this.pendingBuffers_.length = 0, t && this.trigger("updateend"), this.bufferUpdating_ = !1
            }
        }, { key: "concatAndAppendSegments_", value: function (e, t) { var i = 0, n = void 0; if (e.bytes) { n = new Uint8Array(e.bytes), e.segments.forEach(function (e) { n.set(e, i), i += e.byteLength }); try { t.updating = !0, t.appendBuffer(n) } catch (e) { this.mediaSource_.player_ && this.mediaSource_.player_.error({ code: -3, type: "APPEND_BUFFER_ERR", message: e.message, originalError: e }) } } } }, {
            key: "abort", value: function () {
                this.videoBuffer_ && this.videoBuffer_.abort(),
                !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({ action: "reset" }), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
            }
        }]), Ku); function Ku(e, t) {
            Po(this, Ku); var i = Oo(this, (Ku.__proto__ || Object.getPrototypeOf(Ku)).call(this, rs.EventTarget)); i.timestampOffset_ = 0, i.pendingBuffers_ = [], i.bufferUpdating_ = !1, i.mediaSource_ = e, i.codecs_ = t, i.audioCodec_ = null, i.videoCodec_ = null, i.audioDisabled_ = !1, i.appendAudioInitSegment_ = !0, i.gopBuffer_ = [],
                i.timeMapping_ = 0, i.safeAppend_ = 11 <= rs.browser.IE_VERSION; var n = { remux: !1, alignGopsAtEnd: i.safeAppend_ }; return i.codecs_.forEach(function (e) { Vu(e) ? i.audioCodec_ = e : qu(e) && (i.videoCodec_ = e) }), i.transmuxer_ = new Wu, i.transmuxer_.postMessage({ action: "init", options: n }), i.transmuxer_.onmessage = function (e) {
                    return "data" === e.data.action ? i.data_(e) : "done" === e.data.action ? i.done_(e) : "gopInfo" === e.data.action ? i.appendGopInfo_(e) : "videoSegmentTimingInfo" === e.data.action ? i.videoSegmentTimingInfo_(e.data.videoSegmentTimingInfo) :
                        void 0
                }, Object.defineProperty(i, "timestampOffset", { get: function () { return this.timestampOffset_ }, set: function (e) { "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({ action: "setTimestampOffset", timestampOffset: e })) } }), Object.defineProperty(i, "appendWindowStart", {
                    get: function () { return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart }, set: function (e) {
                        this.videoBuffer_ && (this.videoBuffer_.appendWindowStart =
                            e), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
                    }
                }), Object.defineProperty(i, "updating", { get: function () { return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating) } }), Object.defineProperty(i, "buffered", {
                    get: function () {
                        return function (e, t, i) {
                            var n = null, r = null, s = 0, a = [], o = []; if (!e && !t) return rs.createTimeRange(); if (!e) return t.buffered; if (!t) return e.buffered; if (i) return e.buffered; if (0 === e.buffered.length &&
                                0 === t.buffered.length) return rs.createTimeRange(); for (var u = e.buffered, l = t.buffered, c = u.length; c--;)a.push({ time: u.start(c), type: "start" }), a.push({ time: u.end(c), type: "end" }); for (c = l.length; c--;)a.push({ time: l.start(c), type: "start" }), a.push({ time: l.end(c), type: "end" }); for (a.sort(function (e, t) { return e.time - t.time }), c = 0; c < a.length; c++)"start" === a[c].type ? 2 === ++s && (n = a[c].time) : "end" === a[c].type && 1 === --s && (r = a[c].time), null !== n && null !== r && (o.push([n, r]), r = n = null); return rs.createTimeRanges(o)
                        }(this.videoBuffer_,
                            this.audioBuffer_, this.audioDisabled_)
                    }
                }), i
        } var Xu = (xo(Yu, rs.EventTarget), Ao(Yu, [{ key: "addSeekableRange_", value: function (e, t) { var i = void 0; if (this.duration !== 1 / 0) throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i; (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t) } }, {
            key: "addSourceBuffer", value: function (e) {
                var t = void 0, i = Hu(e); if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                    var n =
                        []; i.parameters && i.parameters.codecs && (n = i.parameters.codecs.split(","), n = (n = Nu(n)).filter(function (e) { return Vu(e) || qu(e) })), 0 === n.length && (n = ["avc1.4d400d", "mp4a.40.2"]), t = new Gu(this, n), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), t.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
                } else t = this.nativeMediaSource_.addSourceBuffer(e); return this.sourceBuffers.push(t), t
            }
        }]), Yu); function Yu() {
            Po(this, Yu); var s = Oo(this, (Yu.__proto__ || Object.getPrototypeOf(Yu)).call(this)),
                e = void 0; for (e in s.nativeMediaSource_ = new y.MediaSource, s.nativeMediaSource_) e in Yu.prototype || "function" != typeof s.nativeMediaSource_[e] || (s[e] = s.nativeMediaSource_[e].bind(s.nativeMediaSource_)); return s.duration_ = NaN, Object.defineProperty(s, "duration", { get: function () { return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration }, set: function (e) { (this.duration_ = e) === 1 / 0 || (this.nativeMediaSource_.duration = e) } }), Object.defineProperty(s, "seekable", {
                    get: function () {
                        return this.duration_ ===
                            1 / 0 ? rs.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
                    }
                }), Object.defineProperty(s, "readyState", { get: function () { return this.nativeMediaSource_.readyState } }), Object.defineProperty(s, "activeSourceBuffers", { get: function () { return this.activeSourceBuffers_ } }), s.sourceBuffers = [], s.activeSourceBuffers_ = [], s.updateActiveSourceBuffers_ = function () {
                    if (s.activeSourceBuffers_.length = 0, 1 === s.sourceBuffers.length) {
                        var e = s.sourceBuffers[0]; return e.appendAudioInitSegment_ =
                            !0, e.audioDisabled_ = !e.audioCodec_, void s.activeSourceBuffers_.push(e)
                    } for (var i = !1, n = !0, t = 0; t < s.player_.audioTracks().length; t++) { var r = s.player_.audioTracks()[t]; if (r.enabled && "main" !== r.kind) { n = !(i = !0); break } } s.sourceBuffers.forEach(function (e, t) { if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i; else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, n = !1; else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = t ? n : !n, e.audioDisabled_)) return; s.activeSourceBuffers_.push(e) })
                },
                    s.onPlayerMediachange_ = function () { s.sourceBuffers.forEach(function (e) { e.appendAudioInitSegment_ = !0 }) }, s.onHlsReset_ = function () { s.sourceBuffers.forEach(function (e) { e.transmuxer_ && e.transmuxer_.postMessage({ action: "resetCaptions" }) }) }, s.onHlsSegmentTimeMapping_ = function (t) { s.sourceBuffers.forEach(function (e) { return e.timeMapping_ = t.mapping }) }, ["sourceopen", "sourceclose", "sourceended"].forEach(function (e) { this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this)) }, s), s.on("sourceopen", function (e) {
                        var t =
                            h.querySelector('[src\x3d"' + s.url_ + '"]'); t && (s.player_ = rs(t.parentNode), s.player_ && (s.player_.tech_.on("hls-reset", s.onHlsReset_), s.player_.tech_.on("hls-segment-time-mapping", s.onHlsSegmentTimeMapping_), s.player_.audioTracks && s.player_.audioTracks() && (s.player_.audioTracks().on("change", s.updateActiveSourceBuffers_), s.player_.audioTracks().on("addtrack", s.updateActiveSourceBuffers_), s.player_.audioTracks().on("removetrack", s.updateActiveSourceBuffers_)), s.player_.on("mediachange", s.onPlayerMediachange_)))
                    }),
                    s.on("sourceended", function (e) { for (var t = vu(s.duration), i = 0; i < s.sourceBuffers.length; i++) { var n = s.sourceBuffers[i], r = n.metadataTrack_ && n.metadataTrack_.cues; r && r.length && (r[r.length - 1].endTime = t) } }), s.on("sourceclose", function (e) {
                        this.sourceBuffers.forEach(function (e) { e.transmuxer_ && e.transmuxer_.terminate() }), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack",
                            this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_ && this.player_.tech_.el_ && (this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                    }), s
        } var $u = 0; rs.mediaSources = {}; function Qu(e, t) {
            var i = rs.mediaSources[e]; if (!i) throw new Error("Media Source not found (Video.js)");
            i.trigger({ type: "sourceopen", swfId: t })
        } function Ju() { return !!y.MediaSource && !!y.MediaSource.isTypeSupported && y.MediaSource.isTypeSupported('video/mp4;codecs\x3d"avc1.4d400d,mp4a.40.2"') } function Zu() { if (this.MediaSource = { open: Qu, supportsNativeMediaSources: Ju }, Ju()) return new Xu; throw new Error("Cannot use create a virtual MediaSource for this video"); } Zu.open = Qu, Zu.supportsNativeMediaSources = Ju; var el = {
            createObjectURL: function (e) {
                var t = void 0; return e instanceof Xu ? (t = y.URL.createObjectURL(e.nativeMediaSource_),
                    e.url_ = t) : e instanceof Xu ? (t = "blob:vjs-media-source/" + $u, $u++, rs.mediaSources[t] = e, t) : (t = y.URL.createObjectURL(e), e.url_ = t)
            }
        }; rs.MediaSource = Zu, rs.URL = el; function tl(e, t) {
            for (var a = void 0, o = sl(e, { duration: t.duration, minimumUpdatePeriod: t.minimumUpdatePeriod }), i = 0; i < t.playlists.length; i++) { var n = Ro(o, t.playlists[i]); n ? o = n : a = !0 } return Do(t, function (e, t, i, n) {
                if (e.playlists && e.playlists.length) {
                    var r = e.playlists[0].uri, s = Ro(o, e.playlists[0]); s && ((o = s).mediaGroups[t][i][n].playlists[0] = o.playlists[r],
                        a = !1)
                }
            }), a ? null : o
        } function il(e) { var t = e.byterange.offset + e.byterange.length - 1; return e.uri + "-" + e.byterange.offset + "-" + t } function nl(e, t) { var i, n, r = {}; for (var s in e) { var a = e[s].sidx; if (a) { var o = il(a); if (!t[o]) break; var u = t[o].sidxInfo; i = u, n = a, (Boolean(!i.map && !n.map) || Boolean(i.map && n.map && i.map.byterange.offset === n.map.byterange.offset && i.map.byterange.length === n.map.byterange.length)) && i.uri === n.uri && i.byterange.offset === n.byterange.offset && i.byterange.length === n.byterange.length && (r[o] = t[o]) } } return r }
    function rl(e, t, i, n, r) { var s = { uri: Lo(n.handleManifestRedirects, e.resolvedUri), byterange: e.byterange, playlist: t }; return i(rs.mergeOptions(s, { responseType: "arraybuffer", headers: iu(s) }), r) } var sl = rs.mergeOptions, al = (xo(ol, rs.EventTarget), Ao(ol, [{ key: "setupChildLoader", value: function (e, t) { this.masterPlaylistLoader_ = e, this.childPlaylist_ = t } }, { key: "dispose", value: function () { this.stopRequest(), this.loadedPlaylists_ = {}, y.clearTimeout(this.minimumUpdatePeriodTimeout_), y.clearTimeout(this.mediaRequest_), y.clearTimeout(this.mediaUpdateTimeout) } },
    { key: "hasPendingRequest", value: function () { return this.request || this.mediaRequest_ } }, { key: "stopRequest", value: function () { if (this.request) { var e = this.request; this.request = null, e.onreadystatechange = null, e.abort() } } }, {
        key: "sidxRequestFinished_", value: function (r, s, a, o) {
            var u = this; return function (e, t) {
                if (u.request) {
                    if (u.request = null, e) return u.error = { status: t.status, message: "DASH playlist request error at URL: " + r.uri, response: t.response, code: 2 }, a && (u.state = a), u.trigger("error"), o(s, null); var i = new Uint8Array(t.response),
                        n = va.parseSidx(i.subarray(8)); return o(s, n)
                }
            }
        }
    }, {
        key: "media", value: function (i) {
            var n = this; if (!i) return this.media_; if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state); var r = this.state; if ("string" == typeof i) { if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i); i = this.master.playlists[i] } var e = !this.media_ || i.uri !== this.media_.uri; if (e && this.loadedPlaylists_[i.uri] && this.loadedPlaylists_[i.uri].endList) return this.state = "HAVE_METADATA",
                this.media_ = i, void (e && (this.trigger("mediachanging"), this.trigger("mediachange"))); if (e) if (this.media_ && this.trigger("mediachanging"), i.sidx) {
                    var t = void 0, s = void 0; s = this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master, this.masterPlaylistLoader_.sidxMapping_) : (t = this.master, this.sidxMapping_); var a = il(i.sidx); s[a] = { sidxInfo: i.sidx }, this.request = rl(i.sidx, i, this.hls_.xhr, { handleManifestRedirects: this.handleManifestRedirects }, this.sidxRequestFinished_(i, t, r, function (e, t) {
                        if (!e || !t) throw new Error("failed to request sidx");
                        s[a].sidx = t, n.haveMetadata({ startingState: r, playlist: e.playlists[i.uri] })
                    }))
                } else this.mediaRequest_ = y.setTimeout(this.haveMetadata.bind(this, { startingState: r, playlist: i }), 0)
        }
    }, { key: "haveMetadata", value: function (e) { var t = e.startingState, i = e.playlist; this.state = "HAVE_METADATA", this.loadedPlaylists_[i.uri] = i, this.mediaRequest_ = null, this.refreshMedia_(i.uri), "HAVE_MASTER" === t ? this.trigger("loadedmetadata") : this.trigger("mediachange") } }, {
        key: "pause", value: function () {
            this.stopRequest(), y.clearTimeout(this.mediaUpdateTimeout),
            y.clearTimeout(this.minimumUpdatePeriodTimeout_), "HAVE_NOTHING" === this.state && (this.started = !1)
        }
    }, { key: "load", value: function (e) { var t = this; y.clearTimeout(this.mediaUpdateTimeout), y.clearTimeout(this.minimumUpdatePeriodTimeout_); var i = this.media(); if (e) { var n = i ? i.targetDuration / 2 * 1E3 : 5E3; this.mediaUpdateTimeout = y.setTimeout(function () { return t.load() }, n) } else this.started ? this.trigger("loadedplaylist") : this.start() } }, {
        key: "parseMasterXml", value: function () {
            var s = ea(this.masterXml_, {
                manifestUri: this.srcUrl,
                clientOffset: this.clientOffset_, sidxMapping: this.sidxMapping_
            }); s.uri = this.srcUrl; for (var e = 0; e < s.playlists.length; e++) { var t = "placeholder-uri-" + e; s.playlists[e].uri = t, s.playlists[t] = s.playlists[e] } return Do(s, function (e, t, i, n) { if (e.playlists && e.playlists.length) { var r = "placeholder-uri-" + t + "-" + i + "-" + n; e.playlists[0].uri = r, s.playlists[r] = e.playlists[0] } }), Uo(s), Mo(s), s
        }
    }, {
        key: "start", value: function () {
            var i = this; this.started = !0, this.masterPlaylistLoader_ ? this.mediaRequest_ = y.setTimeout(this.haveMaster_.bind(this),
                0) : this.request = this.hls_.xhr({ uri: this.srcUrl, withCredentials: this.withCredentials }, function (e, t) {
                    if (i.request) {
                        if (i.request = null, e) return i.error = { status: t.status, message: "DASH playlist request error at URL: " + i.srcUrl, responseText: t.responseText, code: 2 }, "HAVE_NOTHING" === i.state && (i.started = !1), i.trigger("error"); i.masterXml_ = t.responseText, t.responseHeaders && t.responseHeaders.date ? i.masterLoaded_ = Date.parse(t.responseHeaders.date) : i.masterLoaded_ = Date.now(), i.srcUrl = Lo(i.handleManifestRedirects,
                            i.srcUrl, t), i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))
                    }
                })
        }
    }, {
        key: "syncClientServerClock_", value: function (n) {
            var r = this, s = ta(this.masterXml_); return null === s ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), n()) : "DIRECT" === s.method ? (this.clientOffset_ = s.value - Date.now(), n()) : void (this.request = this.hls_.xhr({ uri: wo(this.srcUrl, s.value), method: s.method, withCredentials: this.withCredentials }, function (e, t) {
                if (r.request) {
                    if (e) return r.clientOffset_ = r.masterLoaded_ - Date.now(), n(); var i =
                        void 0; i = "HEAD" === s.method ? t.responseHeaders && t.responseHeaders.date ? Date.parse(t.responseHeaders.date) : r.masterLoaded_ : Date.parse(t.responseText), r.clientOffset_ = i - Date.now(), n()
                }
            }))
        }
    }, { key: "haveMaster_", value: function () { this.state = "HAVE_MASTER", this.mediaRequest_ = null, this.masterPlaylistLoader_ ? this.media_ || this.media(this.childPlaylist_) : (this.master = this.parseMasterXml(), this.trigger("loadedplaylist")) } }, {
        key: "onClientServerClockSync_", value: function () {
            var e = this; this.haveMaster_(), this.hasPendingRequest() ||
                this.media_ || this.media(this.master.playlists[0]), this.master && this.master.minimumUpdatePeriod && (this.minimumUpdatePeriodTimeout_ = y.setTimeout(function () { e.trigger("minimumUpdatePeriod") }, this.master.minimumUpdatePeriod))
        }
    }, {
        key: "refreshXml_", value: function () {
            var o = this; this.request = this.hls_.xhr({ uri: this.srcUrl, withCredentials: this.withCredentials }, function (e, t) {
                if (o.request) {
                    if (o.request = null, e) return o.error = {
                        status: t.status, message: "DASH playlist request error at URL: " + o.srcUrl, responseText: t.responseText,
                        code: 2
                    }, "HAVE_NOTHING" === o.state && (o.started = !1), o.trigger("error"); o.masterXml_ = t.responseText, o.sidxMapping_ = function (e, t, i, s) { var n = ea(e, { manifestUri: t, clientOffset: i }), a = nl(n.playlists, s); return Do(n, function (e, t, i, n) { if (e.playlists && e.playlists.length) { var r = e.playlists; a = sl(a, nl(r, s)) } }), a }(o.masterXml_, o.srcUrl, o.clientOffset_, o.sidxMapping_); var i = o.parseMasterXml(), n = tl(o.master, i), r = o.media().sidx; if (n) if (r) {
                        var s = il(r); if (!o.sidxMapping_[s]) {
                            var a = o.media(); o.request = rl(a.sidx, a, o.hls_.xhr,
                                { handleManifestRedirects: o.handleManifestRedirects }, o.sidxRequestFinished_(a, i, o.state, function (e, t) { if (!e || !t) throw new Error("failed to request sidx on minimumUpdatePeriod"); o.sidxMapping_[s].sidx = t, o.minimumUpdatePeriodTimeout_ = y.setTimeout(function () { o.trigger("minimumUpdatePeriod") }, o.master.minimumUpdatePeriod), o.refreshMedia_(o.media().uri) }))
                        }
                    } else o.master = n; o.minimumUpdatePeriodTimeout_ = y.setTimeout(function () { o.trigger("minimumUpdatePeriod") }, o.master.minimumUpdatePeriod)
                }
            })
        }
    }, {
        key: "refreshMedia_",
        value: function (e) {
            var t = this; if (!e) throw new Error("refreshMedia_ must take a media uri"); var i = void 0, n = void 0; n = this.masterPlaylistLoader_ ? (i = this.masterPlaylistLoader_.master, this.masterPlaylistLoader_.parseMasterXml()) : (i = this.master, this.parseMasterXml()); var r = tl(i, n); r ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = r : this.master = r, this.media_ = r.playlists[e]) : (this.media_ = n.playlists[e], this.trigger("playlistunchanged")), this.media().endList || (this.mediaUpdateTimeout = y.setTimeout(function () { t.trigger("mediaupdatetimeout") },
                No(this.media(), !!r))), this.trigger("loadedplaylist")
        }
    }]), ol); function ol(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments[3]; Po(this, ol); var r = Oo(this, (ol.__proto__ || Object.getPrototypeOf(ol)).call(this)), s = i.withCredentials, a = void 0 !== s && s, o = i.handleManifestRedirects, u = void 0 !== o && o; if (r.hls_ = t, r.withCredentials = a, r.handleManifestRedirects = u, !e) throw new Error("A non-empty playlist URL or playlist is required"); return r.on("minimumUpdatePeriod", function () { r.refreshXml_() }),
            r.on("mediaupdatetimeout", function () { r.refreshMedia_(r.media().uri) }), r.state = "HAVE_NOTHING", r.loadedPlaylists_ = {}, "string" == typeof e ? (r.srcUrl = e, r.sidxMapping_ = {}, Oo(r)) : (r.setupChildLoader(n, e), r)
    } function ul(e) { return rs.log.debug ? rs.log.debug.bind(rs, "VHS:", e + " \x3e") : function () { } } function ll() { } var cl = (Ao(hl, [{
        key: "createSourceBuffer_", value: function (e, t) {
            var i = this; this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e), this.logger_("created SourceBuffer"), t && (t.trigger("sourcebufferadded"),
                this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded", function () { i.start_() }) : this.start_()
        }
    }, { key: "start_", value: function () { var t = this; this.started_ = !0, this.onUpdateendCallback_ = function () { var e = t.pendingCallback_; t.pendingCallback_ = null, t.sourceBuffer_.removing = !1, t.logger_("buffered [" + fu(t.buffered()) + "]"), e && e(), t.runCallback_() }, this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_), this.runCallback_() } }, {
        key: "abort", value: function (e) {
            var t = this; this.processedAppend_ &&
                this.queueCallback_(function () { t.sourceBuffer_.abort() }, e)
        }
    }, { key: "appendBuffer", value: function (e, t) { var i = this; this.processedAppend_ = !0, this.queueCallback_(function () { e.videoSegmentTimingInfoCallback && i.sourceBuffer_.addEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback), i.sourceBuffer_.appendBuffer(e.bytes) }, function () { e.videoSegmentTimingInfoCallback && i.sourceBuffer_.removeEventListener("videoSegmentTimingInfo", e.videoSegmentTimingInfoCallback), t() }) } }, {
        key: "buffered", value: function () {
            return this.sourceBuffer_ ?
                this.sourceBuffer_.buffered : rs.createTimeRanges()
        }
    }, { key: "remove", value: function (e, t, i) { var n = this, r = 2 < arguments.length && void 0 !== i ? i : ll; this.processedAppend_ && this.queueCallback_(function () { n.logger_("remove [" + e + " \x3d\x3e " + t + "]"), n.sourceBuffer_.removing = !0, n.sourceBuffer_.remove(e, t) }, r) } }, { key: "updating", value: function () { return !this.sourceBuffer_ || this.sourceBuffer_.updating || !!this.pendingCallback_ && this.pendingCallback_ !== ll } }, {
        key: "timestampOffset", value: function (e) {
            var t = this; return "undefined" !=
                typeof e && (this.queueCallback_(function () { t.sourceBuffer_.timestampOffset = e, t.runCallback_() }), this.timestampOffset_ = e), this.timestampOffset_
        }
    }, { key: "queueCallback_", value: function (e, t) { this.callbacks_.push([e.bind(this), t]), this.runCallback_() } }, { key: "runCallback_", value: function () { var e = void 0; !this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]()) } }, {
        key: "dispose", value: function () {
            function e() {
                t.sourceBuffer_ && "open" === t.mediaSource.readyState &&
                t.sourceBuffer_.abort(), t.sourceBuffer_.removeEventListener("updateend", e)
            } var t = this; this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_.removing ? this.sourceBuffer_.addEventListener("updateend", e) : e()
        }
    }]), hl); function hl(e, t, i, n) {
        Po(this, hl), this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, this.type_ = i, this.mimeType_ = t, this.logger_ = ul("SourceUpdater[" + i + "][" + t + "]"), "closed" === e.readyState ?
            e.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, t, n)) : this.createSourceBuffer_(t, n)
    } function dl(e) { e.forEach(function (e) { e.abort() }) } function pl(e, t) { return t.timedout ? { status: t.status, message: "HLS request timed-out at URL: " + t.uri, code: kl, xhr: t } : t.aborted ? { status: t.status, message: "HLS request aborted at URL: " + t.uri, code: Cl, xhr: t } : e ? { status: t.status, message: "HLS request errored at URL: " + t.uri, code: Sl, xhr: t } : null } function fl(i, n, r) {
        var s = 0, a = !1; return function (e, t) {
            if (!a) return e ?
                (a = !0, dl(i), r(e, t)) : (s += 1) === i.length ? (t.endOfAllRequests = Date.now(), t.encryptedBytes ? function (n, r, s) {
                    n.addEventListener("message", function e(t) { if (t.data.source === r.requestId) { n.removeEventListener("message", e); var i = t.data.decrypted; return r.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength), s(null, r) } }); var e = void 0; e = r.key.bytes.slice ? r.key.bytes.slice() : new Uint32Array(Array.prototype.slice.call(r.key.bytes)), n.postMessage(su({ source: r.requestId, encrypted: r.encryptedBytes, key: e, iv: r.key.iv }),
                        [r.encryptedBytes.buffer, e.buffer])
                }(n, t, r) : r(null, t)) : void 0
        }
    } function ml(t, i) { return function (e) { return t.stats = rs.mergeOptions(t.stats, function (e) { var t = e.target, i = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t.requestTime || 0 }; return i.bytesReceived = e.loaded, i.bandwidth = Math.floor(i.bytesReceived / i.roundTripTime * 8 * 1E3), i }(e)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), i(e, t) } } function gl(e, t, i, n, r, s, a) {
        var o = [], u = fl(o, i, a); if (r.key &&
            !r.key.bytes) { var l = e(rs.mergeOptions(t, { uri: r.key.resolvedUri, responseType: "arraybuffer" }), function (s, a) { return function (e, t) { var i = t.response, n = pl(e, t); if (n) return a(n, s); if (16 !== i.byteLength) return a({ status: t.status, message: "Invalid HLS key at URL: " + t.uri, code: Sl, xhr: t }, s); var r = new DataView(i); return s.key.bytes = new Uint32Array([r.getUint32(0), r.getUint32(4), r.getUint32(8), r.getUint32(12)]), a(null, s) } }(r, u)); o.push(l) } if (r.map && !r.map.bytes) {
                var c = e(rs.mergeOptions(t, {
                    uri: r.map.resolvedUri,
                    responseType: "arraybuffer", headers: iu(r.map)
                }), function (r, s, a) { return function (e, t) { var i = t.response, n = pl(e, t); return n ? a(n, r) : 0 === i.byteLength ? a({ status: t.status, message: "Empty HLS segment content at URL: " + t.uri, code: Sl, xhr: t }, r) : (r.map.bytes = new Uint8Array(t.response), s && !s.isInitialized() && s.init(), r.map.timescales = Ta.timescale(r.map.bytes), r.map.videoTrackIds = Ta.videoTrackIds(r.map.bytes), a(null, r)) } }(r, n, u)); o.push(c)
            } var h = e(rs.mergeOptions(t, { uri: r.resolvedUri, responseType: "arraybuffer", headers: iu(r) }),
                function (s, a, o) {
                    return function (e, t) {
                        var i = t.response, n = pl(e, t), r = void 0; return n ? o(n, s) : 0 === i.byteLength ? o({ status: t.status, message: "Empty HLS segment content at URL: " + t.uri, code: Sl, xhr: t }, s) : (s.stats = function (e) { return { bandwidth: e.bandwidth, bytesReceived: e.bytesReceived || 0, roundTripTime: e.roundTripTime || 0 } }(t), s.key ? s.encryptedBytes = new Uint8Array(t.response) : s.bytes = new Uint8Array(t.response), a && s.map && s.map.bytes && (a.isInitialized() || a.init(), (r = a.parse(s.bytes, s.map.videoTrackIds, s.map.timescales)) &&
                            r.captions && (s.captionStreams = r.captionStreams, s.fmp4Captions = r.captions)), o(null, s))
                    }
                }(r, n, u)); return h.addEventListener("progress", ml(r, s)), o.push(h), function () { return dl(o) }
    } function vl(e, t) { var i; return e && (i = y.getComputedStyle(e)) ? i[t] : "" } function yl(e, n) { var r = e.slice(); e.sort(function (e, t) { var i = n(e, t); return 0 === i ? r.indexOf(e) - r.indexOf(t) : i }) } function _l(e, t) {
        var i = void 0, n = void 0; return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || y.Number.MAX_VALUE, t.attributes.BANDWIDTH && (n =
            t.attributes.BANDWIDTH), i - (n = n || y.Number.MAX_VALUE)
    } function bl(e) { return "number" == typeof e && isFinite(e) } var Tl = { GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH: 60, GOAL_BUFFER_LENGTH_RATE: 1, INITIAL_BANDWIDTH: 4194304, BANDWIDTH_VARIANCE: 1.2, BUFFER_LOW_WATER_LINE: 0, MAX_BUFFER_LOW_WATER_LINE: 30, BUFFER_LOW_WATER_LINE_RATE: 1 }, Sl = 2, kl = -101, Cl = -102, El = (xo(wl, rs.EventTarget), Ao(wl, [{
        key: "resetStats_", value: function () {
            this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout =
                0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
        }
    }, { key: "dispose", value: function () { this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_(), this.captionParser_ && this.captionParser_.reset() } }, { key: "abort", value: function () { "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null) } }, {
        key: "abort_", value: function () {
            this.pendingSegment_ &&
            this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
        }
    }, { key: "error", value: function (e) { return "undefined" != typeof e && (this.error_ = e), this.pendingSegment_ = null, this.error_ } }, { key: "endOfStream", value: function () { this.ended_ = !0, this.pause(), this.trigger("ended") } }, { key: "buffered_", value: function () { return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : rs.createTimeRanges() } }, {
        key: "initSegment", value: function (e, t) {
            var i = 1 < arguments.length && void 0 !== t && t; if (!e) return null; var n = au(e), r = this.initSegments_[n];
            return i && !r && e.bytes && (this.initSegments_[n] = r = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: e.bytes, timescales: e.timescales, videoTrackIds: e.videoTrackIds }), r || e
        }
    }, { key: "segmentKey", value: function (e, t) { var i = 1 < arguments.length && void 0 !== t && t; if (!e) return null; var n = ou(e), r = this.keyCache_[n]; this.cacheEncryptionKeys_ && i && !r && e.bytes && (this.keyCache_[n] = r = { resolvedUri: e.resolvedUri, bytes: e.bytes }); var s = { resolvedUri: (r || e).resolvedUri }; return r && (s.bytes = r.bytes), s } }, {
        key: "couldBeginLoading_",
        value: function () { return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused() }
    }, { key: "load", value: function () { if (this.monitorBuffer_(), this.playlist_) { if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_(); !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY") } } }, {
        key: "init_", value: function () {
            return this.state = "READY", this.sourceUpdater_ = new cl(this.mediaSource_,
                this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_()
        }
    }, {
        key: "playlist", value: function (e, t) {
            var i = 1 < arguments.length && void 0 !== t ? t : {}; if (e) {
                var n = this.playlist_, r = this.pendingSegment_; this.playlist_ = e, this.xhrOptions_ = i, this.hasPlayed_() || (e.syncInfo = { mediaSequence: e.mediaSequence, time: 0 }); var s = null; if (n && (n.id ? s = n.id : n.uri && (s = n.uri)), this.logger_("playlist update [" + s + " \x3d\x3e " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state &&
                    this.couldBeginLoading_()) return this.init_(); if (n && n.uri === e.uri) { var a = e.mediaSequence - n.mediaSequence; this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), r && (r.mediaIndex -= a, 0 <= r.mediaIndex && (r.segment = e.segments[r.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(n, e) } else null !== this.mediaIndex && this.resyncLoader()
            }
        }
    }, { key: "pause", value: function () { this.checkBufferTimeout_ && (y.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null) } }, {
        key: "paused",
        value: function () { return null === this.checkBufferTimeout_ }
    }, { key: "mimeType", value: function (e, t) { this.mimeType_ || (this.mimeType_ = e, this.sourceBufferEmitter_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_()) } }, { key: "resetEverything", value: function (e) { this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_(), e), this.captionParser_ && this.captionParser_.clearAllCaptions(), this.trigger("reseteverything") } }, { key: "resetLoader", value: function () { this.fetchAtBuffer_ = !1, this.resyncLoader() } },
    { key: "resyncLoader", value: function () { this.mediaIndex = null, this.syncPoint_ = null, this.abort() } }, { key: "remove", value: function (e, t, i) { if (this.sourceUpdater_ && this.sourceUpdater_.remove(e, t, i), gu(e, t, this.segmentMetadataTrack_), this.inbandTextTracks_) for (var n in this.inbandTextTracks_) gu(e, t, this.inbandTextTracks_[n]) } }, { key: "monitorBuffer_", value: function () { this.checkBufferTimeout_ && y.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = y.setTimeout(this.monitorBufferTick_.bind(this), 1) } },
    { key: "monitorBufferTick_", value: function () { "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && y.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = y.setTimeout(this.monitorBufferTick_.bind(this), 500) } }, {
        key: "fillBuffer_", value: function () {
            if (!this.sourceUpdater_.updating()) {
                this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_())); var e = this.checkBuffer_(this.buffered_(), this.playlist_,
                    this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_); e && (this.isEndOfStream_(e.mediaIndex) ? this.endOfStream() : e.mediaIndex === this.playlist_.segments.length - 1 && "ended" === this.mediaSource_.readyState && !this.seeking_() || (e.timeline !== this.currentTimeline_ && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment, this.captionParser_ && this.captionParser_.clearAllCaptions()), this.loadSegment_(e)))
            }
        }
    }, {
        key: "isEndOfStream_", value: function (e, t) {
            return function (e, t, i) {
                if (!e || !t) return !1;
                var n = i === e.segments.length; return e.endList && "open" === t.readyState && n
            }(1 < arguments.length && void 0 !== t ? t : this.playlist_, this.mediaSource_, e) && !this.sourceUpdater_.updating()
        }
    }, {
        key: "checkBuffer_", value: function (e, t, i, n, r, s) {
            var a = 0, o = void 0; e.length && (a = e.end(e.length - 1)); var u = Math.max(0, a - r); if (!t.segments.length) return null; if (u >= this.goalBufferLength_()) return null; if (!n && 1 <= u) return null; if (null === s) return i = this.getSyncSegmentCandidate_(t), this.generateSegmentInfo_(t, i, null, !0); if (null !== i) return t.segments[i],
                o = a, this.generateSegmentInfo_(t, i + 1, o, !1); if (this.fetchAtBuffer_) { var l = Su.getMediaInfoForTime(t, a, s.segmentIndex, s.time); i = l.mediaIndex, o = l.startTime } else { var c = Su.getMediaInfoForTime(t, r, s.segmentIndex, s.time); i = c.mediaIndex, o = c.startTime } return this.generateSegmentInfo_(t, i, o, !1)
        }
    }, {
        key: "getSyncSegmentCandidate_", value: function (e) {
            var t = this; if (-1 === this.currentTimeline_) return 0; var i = e.segments.map(function (e, t) { return { timeline: e.timeline, segmentIndex: t } }).filter(function (e) {
                return e.timeline ===
                    t.currentTimeline_
            }); return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
        }
    }, { key: "generateSegmentInfo_", value: function (e, t, i, n) { if (t < 0 || t >= e.segments.length) return null; var r = e.segments[t]; return { requestId: "segment-loader-" + Math.random(), uri: r.resolvedUri, mediaIndex: t, isSyncRequest: n, startOfSegment: i, playlist: e, bytes: null, encryptedBytes: null, timestampOffset: null, timeline: r.timeline, duration: r.duration, segment: r } } }, {
        key: "abortRequestEarly_", value: function (e) {
            if (this.hls_.tech_.paused() ||
                !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1; if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1E3) return !1; var t = this.currentTime_(), i = e.bandwidth, n = this.pendingSegment_.duration, r = Su.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived), s = function (e, t, i) { var n = 2 < arguments.length && void 0 !== i ? i : 1; return ((e.length ? e.end(e.length - 1) : 0) - t) / n }(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1; if (r <= s) return !1; var a = function (e) {
                    var t = e.master, i = e.currentTime, n =
                        e.bandwidth, r = e.duration, s = e.segmentDuration, a = e.timeUntilRebuffer, o = e.currentTimeline, u = e.syncController, l = t.playlists.filter(function (e) { return !Su.isIncompatible(e) }), c = l.filter(Su.isEnabled); c.length || (c = l.filter(function (e) { return !Su.isDisabled(e) })); var h = c.filter(Su.hasAttribute.bind(null, "BANDWIDTH")).map(function (e) { var t = u.getSyncPoint(e, r, o, i) ? 1 : 2; return { playlist: e, rebufferingImpact: Su.estimateSegmentRequestTime(s, n, e) * t - a } }), d = h.filter(function (e) { return e.rebufferingImpact <= 0 }); return yl(d,
                            function (e, t) { return _l(t.playlist, e.playlist) }), d.length ? d[0] : (yl(h, function (e, t) { return e.rebufferingImpact - t.rebufferingImpact }), h[0] || null)
                }({ master: this.hls_.playlists.master, currentTime: t, bandwidth: i, duration: this.duration_(), segmentDuration: n, timeUntilRebuffer: s, currentTimeline: this.currentTimeline_, syncController: this.syncController_ }); if (a) {
                    var o = r - s - a.rebufferingImpact, u = 0.5; return s <= 1 / 30 && (u = 1), !(!a.playlist || a.playlist.uri === this.playlist_.uri || o < u) && (this.bandwidth = a.playlist.attributes.BANDWIDTH *
                        Tl.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                }
        }
    }, { key: "handleProgress_", value: function (e, t) { this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress") } }, {
        key: "loadSegment_", value: function (e) {
            this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), e.abortRequests = gl(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.captionParser_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this),
                this.segmentRequestFinished_.bind(this))
        }
    }, { key: "trimBackBuffer_", value: function (e) { var t = function (e, t, i) { var n = void 0; return n = e.length && 0 < e.start(0) && e.start(0) < t ? e.start(0) : t - 30, Math.min(n, t - i) }(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10); 0 < t && this.remove(0, t) } }, {
        key: "createSimplifiedSegmentObj_", value: function (e) {
            var t = e.segment, i = { resolvedUri: t.resolvedUri, byterange: t.byterange, requestId: e.requestId }; if (t.key) {
                var n = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                i.key = this.segmentKey(t.key), i.key.iv = n
            } return t.map && (i.map = this.initSegment(t.map)), i
        }
    }, {
        key: "segmentRequestFinished_", value: function (e, t) {
            if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
                if (t.requestId === this.pendingSegment_.requestId) {
                    if (e) return this.pendingSegment_ = null, this.state = "READY", e.code === Cl ? void (this.mediaRequestsAborted += 1) : (this.pause(), e.code === kl ? (this.mediaRequestsTimedout +=
                        1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error"))); this.bandwidth = t.stats.bandwidth, this.roundTrip = t.stats.roundTripTime, t.map && (t.map = this.initSegment(t.map, !0)), t.key && this.segmentKey(t.key, !0), this.processSegmentResponse_(t)
                }
            } else this.mediaRequestsAborted += 1
        }
    }, {
        key: "processSegmentResponse_", value: function (e) {
            var t = this.pendingSegment_; t.bytes = e.bytes, e.map && (t.segment.map.bytes = e.map.bytes), t.endOfAllRequests =
                e.endOfAllRequests, e.fmp4Captions && (function (e, t, i) { for (var n in i) if (!e[n]) { t.trigger({ type: "usage", name: "hls-608" }); var r = t.textTracks().getTrackById(n); e[n] = r || t.addRemoteTextTrack({ kind: "captions", id: n, label: n }, !1).track } }(this.inbandTextTracks_, this.hls_.tech_, e.captionStreams), function (e) {
                    var r = e.inbandTextTracks, t = e.captionArray, s = e.timestampOffset; if (t) {
                        var a = window.WebKitDataCue || window.VTTCue; t.forEach(function (e) {
                            var t = e.stream, i = e.startTime, n = e.endTime; r[t] && (i += s, n += s, r[t].addCue(new a(i,
                                n, e.text)))
                        })
                    }
                }({ inbandTextTracks: this.inbandTextTracks_, captionArray: e.fmp4Captions, timestampOffset: 0 }), this.captionParser_ && this.captionParser_.clearParsedCaptions()), this.handleSegment_()
        }
    }, {
        key: "handleSegment_", value: function () {
            var e = this; if (this.pendingSegment_) {
                var t = this.pendingSegment_, i = t.segment, n = this.syncController_.probeSegmentInfo(t); "undefined" == typeof this.startingMedia_ && n && (n.containsAudio || n.containsVideo) && (this.startingMedia_ = { containsAudio: n.containsAudio, containsVideo: n.containsVideo });
                var r = function (e, t, i) {
                    return "main" === e && t && i ? i.containsAudio || i.containsVideo ? t.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." :
                        null : "Neither audio nor video found in segment." : null
                }(this.loaderType_, this.startingMedia_, n); if (r) return this.error({ message: r, blacklistDuration: 1 / 0 }), void this.trigger("error"); if (t.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY"); if (null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset()) {
                    if (n && n.segmentTimestampInfo) {
                        var s = n.segmentTimestampInfo[0].ptsTime, a = n.segmentTimestampInfo[0].dtsTime; t.timestampOffset -=
                            s - a
                    } this.sourceUpdater_.timestampOffset(t.timestampOffset), this.trigger("timestampoffset")
                } var o = this.syncController_.mappingForTimeline(t.timeline); if (null !== o && this.trigger({ type: "segmenttimemapping", mapping: o }), this.state = "APPENDING", i.map) { var u = au(i.map); if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== u) { var l = this.initSegment(i.map); this.sourceUpdater_.appendBuffer({ bytes: l.bytes }, function () { e.activeInitSegmentId_ = u }) } } t.byteLength = t.bytes.byteLength, "number" == typeof i.start && "number" ==
                    typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.logger_(function (e) { var t = e.segment, i = t.start, n = t.end, r = e.playlist, s = r.mediaSequence, a = r.id, o = r.segments, u = void 0 === o ? [] : o, l = e.mediaIndex, c = e.timeline; return ["appending [" + l + "] of [" + s + ", " + (s + u.length) + "] from playlist [" + a + "]", "[" + i + " \x3d\x3e " + n + "] in timeline [" + c + "]"].join(" ") }(t)), this.sourceUpdater_.appendBuffer({
                        bytes: t.bytes, videoSegmentTimingInfoCallback: this.handleVideoSegmentTimingInfo_.bind(this,
                            t.requestId)
                    }, this.handleUpdateEnd_.bind(this))
            } else this.state = "READY"
        }
    }, {
        key: "handleVideoSegmentTimingInfo_", value: function (e, t) {
            if (this.pendingSegment_ && e === this.pendingSegment_.requestId) {
                var i = this.pendingSegment_.segment; i.videoTimingInfo || (i.videoTimingInfo = {}), i.videoTimingInfo.transmuxerPrependedSeconds = t.videoSegmentTimingInfo.prependedContentDuration || 0, i.videoTimingInfo.transmuxedPresentationStart = t.videoSegmentTimingInfo.start.presentation, i.videoTimingInfo.transmuxedPresentationEnd =
                    t.videoSegmentTimingInfo.end.presentation, i.videoTimingInfo.baseMediaDecodeTime = t.videoSegmentTimingInfo.baseMediaDecodeTime
            }
        }
    }, {
        key: "handleUpdateEnd_", value: function () {
            if (!this.pendingSegment_) return this.state = "READY", void (this.paused() || this.monitorBuffer_()); var e = this.pendingSegment_, t = e.segment, i = null !== this.mediaIndex; this.pendingSegment_ = null, this.recordThroughput_(e), this.addSegmentMetadataCue_(e), this.state = "READY", this.mediaIndex = e.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ =
                e.timeline, this.trigger("syncinfoupdate"), t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration ? this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), this.isEndOfStream_(e.mediaIndex + 1, e.playlist) && this.endOfStream(), this.paused() || this.monitorBuffer_())
        }
    }, { key: "recordThroughput_", value: function (e) { var t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1, n = Math.floor(e.byteLength / i * 8 * 1E3); this.throughput.rate += (n - t) / ++this.throughput.count } }, {
        key: "addSegmentMetadataCue_",
        value: function (e) {
            if (this.segmentMetadataTrack_) {
                var t = e.segment, i = t.start, n = t.end; if (bl(i) && bl(n)) {
                    gu(i, n, this.segmentMetadataTrack_); var r = y.WebKitDataCue || y.VTTCue, s = { custom: t.custom, dateTimeObject: t.dateTimeObject, dateTimeString: t.dateTimeString, bandwidth: e.playlist.attributes.BANDWIDTH, resolution: e.playlist.attributes.RESOLUTION, codecs: e.playlist.attributes.CODECS, byteLength: e.byteLength, uri: e.uri, timeline: e.timeline, playlist: e.playlist.uri, start: i, end: n }, a = new r(i, n, JSON.stringify(s)); a.value =
                        s, this.segmentMetadataTrack_.addCue(a)
                }
            }
        }
    }]), wl); function wl(e) {
        Po(this, wl); var t = Oo(this, (wl.__proto__ || Object.getPrototypeOf(wl)).call(this)); if (!e) throw new TypeError("Initialization settings are required"); if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified"); if (!e.mediaSource) throw new TypeError("No MediaSource specified"); return t.bandwidth = e.bandwidth, t.throughput = { rate: 0, count: 0 }, t.roundTrip = NaN, t.resetStats_(), t.mediaIndex = null, t.hasPlayed_ = e.hasPlayed,
            t.currentTime_ = e.currentTime, t.seekable_ = e.seekable, t.seeking_ = e.seeking, t.duration_ = e.duration, t.mediaSource_ = e.mediaSource, t.hls_ = e.hls, t.loaderType_ = e.loaderType, t.startingMedia_ = void 0, t.segmentMetadataTrack_ = e.segmentMetadataTrack, t.goalBufferLength_ = e.goalBufferLength, t.sourceType_ = e.sourceType, t.inbandTextTracks_ = e.inbandTextTracks, t.state_ = "INIT", t.checkBufferTimeout_ = null, t.error_ = void 0, t.currentTimeline_ = -1, t.pendingSegment_ = null, t.mimeType_ = null, t.sourceUpdater_ = null, t.xhrOptions_ = null,
            t.activeInitSegmentId_ = null, t.initSegments_ = {}, t.cacheEncryptionKeys_ = e.cacheEncryptionKeys, t.keyCache_ = {}, "main" === t.loaderType_ ? t.captionParser_ = new ja : t.captionParser_ = null, t.decrypter_ = e.decrypter, t.syncController_ = e.syncController, t.syncPoint_ = { segmentIndex: 0, time: 0 }, t.syncController_.on("syncinfoupdate", function () { return t.trigger("syncinfoupdate") }), t.mediaSource_.addEventListener("sourceopen", function () { return t.ended_ = !1 }), t.fetchAtBuffer_ = !1, t.logger_ = ul("SegmentLoader[" + t.loaderType_ + "]"),
            Object.defineProperty(t, "state", { get: function () { return this.state_ }, set: function (e) { e !== this.state_ && (this.logger_(this.state_ + " -\x3e " + e), this.state_ = e) } }), t
    } function Ll(e) { return decodeURIComponent(escape(String.fromCharCode.apply(null, e))) } var Pl = new Uint8Array("\n\n".split("").map(function (e) { return e.charCodeAt(0) })), Al = (xo(Il, El), Ao(Il, [{
        key: "buffered_", value: function () {
            if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return rs.createTimeRanges(); var e = this.subtitlesTrack_.cues,
                t = e[0].startTime, i = e[e.length - 1].startTime; return rs.createTimeRanges([[t, i]])
        }
    }, { key: "initSegment", value: function (e, t) { var i = 1 < arguments.length && void 0 !== t && t; if (!e) return null; var n = au(e), r = this.initSegments_[n]; if (i && !r && e.bytes) { var s = Pl.byteLength + e.bytes.byteLength, a = new Uint8Array(s); a.set(e.bytes), a.set(Pl, e.bytes.byteLength), this.initSegments_[n] = r = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: a } } return r || e } }, {
        key: "couldBeginLoading_", value: function () {
            return this.playlist_ && this.subtitlesTrack_ &&
                !this.paused()
        }
    }, { key: "init_", value: function () { return this.state = "READY", this.resetEverything(), this.monitorBuffer_() } }, { key: "track", value: function (e) { return "undefined" == typeof e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_ } }, { key: "remove", value: function (e, t) { gu(e, t, this.subtitlesTrack_) } }, {
        key: "fillBuffer_", value: function () {
            var e = this; this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(),
                this.currentTimeline_, this.currentTime_())); var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_); if (t = this.skipEmptySegments_(t)) { if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) return this.syncController_.one("timestampoffset", function () { e.state = "READY", e.paused() || e.monitorBuffer_() }), void (this.state = "WAITING_ON_TIMELINE"); this.loadSegment_(t) }
        }
    }, {
        key: "skipEmptySegments_", value: function (e) {
            for (; e && e.segment.empty;)e =
                this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest); return e
        }
    }, {
        key: "handleSegment_", value: function () {
            var t = this; if (this.pendingSegment_ && this.subtitlesTrack_) {
                this.state = "APPENDING"; var e = this.pendingSegment_, i = e.segment; if ("function" != typeof y.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                    var n = void 0, r = function () { t.subtitlesTrack_.tech_.off("vttjsloaded", n), t.error({ message: "Error loading vtt.js" }), t.state = "READY", t.pause(), t.trigger("error") };
                    return n = function () { t.subtitlesTrack_.tech_.off("vttjserror", r), t.handleSegment_() }, this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", n), void this.subtitlesTrack_.tech_.one("vttjserror", r)
                } i.requested = !0; try { this.parseVTTCues_(e) } catch (e) { return this.error({ message: e.message }), this.state = "READY", this.pause(), this.trigger("error") } if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ =
                    null, void (this.state = "READY"); e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach(function (e) { t.subtitlesTrack_.addCue(e) }), this.handleUpdateEnd_()
            } else this.state = "READY"
        }
    }, {
        key: "parseVTTCues_", value: function (t) {
            var e = void 0, i = !1; "function" == typeof y.TextDecoder ? e = new y.TextDecoder("utf8") : (e = y.WebVTT.StringDecoder(), i = !0); var n = new y.WebVTT.Parser(y, y.vttjs, e); if (t.cues = [], t.timestampmap =
                { MPEGTS: 0, LOCAL: 0 }, n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = function (e) { return t.timestampmap = e }, n.onparsingerror = function (e) { rs.log.warn("Error encountered when parsing cues: " + e.message) }, t.segment.map) { var r = t.segment.map.bytes; i && (r = Ll(r)), n.parse(r) } var s = t.bytes; i && (s = Ll(s)), n.parse(s), n.flush()
        }
    }, {
        key: "updateTimeMapping_", value: function (e, t, i) {
            var n = e.segment; if (t) if (e.cues.length) {
                var r = e.timestampmap, s = r.MPEGTS / 9E4 - r.LOCAL + t.mapping; if (e.cues.forEach(function (e) {
                    e.startTime += s, e.endTime +=
                        s
                }), !i.syncInfo) { var a = e.cues[0].startTime, o = e.cues[e.cues.length - 1].startTime; i.syncInfo = { mediaSequence: i.mediaSequence + e.mediaIndex, time: Math.min(a, o - n.duration) } }
            } else n.empty = !0
        }
    }]), Il); function Il(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; Po(this, Il); var i = Oo(this, (Il.__proto__ || Object.getPrototypeOf(Il)).call(this, e, t)); return i.mediaSource_ = null, i.subtitlesTrack_ = null, i } function xl(e, t) { for (var i = e.cues, n = 0; n < i.length; n++) { var r = i[n]; if (t >= r.adStartTime && t <= r.adEndTime) return r } return null }
    var Ol = lo, Dl = [{ name: "VOD", run: function (e, t, i, n, r) { if (i === 1 / 0) return null; return { time: 0, segmentIndex: 0 } } }, { name: "ProgramDateTime", run: function (e, t, i, n, r) { if (!e.datetimeToDisplayTime) return null; var s = t.segments || [], a = null, o = null; r = r || 0; for (var u = 0; u < s.length; u++) { var l = s[u]; if (l.dateTimeObject) { var c = l.dateTimeObject.getTime() / 1E3 + e.datetimeToDisplayTime, h = Math.abs(r - c); if (null !== o && (0 === h || o < h)) break; o = h, a = { time: c, segmentIndex: u } } } return a } }, {
        name: "Segment", run: function (e, t, i, n, r) {
            var s = t.segments ||
                [], a = null, o = null; r = r || 0; for (var u = 0; u < s.length; u++) { var l = s[u]; if (l.timeline === n && "undefined" != typeof l.start) { var c = Math.abs(r - l.start); if (null !== o && o < c) break; (!a || null === o || c <= o) && (o = c, a = { time: l.start, segmentIndex: u }) } } return a
        }
    }, {
        name: "Discontinuity", run: function (e, t, i, n, r) {
            var s = null; if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var a = null, o = 0; o < t.discontinuityStarts.length; o++) {
                var u = t.discontinuityStarts[o], l = t.discontinuitySequence + o + 1, c = e.discontinuities[l]; if (c) {
                    var h =
                        Math.abs(r - c.time); if (null !== a && a < h) break; (!s || null === a || h <= a) && (a = h, s = { time: c.time, segmentIndex: u })
                }
            } return s
        }
    }, { name: "Playlist", run: function (e, t, i, n, r) { return t.syncInfo ? { time: t.syncInfo.time, segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence } : null } }], Rl = (xo(Ul, rs.EventTarget), Ao(Ul, [{ key: "getSyncPoint", value: function (e, t, i, n) { var r = this.runStrategies_(e, t, i, n); return r.length ? this.selectSyncPoint_(r, { key: "time", value: n }) : null } }, {
        key: "getExpiredTime", value: function (e, t) {
            if (!e || !e.segments) return null;
            var i = this.runStrategies_(e, t, e.discontinuitySequence, 0); if (!i.length) return null; var n = this.selectSyncPoint_(i, { key: "segmentIndex", value: 0 }); return 0 < n.segmentIndex && (n.time *= -1), Math.abs(n.time + zo(e, n.segmentIndex, 0))
        }
    }, { key: "runStrategies_", value: function (e, t, i, n) { for (var r = [], s = 0; s < Dl.length; s++) { var a = Dl[s], o = a.run(this, e, t, i, n); o && (o.strategy = a.name, r.push({ strategy: a.name, syncPoint: o })) } return r } }, {
        key: "selectSyncPoint_", value: function (e, t) {
            for (var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] -
                t.value), r = e[0].strategy, s = 1; s < e.length; s++) { var a = Math.abs(e[s].syncPoint[t.key] - t.value); a < n && (n = a, i = e[s].syncPoint, r = e[s].strategy) } return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + r + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
        }
    }, {
        key: "saveExpiredSegmentInfo", value: function (e, t) {
            for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
                var n = e.segments[i]; if (n && "undefined" != typeof n.start) {
                    t.syncInfo = { mediaSequence: e.mediaSequence + i, time: n.start }, this.logger_("playlist refresh sync: [time:" +
                        t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate"); break
                }
            }
        }
    }, { key: "setDateTimeMapping", value: function (e) { if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) { var t = e.segments[0].dateTimeObject.getTime() / 1E3; this.datetimeToDisplayTime = -t } } }, { key: "reset", value: function () { this.inspectCache_ = void 0 } }, {
        key: "probeSegmentInfo", value: function (e) {
            var t = e.segment, i = e.playlist, n = void 0; return (n = t.map ? this.probeMp4Segment_(e) :
                this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, n) && (this.saveDiscontinuitySyncInfo_(e), i.syncInfo || (i.syncInfo = { mediaSequence: i.mediaSequence + e.mediaIndex, time: t.start })), n
        }
    }, { key: "probeMp4Segment_", value: function (e) { var t = e.segment, i = Ta.timescale(t.map.bytes), n = Ta.compositionStartTime(i, e.bytes); return null !== e.timestampOffset && (e.timestampOffset -= n), { start: n, end: n + t.duration } } }, {
        key: "probeTsSegment_", value: function (e) {
            var t = Ol(e.bytes, this.inspectCache_), i = void 0, n = void 0, r = void 0;
            return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, i = t.video[0].dtsTime, n = t.video[1].dtsTime, r = t.video) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, i = t.audio[0].dtsTime, n = t.audio[1].dtsTime, r = t.audio), { segmentTimestampInfo: r, start: i, end: n, containsVideo: t.video && 2 === t.video.length, containsAudio: t.audio && 2 === t.audio.length }) : null
        }
    }, { key: "timestampOffsetForTimeline", value: function (e) { return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].time } }, {
        key: "mappingForTimeline",
        value: function (e) { return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].mapping }
    }, {
        key: "calculateSegmentTimeMapping_", value: function (e, t) {
            var i = e.segment, n = this.timelines[e.timeline]; if (null !== e.timestampOffset) n = { time: e.startOfSegment, mapping: e.startOfSegment - t.start }, this.timelines[e.timeline] = n, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": [time: " + n.time + "] [mapping: " + n.mapping + "]"), i.start = e.startOfSegment, i.end = t.end + n.mapping; else {
                if (!n) return !1;
                i.start = t.start + n.mapping, i.end = t.end + n.mapping
            } return !0
        }
    }, {
        key: "saveDiscontinuitySyncInfo_", value: function (e) {
            var t = e.playlist, i = e.segment; if (i.discontinuity) this.discontinuities[i.timeline] = { time: i.start, accuracy: 0 }; else if (t.discontinuityStarts && t.discontinuityStarts.length) for (var n = 0; n < t.discontinuityStarts.length; n++) {
                var r = t.discontinuityStarts[n], s = t.discontinuitySequence + n + 1, a = r - e.mediaIndex, o = Math.abs(a); if (!this.discontinuities[s] || this.discontinuities[s].accuracy > o) {
                    var u = void 0; u = a < 0 ?
                        i.start - zo(t, e.mediaIndex, r) : i.end + zo(t, e.mediaIndex + 1, r), this.discontinuities[s] = { time: u, accuracy: o }
                }
            }
        }
    }]), Ul); function Ul() { Po(this, Ul); var e = Oo(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).call(this)); return e.inspectCache_ = void 0, e.timelines = [], e.discontinuities = [], e.datetimeToDisplayTime = null, e.logger_ = ul("SyncController"), e } function Ml(e, t) { e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null) } function Nl(e, t) { (t.activePlaylistLoader = e).load() }
    function Bl(t) {
        ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) { Vl[e](e, t) }); var i = t.mediaTypes, e = t.masterPlaylistLoader, n = t.tech, r = t.hls;["AUDIO", "SUBTITLES"].forEach(function (e) {
            i[e].activeGroup = function (s, a) { return function (t) { var e = a.masterPlaylistLoader, i = a.mediaTypes[s].groups, n = e.media(); if (!n) return null; var r = null; return n.attributes[s] && (r = i[n.attributes[s]]), r = r || i.main, "undefined" == typeof t ? r : null === t ? null : r.filter(function (e) { return e.id === t.id })[0] || null } }(e, t), i[e].activeTrack =
                ql[e](e, t), i[e].onGroupChanged = function (o, u) { return function () { var e = u.segmentLoaders, t = e[o], i = e.main, n = u.mediaTypes[o], r = n.activeTrack(), s = n.activeGroup(r), a = n.activePlaylistLoader; Ml(t, n), s && (s.playlistLoader ? (t.resyncLoader(), Nl(s.playlistLoader, n)) : a && i.resetEverything()) } }(e, t), i[e].onTrackChanged = function (o, u) {
                    return function () {
                        var e = u.segmentLoaders, t = e[o], i = e.main, n = u.mediaTypes[o], r = n.activeTrack(), s = n.activeGroup(r), a = n.activePlaylistLoader; Ml(t, n), s && (s.playlistLoader ? (a !== s.playlistLoader &&
                            (t.track && t.track(r), t.resetEverything()), Nl(s.playlistLoader, n)) : i.resetEverything())
                    }
                }(e, t)
        }); var s = i.AUDIO.activeGroup(), a = (s.filter(function (e) { return e.default })[0] || s[0]).id; function o() { i.AUDIO.onTrackChanged(), n.trigger({ type: "usage", name: "hls-audio-change" }) } for (var u in i.AUDIO.tracks[a].enabled = !0, i.AUDIO.onTrackChanged(), e.on("mediachange", function () { ["AUDIO", "SUBTITLES"].forEach(function (e) { return i[e].onGroupChanged() }) }), n.audioTracks().addEventListener("change", o), n.remoteTextTracks().addEventListener("change",
            i.SUBTITLES.onTrackChanged), r.on("dispose", function () { n.audioTracks().removeEventListener("change", o), n.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged) }), n.clearTracks("audio"), i.AUDIO.tracks) n.audioTracks().addTrack(i.AUDIO.tracks[u])
    } var jl = new Ou("./decrypter-worker.worker.js", function (e, t) {
        var i, c, g, n, r, u, a, s = this; i = function (e, t, i) { return t && o(e.prototype, t), i && o(e, i), e }, c = null, d.prototype.decrypt = function (e, t, i, n, r, s) {
            var a = this._key[1], o = e ^ a[0], u = n ^ a[1], l = i ^ a[2],
            c = t ^ a[3], h = void 0, d = void 0, p = void 0, f = a.length / 4 - 2, m = void 0, g = 4, v = this._tables[1], y = v[0], _ = v[1], b = v[2], T = v[3], S = v[4]; for (m = 0; m < f; m++)h = y[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ a[g], d = y[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ a[g + 1], p = y[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ a[g + 2], c = y[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ a[g + 3], g += 4, o = h, u = d, l = p; for (m = 0; m < 4; m++)r[(3 & -m) + s] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ a[g++], h = o, o = u, u = l, l = c, c = h
        }, g = d, l.prototype.on = function (e,
            t) { this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t) }, l.prototype.off = function (e, t) { if (!this.listeners[e]) return !1; var i = this.listeners[e].indexOf(t); return this.listeners[e].splice(i, 1), -1 < i }, l.prototype.trigger = function (e, t) { var i = this.listeners[e]; if (i) if (2 === arguments.length) for (var n = i.length, r = 0; r < n; ++r)i[r].call(this, t); else for (var s = Array.prototype.slice.call(arguments, 1), a = i.length, o = 0; o < a; ++o)i[o].apply(this, s) }, l.prototype.dispose = function () { this.listeners = {} }, l.prototype.pipe =
            function (t) { this.on("data", function (e) { t.push(e) }) }, function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(p, r = n = l), p.prototype.processJob_ = function () {
                this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) :
                    this.timeout_ = null
            }, p.prototype.push = function (e) { this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay)) }, u = p, f.prototype.decryptChunk_ = function (t, i, n, r) {
                return function () {
                    var e = function (e, t, i) {
                        var n = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2), r = new g(Array.prototype.slice.call(t)), s = new Uint8Array(e.byteLength), a = new Int32Array(s.buffer), o = void 0, u = void 0, l = void 0, c = void 0, h = void 0, d = void 0, p = void 0, f = void 0, m = void 0; for (o = i[0], u = i[1], l = i[2],
                            c = i[3], m = 0; m < n.length; m += 4)h = v(n[m]), d = v(n[m + 1]), p = v(n[m + 2]), f = v(n[m + 3]), r.decrypt(h, d, p, f, a, m), a[m] = v(a[m] ^ o), a[m + 1] = v(a[m + 1] ^ u), a[m + 2] = v(a[m + 2] ^ l), a[m + 3] = v(a[m + 3] ^ c), o = h, u = d, l = p, c = f; return s
                    }(t, i, n); r.set(e, t.byteOffset)
                }
            }, i(f, null, [{ key: "STEP", get: function () { return 32E3 } }]), a = f, new function (s) {
                s.onmessage = function (e) {
                    var i = e.data, t = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength), n = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4), r = new Uint32Array(i.iv.bytes,
                        i.iv.byteOffset, i.iv.byteLength / 4); new a(t, n, r, function (e, t) { s.postMessage(function (i) { var n = {}; return Object.keys(i).forEach(function (e) { var t = i[e]; ArrayBuffer.isView(t) ? n[e] = { bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength } : n[e] = t }), n }({ source: i.source, decrypted: t }), [t.buffer]) })
                }
            }(s); function h(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function"); } function o(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i]; n.enumerable = n.enumerable || !1, n.configurable = !0,
                        "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            } function d(e) {
                h(this, d), c = c || function () {
                    var e = [[[], [], [], [], []], [[], [], [], [], []]], t = e[0], i = e[1], n = t[4], r = i[4], s = void 0, a = void 0, o = void 0, u = [], l = [], c = void 0, h = void 0, d = void 0, p = void 0, f = void 0; for (s = 0; s < 256; s++)l[(u[s] = s << 1 ^ 283 * (s >> 7)) ^ s] = s; for (a = o = 0; !n[a]; a ^= c || 1, o = l[o] || 1)for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[r[n[a] = d] = a]]] ^ 65537 * h ^ 257 * c ^ 16843008 * a, p = 257 * u[d] ^ 16843008 * d, s = 0; s < 4; s++)t[s][a] = p = p << 24 ^ p >>> 8, i[s][d] =
                        f = f << 24 ^ f >>> 8; for (s = 0; s < 5; s++)t[s] = t[s].slice(0), i[s] = i[s].slice(0); return e
                }(), this._tables = [[c[0][0].slice(), c[0][1].slice(), c[0][2].slice(), c[0][3].slice(), c[0][4].slice()], [c[1][0].slice(), c[1][1].slice(), c[1][2].slice(), c[1][3].slice(), c[1][4].slice()]]; var t = void 0, i = void 0, n = void 0, r = void 0, s = void 0, a = this._tables[0][4], o = this._tables[1], u = e.length, l = 1; if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size"); for (r = e.slice(0), s = [], this._key = [r, s], t = u; t < 4 * u + 28; t++)n = r[t - 1], (t % u == 0 || 8 ===
                    u && t % u == 4) && (n = a[n >>> 24] << 24 ^ a[n >> 16 & 255] << 16 ^ a[n >> 8 & 255] << 8 ^ a[255 & n], t % u == 0 && (n = n << 8 ^ n >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), r[t] = r[t - u] ^ n; for (i = 0; t; i++, t--)n = r[3 & i ? t : t - 4], s[i] = t <= 4 || i < 4 ? n : o[0][a[n >>> 24]] ^ o[1][a[n >> 16 & 255]] ^ o[2][a[n >> 8 & 255]] ^ o[3][a[255 & n]]
            } function l() { h(this, l), this.listeners = {} } function p() {
                h(this, p); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, r.call(this, n));
                return e.jobs = [], e.delay = 1, e.timeout_ = null, e
            } function v(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24 } function f(e, t, i, n) {
                h(this, f); var r = f.STEP, s = new Int32Array(e.buffer), a = new Uint8Array(e.byteLength), o = 0; for (this.asyncStream_ = new u, this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a)), o = r; o < s.length; o += r)i = new Uint32Array([v(s[o - 4]), v(s[o - 3]), v(s[o - 2]), v(s[o - 1])]), this.asyncStream_.push(this.decryptChunk_(s.subarray(o, o + r), t, i, a)); this.asyncStream_.push(function () {
                    n(null, function (e) {
                        return e.subarray(0,
                            e.byteLength - e[e.byteLength - 1])
                    }(a))
                })
            }
    }), Fl = {
        AUDIO: function (u, l) { return function () { var e = l.segmentLoaders[u], t = l.mediaTypes[u], i = l.blacklistCurrentPlaylist; Ml(e, t); var n = t.activeTrack(), r = t.activeGroup(), s = (r.filter(function (e) { return e.default })[0] || r[0]).id, a = t.tracks[s]; if (n !== a) { for (var o in rs.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks) t.tracks[o].enabled = t.tracks[o] === a; t.onTrackChanged() } else i({ message: "Problem encountered loading the default audio track." }) } },
        SUBTITLES: function (n, r) { return function () { var e = r.segmentLoaders[n], t = r.mediaTypes[n]; rs.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), Ml(e, t); var i = t.activeTrack(); i && (i.mode = "disabled"), t.onTrackChanged() } }
    }, Hl = {
        AUDIO: function (e, t, i) {
            if (t) {
                var n = i.tech, r = i.requestOptions, s = i.segmentLoaders[e]; t.on("loadedmetadata", function () { var e = t.media(); s.playlist(e, r), (!n.paused() || e.endList && "none" !== n.preload()) && s.load() }), t.on("loadedplaylist", function () {
                    s.playlist(t.media(),
                        r), n.paused() || s.load()
                }), t.on("error", Fl[e](e, i))
            }
        }, SUBTITLES: function (e, t, i) { var n = i.tech, r = i.requestOptions, s = i.segmentLoaders[e], a = i.mediaTypes[e]; t.on("loadedmetadata", function () { var e = t.media(); s.playlist(e, r), s.track(a.activeTrack()), (!n.paused() || e.endList && "none" !== n.preload()) && s.load() }), t.on("loadedplaylist", function () { s.playlist(t.media(), r), n.paused() || s.load() }), t.on("error", Fl[e](e, i)) }
    }, Vl = {
        AUDIO: function (e, t) {
            var i, n, r = t.hls, s = t.sourceType, a = t.segmentLoaders[e], o = t.requestOptions,
            u = t.master.mediaGroups, l = t.mediaTypes[e], c = l.groups, h = l.tracks, d = t.masterPlaylistLoader; for (var p in u[e] && 0 !== Object.keys(u[e]).length || (u[e] = { main: { default: { default: !0 } } }), u[e]) for (var f in c[p] || (c[p] = []), u[e][p]) {
                var m = u[e][p][f], g = void 0; if (g = m.resolvedUri ? new Ho(m.resolvedUri, r, o) : m.playlists && "dash" === s ? new al(m.playlists[0], r, o, d) : null, m = rs.mergeOptions({ id: f, playlistLoader: g }, m), Hl[e](e, m.playlistLoader, t), c[p].push(m), "undefined" == typeof h[f]) {
                    var v = new rs.AudioTrack({
                        id: f, kind: (i = m, n = void 0,
                            n = i.default ? "main" : "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (n = "main-desc"), n), enabled: !1, language: m.language, default: m.default, label: f
                    }); h[f] = v
                }
            } a.on("error", Fl[e](e, t))
        }, SUBTITLES: function (e, t) {
            var i = t.tech, n = t.hls, r = t.sourceType, s = t.segmentLoaders[e], a = t.requestOptions, o = t.master.mediaGroups, u = t.mediaTypes[e], l = u.groups, c = u.tracks, h = t.masterPlaylistLoader; for (var d in o[e]) for (var p in l[d] || (l[d] = []), o[e][d]) if (!o[e][d][p].forced) {
                var f =
                    o[e][d][p], m = void 0; if ("hls" === r ? m = new Ho(f.resolvedUri, n, a) : "dash" === r && (m = new al(f.playlists[0], n, a, h)), f = rs.mergeOptions({ id: p, playlistLoader: m }, f), Hl[e](e, f.playlistLoader, t), l[d].push(f), "undefined" == typeof c[p]) { var g = i.addRemoteTextTrack({ id: p, kind: "subtitles", default: f.default && f.autoselect, language: f.language, label: p }, !1).track; c[p] = g }
            } s.on("error", Fl[e](e, t))
        }, "CLOSED-CAPTIONS": function (e, t) {
            var i = t.tech, n = t.master.mediaGroups, r = t.mediaTypes[e], s = r.groups, a = r.tracks; for (var o in n[e]) for (var u in s[o] ||
                (s[o] = []), n[e][o]) { var l = n[e][o][u]; if (l.instreamId.match(/CC\d/) && (s[o].push(rs.mergeOptions({ id: u }, l)), "undefined" == typeof a[u])) { var c = i.addRemoteTextTrack({ id: l.instreamId, kind: "captions", default: l.default && l.autoselect, language: l.language, label: u }, !1).track; a[u] = c } }
        }
    }, ql = {
        AUDIO: function (i, n) { return function () { var e = n.mediaTypes[i].tracks; for (var t in e) if (e[t].enabled) return e[t]; return null } }, SUBTITLES: function (i, n) {
            return function () {
                var e = n.mediaTypes[i].tracks; for (var t in e) if ("showing" ===
                    e[t].mode) return e[t]; return null
            }
        }
    }, Wl = void 0, zl = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"], Gl = (xo(Kl, rs.EventTarget), Ao(Kl, [{
        key: "setupMasterPlaylistLoaderListeners_", value: function () {
            var n = this; this.masterPlaylistLoader_.on("loadedmetadata", function () {
                var e = n.masterPlaylistLoader_.media(), t = 1.5 * e.targetDuration * 1E3; eu(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ? n.requestOptions_.timeout =
                    0 : n.requestOptions_.timeout = t, e.endList && "none" !== n.tech_.preload() && (n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.mainSegmentLoader_.load()), Bl({ sourceType: n.sourceType_, segmentLoaders: { AUDIO: n.audioSegmentLoader_, SUBTITLES: n.subtitleSegmentLoader_, main: n.mainSegmentLoader_ }, tech: n.tech_, requestOptions: n.requestOptions_, masterPlaylistLoader: n.masterPlaylistLoader_, hls: n.hls_, master: n.master(), mediaTypes: n.mediaTypes_, blacklistCurrentPlaylist: n.blacklistCurrentPlaylist.bind(n) }), n.triggerPresenceUsage_(n.master(),
                        e); try { n.setupSourceBuffers_() } catch (e) { return rs.log.warn("Failed to create SourceBuffers", e), n.mediaSource.endOfStream("decode") } n.setupFirstPlay(), !n.mediaTypes_.AUDIO.activePlaylistLoader || n.mediaTypes_.AUDIO.activePlaylistLoader.media() ? n.trigger("selectedinitialmedia") : n.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function () { n.trigger("selectedinitialmedia") })
            }), this.masterPlaylistLoader_.on("loadedplaylist", function () {
                var e = n.masterPlaylistLoader_.media(); if (!e) {
                    n.excludeUnsupportedVariants_();
                    var t = void 0; return n.enableLowInitialPlaylist && (t = n.selectInitialPlaylist()), t = t || n.selectPlaylist(), n.initialMedia_ = t, void n.masterPlaylistLoader_.media(n.initialMedia_)
                } if (n.useCueTags_ && n.updateAdCues_(e), n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.updateDuration(), n.tech_.paused() || (n.mainSegmentLoader_.load(), n.audioSegmentLoader_ && n.audioSegmentLoader_.load()), !e.endList) {
                    var i = function () { var e = n.seekable(); 0 !== e.length && n.mediaSource.addSeekableRange_(e.start(0), e.end(0)) }; n.duration() !==
                        1 / 0 ? n.tech_.one("durationchange", function e() { n.duration() === 1 / 0 ? i() : n.tech_.one("durationchange", e) }) : i()
                }
            }), this.masterPlaylistLoader_.on("error", function () { n.blacklistCurrentPlaylist(n.masterPlaylistLoader_.error) }), this.masterPlaylistLoader_.on("mediachanging", function () { n.mainSegmentLoader_.abort(), n.mainSegmentLoader_.pause() }), this.masterPlaylistLoader_.on("mediachange", function () {
                var e = n.masterPlaylistLoader_.media(), t = 1.5 * e.targetDuration * 1E3; eu(n.masterPlaylistLoader_.master, n.masterPlaylistLoader_.media()) ?
                    n.requestOptions_.timeout = 0 : n.requestOptions_.timeout = t, n.mainSegmentLoader_.playlist(e, n.requestOptions_), n.mainSegmentLoader_.load(), n.tech_.trigger({ type: "mediachange", bubbles: !0 })
            }), this.masterPlaylistLoader_.on("playlistunchanged", function () { var e = n.masterPlaylistLoader_.media(); n.stuckAtPlaylistEnd_(e) && (n.blacklistCurrentPlaylist({ message: "Playlist no longer updating." }), n.tech_.trigger("playliststuck")) }), this.masterPlaylistLoader_.on("renditiondisabled", function () {
                n.tech_.trigger({
                    type: "usage",
                    name: "hls-rendition-disabled"
                })
            }), this.masterPlaylistLoader_.on("renditionenabled", function () { n.tech_.trigger({ type: "usage", name: "hls-rendition-enabled" }) })
        }
    }, {
        key: "triggerPresenceUsage_", value: function (e, t) {
            var i = e.mediaGroups || {}, n = !0, r = Object.keys(i.AUDIO); for (var s in i.AUDIO) for (var a in i.AUDIO[s]) i.AUDIO[s][a].uri || (n = !1); n && this.tech_.trigger({ type: "usage", name: "hls-demuxed" }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({ type: "usage", name: "hls-webvtt" }), Wl.Playlist.isAes(t) && this.tech_.trigger({
                type: "usage",
                name: "hls-aes"
            }), Wl.Playlist.isFmp4(t) && this.tech_.trigger({ type: "usage", name: "hls-fmp4" }), r.length && 1 < Object.keys(i.AUDIO[r[0]]).length && this.tech_.trigger({ type: "usage", name: "hls-alternate-audio" }), this.useCueTags_ && this.tech_.trigger({ type: "usage", name: "hls-playlist-cue-tags" })
        }
    }, {
        key: "setupSegmentLoaderListeners_", value: function () {
            var s = this; this.mainSegmentLoader_.on("bandwidthupdate", function () {
                var e = s.selectPlaylist(), t = s.masterPlaylistLoader_.media(), i = s.tech_.buffered(), n = i.length ? i.end(i.length -
                    1) - s.tech_.currentTime() : 0, r = s.bufferLowWaterLine(); (!t.endList || s.duration() < Tl.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < t.attributes.BANDWIDTH || r <= n) && s.masterPlaylistLoader_.media(e), s.tech_.trigger("bandwidthupdate")
            }), this.mainSegmentLoader_.on("progress", function () { s.trigger("progress") }), this.mainSegmentLoader_.on("error", function () { s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error()) }), this.mainSegmentLoader_.on("syncinfoupdate", function () { s.onSyncInfoUpdate_() }), this.mainSegmentLoader_.on("timestampoffset",
                function () { s.tech_.trigger({ type: "usage", name: "hls-timestamp-offset" }) }), this.audioSegmentLoader_.on("syncinfoupdate", function () { s.onSyncInfoUpdate_() }), this.mainSegmentLoader_.on("ended", function () { s.onEndOfStream() }), this.mainSegmentLoader_.on("earlyabort", function () { s.blacklistCurrentPlaylist({ message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering." }, 120) }), this.mainSegmentLoader_.on("reseteverything", function () { s.tech_.trigger("hls-reset") }), this.mainSegmentLoader_.on("segmenttimemapping",
                    function (e) { s.tech_.trigger({ type: "hls-segment-time-mapping", mapping: e.mapping }) }), this.audioSegmentLoader_.on("ended", function () { s.onEndOfStream() })
        }
    }, { key: "mediaSecondsLoaded_", value: function () { return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded) } }, { key: "load", value: function () { this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load() } },
    { key: "smoothQualityChange_", value: function () { var e = this.selectPlaylist(); e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader()) } }, { key: "fastQualityChange_", value: function () { var e = this, t = this.selectPlaylist(); t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetEverything(function () { rs.browser.IE_VERSION || rs.browser.IS_EDGE ? e.tech_.setCurrentTime(e.tech_.currentTime() + 0.04) : e.tech_.setCurrentTime(e.tech_.currentTime()) })) } },
    { key: "play", value: function () { if (!this.setupFirstPlay()) { this.tech_.ended() && this.seekTo_(0), this.hasPlayed_() && this.load(); var e = this.tech_.seekable(); return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.seekTo_(e.end(e.length - 1)) : void 0 } } }, {
        key: "setupFirstPlay", value: function () {
            var e = this, t = this.masterPlaylistLoader_.media(); if (!t || this.tech_.paused() || this.hasPlayed_()) return !1; if (!t.endList) {
                var i = this.seekable(); if (!i.length) return !1; if (rs.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata",
                    function () { e.trigger("firstplay"), e.seekTo_(i.end(0)), e.hasPlayed_ = function () { return !0 } }), !1; this.trigger("firstplay"), this.seekTo_(i.end(0))
            } return this.hasPlayed_ = function () { return !0 }, this.load(), !0
        }
    }, { key: "handleSourceOpen_", value: function () { try { this.setupSourceBuffers_() } catch (e) { return rs.log.warn("Failed to create Source Buffers", e), this.mediaSource.endOfStream("decode") } if (this.tech_.autoplay()) { var e = this.tech_.play(); "undefined" != typeof e && "function" == typeof e.then && e.then(null, function (e) { }) } this.trigger("sourceopen") } },
    { key: "onEndOfStream", value: function () { var e = this.mainSegmentLoader_.ended_; if (this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), e) { this.logger_("calling mediaSource.endOfStream()"); try { this.mediaSource.endOfStream() } catch (e) { rs.log.warn("Failed to call media source endOfStream", e) } } } }, {
        key: "stuckAtPlaylistEnd_", value: function (e) {
            if (!this.seekable().length) return !1;
            var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration); if (null === t) return !1; var i = Wl.Playlist.playlistEnd(e, t), n = this.tech_.currentTime(), r = this.tech_.buffered(); if (!r.length) return i - n <= 0.1; var s = r.end(r.length - 1); return s - n <= 0.1 && i - s <= 0.1
        }
    }, {
        key: "blacklistCurrentPlaylist", value: function (e, t) {
            var i, n = 0 < arguments.length && void 0 !== e ? e : {}, r = t, s = void 0; if (s = n.playlist || this.masterPlaylistLoader_.media(), r = r || n.blacklistDuration || this.blacklistDuration, !s) { this.error = n; try { return this.mediaSource.endOfStream("network") } catch (e) { return this.trigger("error") } } var a =
                1 === this.masterPlaylistLoader_.master.playlists.filter(Jo).length, o = this.masterPlaylistLoader_.master.playlists; return 1 === o.length ? (rs.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(a)) : (a && (rs.log.warn("Removing all playlists from the blacklist because the last rendition is about to be blacklisted."), o.forEach(function (e) { e.excludeUntil !== 1 / 0 && delete e.excludeUntil }), this.tech_.trigger("retryplaylist")),
                    s.excludeUntil = Date.now() + 1E3 * r, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({ type: "usage", name: "hls-rendition-blacklisted" }), i = this.selectPlaylist(), rs.log.warn("Problem encountered with the current HLS playlist." + (n.message ? " " + n.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(i, a))
        }
    }, {
        key: "pauseLoading", value: function () {
            this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
                this.subtitleSegmentLoader_.pause()
        }
    }, {
        key: "setCurrentTime", value: function (e) {
            var t = du(this.tech_.buffered(), e); return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(),
                this.subtitleSegmentLoader_.abort()), void this.load()) : 0
        }
    }, { key: "duration", value: function () { return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : Wl.Playlist.duration(this.masterPlaylistLoader_.media()) : 0 } }, { key: "seekable", value: function () { return this.seekable_ } }, {
        key: "onSyncInfoUpdate_", value: function () {
            var e = void 0, t = void 0; if (this.masterPlaylistLoader_) {
                var i = this.masterPlaylistLoader_.media(); if (i) {
                    var n = this.syncController_.getExpiredTime(i, this.mediaSource.duration); if (null !==
                        n && 0 !== (e = Wl.Playlist.seekable(i, n)).length) {
                            if (this.mediaTypes_.AUDIO.activePlaylistLoader) { if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (n = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return; if (0 === (t = Wl.Playlist.seekable(i, n)).length) return } var r = void 0, s = void 0; this.seekable_ && this.seekable_.length && (r = this.seekable_.end(0), s = this.seekable_.start(0)), t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = rs.createTimeRanges([[t.start(0) >
                                e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]]) : this.seekable_ = e, this.seekable_ && this.seekable_.length && this.seekable_.end(0) === r && this.seekable_.start(0) === s || (this.logger_("seekable updated [" + fu(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"))
                    }
                }
            }
        }
    }, {
        key: "updateDuration", value: function () {
            function e() {
                t.logger_("Setting duration from " + t.mediaSource.duration + " \x3d\x3e " + n); try { t.mediaSource.duration = n } catch (e) {
                    rs.log.warn("Failed to set media source duration",
                        e)
                } t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
            } var t = this, i = this.mediaSource.duration, n = Wl.Playlist.duration(this.masterPlaylistLoader_.media()), r = this.tech_.buffered(); 0 < r.length && (n = Math.max(n, r.end(r.length - 1))), i !== n && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", e) : e())
        }
    }, {
        key: "dispose", value: function () {
            var n = this; this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO",
                "SUBTITLES"].forEach(function (e) { var t = n.mediaTypes_[e].groups; for (var i in t) t[i].forEach(function (e) { e.playlistLoader && e.playlistLoader.dispose() }) }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
        }
    }, { key: "master", value: function () { return this.masterPlaylistLoader_.master } }, { key: "media", value: function () { return this.masterPlaylistLoader_.media() || this.initialMedia_ } }, {
        key: "setupSourceBuffers_", value: function () {
            var e, t = this.masterPlaylistLoader_.media(); if (t && "open" === this.mediaSource.readyState) {
                if ((e =
                    Fu(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode"); this.configureLoaderMimeTypes_(e), this.excludeIncompatibleVariants_(t)
            }
        }
    }, { key: "configureLoaderMimeTypes_", value: function (e) { var t = 1 < e.length && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new rs.EventTarget : null; this.mainSegmentLoader_.mimeType(e[0], t), e[1] && this.audioSegmentLoader_.mimeType(e[1], t) } }, {
        key: "excludeUnsupportedVariants_",
        value: function () { this.master().playlists.forEach(function (e) { e.attributes.CODECS && y.MediaSource && y.MediaSource.isTypeSupported && !y.MediaSource.isTypeSupported('video/mp4; codecs\x3d"' + function (e) { return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e) { return Nu([e])[0] }) }(e.attributes.CODECS) + '"') && (e.excludeUntil = 1 / 0) }) }
    }, {
        key: "excludeIncompatibleVariants_", value: function (e) {
            var i = 2, n = null, t = void 0; e.attributes.CODECS && (t = Bu(e.attributes.CODECS), n = t.videoCodec, i = t.codecCount), this.master().playlists.forEach(function (e) {
                var t =
                    { codecCount: 2, videoCodec: null }; e.attributes.CODECS && (t = Bu(e.attributes.CODECS)), t.codecCount !== i && (e.excludeUntil = 1 / 0), t.videoCodec !== n && (e.excludeUntil = 1 / 0)
            })
        }
    }, {
        key: "updateAdCues_", value: function (e) {
            var t = 0, i = this.seekable(); i.length && (t = i.start(0)), function (e, t, i) {
                var n = 2 < arguments.length && void 0 !== i ? i : 0; if (e.segments) for (var r = n, s = void 0, a = 0; a < e.segments.length; a++) {
                    var o = e.segments[a]; if (s = s || xl(t, r + o.duration / 2)) {
                        if ("cueIn" in o) { s.endTime = r, s.adEndTime = r, r += o.duration, s = null; continue } if (r < s.endTime) {
                            r +=
                            o.duration; continue
                        } s.endTime += o.duration
                    } else if ("cueOut" in o && ((s = new y.VTTCue(r, r + o.duration, o.cueOut)).adStartTime = r, s.adEndTime = r + parseFloat(o.cueOut), t.addCue(s)), "cueOutCont" in o) { var u, l, c = o.cueOutCont.split("/").map(parseFloat), h = Bo(c, 2); u = h[0], l = h[1], (s = new y.VTTCue(r, r + o.duration, "")).adStartTime = r - u, s.adEndTime = s.adStartTime + l, t.addCue(s) } r += o.duration
                }
            }(e, this.cueTagsTrack_, t)
        }
    }, {
        key: "goalBufferLength", value: function () {
            var e = this.tech_.currentTime(), t = Tl.GOAL_BUFFER_LENGTH, i = Tl.GOAL_BUFFER_LENGTH_RATE,
            n = Math.max(t, Tl.MAX_GOAL_BUFFER_LENGTH); return Math.min(t + e * i, n)
        }
    }, { key: "bufferLowWaterLine", value: function () { var e = this.tech_.currentTime(), t = Tl.BUFFER_LOW_WATER_LINE, i = Tl.BUFFER_LOW_WATER_LINE_RATE, n = Math.max(t, Tl.MAX_BUFFER_LOW_WATER_LINE); return Math.min(t + e * i, n) } }]), Kl); function Kl(e) {
        Po(this, Kl); var t = Oo(this, (Kl.__proto__ || Object.getPrototypeOf(Kl)).call(this)), i = e.url, n = e.handleManifestRedirects, r = e.withCredentials, s = e.tech, a = e.bandwidth, o = e.externHls, u = e.useCueTags, l = e.blacklistDuration,
            c = e.enableLowInitialPlaylist, h = e.sourceType, d = e.seekTo, p = e.cacheEncryptionKeys; if (!i) throw new Error("A non-empty playlist URL is required"); Wl = o, t.withCredentials = r, t.tech_ = s, t.hls_ = s.hls, t.seekTo_ = d, t.sourceType_ = h, t.useCueTags_ = u, t.blacklistDuration = l, t.enableLowInitialPlaylist = c, t.useCueTags_ && (t.cueTagsTrack_ = t.tech_.addTextTrack("metadata", "ad-cues"), t.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), t.requestOptions_ = { withCredentials: r, handleManifestRedirects: n, timeout: null }, t.mediaTypes_ =
                function () { var t = {}; return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) { t[e] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: ll, activeTrack: ll, onGroupChanged: ll, onTrackChanged: ll } }), t }(), t.mediaSource = new rs.MediaSource, t.mediaSource.addEventListener("sourceopen", t.handleSourceOpen_.bind(t)), t.seekable_ = rs.createTimeRanges(), t.hasPlayed_ = function () { return !1 }, t.syncController_ = new Rl(e), t.segmentMetadataTrack_ = s.addRemoteTextTrack({ kind: "metadata", label: "segment-metadata" },
                    !1).track, t.decrypter_ = new jl, t.inbandTextTracks_ = {}; var f = {
                        hls: t.hls_, mediaSource: t.mediaSource, currentTime: t.tech_.currentTime.bind(t.tech_), seekable: function () { return t.seekable() }, seeking: function () { return t.tech_.seeking() }, duration: function () { return t.mediaSource.duration }, hasPlayed: function () { return t.hasPlayed_() }, goalBufferLength: function () { return t.goalBufferLength() }, bandwidth: a, syncController: t.syncController_, decrypter: t.decrypter_, sourceType: t.sourceType_, inbandTextTracks: t.inbandTextTracks_,
                        cacheEncryptionKeys: p
                    }; return t.masterPlaylistLoader_ = "dash" === t.sourceType_ ? new al(i, t.hls_, t.requestOptions_) : new Ho(i, t.hls_, t.requestOptions_), t.setupMasterPlaylistLoaderListeners_(), t.mainSegmentLoader_ = new El(rs.mergeOptions(f, { segmentMetadataTrack: t.segmentMetadataTrack_, loaderType: "main" }), e), t.audioSegmentLoader_ = new El(rs.mergeOptions(f, { loaderType: "audio" }), e), t.subtitleSegmentLoader_ = new Al(rs.mergeOptions(f, { loaderType: "vtt" }), e), t.setupSegmentLoaderListeners_(), zl.forEach(function (e) {
                        t[e +
                        "_"] = function (e) { return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e] }.bind(t, e)
                    }), t.logger_ = ul("MPC"), t.masterPlaylistLoader_.load(), t
    } function Xl(e, t, i) {
        Po(this, Xl); var n = e.masterPlaylistController_, r = n[(e.options_.smoothQualityChange ? "smooth" : "fast") + "QualityChange_"].bind(n); if (t.attributes.RESOLUTION) { var s = t.attributes.RESOLUTION; this.width = s.width, this.height = s.height } this.bandwidth = t.attributes.BANDWIDTH, this.id = i, this.enabled = function (r, s, a) {
            return function (e) {
                var t = r.master.playlists[s],
                i = Qo(t), n = Jo(t); return "undefined" == typeof e ? n : (e ? delete t.disabled : t.disabled = !0, e === n || i || (a(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e)
            }
        }(e.playlists, t.uri, r)
    } var Yl = ["seeking", "seeked", "pause", "playing", "error"], $l = (Ao(Ql, [{ key: "monitorCurrentTime_", value: function () { this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && y.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = y.setTimeout(this.monitorCurrentTime_.bind(this), 250) } }, {
        key: "checkCurrentTime_",
        value: function () {
            if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void (this.lastRecordedTime = this.tech_.currentTime()); if (!this.tech_.paused() && !this.tech_.seeking()) {
                var e = this.tech_.currentTime(), t = this.tech_.buffered(); if (this.lastRecordedTime === e && (!t.length || e + 0.1 >= t.end(t.length - 1))) return this.techWaiting_(); 5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates =
                    0, this.lastRecordedTime = e)
            }
        }
    }, { key: "cancelTimer_", value: function () { this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null } }, {
        key: "fixesBadSeeks_", value: function () {
            if (!this.tech_.seeking()) return !1; var e = this.seekable(), t = this.tech_.currentTime(), i = void 0; return this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (i = e.end(e.length - 1)), this.beforeSeekableWindow_(e, t) && (i = e.start(0) + 0.1), "undefined" != typeof i && (this.logger_("Trying to seek outside of seekable at time " +
                t + " with seekable range " + fu(e) + ". Seeking to " + i + "."), this.seekTo(i), !0)
        }
    }, { key: "waiting_", value: function () { if (!this.techWaiting_()) { var e = this.tech_.currentTime(), t = this.tech_.buffered(), i = du(t, e); return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.seekTo(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -\x3e " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({ type: "usage", name: "hls-unknown-waiting" })) : void 0 } } },
    {
        key: "techWaiting_", value: function () {
            var e = this.seekable(), t = this.tech_.currentTime(); if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0; if (this.tech_.seeking() || null !== this.timer_) return !0; if (this.beforeSeekableWindow_(e, t)) { var i = e.end(e.length - 1); return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.seekTo(i), this.tech_.trigger({ type: "usage", name: "hls-live-resync" }), !0 } var n = this.tech_.buffered(), r = pu(n, t); if (this.videoUnderflow_(r,
                n, t)) return this.cancelTimer_(), this.seekTo(t), this.tech_.trigger({ type: "usage", name: "hls-video-underflow" }), !0; if (0 < r.length) { var s = r.start(0) - t; return this.logger_("Stopped at " + t + ", setting timer for " + s + ", seeking to " + r.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1E3 * s, t), !0 } return !1
        }
    }, {
        key: "afterSeekableWindow_", value: function (e, t, i, n) {
            var r = 3 < arguments.length && void 0 !== n && n; if (!e.length) return !1; var s = e.end(e.length - 1) + 0.1; return !i.endList && r && (s = e.end(e.length - 1) + 3 * i.targetDuration),
                s < t
        }
    }, { key: "beforeSeekableWindow_", value: function (e, t) { return !!(e.length && 0 < e.start(0) && t < e.start(0) - 0.1) } }, { key: "videoUnderflow_", value: function (e, t, i) { if (0 === e.length) { var n = this.gapFromVideoUnderflow_(t, i); if (n) return this.logger_("Encountered a gap in video from " + n.start + " to " + n.end + ". Seeking to current time " + i), !0 } return !1 } }, {
        key: "skipTheGap_", value: function (e) {
            var t = this.tech_.buffered(), i = this.tech_.currentTime(), n = pu(t, i); this.cancelTimer_(), 0 !== n.length && i === e && (this.logger_("skipTheGap_:",
                "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", n.start(0)), this.seekTo(n.start(0) + 1 / 30), this.tech_.trigger({ type: "usage", name: "hls-gap-skip" }))
        }
    }, { key: "gapFromVideoUnderflow_", value: function (e, t) { for (var i = function (e) { if (e.length < 2) return rs.createTimeRanges(); for (var t = [], i = 1; i < e.length; i++) { var n = e.end(i - 1), r = e.start(i); t.push([n, r]) } return rs.createTimeRanges(t) }(e), n = 0; n < i.length; n++) { var r = i.start(n), s = i.end(n); if (t - r < 4 && 2 < t - r) return { start: r, end: s } } return null } }]), Ql); function Ql(e) {
        var t =
            this; Po(this, Ql), this.tech_ = e.tech, this.seekable = e.seekable, this.seekTo = e.seekTo, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, this.media = e.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = ul("PlaybackWatcher"), this.logger_("initialize"); function i() { return t.monitorCurrentTime_() } function n() { return t.techWaiting_() } function r() { return t.cancelTimer_() } function s() { return t.fixesBadSeeks_() } this.tech_.on("seekablechanged",
                s), this.tech_.on("waiting", n), this.tech_.on(Yl, r), this.tech_.on("canplay", i), this.dispose = function () { t.logger_("dispose"), t.tech_.off("seekablechanged", s), t.tech_.off("waiting", n), t.tech_.off(Yl, r), t.tech_.off("canplay", i), t.checkCurrentTimeTimeout_ && y.clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_() }
    } function Jl(e) {
        !function t(i, e) {
            var n = 0, r = 0, s = rs.mergeOptions(Zl, e); i.ready(function () { i.trigger({ type: "usage", name: "hls-error-reload-initialized" }) }); function a() { r && i.currentTime(r) } function o(e) {
                null !=
                e && (r = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", a), i.src(e), i.trigger({ type: "usage", name: "hls-error-reload" }), i.play())
            } function u() { if (Date.now() - n < 1E3 * s.errorInterval) i.trigger({ type: "usage", name: "hls-error-reload-canceled" }); else { if (s.getSource && "function" == typeof s.getSource) return n = Date.now(), s.getSource.call(i, o); rs.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!") } } function l() {
                i.off("loadedmetadata", a), i.off("error", u), i.off("dispose",
                    l)
            } i.on("error", u), i.on("dispose", l), i.reloadSourceOnError = function (e) { l(), t(i, e) }
        }(this, e)
    } var Zl = { errorInterval: 30, getSource: function (e) { return e(this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_) } }; rs.use("*", function (t) { return { setSource: function (e, t) { t(null, e) }, setCurrentTime: function (e) { return t.vhs && t.currentSource().src === t.vhs.source_.src && t.vhs.setCurrentTime(e), e }, play: function () { t.vhs && t.currentSource().src === t.vhs.source_.src && t.vhs.setCurrentTime(t.tech_.currentTime()) } } }); var ec =
    {
        PlaylistLoader: Ho, Playlist: Su, Decrypter: Co, AsyncStream: bo, decrypt: ko, utils: Eu, STANDARD_PLAYLIST_SELECTOR: function () {
            return function (e, t, i, n, r) {
                var s = e.playlists.map(function (e) { var t, i; return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width, i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height, { bandwidth: e.attributes.BANDWIDTH || y.Number.MAX_VALUE, width: t, height: i, playlist: e } }); yl(s, function (e, t) { return e.bandwidth - t.bandwidth }); var a = (s = s.filter(function (e) { return !Su.isIncompatible(e.playlist) })).filter(function (e) { return Su.isEnabled(e.playlist) });
                a.length || (a = s.filter(function (e) { return !Su.isDisabled(e.playlist) })); var o = a.filter(function (e) { return e.bandwidth * Tl.BANDWIDTH_VARIANCE < t }), u = o[o.length - 1], l = o.filter(function (e) { return e.bandwidth === u.bandwidth })[0]; if (!1 === r) { var c = l || a[0] || s[0]; return c ? c.playlist : null } var h = o.filter(function (e) { return e.width && e.height }); yl(h, function (e, t) { return e.width - t.width }); var d = h.filter(function (e) { return e.width === i && e.height === n }); u = d[d.length - 1]; var p = d.filter(function (e) { return e.bandwidth === u.bandwidth })[0],
                    f = void 0, m = void 0, g = void 0; p || (m = (f = h.filter(function (e) { return e.width > i || e.height > n })).filter(function (e) { return e.width === f[0].width && e.height === f[0].height }), u = m[m.length - 1], g = m.filter(function (e) { return e.bandwidth === u.bandwidth })[0]); var v = g || p || l || a[0] || s[0]; return v ? v.playlist : null
            }(this.playlists.master, this.systemBandwidth, parseInt(vl(this.tech_.el(), "width"), 10), parseInt(vl(this.tech_.el(), "height"), 10), this.limitRenditionByPlayerDimensions)
        }, INITIAL_PLAYLIST_SELECTOR: function () {
            var e =
                this.playlists.master.playlists.filter(Su.isEnabled); return yl(e, function (e, t) { return _l(e, t) }), e.filter(function (e) { return Bu(e.attributes.CODECS).videoCodec })[0] || null
        }, comparePlaylistBandwidth: _l, comparePlaylistResolution: function (e, t) {
            var i = void 0, n = void 0; return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || y.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width), i === (n = n || y.Number.MAX_VALUE) &&
                e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - n
        }, xhr: tu()
    };["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function (t) {
        Object.defineProperty(ec, t, {
            get: function () { return rs.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), Tl[t] }, set: function (e) {
                rs.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"),
                "number" != typeof e || e < 0 ? rs.log.warn("value of Hls." + t + " must be greater than or equal to 0") : Tl[t] = e
            }
        })
    }); function tc(e) { return /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e) ? "hls" : /^application\/dash\+xml/i.test(e) ? "dash" : null } function ic(e, t) { for (var i = t.media(), n = -1, r = 0; r < e.length; r++)if (e[r].id === i.uri) { n = r; break } e.selectedIndex_ = n, e.trigger({ selectedIndex: n, type: "change" }) } var nc = "videojs-vhs"; ec.canPlaySource = function () { return rs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.") };
    function rc(e) {
        var t = e.masterPlaylistController_.mainSegmentLoader_, i = e.masterPlaylistController_.audioSegmentLoader_, n = rs.players[e.tech_.options_.playerId]; if (n.eme) {
            var r = function (e, t, i) {
                if (!e) return e; var n = void 0, r = void 0; if (i.mimeType_) n = t.mimeType_, r = i.mimeType_; else { var s = Hu(t.mimeType_), a = s.parameters.codecs.split(","), o = void 0, u = void 0; a.forEach(function (e) { e = e.trim(), Vu(e) ? o = e : qu(e) && (u = e) }), n = s.type + '; codecs\x3d"' + u + '"', r = s.type.replace("video", "audio") + '; codecs\x3d"' + o + '"' } var l = {},
                    c = t.playlist_; for (var h in e) l[h] = { audioContentType: r, videoContentType: n }, c.contentProtection && c.contentProtection[h] && c.contentProtection[h].pssh && (l[h].pssh = c.contentProtection[h].pssh), "string" == typeof e[h] && (l[h].url = e[h]); return rs.mergeOptions(e, l)
            }(e.source_.keySystems, t, i); r && (n.currentSource().keySystems = r, 11 !== rs.browser.IE_VERSION && n.eme.initializeMediaKeys && n.eme.initializeMediaKeys())
        }
    } function sc() {
        if (!window.localStorage) return null; var e = window.localStorage.getItem(nc); if (!e) return null;
        try { return JSON.parse(e) } catch (e) { return null }
    } ec.supportsNativeHls = function () { var t = h.createElement("video"); if (!rs.getTech("Html5").isSupported()) return !1; return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (e) { return /maybe|probably/i.test(t.canPlayType(e)) }) }(), ec.supportsNativeDash = !!rs.getTech("Html5").isSupported() && /maybe|probably/i.test(h.createElement("video").canPlayType("application/dash+xml")),
        ec.supportsTypeNatively = function (e) { return "hls" === e ? ec.supportsNativeHls : "dash" === e && ec.supportsNativeDash }, ec.isSupported = function () { return rs.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.") }; var ac = rs.getComponent("Component"), oc = (xo(uc, ac), Ao(uc, [{
            key: "setOptions_", value: function () {
                var t = this; if (this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.handleManifestRedirects = this.options_.handleManifestRedirects || !1, this.options_.limitRenditionByPlayerDimensions =
                    !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1, this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys ||
                    !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) { var e = sc(); e && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({ type: "usage", name: "hls-bandwidth-from-local-storage" })), e && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({ type: "usage", name: "hls-throughput-from-local-storage" })) } "number" != typeof this.options_.bandwidth && (this.options_.bandwidth =
                        Tl.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Tl.INITIAL_BANDWIDTH, ["withCredentials", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys"].forEach(function (e) { "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e]) }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions
            }
        }, {
            key: "src",
            value: function (e, t) {
                var i = this; e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = ec, this.options_.sourceType = tc(t), this.options_.seekTo = function (e) { i.tech_.setCurrentTime(e), i.setCurrentTime(e) }, this.masterPlaylistController_ = new Gl(this.options_), this.playbackWatcher_ = new $l(rs.mergeOptions(this.options_, { seekable: function () { return i.seekable() }, media: function () { return i.masterPlaylistController_.media() } })), this.masterPlaylistController_.on("error",
                    function () { rs.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error) }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : ec.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = ec.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get: function () { return this.masterPlaylistController_.selectPlaylist },
                            set: function (e) { this.masterPlaylistController_.selectPlaylist = e.bind(this) }
                        }, throughput: { get: function () { return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate }, set: function (e) { this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1 } }, bandwidth: {
                            get: function () { return this.masterPlaylistController_.mainSegmentLoader_.bandwidth }, set: function (e) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth =
                                e, this.masterPlaylistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 }
                            }
                        }, systemBandwidth: { get: function () { var e = 1 / (this.bandwidth || 1), t = void 0; return t = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (e + t)) }, set: function () { rs.log.error('The "systemBandwidth" property is read-only') } }
                    }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: function () {
                                return i.bandwidth ||
                                    0
                            }, enumerable: !0
                        }, mediaRequests: { get: function () { return i.masterPlaylistController_.mediaRequests_() || 0 }, enumerable: !0 }, mediaRequestsAborted: { get: function () { return i.masterPlaylistController_.mediaRequestsAborted_() || 0 }, enumerable: !0 }, mediaRequestsTimedout: { get: function () { return i.masterPlaylistController_.mediaRequestsTimedout_() || 0 }, enumerable: !0 }, mediaRequestsErrored: { get: function () { return i.masterPlaylistController_.mediaRequestsErrored_() || 0 }, enumerable: !0 }, mediaTransferDuration: {
                            get: function () {
                                return i.masterPlaylistController_.mediaTransferDuration_() ||
                                    0
                            }, enumerable: !0
                        }, mediaBytesTransferred: { get: function () { return i.masterPlaylistController_.mediaBytesTransferred_() || 0 }, enumerable: !0 }, mediaSecondsLoaded: { get: function () { return i.masterPlaylistController_.mediaSecondsLoaded_() || 0 }, enumerable: !0 }, buffered: { get: function () { return mu(i.tech_.buffered()) }, enumerable: !0 }, currentTime: { get: function () { return i.tech_.currentTime() }, enumerable: !0 }, currentSource: { get: function () { return i.tech_.currentSource_ }, enumerable: !0 }, currentTech: {
                            get: function () { return i.tech_.name_ },
                            enumerable: !0
                        }, duration: { get: function () { return i.tech_.duration() }, enumerable: !0 }, master: { get: function () { return i.playlists.master }, enumerable: !0 }, playerDimensions: { get: function () { return i.tech_.currentDimensions() }, enumerable: !0 }, seekable: { get: function () { return mu(i.tech_.seekable()) }, enumerable: !0 }, timestamp: { get: function () { return Date.now() }, enumerable: !0 }, videoPlaybackQuality: { get: function () { return i.tech_.getVideoPlaybackQuality() }, enumerable: !0 }
                    }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
                    this.tech_.on("bandwidthupdate", function () { i.options_.useBandwidthFromLocalStorage && function (e) { if (window.localStorage) { var t = sc(); t = t ? rs.mergeOptions(t, e) : e; try { window.localStorage.setItem(nc, JSON.stringify(t)) } catch (e) { return } } }({ bandwidth: i.bandwidth, throughput: Math.round(i.throughput) }) }), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                        !function (i) {
                            var e = i.playlists; i.representations = function () {
                                return e.master.playlists.filter(function (e) { return !Qo(e) }).map(function (e, t) {
                                    return new Xl(i,
                                        e, e.uri)
                                })
                            }
                        }(i), rc(i)
                    }), this.on(this.masterPlaylistController_, "progress", function () { this.tech_.trigger("progress") }), this.tech_.ready(function () { return i.setupQualityLevels_() }), this.tech_.el() && this.tech_.src(rs.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
            }
        }, {
            key: "setupQualityLevels_", value: function () {
                var e = this, t = rs.players[this.tech_.options_.playerId]; t && t.qualityLevels && (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function () {
                    !function (t,
                        e) { e.representations().forEach(function (e) { t.addQualityLevel(e) }), ic(t, e.playlists) }(e.qualityLevels_, e)
                }), this.playlists.on("mediachange", function () { ic(e.qualityLevels_, e.playlists) }))
            }
        }, { key: "play", value: function () { this.masterPlaylistController_.play() } }, { key: "setCurrentTime", value: function (e) { this.masterPlaylistController_.setCurrentTime(e) } }, { key: "duration", value: function () { return this.masterPlaylistController_.duration() } }, { key: "seekable", value: function () { return this.masterPlaylistController_.seekable() } },
        {
            key: "dispose", value: function () {
                this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls), this.tech_ && this.tech_.hls && delete this.tech_.hls, function e(t, i, n) {
                    null === t && (t = Function.prototype); var r = Object.getOwnPropertyDescriptor(t, i); if (void 0 === r) {
                        var s = Object.getPrototypeOf(t); return null ===
                            s ? void 0 : e(s, i, n)
                    } if ("value" in r) return r.value; var a = r.get; return void 0 !== a ? a.call(n) : void 0
                }(uc.prototype.__proto__ || Object.getPrototypeOf(uc.prototype), "dispose", this).call(this)
            }
        }, { key: "convertToProgramTime", value: function (e, t) { return lu({ playlist: this.masterPlaylistController_.media(), time: e, callback: t }) } }, {
            key: "seekToProgramTime", value: function (e, t, i, n) {
                var r = !(2 < arguments.length && void 0 !== i) || i, s = 3 < arguments.length && void 0 !== n ? n : 2; return cu({
                    programTime: e, playlist: this.masterPlaylistController_.media(),
                    retryCount: s, pauseAfterSeek: r, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: t
                })
            }
        }]), uc); function uc(e, t, i) {
            Po(this, uc); var n = Oo(this, (uc.__proto__ || Object.getPrototypeOf(uc)).call(this, t, i.hls)); if (t.options_ && t.options_.playerId) {
                var r = rs(t.options_.playerId); r.hasOwnProperty("hls") || Object.defineProperty(r, "hls", { get: function () { return rs.log.warn("player.hls is deprecated. Use player.tech().hls instead."), t.trigger({ type: "usage", name: "hls-player-access" }), n }, configurable: !0 }), r.vhs =
                    n, (r.dash = n).player_ = r
            } if (n.tech_ = t, n.source_ = e, n.stats = {}, n.setOptions_(), n.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0); else if (n.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB"); return n.on(h, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                function (e) { var t = h.fullscreenElement || h.webkitFullscreenElement || h.mozFullScreenElement || h.msFullscreenElement; t && t.contains(n.tech_.el()) && n.masterPlaylistController_.smoothQualityChange_() }), n.on(n.tech_, "seeking", function () { 0 === this.tech_.currentTime() && this.tech_.player_.loop() && this.setCurrentTime(0) }), n.on(n.tech_, "error", function () { this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading() }), n.on(n.tech_, "play", n.play), n
        } var lc = {
            name: "videojs-http-streaming", VERSION: "1.11.2",
            canHandleSource: function (e, t) { var i = rs.mergeOptions(rs.options, 1 < arguments.length && void 0 !== t ? t : {}); return lc.canPlayType(e.type, i) }, handleSource: function (e, t, i) { var n = rs.mergeOptions(rs.options, 2 < arguments.length && void 0 !== i ? i : {}); return t.hls = new oc(e, t, n), t.hls.xhr = tu(), t.hls.src(e.src, e.type), t.hls }, canPlayType: function (e, t) { var i = rs.mergeOptions(rs.options, 1 < arguments.length && void 0 !== t ? t : {}).hls.overrideNative, n = tc(e); return n && (!ec.supportsTypeNatively(n) || i) ? "maybe" : "" }
        }; return "undefined" !=
            typeof rs.MediaSource && "undefined" != typeof rs.URL || (rs.MediaSource = Zu, rs.URL = el), Zu.supportsNativeMediaSources() && rs.getTech("Html5").registerSourceHandler(lc, 0), rs.HlsHandler = oc, rs.HlsSourceHandler = lc, rs.Hls = ec, rs.use || rs.registerComponent("Hls", ec), rs.options.hls = rs.options.hls || {}, rs.registerPlugin ? rs.registerPlugin("reloadSourceOnError", Jl) : rs.plugin("reloadSourceOnError", Jl), rs
});;
