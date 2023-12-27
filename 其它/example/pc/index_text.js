(function (l) {
    l("#skuStateRemarkWin .sure").off("click").on("click", function () {
        n()
    });
    l("#skuStateRemarkWin .cancel").off("click").on("click", function () {
        z()
    });
    l("#skuStateRemarkWin .closeicon").off("click").on("click", function () {
        z()
    });
    l("#skuStateSelect").off("change").on("change", function () {
        A(".defaultSkuOneshow")
    });
    l(".OneskuBarCode .skuStateRemark").off("click").on("click", function () {
        c("#skuStateSelect")
    });
    var y = {};
    y.hebingFunction = function () {
        l.fn.mergeCell = function (J) {
            return this.each(function () {
                var L = J.cols;
                for (var K = 0;
                    K < L.length;
                    K++) {
                        H(l(this), L[K])
                } I(l(this))
            })
        };
        function H(K, J) {
            K.data("col-content", "");
            K.data("col-rowspan", 1);
            K.data("col-td", l());
            K.data("trNum", l("tbody tr", K).length);
            l("tbody tr", K).each(function (L) {
                var O = l("td:eq(" + J + ")", this);
                var M = O.html();
                if (K.data("col-content") === "") {
                    K.data("col-content", M);
                    K.data("col-td", O)
                } else {
                    if (K.data("col-content") === M && (J === 0 || (J > 0 && O.prev().attr("hide")))) {
                        var N = K.data("col-rowspan") + 1;
                        K.data("col-rowspan", N);
                        O.hide();
                        O.attr("hide", true);
                        if (++L == K.data("trNum")) {
                            K.data("col-td").attr("rowspan", K.data("col-rowspan"))
                        }
                    } else {
                        if (K.data("col-rowspan") != 1) {
                            K.data("col-td").attr("rowspan", K.data("col-rowspan"))
                        } K.data("col-td", O);
                        K.data("col-content", O.html());
                        K.data("col-rowspan", 1)
                    }
                }
            })
        } function I(J) {
            J.removeData()
        }
    };
    y.doExchange = function (O) {
        var N = O.length;
        if (N >= 2) {
            var Q = O[0];
            var P = O[1];
            var J = O[0].length;
            var H = O[1].length;
            var L = J * H;
            var T = new Array(L);
            var M = 0;
            for (var K = 0;
                K < J;
                K++) {
                    for (var I = 0;
                        I < H;
                        I++) {
                            if (!T[M]) {
                                T[M] = []
                            } if (Array.isArray(Q[K])) {
                                l.each(Q[K], function (U, V) {
                                    T[M].push(V)
                                })
                            } else {
                                T[M].push(Q[K])
                        } if (Array.isArray(P[I])) {
                            l.each(P[I], function (U, V) {
                                T[M].push(V)
                            })
                        } else {
                            T[M].push(P[I])
                        } M++
                    }
            } var S = new Array(N - 1);
            S[0] = T;
            if (N > 2) {
                var R = 1;
                for (var K = 2;
                    K < N;
                    K++) {
                        S[R] = O[K];
                    R++
                }
            } return y.doExchange(S)
        } else {
            return O[0]
        }
    };
    y.selectText = function (I) {
        var K = document.getElementById(I);
        if (window.getSelection) {
            var J = window.getSelection();
            var H = document.createRange();
            H.selectNodeContents(K);
            J.removeAllRanges();
            J.addRange(H)
        }
    };
    y.disableEnterKey = function (I, H) {
        if (H) {
            l(I).unbind("focus").focus(function () {
                l(this).parents("tr:not(.tr-sku)").addClass("currentEdit");
                l(".wrong.sku-repeat-wrong").remove();
                if (l(this).hasClass("error")) {
                    l(this).text(l(this).attr("orgValue"));
                    y.skyOptionChange();
                    y.skukeyChange()
                } else {
                    l(this).attr("orgValue", l(this).text());
                    var J = "currentEditText";
                    l(this).attr("id", J);
                    y.selectText(J)
                } l(window).unbind("keydown").keydown(function (K) {
                    if (K.keyCode == "13") {
                        return false
                    }
                })
            });
            l(I).unbind("focusout").bind("focusout", function () {
                l(window).unbind("keydown");
                var L = l(this).parent();
                l(this).html(l.trim(l(this).text()));
                if (l(this).text() == "") {
                    l(this).text(l(this).attr("orgValue"));
                    l(this).removeAttr("orgValue");
                    l(this).removeClass("error");
                    l(this).removeAttr("id");
                    return
                } prodSkuTableEditCheck(l(this));
                if (l(".prod-SKU-edit-table tbody em.error").length) {
                    l(this).parents("tr:not(.tr-sku)").removeClass("currentEdit");
                    return
                } if (l(this).attr("orgValue") != l.trim(l(this).text())) {
                    if (L.attr("skuid")) {
                        l(this).parent("td").attr("image", "");
                        l(this).parent("td").attr("imgUrl", "");
                        y.skyOptionChange();
                        y.skukeyChange();
                        userInputSkuKeySingleCheck(l(this));
                        if (l(".prod-SKU-edit-table tbody em.error").length) {
                            l(this).parents("tr:not(.tr-sku)").removeClass("currentEdit");
                            return
                        }
                    } else {
                        var J = l(this).parents("tr[valueid]").find("#skuValue");
                        var K = JSON.parse(J.val());
                        var M = L.attr("class");
                        K[M] = l(this).text();
                        J.val(JSON.stringify(K))
                    }
                } else {
                    l(this).parents("tr:not(.tr-sku)").removeClass("currentEdit");
                    l(this).removeAttr("orgValue");
                    l(this).removeAttr("id");
                    return
                } if (l("#prodTradeEnabled").val() == "1" && l(".tabCom .currentEdit td.comparePrice").find("em").text() != "0" && l(".tabCom .currentEdit td.price").find("em").text() == "0") {
                    l(".tabCom .currentEdit td.price").find("em").text(l(".tabCom .currentEdit td.comparePrice").find("em").text())
                } l(this).parents("tr:not(.tr-sku)").removeClass("currentEdit");
                l(this).removeAttr("orgValue");
                l(this).removeAttr("id")
            })
        } else {
            l(window).unbind("keydown")
        }
    };
    y.skyOptionInitail = function () {
        var H = l(".prod-SKU-edit-table thead tr");
        var I = l(".prod-SKU-edit-table tbody tr");
        if (I.length && H.find("td[skuid]").length) {
            H.find("td[skuid]").each(function () {
                var J = l(this).attr("skuid");
                var K = JSON.parse(l(this).attr("skuOption"));
                I.find("td[skuid=" + J + "]").each(function (L) {
                    for (var M = 0;
                        M < K.length;
                        M++) {
                            if (K[M].trans_name == l.trim(l(this).text())) {
                                if (K[M].image) {
                                    l(this).attr("image", JSON.stringify(K[M].image))
                                } else {
                                    l(this).attr("image", "")
                                } if (K[M].imgUrl) {
                                    l(this).attr("imgUrl", JSON.stringify(K[M].imgUrl))
                                } else {
                                    l(this).attr("imgUrl", "")
                                }
                            }
                    }
                })
            })
        }
    };
    y.skyOptionChange = function () {
        l(".prod-SKU-edit-table thead tr").find("td[skuid]").each(function () {
            var I = l(this).attr("skuid");
            var J = [];
            l(".prod-SKU-edit-table tbody td[skuid=" + I + "]").each(function () {
                var K = {};
                var L = {};
                K.trans_name = l.trim(l(this).text());
                if (l(this).attr("image")) {
                    K.image = JSON.parse(l(this).attr("image"))
                } else {
                    K.image = ""
                } if (l(this).attr("imgUrl")) {
                    K.imgUrl = JSON.parse(l(this).attr("imgUrl"))
                } J.push(K)
            });
            J = J.uniqueArryObj();
            for (var H = 0;
                H < J.length;
                H++) {
                    J[H].order = (H + "")
            } l(this).attr("skuOption", JSON.stringify(J))
        })
    };
    y.skukeyChange = function () {
        l(".prod-SKU-edit-table tbody tr").each(function () {
            var I = l(this).find("td[skuid]");
            var H = "";
            I.each(function (K) {
                var O = l(this);
                var L = O.attr("skuid");
                var M = [];
                M = JSON.parse(l(".prod-SKU-edit-table thead td[skuid=" + L + "]").attr("skuOption"));
                var N;
                for (var J = 0;
                    J < M.length;
                    J++) {
                        if (l.trim(O.text()) == M[J].trans_name) {
                            N = J;
                            break
                        }
                } if (K == 0) {
                    H += L + "_" + N
                } else {
                    H += "~!!~" + L + "_" + N
                }
            });
            l(this).find("#skuKey").val(H)
        })
    };
    y.creatSkuTableData = function (I, N, H) {
        var P = l("#prodTradeEnabled").val();
        var J = "";
        var K = "";
        var L = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASBAMAAACzwgOtAAAAFVBMVEW9vb3////T09PBwcHt7e3GxsbKysrbEIEFAAAAWklEQVQI12NwZoADEwYDBIeZgUEQDhjwckSMHREcYQZDNI6QIlSZKVCZAhPCACEGBkU4R4GBgQnCUQJJAKWAGMhSVABxGIEYqISNAcYBKYFwUJ2D4gVkz4UAAPdaCf2DT65rAAAAAElFTkSuQmCC";
        if (H.length) {
            for (var O = 0;
                O < H.length;
                O++) {
                    K += ("<td skuid=" + H[O].skuid + ' image="" imgUrl=""><em contenteditable="true">' + H[O].value + "</em></td>")
            }
        } if (P == "0" || P == undefined || P == "" || l("#funcPayFlag").val() == "no") {
            J += '<tr valueId="">';
            J += ("<td></td>");
            J += K;
            J += ('<td class="hide comparePrice" type="shop-model" >' + l("#currencySymbol").val() + '<em contenteditable="true">' + N.comparePrice + '</em><span class="defaultUnit"></span></td>');
            J += ('<td class="hide price" type="shop-model">' + l("#currencySymbol").val() + '<em contenteditable="true" class="price">' + N.price + '</em><span class="defaultUnit"></span></td>');
            J += ('<td class="stock"><em contenteditable="true">' + N.stock + "</em></td>");
            J += ('<td  class="barcode hide"><em contenteditable="true">' + N.barcode + "</em></td>");
            J += ('<td class="related-image" align="center"><a href="javascript:;" class="prod-SKU-chooseimg" action="prod_new_uploadSku_img"><img src="' + L + '"></a></td>');
            J += ('<td align="center"><div class="SKU-editbutton-wrapper"><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Edit"><i class="fa fa-pencil"></i> ' + p_i18n.ov("common.edit") + '</a><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Copy"><i class="fa fa-copy"></i> ' + p_i18n.ov("common.copy") + '</a><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Delete"><i class="fa fa-trash"></i> ' + p_i18n.ov("common.del") + "</a></div></td>");
            J += "</tr>"
        } else {
            if (P == "1") {
                J += '<tr valueId="">';
                J += ("<td></td>");
                J += K;
                J += ('<td type="shop-model" class="comparePrice">' + l("#currencySymbol").val() + '<em contenteditable="true">' + N.comparePrice + '</em><span class="defaultUnit"></span></td>');
                J += ('<td type="shop-model" class="price">' + l("#currencySymbol").val() + '<em contenteditable="true" class="price">' + N.price + '</em><span class="defaultUnit"></span></td>');
                J += ('<td class="stock"><em contenteditable="true">' + N.stock + "</em></td>");
                J += ('<td class="hide barcode" ><em contenteditable="true">' + N.barcode + "</em></td>");
                J += ('<td class="related-image" align="center"><a href="javascript:;" class="prod-SKU-chooseimg" action="prod_new_uploadSku_img"><img src="' + L + '"></a></td>');
                J += ('<td align="center"><div class="SKU-editbutton-wrapper"><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Edit"><i class="fa fa-pencil"></i> ' + p_i18n.ov("common.edit") + '</a><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Copy"><i class="fa fa-copy"></i> ' + p_i18n.ov("common.copy") + '</a><a href="javascript:;" class="SKU-edit-button" action="prod_new_singleSku_Delete"><i class="fa fa-trash"></i> ' + p_i18n.ov("common.del") + "</a></div></td>");
                J += "</tr>"
            }
        } l(I).append(J);
        if (H.length) {
            l(".prod-SKU-edit-table .related-image").show()
        } else {
            l(".prod-SKU-edit-table .related-image").hide()
        } SKUEditTableData();
        y.disableEnterKey(".prod-SKU-edit-table td em[contenteditable]", true);
        y.skyOptionChange();
        var M = l('<input type="hidden" id="skuKey" value="">');
        var Q = l('<input type="hidden" id="skuValue" value=' + JSON.stringify(N) + ">");
        l(I).find("tr:last").append(M).append(Q);
        y.skukeyChange()
    };
    skuAddFilterItem();
    y.skujSearch = function (I, H) {
        l(I).jSearch({
            selector: ".SKU-filter-list", child: ".SKU-filter-item", minValLength: 0, Found: function (K, J) {
                l(K).show()
            }, NotFound: function (K, J) {
                l(K).hide()
            }, After: function (J) {
                if (!J.val().length) {
                    l(H).show()
                }
            }
        })
    };
    l(function () {
        SKUEditTableData();
        skuManagementBtnDisabled();
        y.skyOptionInitail();
        l(".prod-SKU-edit .prod-SKU-edit-price a").unbind("click").click(function () {
            if (l(this).attr("type") == "shop") {
                l(this).find("span").text(p_i18n.ov("skuEdit.prod_trade_enabled"));
                l(this).attr("type", "inquiry");
                l(this).find(".fa").removeClass("fa-toggle-on").addClass("fa-toggle-off");
                l("#prodTradeEnabled").val("0");
                l(".prod-SKU-edit-table td[type=shop-model]").addClass("hide");
                l(".prod-SKU-edit-table td[type=inquiry-model]").removeClass("hide")
            } else {
                if (l(this).attr("type") == "inquiry") {
                    l(this).find("span").text(p_i18n.ov("skuEdit.prod_trade_disabled"));
                    l(this).attr("type", "shop");
                    l(this).find(".fa").removeClass("fa-toggle-off").addClass("fa-toggle-on");
                    l("#prodTradeEnabled").val("1");
                    l(".prod-SKU-edit-table td[type=shop-model]").removeClass("hide");
                    l(".prod-SKU-edit-table td[type=inquiry-model]").addClass("hide")
                }
            }
        });
        y.disableEnterKey(".prod-SKU-edit-table td em[contenteditable]", true);
        l(".SKU-editbtns-add").unbind("click").click(function () {
            if (l(this).parent().hasClass("no-skus")) {
                l(this).next("span").css("color", "#a00").fadeIn();
                setTimeout(function () {
                    l(".prod-SKU-editbtns .no-skus span").fadeOut().removeAttr("style")
                }, 1600);
                return
            } creatSkuInputItemPop();
            skuAddFilterItem();
            l("#popupLayer_pop4skuedit input").val("");
            l("#popupLayer_pop4skuedit .pop2 h2 p").text(p_i18n.ov("skuEdit.prod_addNew_sku"));
            shopModelCheck();
            l("#popupLayer_pop4skuedit,#popupLayerScreenlayer").addClass("singleSkuAdd").fadeIn(200)
        });
        l("#popupLayer_pop4skuedit .cancel,#popupLayer_pop4skuedit .pocClo").click(function () {
            l(".SKU-management-wapper .SKU-filter-addone").hide();
            l(".prod-SKU-edit-table tbody tr").removeAttr("class");
            l("#popupLayer_pop4skuedit .skukey-error").remove();
            l("#popupLayer_pop4skuedit .con input[type='text']").removeClass("error");
            l("#popupLayer_pop4skuedit,#popupLayerScreenlayer").removeAttr("class").fadeOut(200)
        });
        l("#popupLayer_pop4skuedit #popWinProdSkuConfirm").unbind("click").click(function () {
            if (!l(".SKU-management-added>div").length && l(".prod-SKU-edit-table tbody tr").length >= 1) {
                if (l(this).parents("#popupLayer_pop4skuedit").hasClass("singleSkuCopy")) {
                    l("#popupLayer_pop4skuedit .SKU-management-wapper .SKU-management-tips").css("color", "#fb3d3d").show();
                    setTimeout(function () {
                        l(".SKU-management-wapper .SKU-management-tips").removeAttr("style")
                    }, 3000);
                    return
                }
            } userPopInputCheck();
            if (l("#popupLayer_pop4skuedit #popWin input.error").length) {
                return
            } var J = l("#popupLayer_pop4skuedit .con");
            var H = {};
            J.find("input[name]").each(function () {
                if (l(this).attr("type") == "checkbox") {
                    l(this).is(":checked") ? H[l(this).attr("name")] = "true" : H[l(this).attr("name")] = "false"
                } else {
                    if (l(this).attr("name") == "relationImage") {
                        if (l(this).val() != "") {
                            H[l(this).attr("name")] = l(this).val()
                        } else {
                            H[l(this).attr("name")] = ""
                        }
                    } else {
                        if (l(this).attr("name") == "comparePrice" || l(this).attr("name") == "price") {
                            if (l(this).val() != "") {
                                H[l(this).attr("name")] = l(this).val()
                            } else {
                                H[l(this).attr("name")] = "0"
                            }
                        } else {
                            H[l(this).attr("name")] = l(this).val()
                        }
                    }
                }
            });
            var K = [];
            J.find("input[skuid]").each(function () {
                var L = {};
                L.skuid = l(this).attr("skuid");
                L.value = l(this).val();
                K.push(L)
            });
            userPopSkuKeySingleCheck(K);
            if (l("#popupLayer_pop4skuedit .skukey-error").length && l(".prod-SKU-edit-table tbody tr").length) {
                return
            } var I = l(this).parents("#popupLayer_pop4skuedit");
            if (I.hasClass("singleSkuAdd") || I.hasClass("singleSkuCopy")) {
                y.creatSkuTableData(".prod-SKU-edit-table tbody", H, K)
            } else {
                if (I.hasClass("singleSkuEdit")) {
                    l(".prod-SKU-edit-table tbody .current td").each(function () {
                        var M = l(this).attr("class");
                        if (M != undefined && M != "") {
                            M = l.trim(M.replace("hide", ""));
                            l(this).find(">em").text(H[M])
                        } var N = l(this).attr("skuid");
                        if (K.length && N != undefined && N != "") {
                            for (var L = 0;
                                L < K.length;
                                L++) {
                                    l(".current td[skuid=" + K[L].skuid + "] em").text(K[L].value)
                            }
                        }
                    });
                    l(".prod-SKU-edit-table tbody .current").find("#skuValue").val(JSON.stringify(H));
                    y.skyOptionChange();
                    y.skukeyChange()
                }
            } l(".prod-SKU-edit-table tbody tr").removeAttr("class");
            l("#popupLayer_pop4skuedit,#popupLayerScreenlayer").removeAttr("class").fadeOut(200);
            setTimeout(function () {
                l('input[name="productShop.unitType"]').trigger("focus").trigger("blur")
            }, 200)
        });
        l(".SKU-management-wapper").hover(function () {
            l(this).addClass("management-wapper-hover")
        }, function () {
            l(this).removeClass("management-wapper-hover")
        });
        l("body").click(function () {
            if (!l(".management-wapper-hover").length) {
                l(".SKU-filter-addone").fadeOut(160)
            }
        });
        l(".SKU-management-wapper .SKU-management-btn").unbind("click").click(function () {
            l(this).parent().find(".SKU-filter-addone").fadeToggle(160)
        });
        l(".SKU-filter-addone .SKUaddone-close-button").unbind("click").click(function () {
            l(this).parent().fadeToggle(160);
            l(".SKU-management-wapper .SKU-filter-addone").hide()
        });
        y.skujSearch(".prod-SKU-edit-table .SKU-filter-input", ".prod-SKU-edit-table .SKU-filter-list .SKU-filter-item");
        y.skujSearch(".pop-SKU-management .SKU-filter-input", ".pop-SKU-management .SKU-filter-list .SKU-filter-item")
    });
    var e = false;
    var w = [], u = [], s = [];
    var b = [], f = [[], [], []];
    var q = "", k = true;
    var G;
    var g = false;
    var m = 0;
    function h(I, H) {
        var J;
        return function () {
            var L = this;
            var K = arguments;
            clearTimeout(J);
            J = setTimeout(function () {
                I.apply(L, K)
            }, H)
        }
    } function C() {
        var S = 0;
        l(".SKU-filter-addoneNew .skuFilter").each(function (ap, aq) {
            if (l(this).css("display") == "block") {
                S++;
                return
            }
        });
        console.timeEnd("blockNumR");
        if (S > 0) {
            l(".skuSortList").css("display", "flex")
        } y.hebingFunction();
        G = [];
        var J = [];
        l(".skuFilter").each(function (aq) {
            var ap = [];
            l(this).find(".skuValueList .skuOpName input").each(function (ar) {
                var at = l(this).val();
                if (at) {
                    ap.push(at)
                }
            });
            if (ap.length > 0) {
                G.push(ap);
                J.push(l(this).find(".SKU-filter-input").val());
                t(aq)
            }
        });
        var K = l(".skuSortList .prod-SKU-edit-tableNew .th_price_code");
        K.prevAll().remove();
        l(".skuSortList .prod-SKU-edit-tableNew tbody").remove();
        var ak = l(".prod-SKU-edit-tableNew");
        l.each(J, function (aq) {
            var ap = document.createElement("th");
            ap.setAttribute("class", "thsku th" + (aq + 1));
            ap.setAttribute("skuoption", s[aq]);
            ap.setAttribute("skuid", u[aq]);
            ap.innerText = J[aq];
            K.before(ap)
        });
        var L = l("<tbody></tbody>");
        L.appendTo(ak);
        var P = y.doExchange(G);
        if (P.length > 0) {
            var Z = p_i18n.ov("prod.enterNumber"), an = p_i18n.ov("prod.enterOriginalPrice"), ad = p_i18n.ov("prod.discountSmallOriginal"), aa = p_i18n.ov("prod.unlimited"), U = p_i18n.ov("prod.enterInteger"), T = p_i18n.ov("prod.enterWeight"), ai = p_i18n.ov("common.selectImg");
            var M = "";
            console.time("combineData优化");
            for (var aj = 0;
                aj < P.length;
                aj++) {
                    var am = P[aj];
                M += "<tr>";
                if (typeof (am) == "string") {
                    M += "<td>" + am + "</td>"
                } else {
                    l.each(am, function (aq, ap) {
                        M += "<td>" + ap + "</td>"
                    })
                } var V = l("#all_skuStateSelect option"), Y = [];
                V.each(function () {
                    var ap = { encodePkId: l(this).attr("data-id"), stateLabel: l(this).val(), stateType: l(this).attr("data-stateType"), stateDesc: l(this).attr("data-remark") };
                    Y.push(ap)
                });
                var R = "";
                Y.forEach(function (ap) {
                    R += "<option value='" + ap.stateLabel + "' data-id='" + ap.encodePkId + "' data-remark='" + ap.stateDesc + "' data-stateType='" + ap.stateType + "'>" + ap.stateLabel + "</option>"
                });
                var ae = "<span class='skuStateRemark hide' style='top:10px;right: 23px;left: unset;background-color: #fff;line-height: 24px'>" + p_i18n.ov("common.remark") + "</span>";
                var al = "<select id='skuStateSelect" + aj + "' class='skuStateSelect' style='margin-left: 0;width: 100%'>" + R + "</select>";
                var ah;
                if (l("#prodTradeEnabled").val() == 1 && (l(".skuFunc_payAndB2c").length > 0)) {
                    ah = "<td class=' td_price_code'><div><input type='text' value='' maxlength='40' onkeyup=\"value=value.replace(/[^\\w\\-]/ig,'')\"/><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_price_barcode'><div><input type='text' value='' maxlength='13'/><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_price shopCloseSku'><div><input type='text' value=''/><span class='skuNotNull'>*" + an + "</span><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_priceSS shopCloseSku'><div><input type='text' value=''/><span class='skuNotNum'>*" + Z + "</span><span class='skuNotMorePrice'>*" + ad + "</span></div></td><td class='td_num'><div><input type='text' value='' placeholder='" + aa + "'/><span class='skuNotNum'>*" + U + "</span></div></td><td class='td_weight'><div style='display:flex;'><input class='td_skuWeightNumber' type='text' value='' placeholder='" + T + "'><select class='skuWeightSelect td_skuWeightSelect'>    <option value='kg'>kg</option>    <option value='g'>g</option>    <option value='oz'>oz</option>    <option value='lb'>lb</option>  </select></div></td><td class='skuStateTd' id='skuStateTd" + aj + "' style='position: relative'>" + ae + al + "</td><td class='chooseImg'><div><i class='fa fa-plus'></i>" + ai + "</div></td>"
                } else {
                    ah = "<td class=' td_price_code'><div><input type='text' value='' maxlength='40' onkeyup=\"value=value.replace(/[^\\w\\-]/ig,'')\"/><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_price_barcode'><div><input type='text' value='' maxlength='13'/><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_price shopCloseSku hide'><div><input type='text' value=''/><span class='skuNotNull'>*" + an + "</span><span class='skuNotNum'>*" + Z + "</span></div></td><td class='td_priceSS shopCloseSku hide'><div><input type='text' value=''/><span class='skuNotNum'>*" + Z + "</span><span class='skuNotMorePrice'>*" + ad + "</span></div></td><td class='td_num'><div><input type='text' value='' placeholder='" + aa + "'/><span class='skuNotNum'>*" + U + "</span></div></td><td class='td_weight'><div style='display:flex;'><input class='td_skuWeightNumber' type='text' value='' placeholder='" + T + "'><select class='skuWeightSelect td_skuWeightSelect'>    <option value='kg'>kg</option>    <option value='g'>g</option>    <option value='oz'>oz</option>    <option value='lb'>lb</option>  </select></div></td><td class='skuStateTd' id='skuStateTd" + aj + "' style='position: relative'>" + ae + al + "</td><td class='chooseImg'><div><i class='fa fa-plus'></i>" + ai + "</div></td>"
                } M += ah;
                M += "</tr>"
            } L.append(M);
            console.timeEnd("combineData优化")
        } console.time("start-input");
        var W = l("input[name='productShop.packageWeight']").val();
        var N = l("input[name='productShop.packageWeight']+span").text();
        l(".skuValueHide ul").each(function (ar) {
            var av = l(this);
            var ap = G.length;
            var au = "";
            av.find("li:lt(" + ap + ")").each(function () {
                au += l(this).attr("value") + ","
            });
            au = au.slice(0, -1);
            for (var aq = 0;
                aq < P.length;
                aq++) {
                    if (P[aq] == au) {
                        var at = l(".skuSortList table tbody tr").eq(aq);
                        l(".td_price_code div input", at).val(av.find(".skuCode").attr("value"));
                        l(".td_price_barcode div input", at).val(av.find(".skuBarCode").attr("value"));
                        l(".td_price div input", at).val(av.find(".comparePrice").attr("value"));
                        l(".td_priceSS div input", at).val(av.find(".price").attr("value"));
                        l(".td_num div input", at).val(av.find(".stock").attr("value"));
                        l(".td_weight div input", at).val(av.find(".prod_weight").attr("value") || W);
                        l(".td_weight div .td_skuWeightSelect", at).val(av.find(".prod_weight_unit").attr("value") || N || "kg");
                        l(".skuStateTd select option", at).each(function (aw, ax) {
                            if (l(ax).attr("data-id") === av.find(".skuState").attr("data-skuStateId")) {
                                l(".skuStateTd select", at).val(l(ax).val());
                                if (l(ax).attr("data-stateType") === "0") {
                                    if (l(".skuStateTd select", at).prev().hasClass("hide")) {
                                        l(".skuStateTd select", at).prev().removeClass("hide");
                                        l(ax).attr("data-remark", av.find(".skuState").attr("data-stateRemark"))
                                    }
                                } else {
                                    if (!l(".skuStateTd select", at).prev().hasClass("hide")) {
                                        l(".skuStateTd select", at).prev().addClass("hide")
                                    }
                                }
                            }
                        });
                        if (av.find(".related-image").attr("value") !== "") {
                            l(".chooseImg div", at).html("<img style='height:40px;width: 55px' src=" + av.find(".related-image").attr("value") + "><p class='skuPic_del' onclick='pic_del(this)'>删除</p>")
                        } l(".chooseImg", at).after("<input type='hidden' class='skuKeyNow' value='" + av.find(".skuKeyDefault").attr("value") + "'><input type='hidden' class='skuValueNow' value='" + av.find(".skuValueDefault").attr("value") + "'>");
                        at.attr("valueid", av.attr("valueid"));
                        break
                    }
            }
        });
        console.timeEnd("start-input");
        p();
        var ao = l(".prod-SKU-edit-tableNew tbody tr");
        l(".td_num div input", ao).off("blur").on("blur", function () {
            console.time("input-blur");
            var ap = parseInt(l(this).val());
            if (!isNaN(ap) && ap > 2147483647) {
                l(this).val("")
            } var aq = l(this).parent().parent().parent().index();
            x();
            E(aq);
            F();
            console.timeEnd("input-blur")
        });
        l(".td_num div input", ao).off("focus").on("focus", function () {
            l(this).next().css("display", "none")
        });
        l(".td_priceSS div input", ao).off("blur").on("blur", function () {
            console.time("td_priceSS-blur");
            if (l(this).parents(".td_priceSS").prev(".td_price").find("div input").val() == "") {
                var ap = l(this).parent().parent().parent().index();
                x();
                E(ap);
                F()
            } else {
                if (l(this).val() == "") {
                    l(this).val(l(this).parents(".td_priceSS").prev(".td_price").find("div input").val());
                    var ap = l(this).parent().parent().parent().index();
                    x();
                    E(ap);
                    F()
                } else {
                    var ap = l(this).parent().parent().parent().index();
                    x();
                    E(ap);
                    F()
                }
            } console.timeEnd("td_priceSS-blur")
        });
        l(".td_priceSS div input", ao).off("focus").on("focus", function () {
            l(this).next().css("display", "none");
            l(this).next().next().css("display", "none")
        });
        l(".td_price div input", ao).off("blur").on("blur", function () {
            console.time("td_price-blur");
            var ap = l(this).parent().parent().parent().index();
            if (l(this).parents(".td_price").next(".td_priceSS").find("div input").val() == "") {
                l(this).parents(".td_price").next(".td_priceSS").find("div input").val(l(this).val())
            } x();
            E(ap);
            F();
            console.timeEnd("td_price-blur")
        });
        l(".td_price div input", ao).off("focus").on("focus", function () {
            l(this).next().css("display", "none");
            l(this).next().next().css("display", "none")
        });
        l(".td_price_code div input, .td_price_barcode div input", ao).off("blur").on("blur", function () {
            console.time("td_price_code-blur");
            var ap = l(this).parent().parent().parent().index();
            if (l(this).parents("td").hasClass("td_price_code")) {
                l(this).val((l(this).val()).slice(0, 100))
            } else {
                l(this).val((l(this).val()).slice(0, 13))
            } x();
            E(ap);
            F();
            console.timeEnd("td_price_code-blur")
        });
        l(".td_weight div input", ao).off("blur").on("blur", function () {
            var aq = l(this).val();
            if (aq == "") {
                return
            } var ap = (Number(aq)).toFixed(4);
            if (ap == "NaN") {
                l(this).val("")
            } else {
                l(this).val(ap.slice(0, -1))
            } if (l(this).val() !== "") {
                var ar = l(this).parent().parent().parent().index();
                x();
                E(ar);
                F();
                console.timeEnd("td_weight-blur")
            }
        });
        l(".td_weight div input", ao).off("change").on("change", function () {
            var ap = l(this).val();
            var aq = ap + "";
            var at = aq.replace(/\d+\.(\d*)/, "$1");
            var ar = at.substring(0, 3);
            if (!ar) {
                ar = "000"
            } ap = parseFloat(ap);
            if (ap > 999999999) {
                ap = 999999999 + parseInt(ar) * 0.001;
                l(this).val(ap)
            } if (!ap) {
                ap = 0
            } l(this).val(ap)
        });
        l(".td_weight div select").off("change").on("change", function () {
            var ap = l(this).parent().parent().parent().index();
            x();
            E(ap);
            F();
            console.timeEnd("td_weightUnit-blur")
        });
        l(".td_price_code div input, .td_price_barcode div input", ao).off("focus").on("focus", function () {
            l(this).next().css("display", "none");
            l(this).next().next().css("display", "none")
        });
        l(".skuStateRemark", ao).off("click").on("click", function () {
            c("#" + l(this).parent().find(".skuStateSelect").attr("id"))
        });
        l(".skuStateSelect", ao).off("change").on("change", function () {
            A("#" + l(this).parent().attr("id"))
        });
        l("#all_skuStateSelect").off("change").on("change", function () {
            A(".all_skuStateSelect_th")
        });
        l("#all_skuWeightSelect").off("change").on("change", function () {
            a(".th_weight")
        });
        l("#all_skuWeightNumber").off("change").on("change", function () {
            var ap = l(this).val();
            var aq = ap + "";
            var at = aq.replace(/\d+\.(\d*)/, "$1");
            var ar = at.substring(0, 3);
            if (!ar) {
                ar = "000"
            } ap = parseFloat(ap);
            if (ap > 999999999) {
                ap = 999999999 + parseInt(ar) * 0.001;
                l(this).val(ap)
            } if (!ap) {
                ap = 0
            } l(this).val(ap)
        });
        l("#all_skuWeightNumber").off("blur").on("blur", function () {
            var aq = l(this).val();
            if (aq == "") {
                return
            } var ap = (Number(aq)).toFixed(4);
            if (ap == "NaN") {
                l(this).val("")
            } else {
                l(this).val(ap.slice(0, -1))
            } v(".th_weight")
        });
        l(".all_skuStateSelect_th .skuStateRemark").off("click").on("click", function () {
            c("#all_skuStateSelect")
        });
        console.time("input表单优化");
        var Q = [];
        for (var aj = 0;
            aj < G.length;
            aj++) {
                var ao = l(".prod-SKU-edit-tableNew thead tr").find("th[skuid]").eq(aj);
            var ac = ao.attr("skuoption");
            ac = JSON.parse(ac);
            var I = ao.attr("skuid");
            var ab = {};
            ab.skuoption = ac;
            ab.skuID = I;
            Q.push(ab)
        } for (var aj = 0;
            aj < P.length;
            aj++) {
                var X = "";
            for (var ag = 0;
                ag < G.length;
                ag++) {
                    var H = P[aj];
                var ac = Q[ag].skuoption;
                var I = Q[ag].skuID;
                for (var af = 0;
                    af < ac.length;
                    af++) {
                        if (typeof (H) == "string") {
                            if (ac[af].trans_name == H) {
                                if (ag == 0) {
                                    X += I + "_" + af
                                } else {
                                    X += "~!!~" + I + "_" + af
                                }
                            }
                        } else {
                            if (ac[af].trans_name == H[ag]) {
                                if (ag == 0) {
                                    X += I + "_" + af
                                } else {
                                    X += "~!!~" + I + "_" + af
                                }
                            }
                        }
                }
            } b[aj] = X
        } console.timeEnd("input表单优化");
        l(".skuSortList table tbody tr .chooseImg").each(function (ap) {
            if (l(this).siblings(".skuKeyNow").length == 0) {
                l(this).after("<input type='hidden' class='skuKeyNow' value='" + b[ap] + "'>")
            } else {
                l(this).siblings(".skuKeyNow").val(b[ap])
            }
        });
        console.time("skusrcStr优化");
        if (q) {
            var O = [];
            for (var aj = 0;
                aj < q.length;
                aj++) {
                    O.push(q[aj].skuKey)
            } l(".skuSortList table tbody tr").each(function (ap) {
                var ar = O.indexOf(l(this).find(".skuKeyNow").val());
                l(this).find(".td_price div input").val(q[ar].skuValue.comparePrice);
                l(this).find(".td_priceSS div input").val(q[ar].skuValue.price);
                l(this).find(".td_num div input").val(q[ar].skuValue.stock);
                var aq = "";
                l(this).find(".skuStateTd select option").each(function (au, at) {
                    if (q[ar].skuValue.skuStateId === undefined) {
                        if (l(at).attr("data-id") === "") {
                            aq = l(at).val();
                            l(at).attr("data-remark", "")
                        }
                    } else {
                        if (l(at).attr("data-id") === q[ar].skuValue.skuStateId) {
                            aq = l(at).val();
                            l(at).attr("data-remark", q[ar].skuValue.stateRemark)
                        }
                    }
                });
                if (q[ar].skuValue.stateType === "0" && l(this).find(".skuStateTd .skuStateRemark").hasClass("hide")) {
                    l(this).find(".skuStateTd .skuStateRemark").removeClass("hide")
                } l(this).find(".skuStateTd select").val(aq);
                if (q[ar].skuValue.relationImage !== "") {
                    l(this).find(".chooseImg div").html("<img style='height:40px;weight=55px' src='" + q[ar].imgUrl + "'><p class='skuPic_del' onclick='pic_del(this)'>删除</p>")
                } if (q[ar].skuValueId) {
                    l(this).attr("valueid", q[ar].skuValueId)
                } if (l(this).find(".skuValueNow").length > 0) {
                    l(this).find(".skuValueNow").val(JSON.stringify(q[ar].skuValue))
                } else {
                    l(this).append("<input type='hidden' class='skuValueNow' value='" + JSON.stringify(q[ar].skuValue) + "'>")
                }
            })
        } console.timeEnd("skusrcStr优化")
    } var D = h(C, 100);
    l(".prod-SKU-edit-tableNew thead tr .thAll div .skuAll_price").on("blur", function (J) {
        console.time("skuAll_price-blur");
        var I = l(this).val();
        if (I == "") {
            return
        } var H = (Number(I)).toFixed(3);
        if (H == "NaN") {
            l(this).val("")
        } else {
            l(this).val(H.slice(0, -1))
        } if (l(this).val() !== "") {
            var K = l(this).val();
            l(".prod-SKU-edit-tableNew tbody tr .td_price div input").val(l(this).val());
            l(".prod-SKU-edit-tableNew tbody tr .td_priceSS div input").each(function () {
                if (l(this).val() == "") {
                    l(this).val(K)
                }
            });
            x();
            l(".prod-SKU-edit-tableNew tbody tr .td_price div input").each(function (L) {
                E(L);
                var M = l(this);
                M.next().css("display", "none");
                M.next().next().css("display", "none")
            });
            F()
        } console.timeEnd("skuAll_price-blur")
    });
    l(".prod-SKU-edit-tableNew thead tr .thAll div .skuAll_priceDown").on("blur", function () {
        var I = l(this).val();
        if (I == "") {
            return
        } var H = (Number(I)).toFixed(3);
        if (H == "NaN") {
            l(this).val("")
        } else {
            l(this).val(H.slice(0, -1))
        } if (l(this).val() !== "") {
            l(".prod-SKU-edit-tableNew tbody tr .td_priceSS div input").val(l(this).val());
            x();
            l(".prod-SKU-edit-tableNew tbody tr .td_priceSS div input").each(function (J) {
                E(J);
                var K = l(this);
                K.next().css("display", "none");
                K.next().next().css("display", "none")
            });
            F()
        }
    });
    l(".prod-SKU-edit-tableNew thead tr .thAll div .skuAll_num").on("blur", function () {
        var I = l(this).val();
        var H = parseInt(I);
        if (String(H) == "NaN") {
            l(this).val("")
        } else {
            if (H > 2147483647) {
                l(this).val("")
            } else {
                l(this).val(H)
            }
        } if (l(this).val() !== "") {
            l(".prod-SKU-edit-tableNew tbody tr .td_num div input").val(l(this).val());
            x();
            l(".prod-SKU-edit-tableNew tbody tr .td_num div input").each(function (J) {
                E(J);
                var K = l(this);
                K.next().css("display", "none")
            });
            F()
        }
    });
    function r(H) {
        var N = [];
        function J(X, W, V, U, T, S, R) {
            var Y = "";
            if (!!X) {
                Y = X
            } if (!!W) {
                Y += "-" + W
            } if (!!V) {
                Y += "-" + V
            } if (!!U) {
                Y += "-" + U
            } if (!!T) {
                Y += "-" + T
            } if (!!S) {
                Y += "-" + S
            } if (!!R) {
                Y += "-" + R
            } N.push(Y)
        } if (H[0].length) {
            for (var Q = 0;
                Q < H[0].length;
                Q++) {
                    if (H[1].length) {
                        for (var P = 0;
                            P < H[1].length;
                            P++) {
                                if (H[2].length) {
                                    for (var O = 0;
                                        O < H[2].length;
                                        O++) {
                                            if (H[3].length) {
                                                for (var M = 0;
                                                    M < H[3].length;
                                                    M++) {
                                                        if (H[4].length) {
                                                            for (var L = 0;
                                                                L < H[4].length;
                                                                L++) {
                                                                    if (H[5].length) {
                                                                        for (var K = 0;
                                                                            K < H[5].length;
                                                                            K++) {
                                                                                if (H[6].length) {
                                                                                    for (var I = 0;
                                                                                        I < H[6].length;
                                                                                        I++) {
                                                                                            J(H[0][Q], H[1][P], H[2][O], H[3][M], H[4][L], H[5][K], H[6][I])
                                                                                    }
                                                                                } else {
                                                                                    J(H[0][Q], H[1][P], H[2][O], H[3][M], H[4][L], H[5][K])
                                                                                }
                                                                        }
                                                                    } else {
                                                                        J(H[0][Q], H[1][P], H[2][O], H[3][M], H[4][L])
                                                                    }
                                                            }
                                                        } else {
                                                            J(H[0][Q], H[1][P], H[2][O], H[3][M])
                                                        }
                                                }
                                            } else {
                                                J(H[0][Q], H[1][P], H[2][O])
                                            }
                                    }
                                } else {
                                    J(H[0][Q], H[1][P])
                                }
                        }
                    } else {
                        J(H[0][Q])
                    }
            }
        } return N
    } l(document).off("click", ".generateSku .sureSku").on("click", ".generateSku .sureSku", function () {
        var K = l(".generateSku .imitateSelect li.active").attr("data-val"), J = l("input[name='product.prodCode']").val();
        switch (K) {
            case "0": l(".skuSortList .prod-SKU-edit-tableNew tbody tr .td_price_code").each(function (M) {
                var L = M + 1;
                l(this).find("input").val("");
                var N = l(this).find("input").parent().parent().parent().index();
                x();
                E(N)
            });
                F();
                break;
            case "1": if (J == "") {
                alert("商品编码不可为空！")
            } else {
                l(".skuSortList .prod-SKU-edit-tableNew tbody tr .td_price_code").each(function (M) {
                    var L = M + 1;
                    var N = (J + "-" + L).slice(0, 40);
                    l(this).find("input").val(N.replace(/[^\w\-]/ig, ""));
                    var O = l(this).find("input").parent().parent().parent().index();
                    x();
                    E(O)
                });
                F()
            } break;
            case "2": if (J == "") {
                alert("商品编码不可为空！")
            } else {
                var H = [[], [], [], [], [], [], []];
                l(".SKU-filter-addoneNew .skuFilter").each(function (L) {
                    l(this).find(".skuTimValue .skuOpName input").each(function () {
                        if (l(this).val() !== "") {
                            H[L].push(l(this).val())
                        }
                    })
                });
                var I = r(H);
                l(".skuSortList .prod-SKU-edit-tableNew tbody tr .td_price_code").each(function (L) {
                    var M = (J + "-" + I[L]).slice(0, 40);
                    l(this).find("input").val(M.replace(/[^\w\-]/ig, ""));
                    var N = l(this).find("input").parent().parent().parent().index();
                    x();
                    E(N)
                });
                F()
            } break;
            default: break
        }
    });
    function d() {
        l(".skuFilter .skuTimValue .skuOpName input").on("blur", function () {
            if (l(this).val()) {
                l(this).parent(".skuOpName").parent("li").find(".noSkuOpNameText").remove();
                l(this).css("border-color", "#cccccc")
            } var H = l(this);
            if (H.parents(".skuTimValue").prev().find(".SKU-filter-input").val() === "") {
                H.val("");
                H.parents(".skuTimValue").prev().find(".InputSkuName").css("display", "inline-block")
            } H.parent().parent("li").siblings("li").each(function () {
                if (H.val().trim() !== "") {
                    if (H.val().trim() == l(this).find(".skuOpName input").val().trim()) {
                        H.val("");
                        H.parents(".skuValueList").next(".haveaddSkuValue").css("display", "inline-block")
                    }
                }
            });
            D()
        });
        l(".skuFilter .skuTimValue .skuOpName input").on("focus", function () {
            var H = l(this);
            H.parents(".skuValueList").next(".haveaddSkuValue").css("display", "none")
        })
    } d();
    function j() {
        var I = l("#isShowMuiltPhoto").val();
        if (!I) {
            l(".SKU-management-wapperNew .skuTimValue .skuValueList").css({ "flex-direction": "row", "flex-wrap": "wrap" })
        } if (l(".defaultSKU").length === 0) {
            if (l(".skuValueHide ul").length > 0) {
                var L = l("input[name='productShop.packageWeight']").val();
                var N = l("input[name='productShop.packageWeight']+span").text();
                var H = l("#skuStateSelect");
                var J = l(".skuValueHide ul");
                var M = l(".OneskuBarCode .skuStateRemark");
                l(".defaultSkuOne").css("display", "block");
                l(".defaultSkuOneshow").css("display", "block");
                l(".defaultSkuOneshowBottom").css("display", "block");
                l(".defaultSkuOne").append("<input type='hidden' class='skuValueNow' value='" + J.eq(0).find(".skuValueDefault").val() + "'>");
                l(".defaultSkuOne .skuValueNow").attr("valueid", J.eq(0).attr("valueid"));
                l(".defaultSkuOne .OneComparePrice input").val(J.eq(0).find(".comparePrice").attr("value"));
                l(".defaultSkuOne .OnePrice input").val(J.eq(0).find(".price").attr("value"));
                l(".defaultSkuOneshowBottom .OneNum input").val(J.eq(0).find(".stock").attr("value"));
                l(".defaultSkuOneshow .OneWeight #weight").val(J.eq(0).find(".prod_weight").attr("value") || L);
                l(".defaultSkuOneshow .OneWeight #weight_unit").val(J.eq(0).find(".prod_weight_unit").attr("value") || N || "kg");
                l(".defaultSkuOneshow .OneskuCode input").val(J.eq(0).find(".skuCode").attr("value"));
                H.find("option").each(function (P, O) {
                    if (J.eq(0).find(".skuState").attr("data-skuStateId") === l(O).attr("data-id")) {
                        H.val(l(O).val());
                        l(O).attr("data-remark", J.eq(0).find(".skuState").attr("data-stateRemark"));
                        if (l(O).attr("data-stateType") === "0") {
                            M.removeClass("hide")
                        }
                    }
                });
                l(".defaultSkuOneshow .OneskuBarCode input").val(J.eq(0).find(".skuBarCode").attr("value"));
                o()
            }
        } l(".prod-SKU-edit-tableNew thead tr th .skuAll_price").next().html(l(".currencySymbolSku").attr("currencysymbol"));
        l(".prod-SKU-edit-tableNew thead tr th .skuAll_priceDown").next().html(l(".currencySymbolSku").attr("currencysymbol"));
        l(".defaultSKU li").each(function (S) {
            l(".SKU-filter-addoneNew .skuFilter").eq(S).css("display", "block").attr("data-show", "true");
            var O = JSON.parse(l(this).attr("skuoption"));
            l(".SKU-filter-addoneNew .skuFilter").eq(S).find(".SKU-filter-input").val(l(this).attr("skuname"));
            w.push(l(this).attr("skuname"));
            u.push(l(this).attr("skuid"));
            var R = "";
            var T = false;
            for (var P = 0;
                P < O.length;
                P++) {
                    R += "<li>";
                R += '<div class="skuOpName">';
                R += "<input type='text' value='" + O[P].trans_name + "'/>";
                if (O[P].innerImage) {
                    R += '<div class="container-thm" data-pid=\'' + O[P].innerImage.pid + "'>\n";
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t<a class="add-thm" style="display: none" href="javascript:;"><i class="fa fa-plus"></i> 添加缩略图</a>\n';
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t<span class="sku-thm-del" >\n';
                    R += "<img src='" + O[P].innerImage.url + "'/>";
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="remove-thm" href="javascript:;"> 删除缩略图</a>\n';
                    R += "\t\t\t\t\t\t\t\t\t\t\t\t</span>\n";
                    R += "\t\t\t\t\t\t\t\t\t\t\t</div>"
                } else {
                    R += '<div class="container-thm">\n';
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t<a class="add-thm" href="javascript:;"><i class="fa fa-plus"></i> 添加缩略图</a>\n';
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t<span class="sku-thm-del" style="display: none">\n';
                    R += "<img src=''/>";
                    R += '\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="remove-thm" href="javascript:;"> 删除缩略图</a>\n';
                    R += "\t\t\t\t\t\t\t\t\t\t\t\t</span>\n";
                    R += "\t\t\t\t\t\t\t\t\t\t\t</div>"
                } R += "<span class='sku_remove'>×</span>";
                R += "</div>";
                if (!O[P].imgUrl) {
                    R += '<div class="sku-list-image"><div class="picShow nopic hide" image="">'
                } else {
                    R += '<div class="sku-list-image">';
                    if ((typeof O[P].imgUrl) === "string") {
                        R += '<div class="picShow hide" data-pid="' + S.pid + "\" image='" + JSON.stringify(O[P].image) + "'><a data-pid=\"" + S.pid + '" data-index="' + P + "\" href='javaScript:;' class='clearPic'><i data-pid=\"" + S.pid + '" data-index="' + P + '" class="fa fa-close"></i></a>';
                        R += "<img class='skuimg' src=\"" + O[P].imgUrl + '" width="90%"></img></div>'
                    } else {
                        O[P].imgUrl.forEach(function (V, U) {
                            R += '<div data-pid="' + V.pid + '" class="picShow hide" image=\'' + JSON.stringify(O[P].image) + "'><a data-pid=\"" + V.pid + '" data-index="' + P + "\" href='javaScript:;' class='clearPic'><i data-pid=\"" + V.pid + '" data-index="' + P + '" class="fa fa-close"></i></a>';
                            R += "<img class='skuimg' src=\"" + V.img + '" width="90%"></img></div>'
                        })
                    } T = true
                } if (I) {
                    if (O[P].imgUrl && (typeof (O[P].imgUrl) === "string" || O[P].imgUrl.length < 6)) {
                        R += '<div class="picShow nopic" style="display: flex;">'
                    }
                } else {
                    if (O[P].imgUrl && O[P].imgUrl.length === 0) {
                        R += '<div class="picShow nopic" style="display: flex;">'
                    }
                } R += "<p class='picBtns'>";
                R += "<a href='javaScript:;' class='addPicNew'><i>+</i></a></div>";
                R += "</p></div>";
                R += "</li>"
            } l(".SKU-filter-addoneNew .skuFilter").eq(S).find(".skuValueList").html(R);
            if (T) {
                l(".SKU-filter-addoneNew .skuFilter").eq(S).find(".skuTimName .addSkuImg").prop("checked", true);
                l(".SKU-filter-addoneNew .skuFilter").eq(S).find(".skuTimValue .sku-list-image .picShow").css("display", "flex")
            } d();
            D();
            l(".skuFilter").each(function () {
                l(this).find(".skuValue").height(l(this).find(".skuTimValue").height())
            });
            var Q = l(this)
        });
        l(".SKU-management-wapperNew")[0].addEventListener("click", function (T) {
            var P = T.target;
            var R = "";
            if (T.target.dataset.pid) {
                var X = l(T.target).parents(".skuFilter").attr("data-index");
                var W = l(T.target).attr("data-index");
                var O = l(T.target).attr("data-pid");
                var U = jQ(".prod-SKU-edit-tableNew thead tr .thsku")[X];
                var V = JSON.parse(l(U).attr("skuoption"));
                var Y = V[W].image;
                var Q = V[W].imgIndex;
                if (typeof Y === "string") {
                    Y = JSON.parse(Y)
                } delete Y[O];
                if (Q.length) {
                    for (var S = 0;
                        S < Q.length;
                        S++) {
                            if (Q[S] === O) {
                                Q.splice(S, 1)
                            }
                    }
                } Y = JSON.stringify(Y);
                V[W].image = Y;
                V[W].imgIndex = Q;
                l(jQ(".prod-SKU-edit-tableNew thead tr .thsku")[X]).attr("skuoption", JSON.stringify(V));
                if (l(T.target).parents(".sku-list-image").find(".picShow.nopic").length === 0) {
                    l(T.target).parents(".sku-list-image").append('<div class="picShow nopic" style="display: flex;"><p class="picBtns"><a href="javaScript:;" class="addPicNew"><i>+</i></a></p></div>')
                } l(T.target).parents(".picShow.hide").remove();
                T.stopPropagation();
                T.preventDefault()
            }
        });
        l(".SKU-management-wapperNew .SKU-management-btn").click(function () {
            l(".defaultSkuOne").css("display", "none");
            l(".defaultSkuOneshow").css("display", "none");
            l(".defaultSkuOneshowBottom").css("display", "none");
            var O = 0;
            l(".SKU-filter-addoneNew .skuFilter").each(function (P, Q) {
                if (l(this).css("display") === "block") {
                    O++
                }
            });
            if (O === 0) {
                l(".SKU-filter-addoneNew .skuFilter").eq(O).css("display", "block");
                l(".SKU-filter-addoneNew .skuFilter").eq(O).find(".skuTimName .SKU-filter-input").focus()
            } else {
                if (l(".SKU-filter-addoneNew .skuFilter").eq(O - 1).find(".SKU-filter-input").val() !== "") {
                    l(".SKU-filter-addoneNew .skuFilter").eq(O).css("display", "block");
                    l(".SKU-filter-addoneNew .skuFilter").eq(O).find(".skuTimName .SKU-filter-input").focus()
                }
            } if (O >= 6) {
                l(".SKU-management-btn").css("background", "#f1f1f1")
            } else {
                l(".SKU-management-btn").css("background", "#fff")
            }
        });
        function K(Q) {
            var O = Q.parent(".skuFilter").index();
            l(".skuFilter").eq(O).find(".skuTimName .SKU-filter-input").val("");
            l(".skuFilter").eq(O).find(".skuTimName .addSkuImg").prop("checked", false);
            l(".skuFilter").eq(O).find(".skuTimValue .skuValueList li").each(function (R) {
                if (R == 0) {
                    l(".skuFilter").eq(O).find(".skuTimValue .skuValueList li").eq(0).find("input").val("")
                } else {
                    l(this).remove()
                }
            });
            l(".skuFilter").eq(O).find(".skuTimValue .skuValueList li").eq(0).find(".sku-list-image .picShow").remove();
            l(".skuFilter").eq(O).find(".skuTimValue .skuValueList li").eq(0).append("<div class=\"sku-list-image\"><div class='picShow nopic' image=''><p class='picBtns'><a href='javaScript:;' class='addPicNew'><i>+</i></a><a href='javaScript:;' class='clearPic hide'><i class='fa fa-close'></i></a></p></div></div>");
            l(".skuFilter").eq(O).css("display", "none").attr("data-show", "false");
            l(".SKU-filter-addoneNew").append(l(".skuFilter").eq(O));
            l(".prod-SKU-edit-tableNew thead tr .thsku").each(function () {
                l(this).remove()
            });
            w.splice(O, 1);
            u.splice(O, 1);
            D();
            var P = 0;
            l(".SKU-filter-addoneNew .skuFilter").each(function (R, S) {
                if (l(this).css("display") == "block") {
                    P++
                }
            });
            if (P == 5) {
                l(".SKU-management-btn").css("background", "#f1f1f1")
            } else {
                if (P == 0) {
                    l(".skuSortList .prod-SKU-edit-tableNew tbody").html("");
                    l(".skuSortList").css("display", "none");
                    if (l("#prodTradeEnabled").val() == 1) {
                        l(".defaultSkuOne").css("display", "block")
                    } l(".defaultSkuOneshow").css("display", "block");
                    l(".defaultSkuOneshowBottom").css("display", "block");
                    l(".SKU-management-btn").css("background", "#fff")
                } else {
                    l(".SKU-management-btn").css("background", "#fff")
                }
            } F()
        } l(".skuFilter_remove").on("click", function () {
            K(l(this))
        });
        l(".SKU-filter-addoneNew .skuFilter .SKU-filter-input").focus(function () {
            var O = l(this);
            O.next().css("display", "none");
            O.parent().siblings(".SKU-filter-listNew").show();
            O.parent().siblings(".SKU-filter-listNew").find("li").each(function () {
                var P = l(this);
                if (P.attr("added") == "true") {
                    P.hide()
                } P.on("click", function () {
                    O.val(P.children().text());
                    O.focus();
                    O.parent().siblings(".SKU-filter-listNew").hide()
                });
                O.parent().siblings(".SKU-filter-listNew").mouseover(function () {
                    O.parent().siblings(".SKU-filter-listNew").show()
                });
                O.parent().siblings(".SKU-filter-listNew").mouseout(function () {
                    O.parent().siblings(".SKU-filter-listNew").hide()
                })
            })
        });
        l(".SKU-filter-addoneNew .skuFilter .SKU-filter-input").blur(function () {
            var P = l(this);
            if (P.val() != "") {
                P.parent().parent().parent().siblings(".skuFilter").each(function () {
                    if (l(this).find(".skuTimName input").val() == P.val()) {
                        P.val("");
                        P.focus();
                        return
                    }
                });
                var O = P.parents(".skuFilter").index();
                e = true;
                w[O] = P.val();
                l.ajax({
                    url: "prod/new/add/sku", type: "get", dataType: "json", data: { pageNum: 1, skuName: P.val() }, success: function (Q) {
                        P.parents(".skuFilter").attr("data-show", "true");
                        if (Q.status === "1") {
                            u[O] = Q.skuId;
                            D()
                        } else {
                            if (Q.status === "0") {
                                u[O] = Q.skuId;
                                D()
                            }
                        }
                    }, error: function (Q) {
                        alert("请求超时，请重新编辑！");
                        if (P.parents(".skuFilter").attr("data-show") != "true") {
                            K(P.parents(".skuFilter").find(".skuFilter_remove"))
                        }
                    }
                })
            } else { }
        });
        l(".SKU-filter-addoneNew .skuFilter .SKU-filter-input").on("input", function () {
            if (l(this).val() != "") {
                l(this).parent().siblings(".SKU-filter-listNew").hide()
            } else {
                l(this).parent().siblings(".SKU-filter-listNew").show()
            }
        });
        l(".addSkuValue").on("click", function () {
            var O = l("#prod-sku table > tbody > tr").length;
            if (O > 600) {
                k = false
            } else {
                k = true
            } if (l(this).siblings(".skuValueList").children().length == 99) {
                l(this).hide()
            } if (l(this).siblings(".skuValueList").children().length < 100) {
                if (k) {
                    l(this).siblings(".skuValueList").append("<li><div class='skuOpName'><input type='text' value=''/><div class=\"container-thm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"add-thm\" href=\"javascript:;\"><i class=\"fa fa-plus\"></i> 添加缩略图</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sku-thm-del\" style=\"display: none\">\n<img src=''/>\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"remove-thm\" href=\"javascript:;\"> 删除缩略图</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><span class='sku_remove'>×</span></div><div class=\"sku-list-image\"><div class='picShow nopic' image=''><p class='picBtns'><a href='javaScript:;' class='addPicNew'><i>+</i></a><a href='javaScript:;' class='clearPic hide'><i class='fa fa-close'></i></a></p></div></div></li>");
                    l(this).siblings(".skuValueList").find("li").last().find(".skuOpName input").focus()
                } else {
                    l("#bodyBg").append("<div class='skuBackGround'><div>");
                    l("#bodyBg").append("<div class='skumax600'><div class='skuT'>提示</div><div class='skumax'>一个商品最多支持600种组合规格</div><div class='skuKnow'>我知道了</div></div>")
                }
            } l("#bodyBg .skuKnow").click(function () {
                l("#bodyBg .skumax600").remove();
                l("#bodyBg .skuBackGround").remove()
            });
            if (l(this).parents(".skuTimValue").prev().find(".addSkuImg").prop("checked")) {
                l(this).siblings(".skuValueList").find(".sku-list-image .picShow").css("display", "flex")
            } i();
            B();
            l(".skuFilter .skuTimValue .skuOpName input").on("blur", function () {
                if (l(this).val()) {
                    l(this).parent(".skuOpName").parent("li").find(".noSkuOpNameText").remove();
                    l(this).css("border-color", "#cccccc")
                } if (l(this).parents(".skuTimValue").prev().find(".SKU-filter-input").val() === "") {
                    l(this).val("");
                    l(this).parents(".skuTimValue").prev().find(".InputSkuName").css("display", "inline-block")
                } if (l(this).attr("att") == "default") {
                    return
                } var P = l(this);
                P.parent().parent("li").siblings("li").each(function () {
                    if (P.val() !== "") {
                        if (P.val() == l(this).find(".skuOpName input").val()) {
                            P.val("");
                            P.parents(".skuValueList").next(".haveaddSkuValue").css("display", "inline-block")
                        }
                    }
                });
                D()
            });
            l(".skuFilter .skuTimValue .skuOpName input").on("focus", function () {
                var P = l(this);
                P.parents(".skuValueList").next(".haveaddSkuValue").css("display", "none")
            });
            l(".skuFilter .skuTimValue .skuOpName .sku_remove").on("click", function () {
                if (l(this).parents("li").parent().children().length == 20) {
                    l(this).parents(".skuValueList").siblings(".addSkuValue").css("display", "inline-block")
                } if (l(this).parents("li").parent().children().length > 1) {
                    l(this).parents("li").remove();
                    D()
                } l(".skuFilter").each(function () {
                    l(this).find(".skuValue").height(l(this).find(".skuTimValue").height())
                });
                F()
            });
            l(this).siblings(".skuValue").height(l(this).parent(".skuTimValue").height())
        });
        l(".addSkuImg").each(function (O) {
            l(this).click(function () {
                if (l(this).prop("checked")) {
                    l(this).parent().parent(".skuTimName").siblings(".skuTimValue").find(".skuValueList li").each(function () {
                        if (l(this).find(".sku-list-image .picShow.nopic").length == 0) {
                            l(this).find(".sku-list-image").append('<div class="picShow nopic" style="display: flex;"><p class="picBtns"><a href="javaScript:;" class="addPicNew"><i>+</i></a><a href="javaScript:;" class="clearPic hide"><i class="fa fa-close"></i></a></p></div>');
                            l(this).find(".sku-list-image .picShow").css("display", "flex")
                        } else {
                            l(this).find(".sku-list-image .picShow").css("display", "flex")
                        }
                    });
                    i();
                    B()
                } else {
                    var Q = jQ(".prod-SKU-edit-tableNew thead tr .thsku").eq(O).attr("skuoption");
                    if (Q) {
                        Q = JSON.parse(Q);
                        for (var P = 0;
                            P < Q.length;
                            P++) {
                                Q[P].image = "";
                            Q[P].imgIndex = []
                        } jQ(".prod-SKU-edit-tableNew thead tr .thsku").eq(O).attr("skuoption", JSON.stringify(Q))
                    } l(this).parent().parent(".skuTimName").siblings(".skuTimValue").find(".sku-list-image").find(".picShow").remove()
                } l(".skuFilter").each(function () {
                    l(this).find(".skuValue").height(l(this).find(".skuTimValue").height())
                })
            })
        });
        i();
        B();
        l(".skuFilter .skuTimValue .skuOpName .sku_remove").on("click", function () {
            if (l(this).parents("li").parent().children().length == 50) {
                l(this).parents(".skuValueList").siblings(".addSkuValue").css("display", "inline-block")
            } if (l(this).parents("li").parent().children().length > 1) {
                l(this).parents("li").remove();
                D()
            } l(".skuFilter").each(function () {
                l(this).find(".skuValue").height(l(this).find(".skuTimValue").height())
            })
        })
    } j();
    function i() {
        l(".skuFilter .sku-list-image").delegate(".picShow.nopic", "click", function () {
            var K = l(this);
            if (!K.parent(".sku-list-image").prev(".skuOpName").find("input").val()) {
                if (!K.parent(".sku-list-image").parent("li").find(".noSkuOpNameText").length) {
                    K.parent(".sku-list-image").prev(".skuOpName").find("input").css("border-color", "red");
                    K.parent(".sku-list-image").parent("li").append('<div class="noSkuOpNameText" style="\n    color: red;\n    font-size: 12px;\n    text-align: left;\n">*请先输入规格值名称</div>')
                } return false
            } var H = 0;
            var I = K.parents(".skuFilter").index();
            l(".skuFilter .skuTimValue .skuValueList li").each(function (L) {
                if ((K.parent().prev().find("input").val() == l(this).find(".skuOpName input").val()) && (K.parent().parents(".skuTimValue").prev().find(".SKU-filter-input").val() == l(this).parents(".skuTimValue").prev().find(".SKU-filter-input").val())) {
                    H = L
                }
            });
            var J = l(this).parents(".sku-list-image").parent().prevAll("li").length;
            photobankRefer("17", H + "", J + "")
        })
    } function B() {
        l(".skuFilter .skuOpName").delegate(".add-thm", "click", function () {
            var I = l(this);
            if (!I.parent().parent().find("input").val()) {
                if (!I.parent().parent().parent("li").find(".noSkuOpNameText").length) {
                    I.parent().parent().find("input").css("border-color", "red");
                    I.parent().parent().parent("li").append('<div class="noSkuOpNameText" style="\n    color: red;\n    font-size: 12px;\n    text-align: left;\n">*请先输入规格值名称</div>')
                } return false
            } var I = l(this);
            photobankRefer("20", H);
            function H(N) {
                console.log(N, "<---callback arg");
                var L = I.parent().parent().parent().parent().parent().parent().attr("data-index");
                var M = l(jQ(".prod-SKU-edit-tableNew thead tr .thsku")[L]).attr("skuoption");
                if (M && JSON.parse(M)) {
                    var O = I.parent().parent().parent().index();
                    var K = {};
                    I.hide();
                    I.siblings(".sku-thm-del").show();
                    I.siblings(".sku-thm-del").find("img").attr("src", N[0]["url"]);
                    var J = JSON.parse(M);
                    K.url = N[0]["url"];
                    K.pid = N[0]["pid"];
                    J[O].innerImage = K;
                    jQ(".prod-SKU-edit-tableNew thead tr .thsku").eq(L).attr("skuoption", JSON.stringify(J))
                }
            }
        });
        l(".skuFilter .skuOpName").delegate(".remove-thm", "click", function () {
            var L = l(this);
            var I = L.parent().parent().parent().parent().parent().parent().parent().attr("data-index");
            var J = l(jQ(".prod-SKU-edit-tableNew thead tr .thsku")[I]).attr("skuoption");
            if (J && JSON.parse(J)) {
                var K = L.parent().parent().parent().parent().index();
                L.parent().hide();
                L.parent().siblings(".add-thm").show();
                var H = JSON.parse(J);
                H[K].innerImage = null;
                jQ(".prod-SKU-edit-tableNew thead tr .thsku").eq(I).attr("skuoption", JSON.stringify(H))
            }
        })
    } function p() {
        l(".prod-SKU-edit-tableNew").off("click").on("click", "tbody tr .chooseImg", function () {
            var I = l(this).children("div");
            var H = I.parent().parent().index();
            x();
            E(H);
            F();
            photobankRefer("18", H + "")
        })
    } function t(I) {
        var H = [];
        l(".skuFilter").eq(I).find(".skuTimValue .skuOpName input").each(function (M) {
            var N = {};
            var L = {};
            var K = [];
            if (l(this).val() !== "") {
                L.trans_name = l.trim(l(this).val());
                var J = l(this).parent().next().find(".picShow").attr("image");
                if (l(this).parent().next().find(".picShow.hide:not(.nopic)").length > 0) {
                    l(this).parent().next().find(".picShow.hide:not(.nopic)").each(function () {
                        N = l.extend(N, JSON.parse(l(this).attr("image")));
                        K.push(l(this).attr("data-pid"))
                    });
                    L.image = JSON.stringify(N);
                    L.imgIndex = K
                } else {
                    L.image = ""
                } if (l(this).siblings(".container-thm").attr("data-pid")) {
                    L.innerImage = {};
                    L.innerImage.pid = l(this).siblings(".container-thm").attr("data-pid");
                    L.innerImage.url = l(this).siblings(".container-thm").find("img").attr("src")
                } if (l(this).parent().next().children(".skuimg").length > 0) {
                    L.imgUrl = l(this).parent().next().children(".skuimg").attr("src")
                } console.log(l(this));
                L.order = M;
                H.push(L)
            }
        });
        s[I] = JSON.stringify(H)
    } function A(K) {
        var J = l(K + " select option:selected");
        var M = l(K + " .skuStateRemark");
        if (J.attr("data-stateType") === "0") {
            M.removeClass("hide")
        } else {
            if (!M.hasClass("hide")) {
                M.addClass("hide")
            }
        } if (K === ".all_skuStateSelect_th") {
            var I = l(".prod-SKU-edit-tableNew .skuStateTd .skuStateSelect");
            if (I.length > 0) {
                I.each(function (O, N) {
                    if (l(".skuValueHide ul").length) {
                        var P = l(l(".skuValueHide .skuState")[O]);
                        P.attr("data-skuStateId", J.attr("data-id"));
                        P.attr("data-stateType", J.attr("data-stateType"));
                        P.attr("data-stateRemark", l(N).find("option:selected").attr("data-remark"))
                    } l(N).val(J.val());
                    x();
                    E(O);
                    F();
                    l(N).find("option").each(function (Q, R) {
                        if (J.attr("data-stateType") === "0") {
                            if (l(N).prev().hasClass("hide")) {
                                l(N).prev().removeClass("hide")
                            }
                        } else {
                            if (!l(N).prev().hasClass("hide")) {
                                l(N).prev().addClass("hide")
                            }
                        }
                    })
                })
            }
        } else {
            if (K === ".defaultSkuOneshow") {
                o()
            } else {
                var H = parseInt(K.split("#skuStateTd")[1]);
                var L = l(l(".skuValueHide .skuState")[H]);
                L.attr("data-skuStateId", J.attr("data-id"));
                L.attr("data-stateType", J.attr("data-stateType"));
                L.attr("data-stateremark", J.attr("data-remark"));
                x();
                E(H);
                F()
            }
        }
    } function a(J) {
        var I = l(J + " select option:selected");
        var H = l(".prod-SKU-edit-tableNew .td_weight .td_skuWeightSelect");
        if (H.length > 0) {
            H.each(function (L, K) {
                l(K).val(I.val() || "kg");
                x();
                E(L);
                F()
            })
        }
    } function v(J) {
        var I = l(J + " #all_skuWeightNumber");
        var H = l(".prod-SKU-edit-tableNew .td_weight .td_skuWeightNumber");
        if (H.length > 0) {
            H.each(function (L, K) {
                l(K).val(I.val());
                x();
                E(L);
                F()
            })
        }
    } function c(I) {
        var H = l(I + " option:selected");
        var J = l(".skuStateRemarkWinOut");
        if (J.hasClass("hide")) {
            J.removeClass("hide");
            l(".skuStateRemarkWinOut input").val(H.val());
            l(".skuStateRemarkWinOut textarea").val(H.attr("data-remark"));
            l('input[name="selectId"]').val(I)
        }
    } function n() {
        var L = l(".skuStateRemarkWinOut");
        var H = l('.skuStateRemarkWinOut input[name="selectId"]').attr("value");
        if (H === "#all_skuStateSelect") {
            var J = l(".prod-SKU-edit-tableNew .skuStateTd .skuStateSelect");
            if (J.length > 0) {
                J.each(function (N, M) {
                    var O = l(l(".skuValueHide .skuState")[N]);
                    O.attr("data-stateRemark", l(".skuStateRemarkWinOut textarea").val());
                    l(M).find("option").each(function (P, Q) {
                        if (l(Q).attr("data-stateType") === "0") {
                            l(Q).attr("data-remark", l(".skuStateRemarkWinOut textarea").val())
                        }
                    });
                    x();
                    E(N);
                    F()
                })
            }
        } else {
            l(H + " option:selected").attr("data-remark", l(".skuStateRemarkWinOut textarea").val());
            if (H === "#skuStateSelect") {
                o()
            } else {
                var I = parseInt(H.split("#skuStateSelect")[1]);
                var K = l(l(".skuValueHide .skuState")[I]);
                K.attr("data-stateremark", l(".skuStateRemarkWinOut textarea").val());
                x();
                E(I);
                F()
            }
        } L.addClass("hide")
    } function z() {
        var H = l(".skuStateRemarkWinOut");
        H.addClass("hide");
        l(".skuStateRemarkWinOut input").val("");
        l(".skuStateRemarkWinOut textarea").val("");
        l('..skuStateRemarkWinOut input[name="selectId"]').val("")
    } function x() {
        f = [[], [], [], [], [], [], [], []];
        l(".prod-SKU-edit-tableNew tbody tr .td_price div input").each(function (H) {
            f[0][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_priceSS div input").each(function (H) {
            f[1][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_num div input").each(function (H) {
            f[2][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_price_code div input").each(function (H) {
            f[3][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_price_barcode div input").each(function (H) {
            f[4][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .skuStateTd select option:selected").each(function (H) {
            f[5][H] = [];
            f[5][H][0] = l.trim(l(this).attr("data-id"));
            f[5][H][1] = l.trim(l(this).attr("data-stateType"));
            f[5][H][2] = l.trim(l(this).attr("data-remark"))
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_weight div input").each(function (H) {
            f[6][H] = l.trim(l(this).val())
        });
        l(".prod-SKU-edit-tableNew tbody tr .td_weight div select.td_skuWeightSelect").each(function (H) {
            f[7][H] = l.trim(l(this).val())
        })
    } function E(J) {
        var I = l(".skuSortList table tbody tr .chooseImg").eq(J);
        var H = {};
        H.skuCode = f[3][J];
        H.skuBarCode = f[4][J];
        H.comparePrice = f[0][J];
        H.price = f[1][J];
        H.stock = f[2][J];
        H.prodWeight = f[6][J];
        H.prodWeightUnit = f[7][J];
        H.skuStateId = f[5][J][0];
        H.stateType = f[5][J][1];
        H.stateRemark = f[5][J][2];
        H.barcode = "";
        H.isAlarmed = "false";
        H.alarmNum = "";
        H.emailAlarm = "false";
        H.phoneAlarm = "false";
        H.weixinAlarm = "false";
        H.stockType = "false";
        H.weight = "";
        H.volume = "";
        H.point = "";
        if (I.siblings(".skuValueNow").length == 0) {
            H.relationImage = "";
            I.after("<input type='hidden' class='skuValueNow' value='" + JSON.stringify(H) + "'>")
        } else {
            var K = l.parseJSON(I.siblings(".skuValueNow").val());
            H.relationImage = K.relationImage;
            I.siblings(".skuValueNow").val(JSON.stringify(H))
        }
    } function F() {
        var H = [];
        l(".prod-SKU-edit-tableNew tbody tr").each(function () {
            if (l(this).find("input[class='skuValueNow']").length > 0) {
                var M = {};
                var J = l(this).attr("valueid");
                var K = l(this).find("input[class='skuValueNow']").val();
                var L = l(this).find("input[class='skuKeyNow']").val();
                var I = l(this).find(".chooseImg div img").attr("src");
                M.skuValueId = J;
                M.skuKey = L;
                M.imgUrl = I;
                M.skuValue = JSON.parse(K);
                H.push(M)
            }
        });
        q = H
    } l(window).resize(function () {
        l(".skuFilter").each(function () {
            l(this).find(".skuValue").height(l(this).find(".skuTimValue").height())
        })
    });
    function o() {
        var I = {};
        var H = l("#skuStateSelect option:selected");
        I.skuCode = l(".defaultSkuOneshow .OneskuCode input").val();
        I.skuBarCode = l(".defaultSkuOneshow .OneskuBarCode input").val();
        I.comparePrice = l(".defaultSkuOne .OneComparePrice input").val();
        I.skuStateId = H.attr("data-id");
        I.stateType = H.attr("data-stateType");
        I.stateRemark = H.attr("data-remark");
        I.price = l(".defaultSkuOne .OnePrice input").val();
        I.stock = l(".defaultSkuOneshowBottom .OneNum input").val();
        I.prodWeight = l(".defaultSkuOneshow .OneWeight #weight").val();
        I.prodWeightUnit = l(".defaultSkuOneshow .OneWeight #weight_unit").val();
        I.barcode = "";
        I.isAlarmed = "false";
        I.alarmNum = "";
        I.emailAlarm = "false";
        I.phoneAlarm = "false";
        I.weixinAlarm = "false";
        I.stockType = "false";
        I.weight = "";
        I.volume = "";
        I.point = "";
        I.relationImage = "";
        if (l(".defaultSkuOne").find(".skuValueNow").length == 0) {
            l(".defaultSkuOne").append("<input type='hidden' class='skuValueNow' value='" + JSON.stringify(I) + "'>")
        } else {
            var J = l.parseJSON(l(".defaultSkuOne").find(".skuValueNow").val());
            l(".defaultSkuOne").find(".skuValueNow").val(JSON.stringify(I))
        }
    } l(".defaultSkuOne .OneComparePrice input").focus(function () {
        l(this).next().css("display", "none");
        l(".defaultSkuOne .OneComparePrice .skuNotNUMOne").css("display", "none")
    });
    l(".defaultSkuOne .OneComparePrice input").blur(function () {
        var I = l(this).val();
        if (I == "") {
            return
        } var H = (Number(I)).toFixed(3);
        if (H == "NaN") {
            l(this).val("")
        } else {
            l(this).val(H.slice(0, -1))
        } if (l(this).val() === "") {
            l(this).next().css("display", "inline-block")
        } else {
            o()
        }
    });
    l(".defaultSkuOneshow .OneWeight input#weight").blur(function () {
        var I = l(this).val();
        if (I == "") {
            return
        } var H = (Number(I)).toFixed(4);
        if (H == "NaN") {
            l(this).val("")
        } else {
            l(this).val(H.slice(0, -1))
        } if (l(this).val() !== "") {
            o()
        }
    });
    l(".defaultSkuOneshow .OneWeight #weight_unit").change(function () {
        o()
    });
    l(".defaultSkuOne .OnePrice input").focus(function () {
        l(".defaultSkuOne .OnePrice .skuNotNUMOne").css("display", "none");
        l(".defaultSkuOne .OnePrice .skuNotNUMOneSmall").css("display", "none")
    });
    l(".defaultSkuOne .OnePrice input").blur(function () {
        var I = l(this).val();
        if (I != "") {
            var H = (Number(I)).toFixed(3);
            if (H == "NaN") {
                l(this).val("")
            } else {
                l(this).val(H.slice(0, -1))
            }
        } o()
    });
    l(".defaultSkuOneshowBottom .OneNum input").focus(function () {
        l(this).next().css("display", "none");
        l(".defaultSkuOneshowBottom .OneNum .skuNotNUMOne").css("display", "none")
    });
    l(".defaultSkuOneshowBottom .OneNum input").blur(function () {
        var I = l(this).val();
        var H = parseInt(I);
        if (String(H) == "NaN") {
            l(this).val("")
        } else {
            l(this).val(H)
        } o()
    });
    l(".defaultSkuOneshow .OneskuCode input,.defaultSkuOneshow .OneskuBarCode input").blur(function () {
        o()
    });
    if (l("#prodTradeEnabled").val() == 1 && (l(".skuFunc_payAndB2c").length > 0)) {
        if (l(".defaultSKU").length === 0) {
            l(".defaultSkuOne").css("display", "block");
            l(".defaultSkuOneshow").css("display", "block");
            l(".defaultSkuOneshowBottom").css("display", "block")
        } l(".prod-SKU-edit-tableNew .shopCloseSku").removeClass("hide")
    } else {
        l(".defaultSkuOne").css("display", "none");
        l(".prod-SKU-edit-tableNew .shopCloseSku").addClass("hide")
    } l(".prod-SKU-edit-price a").click(function () {
        var H = 0;
        l(".SKU-filter-addoneNew .skuFilter").each(function (I, J) {
            if (l(this).css("display") == "block") {
                H++
            }
        });
        if (l("#prodTradeEnabled").val() == 1 && (l(".skuFunc_payAndB2c").length > 0)) {
            if (H === 0) {
                l(".defaultSkuOne").css("display", "block")
            } l(".prod-SKU-edit-tableNew .shopCloseSku").removeClass("hide")
        } else {
            l(".defaultSkuOne").css("display", "none");
            l(".prod-SKU-edit-tableNew .shopCloseSku").addClass("hide")
        }
    })
})(jQ);



<script>
  function lsResetImgSrc() {
    var $img = $(
      "#siteblocks-setting-wrap-rNfqILyukEYZ > div > div > div.proshow-container > div.backstage-blocksEditor-wrap > div > div > div > div > div > div > div > div.proshow-outerline > div > div.proshow-imgBox > a > img"
    )
    var imgSrc = $img.attr("src");
    if (imgSrc) {
      var re = new RegExp("(.*)-(460|400|350|300|206)-(460|400|350|300|206).", "ig");
      var r = re.exec(imgSrc);
      if (r) {
        var Imgtype = '.' + imgSrc.replace(/^.+\./, '');
        var src = r[1] + Imgtype;
        $img.attr("src", src);
        $img.attr("data-original", src);
      }
    }
  }
  $('#thumblist').find('li').each(function () {
    $(this).unbind('mousemove').bind('mousemove', function () {
      lsResetImgSrc()
    })
  })
  lsResetImgSrc()
</script>