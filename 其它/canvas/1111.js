/**
 * tupianjimoban
 */
(function (window, $, phoenix, undefined) {
    var component = phoenix.component || (phoenix.component = {});
    var backstageEffect = $_phoenix.backstageEffect;
    var name = "component_galleryCommonLink";
    var configDefault = {
         ldSliderContainer: '.ld-slick-slider',
        ldSliderItem: '.ld-slick-item',
        jurpHref: '.slider_href',
        slider_href: '.slider_href'
    }
    var component_galleryCommonLink = component[name] || (component[name] = {});
    $.extend(component_galleryCommonLink, {
        init: function (settingId, json) {
            var i = 0;
            $(".bianjipic").click(function () {
                $(".hidepic .now_pic").click();
            });
            //图片尺寸显示初始化
            if ($(".galleryList").find("li").length == 0) {
                $(".picsguanli").hide();
                $(".nopicstate").show();
            } else {
                $(".picsguanli").show();
                $(".nopicstate").hide();
            }
           
            
            
            $(".tihuanpic").click(function () {
                $(this).parent().find('.changepicbtns').toggle();
            });
            $(".picSize").each(function (index) {
                var _this = $(this);
                var _img = _this.parent().children("img");
                var realWidth = 0;
                var realHeight = 0;
                if (_img.length == 0) {
                    return;
                }
                $("<img/>").attr("src", (_img.attr("_src") || _img.attr("src"))).load(function () {
                    realWidth = this.width;
                    realHeight = this.height;
                    if (!!realWidth && !!realHeight) {
                        _this.text("\u539f\u59cb\u5c3a\u5bf8" + realWidth + "*" + realHeight);
                        _this.parent().attr("photowidth", realWidth);
                        _this.parent().attr("photoheight", realHeight);
                    }
                    $(".backstage-uploadpicsortable-list > li .icon-pencil").first().click();
                });
            });
            $("#ffsBtn").photoInit(component.component_galleryCommonLink.showPhoto);
            $(".comp_image_ele").each(function(index,item){
                $(item).photoInit(function(photoObject){
                    
                    component.component_galleryCommonLink.showPhoto2(photoObject,item);
                });
            })
            // $(".comp_image_ele").photoInit(function(photoObject){
            
            //     component.component_galleryCommonLink.showPhoto2
            // });
            $(".backstage-uploadpicsortable-picsttings .backstage-settings-browselink").showlinkPage("");
            $("#moreFlag").showlinkPage(!$("#moreFlag").attr("moreLink") ? "" : $("#moreFlag").attr("moreLink"));
            //初始化获得组件DOM和设置弹出框DOM
            compDom = $("#" + $_phoenix.tools.getCompId(settingId));
            dialogDom = $("#" + $_phoenix.tools.getDialogId(settingId));
            linkJson = json;
            editor = CKEDITOR.replace("pictureDescCK", {
                toolbar: $_phoenix.constants.advSlider,
                height: '80px',
                resize_enabled: false,
                on: {
                    change: function () {
                        var content = this.getData();
                        $("#pictureDescCK").val(content);
                    },
                    instanceReady:function(){
                        i++;
                    }
                }
            });
            editor2 = CKEDITOR.replace("pictureAlt", {
                toolbar: $_phoenix.constants.advSlider,
                height: '80px',
                resize_enabled: false,
                on: {
                    change: function () {
                        var content = this.getData();
                        $("#pictureAlt").val(content);
                    },
                    instanceReady:function(){
                        i++;
                    }
                }
            });

            $(".text_edit_ck,.comp_button").each(function () {
                var _id = $(this).attr('id');
                component.component_galleryCommonLink[_id] = CKEDITOR.replace(this, {
                    toolbar: $_phoenix.constants.advSlider,
                    height: '80px',
                    resize_enabled: false,
                    on: {
                        change: function () {
                            var content = this.getData();
                        },
                        instanceReady: function () {
                            i++;
                        }
                    }
                });
            });

            editor2 && editor2.on('paste',function(evt){
                var rtf = evt.data.dataTransfer.getData( 'application/rtf' );
                console.log(evt.data.dataValue,'当前粘贴板内容')
                evt.data.dataValue = evt.data.dataValue;
            })
            editor && editor.on('paste',function(evt){
                var rtf = evt.data.dataTransfer.getData( 'application/rtf' );
                console.log(evt.data.dataValue,'当前粘贴板内容')
                evt.data.dataValue = evt.data.dataValue;
            })
            $_phoenix.backstageEffect.widgetsettinsFormsDom();
            galleryCommon_bindEvents();
            if(i >= 2){
                galleryCommon_bindEvents();
            }else{
                var timer = setInterval(function(){
                    if(i >= 2){
                        galleryCommon_bindEvents();
                        clearInterval(timer)
                    }
                },200)
            }
            $(".backstage-uploadpicsortable-list > li").first().click();
            $(".btn_galleryconfirm").click(function () {
                var blockArrayList = component.component_galleryCommonLink.getBlockJson();
                // 3、更新blockArrayList对象

                component.component_galleryCommonLink.save(blockArrayList);
            });
            $('.switch_button ul>li').click(function(){
                $('.switch_button ul>li').each(function(index,item){
                    var selectStr = $(item).attr('data-type');    
                    $('.' + selectStr).hide();
                    $(item).removeClass('active');
                })

                var _selectStr = $(this).attr('data-type');    
                $('.' + _selectStr).show();
                $(this).addClass('active');

                if(_selectStr == 'slider_type'){
                    $('.deleteAllSelected').show();
                    $('.pics_gallery_new .backstage-settings-picblock').show();

                    $('.component_content .backstage-uploadpicsortable-list .silder_left_container').hide();
                    $('.component_content .slider_component .ldSlickSliderContainer').hide();
                    var data_id = $(this).attr('data-button-id');
                    $('.component_content .backstage-uploadpicsortable-list .silder_left_container[data-id="' + data_id+'"]').show();
                    $('#' + data_id).show();

                }else{
                    $('.deleteAllSelected').hide();
                    $('.pics_gallery_new .backstage-settings-picblock').hide();
                }
            });

            // 初始化切换按钮状态
            var defaultbuttonEl = $('.switch_button [data-type="default_component"]');
            var sliderEl = $('.switch_button [data-type="slider_type"]');
            var default_compont = $('.default_component .backstage-settings-wrap');
            if(default_compont.length > 0){
                defaultbuttonEl.show();
            }else{
                defaultbuttonEl.hide();
                sliderEl.eq(0).click();
            }
            
            var editPromise = component.component_galleryCommonLink.initEdit();
            editPromise.then(function(res){
                console.log(res);
                component_galleryCommonLink.editorEl = res;
                component.component_galleryCommonLink.initSeetingData(res);
            })
        },
        getBlockJson: function() {
             // 步骤 1、更新editor值 2、获取更新后的html结构和json结构拼接成需要的结构
             var editorEl = component.component_galleryCommonLink.editorEl;
             //  1、更新editor值
             // 文本组件
             $('.text_edit_ck').each(function(){
                 var _id = $(this).attr('id');
                 if(_id){
                     var _txt = component.component_galleryCommonLink[_id].getData();
                     editorEl.getWrapper().find('#' + _id)[0].set('content',_txt);
                 }
             });
                 // 按钮组件
             $('.comp_button').each(function(){
                 var _id = $(this).attr('id');
                 // var _txt = $('#' + _id).val();
                 if(_id){
                      var _txt = component.component_galleryCommonLink[_id].getData();
                      var _buttonEl = editorEl.getWrapper().find('#' + _id)[0].find('.lead-button-text')[0];
                      if(_buttonEl){
                          var textNode = _buttonEl.findType('textnode');
                          if(textNode){
                              textNode[0].set('content',_txt);
                          }else{
                              _buttonEl.set('content',_txt)
                          }
                      }
                 }
             });

                 // 图片组件
             $('.photo_img').each(function(){
                 var _imgEl = $(this).find('.now_pic');
                 var _id = _imgEl.attr('id');
                 if(_id){
                      var _src = _imgEl.attr("src");
                      editorEl.getWrapper().find('#' + _id)[0].set('src',_src);
                 }
             });
             // 轮播图组件
             $('.ldSlickSliderContainer').each(function(index,item){
                 var _id = $(item).attr('id');
                 if(_id){
                     var _sliderLeftEl = $("[data-id=" + _id + "]");
                     $(item).find('.ld-slick-item .slider_href').each(function(hrefIndex,hrefItem){
                         var curreIndexNumber = $(hrefItem).parent().attr('data-index');
                         var _src = $(hrefItem).find('.backstage-settings-wrap >img').attr('src');
                         var _currentIndex = _sliderLeftEl.find("[data-index=" + curreIndexNumber + "]").index();
                         var _model = editorEl.getWrapper().find('#' + _id)[0].find('.slider_href')[_currentIndex];

                         // var _attributes = _model.get('attributes');
                         // var _newAttr =  Object.assign(_attributes,{'background-image':_src});
                         // _model.set('attributes',_newAttr);
                         _model && _model.setStyle({'background-image':'url('+ _src +')'});
                     })
                 }
             });

             // 2、获取更新后的html结构和json结构拼接成需要的结构
             var blockArrayList = [];
             var projectData = editorEl.getProjectData();
             var _html = editorEl.getHtml();
             var _css = editorEl.getCss();
             _html =  _html + '<style>' + _css + '</style>';
             projectData.htmls = _html;
             blockArrayList.push(projectData);
             console.log(blockArrayList);
             return blockArrayList;
        },
        getSaveJson: function(){
            var blockArrayList = component.component_galleryCommonLink.getBlockJson();
            var nodeValue = {
                'photo_ids': $.toJSON(blockArrayList)
            };
            return {
                'nodeValue': $.toJSON(nodeValue)
            }
        },
        sendAjaxGetNewHtml: function(){
            var blockArrayList = component.component_galleryCommonLink.getSaveJson();
              var postData = {
                settingId: $('input[type="hidden"]#settingId').val(),
                nodeId: $('input[type="hidden"]#nodeId').val(),
                relateAppId: "OpAUKfAWbLBE",
                appIsDev: 1
            };
             var dialog_options = {
                url: "/phoenix/component/module/edit/node/pop",
                classType: "widgetsettins",
                isDraggable: true,
                id: settingId + "_settingDialog",
                type:'post',
                data: $.extend({
                    settingId: "",
                    nodeId: "",
                    relateAppId: "",
                    appIsDev: "0"
                }, postData,blockArrayList),
                callback: function() {
                    var _that = this;
                    $(".backstage-dialog-cancel", _that).unbind("click").bind("click", function() {
                        backstageEffect.restoreStyle($("#" + $_phoenix.tools.getCompId(postData.settingId)));
                        _that.triggerHandler("dialog.close")
                    })
                },
                success: function(data) {
                    // 成功回调函数
                    $('.backstage-dialog-galleryinfo.backstage-dialog').html(data);
                    console.log(data);
                },
                error: function(xhr, status, error) {
                    // 失败回调函数
                    console.log("请求失败：" + error);
                }
            }
            $.ajax(dialog_options);
        },
        uploadPhoto: function () {
            $('#uploadForm').attr('action', $_phoenix.getPhotoUploadUrl('component.component_galleryCommonLink.showPhoto', 5));
            $('#uploadForm')[0].submit();
        },
        //本地上传pc端图片
        uploadPhoto2: function () {
            $('.photo_img').removeClass('active_upload');
            var _formEl = $(event.target).parents('.photo_img').find('.uploadForm2');
            _formEl.attr('action', $_phoenix.getPhotoUploadUrl('component.component_galleryCommonLink.showPhoto2', 5));
            _formEl[0].submit();

            $(event.target).parents('.photo_img').addClass('active_upload');
        },
        showIconPhoto: function (photoObject) {
            if (!!photoObject && photoObject.url != '') {
                var currentCont = $('#pictureIconEdit');
                currentCont.attr('src', photoObject.url);
            };
            $_phoenix.spinner.hide();
        },
        showPhoto: function (photoObject) {
            debugger;
            var _id = component.component_galleryCommonLink.getActiveButtonId();
            var maxNum = 0;
            var parentLeftContainer = $('.silder_left_container[data-id="' + _id + '"]');
             parentLeftContainer.find('li').each(function(){
                 var _index = parseInt($(this).attr('data-index'));
                 if(_index > maxNum){
                     maxNum = _index;
                 }
             })
            maxNum ++;
            $(".nopicstate").hide();
            $(".picsguanli").show();
            $(".deleteAllSelected").show();
            var noSuffixName = photoObject.pname.substr(0, photoObject.pname.lastIndexOf("."));
            var photoHtml = '<li data-index="'+ maxNum +'"  photoName="' + photoObject.pname + '" photoId="' + photoObject.pid + '" photoHeight="' + photoObject.height + '" photoWidth="' + photoObject.width + '">';
            var editText = p_i18n.ov("common.edit");
            var deleteText = p_i18n.ov("common.del");
            var picSizeCont = (photoObject.width && photoObject.height) ? "\u539f\u59cb\u5c3a\u5bf8" + photoObject.width + "*" + photoObject.height : "";
            
            photoHtml += '<div class="hide" id="picNameNoSuf">'+noSuffixName+'</div>';
            photoHtml += '<input type="hidden" id="linkJson" value="">';
            photoHtml += '<input type="hidden" id="picIcon" value="">';
            photoHtml += '<input type="hidden" id="buttonTextHidden" value="">';
            photoHtml += '<div class="hide" id="descJson"></div>';
            photoHtml += '<div class="sixPoint"><i class="fa fa-ellipsis-v" style="left: 8px;"></i><i class="fa fa-ellipsis-v"></i></div>';
            photoHtml += '<div class="pic_checkBox"><i class="font-icon fa fa-check" style="display:none;"></i></div>';
            photoHtml += '<img class="icon-pencil" src="' + photoObject.url + '"/>';
            photoHtml += '<div class="picSize">' + picSizeCont + '</div>';
            /*photoHtml += '<span></span><i></i>';
            photoHtml += '<a href="javascript:;" class="icon-pencil " title="'+ editText +'">&nbsp;<em class="font12">'+ editText +'</em></a>';*/
            photoHtml += '<a href="javascript:;" class="deletePic icon-trash" title="' + deleteText + '">&nbsp;</a>';
            photoHtml += '</li>'
            parentLeftContainer.append(photoHtml);
            galleryCommon_bindEvents();
            $(".backstage-uploadpicsortable-list > li").first().click();

            // 
            var editorEl = component_galleryCommonLink.editorEl;
            var model = editorEl.getWrapper().find('#' + _id)[0];
            debugger
            component.component_galleryCommonLink.addPhotoFunctionHack(model,[photoObject.url],maxNum,editorEl);
        },
        getActiveButtonId: function(){
             var activeButton = $('.switch_button .active[data-type="slider_type"]');
             var data_id = activeButton.attr('data-button-id');
             return data_id;
        },
        addPhotoFunctionHack: function(selected,photoList,maxNum,editorEl){
            var {ldSliderItem} = configDefault;
            var slideCpt = selected.find(ldSliderItem);
            var _lastIndexOf = slideCpt.length - 1;
            photoList.forEach((photoItem) => {
                 // 复制幻灯片
                component.component_galleryCommonLink.copySlide(selected,_lastIndexOf,editorEl,photoItem);
            })
        },
        copySlide:function(selected, index,editorEl,photoItem){
            // 目标组件
            var {ldSliderItem,jurpHref} = configDefault;
            var slideCpt = selected.find(ldSliderItem);
            component.component_galleryCommonLink.rescindFun(selected,'close');
            editorEl.select(slideCpt[index]);
            editorEl.runCommand('tlb-clone');
            component.component_galleryCommonLink.rescindFun(selected,'');
            // 更新背景图片
            var newModel = selected.find(ldSliderItem)[index + 1];
            var newImageModel = newModel.find(jurpHref)[0];
            newImageModel && newImageModel.setStyle({'background-image':'url('+ photoItem +')'});
        },
        rescindFun:function(model,type){
            var {ldSliderItem} = configDefault;
             ldSliderItem = ldSliderItem.replace('.','');
            var modelList = model.findType('');
            modelList.forEach(function(element){
                var classList = element.getClasses();
                if(classList.includes(ldSliderItem) && type == 'close'){
                    element.set({selectable:true});
                }else{
                    element.set({selectable:false,droppable:false,draggable :false});
                }
            })
        },
        addPhotoFunction: function(selected,photoList,maxNum){
            var {ldSliderContainer} = configDefault;
            var parentCpt = selected.find(ldSliderContainer);
            parentCpt = parentCpt[0];
            photoList.forEach((photoItem) => {
                parentCpt.append(selected.get('slideItemEl'));
                var newCpt = parentCpt.getLastChild();
                var linkCpt = newCpt.findType('link')[0];
                linkCpt.setStyle({'background-image':`url(${photoItem})`});
                addContent(photoItem,linkCpt,maxNum);
            })


            function addContent(photoItem,linkCpt,maxNum){
                // 内容
                var _contentHtml = `
                <div class="page-slider  ld-slick-item " data-index="${maxNum}" style="display: block;">
                    <div class="page-slider  slider_href ">
                        <div class="backstage-settings-wrap fix photo_img" style="margin-top: 0; margin-bottom: 12px; position: relative;">
                            <h3 class="backstage-settings-title font16" style="margin-bottom:10px;">
                                选择图片
                            </h3>
                            <img class="now_pic" id="${linkCpt.ccid}" src="${photoItem}">
                            <div class="newpic_control">
                                <div class="newpic_Size"></div>
                                <div class="tihuanpic">
                                    <a>
                                        <i class="fa fa-refresh"></i>
                                        <span>替换图片</span>
                                    </a>
                                </div>
                                <div class="changepicbtns hide" style="display: none;">
                                    <form
                                        class="uploadForm2"
                                        name="uploadForm"
                                        action=""
                                        method="post"
                                        target="coreIframe"
                                        enctype="multipart/form-data"
                                    >
                                        <span class="backstage-settings-iconbtn">
                                            <a href="javascript:void(0)" onclick="javascript:openBrowse2();" class="font14 color444 decorationNone">
                                                <i class="icon-upload-alt"></i>
                                                本地上传
                                            </a>
                                        </span>
                                        <span class="backstage-settings-iconbtn" style="margin-left:6px;">
                                            <a href="javascript:void(0)" id="ffsBtn2" class="font14 color444 decorationNone comp_image_ele">
                                                <i class="icon-cog"></i>
                                                从资料库选择
                                            </a>
                                        </span>
                                        <span class="hide">
                                            本地上传
                                            <input
                                                class="commonFile22"
                                                name="filedata"
                                                type="file"
                                                onchange="$_phoenix.component.component_galleryCommonLink.uploadPhoto2()"
                                                value="选择文件"
                                                style="font-size: 14px;"
                                            >
                                        </span>
                                    </form>
                                </div>
                                <div class="bianjipic">
                                    <a>
                                        <i class="icon ld ld-Picedit"></i>
                                        <span>编辑图片</span>
                                    </a>
                                </div>
                                <div class="hidepic">
                                    <img class="now_pic hide" src="${photoItem}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-slider  ld-section_content ">
                        <div class="page-slider  ld-container ">
                            <div class="page-slider  row-container "></div>
                        </div>
                    </div>
                </div>
                `
                var data_id = component.component_galleryCommonLink.getActiveButtonId();
                $('#' + data_id + ' .ld-slick-slider .ld-slick-item').hide();
                $('#' + data_id + ' .ld-slick-slider').append(_contentHtml);
                // $('.ldSlickSliderContainer .ld-slick-slider').append(_contentHtml);

                $(".tihuanpic").unbind('click').bind('click',function(){
                    $(this).parent().find('.changepicbtns').toggle();
                })
                $(".picSize").each(function (index) {
                    var _this = $(this);
                    var _img = _this.parent().children("img");
                    var realWidth = 0;
                    var realHeight = 0;
                    if (_img.length == 0) {
                        return;
                    }
                    $("<img/>").attr("src", (_img.attr("_src") || _img.attr("src"))).load(function () {
                        realWidth = this.width;
                        realHeight = this.height;
                        if (!!realWidth && !!realHeight) {
                            _this.text("\u539f\u59cb\u5c3a\u5bf8" + realWidth + "*" + realHeight);
                            _this.parent().attr("photowidth", realWidth);
                            _this.parent().attr("photoheight", realHeight);
                        }
                        $(".backstage-uploadpicsortable-list > li .icon-pencil").first().click();
                    });
                });
                $("#ffsBtn").photoInit(component.component_galleryCommonLink.showPhoto);
                $(".comp_image_ele").each(function(index,item){
                    $(item).photoInit(function(photoObject){
                                component.component_galleryCommonLink.showPhoto2(photoObject,item);
                            });
                    })
            }
        },
        photoInitBank: function(showPhotoFunc, paramObj){
            var frame = new FOCUS.PL.R({
                url: '/photobank/refer',
                max: 100,
                events: {
                    ok: function (e, data) {
                        $.post('/photobank/apply.json', {
                            photoIdStr: data.pid + ''
                        }, function (rsp) {
                            if (typeof rsp === 'string') {
                                try {
                                    rsp = new Function('return ' + rsp)();
                                } catch (ex) {
                                    rsp = {};
                                }
                            }

                            if (typeof showPhotoFunc != 'undefined' && ($.isFunction(showPhotoFunc) || $.isFunction(parent.showPhotoFunc))) {
                                if (phoenix.is_internal) {
                                    if (paramObj.blocksSettings) {
                                        //选取区块背景图片 2018-01-08 scf
                                        showPhotoFunc.call(this,rsp, null, paramObj);
                                    } else {
                                        parent.showPhotoFunc.call(this, rsp, null, paramObj);
                                    }
                                } else {
                                    showPhotoFunc.call(this, rsp, null, paramObj);
                                }
                            }
                            frame.hide();
                        });
                    },
                    cancel: function (e, data) {
                        frame.hide();
                    }
                }
            });

            $(this).unbind("click").bind("click", function () {
                if ($(this).hasClass("fa-picture-o")) {
                    $(this).addClass("change").parent("li").siblings().find(".fa-picture-o").removeClass("change")
                }
                // 图片集已经选择的图片数量
                var galleryNum = $(this).parents("#gallery-settings-content").find("#galleryPhotoContent .galleryList li").length;
                if (undefined != paramObj && undefined != paramObj.max) {
                    if (galleryNum && galleryNum > 0 && galleryNum < paramObj.max) {
                        frame.set({
                            max: parseInt(paramObj.max - galleryNum)
                        });
                    } else {
                        frame.set({
                            max: paramObj.max
                        });
                    }
                }
                frame.show();
            });
            $(this).bind("setMax", function (event, maxVal) {
                paramObj = undefined;
                frame.set({
                    max: maxVal
                });
            });
        },
        showPhoto2: function (photoObject,elTree) {
            console.log(elTree);
            
             var _parentPhotoEl;
              var _parentEl;
            if(!elTree){
                var _parentPhotoEl = $('.photo_img.active_upload');
                _parentEl = _parentPhotoEl.parent('.slider_href');
            }else {
                _parentEl = $(elTree).parents('.slider_href');
                _parentPhotoEl = $(elTree).parents('.backstage-settings-wrap');
            }
            // 封面背景图

            if(_parentEl.length > 0){
                $(".img_selected img").attr("src", photoObject.url);
                $(".img_selected").attr("photoId", photoObject.pid);
                $(".img_selected").attr("photoName", photoObject.pname);
                $(".img_selected").attr("photoheight", photoObject.height);
                $(".img_selected").attr("photowidth", photoObject.width);
            }

            _parentPhotoEl.find('.now_pic').attr("src", photoObject.url);//显示图片
            
            var photowidth = photoObject.width;
            var photoheight = photoObject.height;
             var picturesize=$('input[name="picturesize"]').val()
            if(picturesize.length==0){
                picturesize='图片原始尺寸'
            }
            _parentPhotoEl.find(".newpic_Size").text(picturesize+" ：" + photowidth + " *" + photoheight);
        },
        save: function (blockArrayList) {
            $(".backstage-picsttings-closeBtn").click();
            var nodeValue = {
                'photo_ids': $.toJSON(blockArrayList)
            };
            $_phoenix.pagefunc.blocks_editor.blocksSave({
                'nodeValue': $.toJSON(nodeValue)
            }, '', 'phoenix_blocks_gallery')
        },
        initEdit: function(){
            return new Promise(function(resove,reject){
                $('.backstage-uploadpicsortable-list div>li:first-child').addClass('img_selected');
                var editor = grapesjs.init({
                // Indicate where to init the editor. You can also pass an HTMLElement
                container: '#gjs',
                // Get the content for the canvas directly from the element
                // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
                fromElement: true,
                // Size of the editor
                height: '300px',
                width: 'auto',
                // Disable the storage manager for the moment
                storageManager: false,
                // Avoid any default panel
                panels: { defaults: [] },
            });
            var blockJsonDefault =   window.blockJsonDefault &&  window.blockJsonDefault[0];
            editor.loadProjectData(blockJsonDefault);
            resove(editor);
            //  $.ajax({
            //         url: '/phoenix/component/module/get/nodeValue',
            //         method: "POST",
            //         data: {
            //             settingId: 'eoKpfUBLqzQM',
            //             nodeId: 'a23b938a-53d6-4715-b6c4-3ce3f2cf72e1'
            //         },
            //         success: function(response) {
            
            //             console.log(response);
            //             var _dataJson = JSON.parse(response.nodeValue);
            //             var pageJson = _dataJson.photo_ids;
                       
            //             //  editor.loadProjectData()
            //             resove(editor);
            //         },
            //         error: function(error) {
            //             console.log(error);
            //             reject('error');
            //         }
            //     });
            
            // console.log(editor);
            })
        },
        initSeetingData: function(editorEl){
            // 初始化所有组件的默认数据 
            // 文本
            $('.text_edit_ck').each(function(){
                var _id = $(this).attr('id');
                if(_id){
                     var _txt = editorEl.getWrapper().find('#' + _id)[0].get('content');
                     component.component_galleryCommonLink[_id].setData(_txt);
                }
            });
            // 按钮组件
            $('.comp_button').each(function(){
                 var _id = $(this).attr('id');
                 if(_id){
                    var _buttonEl = editorEl.getWrapper().find('#' + _id)[0].find('.lead-button-text')[0];
                    if(_buttonEl){
                        var textNode = _buttonEl.findType('textnode');
                         var _txt = '';
                        if(textNode){
                            _txt = textNode[0].get('content');
                        }else{
                            _txt = _buttonEl.get('content');
                        }
                        component.component_galleryCommonLink[_id].setData(_txt); 
                    }
                 }
            });

            // 轮播图组件
            $('.ldSlickSliderContainer').each(function(index,item){
                var _id = $(item).attr('id');
                if(_id){
                     $(item).find('.slider_href').each(function(hrefIndex,hrefItem){
                        var _model = editorEl.getWrapper().find('#' + _id)[0].find('.slider_href')[hrefIndex];
                        var backgroundImage = _model.getStyle('background-image');
                        backgroundImage = backgroundImage && backgroundImage.match(/\((.*)\)/) && backgroundImage.match(/\((.*)\)/)[1].replace(/"/g,'');
                        // 同步图片
                        $(hrefItem).find('.backstage-settings-wrap img').attr('src',backgroundImage);
                        $("[data-id="+ _id +"] > li").eq(hrefIndex).find('img').attr('src',backgroundImage);
                        
                        // var _attributes = _model.get('attributes');
                        // var _newAttr =  Object.assign(_attributes,{'background-image':_src});
                        // _model.set('attributes',_newAttr);
                        // _model.setStyle({'background-image':'url('+ _src +')'});
                    })
                }
            });
        }
    });

    function galleryCommon_bindEvents() {
        $(".deleteAllSelected").unbind('click').bind('click', function () {
            var data_id = component.component_galleryCommonLink.getActiveButtonId();
            var liArrayList = $('[data-id="' + data_id +'"] li');
            var newArrayList = (Array.from(liArrayList)).reverse();
            newArrayList.forEach(function(item){
                if ($(item).find(".pic_checkBox").hasClass("ischeckedPic")) {
                    var currentIndex = $(item).attr('data-index');
                    var parentEl = $(item).parent().attr('data-id');
                    $('#' + parentEl).find('.ld-slick-item').eq(currentIndex).remove();
                    $(item).remove();

                     var editorEl = component.component_galleryCommonLink.editorEl;
                     var model = editorEl.getWrapper().find('#' + parentEl)[0].find('.ld-slick-item')[currentIndex];
                     model.remove();
                }
            });
            // $(".backstage-uploadpicsortable-list > li").first().click();
            if ($(".galleryList").find("li").length == 0) {
                $(".picsguanli").hide();
                $(".nopicstate").show();
                $(".deleteAllSelected").hide();
            }
        });
        $(".pic_checkBox").unbind('click').bind('click', function () {
            $(this).find("i").toggle();
            if ($(this).hasClass("ischeckedPic")) {
                $(this).removeClass("ischeckedPic");
            } else {
                $(this).addClass("ischeckedPic");
            }
        });
       
        
        $(".bianjipic").click(function () {
            $(".bianjipic").find("img").trigger('click');
        });
        var backstageUploadpicsortableList = function () {
            $(".backstage-uploadpicsortable-list li").each(function (i) {
                $(this).removeAttr("style").find(">span").text(i + 1);
            });
        }
        //立即执行一次排序
        backstageUploadpicsortableList();
        var start_index;
        var end_index;
        $(".backstage-uploadpicsortable-list .silder_left_container").each(function(index,item){
            $(item).sortable({
                zIndex: 9999,
                delay: 200,
                scroll: false,
                cursor: "move",
                cursorAt: {
                    top: 15,
                    left: 15
                },
                create: function () {
                    backstageUploadpicsortableList();
                },
                start: function (event, ui) {
                    start_index =  $(ui.item).index();
                    $(".backstage-uploadpicsortable-list .silder_left_container .ui-sortable-placeholder").removeAttr("style");
                    // $(ui.item).show().fadeTo(0, 0.6).appendTo(".backstage-uploadpicsortable-list .silder_left_container");
                },
                stop: function (event,ui) {
                    console.log(configDefault);
                    end_index = $(ui.item).index();
                    console.log(start_index,end_index);
                    backstageUploadpicsortableList();

                    var _id = $(ui.item).parent().attr('data-id');
                    var editorEl = component.component_galleryCommonLink.editorEl;
                    var model =  editorEl.getWrapper().find('#' + _id)[0];
                    model && moveSlide(model,start_index,end_index);
                }
            });
        })

        function moveSlide(selected,startIndex, endIndex){
            var {ldSliderContainer,ldSliderItem} = configDefault;
            var slideCpt = selected.find(ldSliderItem)[startIndex];
            // 移动到的目标
            var parentCpt = selected.find(ldSliderContainer)[0];
            var newIndex =  endIndex > startIndex ? endIndex +1: endIndex;
            console.log(newIndex);
            slideCpt.move(parentCpt, { at: newIndex});
        }
        $(".backstage-uploadpicsortable-list div > li").unbind("click").bind("click",function () {
            var that_ = $(this);
            
            if($(this).hasClass("isclicked")){
                return
            }
            // var _index = that_.index();
            var _index = parseInt(that_.attr("data-index"));
            var _id = $(that_).parent().attr('data-id');
            $('#' + _id).find('.ld-slick-item').css('display','none');
            $('#' + _id).find('.ld-slick-item[data-index=' + _index + ']').css('display','block');
            // var j = 0;
            $(this).addClass("isclicked");
            $('.changepicbtns').hide();
//             var photowidth = $(this).attr("photowidth");
//             var photoheight = $(this).attr("photoheight");
//              var picturesize=$('input[name="picturesize"]').val()
//             if(picturesize.length==0){
//                 picturesize='图片原始尺寸'
//             }
            // $(".newpic_Size").text(picturesize+" ：" + photowidth + " *" + photoheight);
            $(".img_selected").removeClass("img_selected");
            $(this).addClass("img_selected");
            // $(".deletePic").hide();
            // $(".img_selected .deletePic").show();
            //  $(".backstage-picsttings-closeBtn").click();
            // var _this = $(this).find('img')[0];
            
            // $(".now_pic").attr('src', _this.src);
            //当前对象属性
            // var editZone = $(".backstage-settings-uploadpicsortable .backstage-uploadpicsortable-picsttings");
            // var pic = $(this);
            // var picNameNoSuf = $(this).find("#picNameNoSuf");
           
     
            // var linkJson = $(this).find("#linkJson");
            // var descJson = $(this).find("#descJson");
            // var picIcon = $(this).find(".picIcon");
            // var buttonVal = $(this).find("#buttonTextHidden")
            // var galleryModel = $('input[name=galleryModel]:checked').val();
            // //编辑区域属性
            // var picNameNoSufEdit = $("#pictureAlt", editZone);
            // var descJsonEdit = $("#pictureDescCK", editZone);
            // var linkJsonEdit = $("input[name='linkJson']", editZone);
            // var buttonEdit = $("#buttonText", editZone);
            // var picIconEdit = $("#pictureIconEdit", editZone);
          
            // //选择图片
            // //$('.pictureIconEditChoose',editZone).photoInit(viewIconImg, {max: 1});
            // $('.pictureIconEditRemove', editZone).unbind('click').bind('click', function () {
            //     $(this).siblings('#pictureIconEdit').attr("src", '');
            // })
            // //上传背景图片
            // $('.uploadForm input', editZone).unbind('change').bind('change', function (e) {
            //     var size = e.target.files[0].size;
            //     size = size / (1024 * 1024);
            //     if (size > 1) {
            //         // $_phoenix.ale rt('上传图片', '图片不大于1M！')
            //         return;
            //     }
            //     $('.uploadForm', editZone).attr('action', $_phoenix.getPhotoUploadUrl('component.component_galleryCommonLink.showIconPhoto', 5));
            //     $_phoenix.spinner.show();
            //     $('.uploadForm', editZone).submit();
            // })
            // $('.pictureIconEditUpload', editZone).unbind('click').bind('click', function () {
            //     $('.uploadForm input', editZone).click();
            // })
            // //将各个图片保存的数据设置到编辑区域
            // linkJsonEdit.val(linkJson.val());
            // buttonEdit.val(buttonVal.val());
            // //触发change事件使链接插件更新数据
            // linkJsonEdit.change();
            // descJsonEdit.val($.isEmptyObject(descJson.html()) ? "" : descJson.html());
            // picNameNoSufEdit.val($.isEmptyObject(picNameNoSuf.html()) ? "" : picNameNoSuf.html());
            // picIconEdit.attr('src', picIcon.val() ? picIcon.val() : '');
            that_.removeClass("isclicked");

            // $(editZone).show();
            // $(".backstage-dialog-resizable").addClass('editZone');
            // //$_phoenix.backstageEffect.addDialogBottomLayer();
            // $(".backstage-picsttings-closeBtn", editZone).unbind("click").bind("click", function () {
            //     picNameNoSuf.html($.isEmptyObject(picNameNoSufEdit.val()) ? "" : picNameNoSufEdit.val());
            //     linkJson.val(linkJsonEdit.val());
            //     descJson.html($.isEmptyObject(descJsonEdit.val()) ? "" : descJsonEdit.val());
            //     buttonVal.val($.isEmptyObject(buttonEdit.val()) ? "" : buttonEdit.val());
            //     picIcon.val(picIconEdit.attr('src'));
            //     //$(editZone).hide();
            //     $(".backstage-dialog-resizable").removeClass('editZone');
            //     $_phoenix.backstageEffect.removeDialogBottomLayer();
            // });
            // $(".backstage-dialogpicsedit-cancel", editZone).unbind("click").bind("click", function () {
            //     $(editZone).hide();
            //     $(".backstage-dialog-resizable").removeClass('editZone');
            //     $_phoenix.backstageEffect.removeDialogBottomLayer();
            // })
            // var initParams = {
            //     uploadForm: $('#uploadForm'),
            //     uploadUrl: $_phoenix.getPhotoUploadUrl('component.component_galleryCommonLink.showPhoto2', 5, true)
            // };
            // $(".hidepic .now_pic").cropperMaster(initParams);
        });
        $(".backstage-uploadpicsortable-list li .deletePic").click(function () {
            if ($(this).parent().next().length) {
                $(this).parent().next().click();
            } else {
                $(".backstage-uploadpicsortable-list > li").first().click();
            }
            $(this).parent().remove();
            if ($(".galleryList").find("li").length == 0) {
                $(".picsguanli").hide();
                $(".nopicstate").show();
            }
            backstageUploadpicsortableList();
        });
    }
})(window, jQuery, typeof window.$_phoenix === 'undefined' ? (window.$_phoenix = {}) : window.$_phoenix);