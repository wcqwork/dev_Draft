<div id="${pageNodeId}" class="photoUrlList" data-block-uuid="photoUrlList" data-minimumUnit-component="photoUrlList"  data-default-setting={"componentSetting":{"mediaThumbsListWidthObj":{"unit":"%","value":100},"mediaThumbsListMarginObj":{"margin-left":0,"unit":"px","margin-top":10,"margin-bottom":0,"margin-right":0},"isShowMediaThumbs":"0","mainMediaHeightObj":{"unit":"px","value":300},"mediaThumbsNumsObj":{"value":5},"mediaThumbsSpaceObj":{"unit":"px","value":10},"mediaThumbsPosition":"2","mediaThumbsListHeightObj":{"unit":"px","value":60}}} >
[#if product?? && product.photoUrlList?? && product.photoUrlList?size > 0]
  [#assign mappingObj = {
    '0':{
      'className':'upAndDown upAndDown_translate',
      'swiperVariableConfig':'upAndDown'
    },
    '1':{
        'className':'leftAndRight',
        'swiperVariableConfig':'leftAndRight'
    },
    '2':{
      'className':'upAndDown',
      'swiperVariableConfig':'upAndDown'
    },
    '3':{
      'className':'leftAndRight leftAndRight_translate',
      'swiperVariableConfig':'leftAndRight'
    }
  }]
  [#if componentSetting?? && componentSetting != ""]
		[#assign componentSettingJSON=componentSetting?eval /]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsPosition??]
        [#assign defaultClassDration = mappingObj[componentSettingJSON.mediaThumbsPosition].className]
        [#assign currentVariable = mappingObj[componentSettingJSON.mediaThumbsPosition].swiperVariableConfig]
    [/#if]
  [/#if]
    <div class="lead_swiper_container ${defaultClassDration!'upAndDown'}">
      <div class="swiper lead_swiper lead_swiper_wrapper">
        <div class="swiper-wrapper">
          [#list product.photoUrlList as photoUrlItem]
            <div class="swiper-slide">
              <img data-gjs-type="default" src="${photoUrlItem!}" alt="${product.prodName!?html}" title="${product.prodName!?html}" />
            </div>
          [/#list]
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      [#if !componentSettingJSON?? || (componentSettingJSON?? && componentSettingJSON.isShowMediaThumbs && componentSettingJSON.isShowMediaThumbs != '1')]
      <div thumbsSlider="" class="swiper lead_swiper lead_swiper_thumbs">
        <div class="swiper-wrapper">
          [#list product.photoUrlList as photoUrlItem]
            <div class="swiper-slide">
              <img data-gjs-type="default" src="${photoUrlItem!}" alt="${product.prodName!?html}" title="${product.prodName!?html}" />
            </div>
          [/#list]
        </div>
      </div>
      [/#if]
    </div>
    [#if componentSettingJSON?? && componentSettingJSON.mainMediaHeightObj??]
        [#assign swiper_wrapperHeight = componentSettingJSON.mainMediaHeightObj.value + componentSettingJSON.mainMediaHeightObj.unit]
    [/#if]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsNumsObj??]
        [#assign swiper_mediaThumbsNums = componentSettingJSON.mediaThumbsNumsObj.value]
    [/#if]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsSpaceObj??]
        [#assign swiper_mediaThumbsSpace = componentSettingJSON.mediaThumbsSpaceObj.value + componentSettingJSON.mediaThumbsSpaceObj.unit]
        [#assign swiper_mediaThumbsSpaceNum = componentSettingJSON.mediaThumbsSpaceObj.value]
    [/#if]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsListWidthObj??]
        [#assign swiper_mediaThumbsListWidth = componentSettingJSON.mediaThumbsListWidthObj.value + componentSettingJSON.mediaThumbsListWidthObj.unit]
    [/#if]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsListHeightObj??]
        [#assign swiper_mediaThumbsListHeight = componentSettingJSON.mediaThumbsListHeightObj.value + componentSettingJSON.mediaThumbsListHeightObj.unit]
    [/#if]
    [#if componentSettingJSON?? && componentSettingJSON.mediaThumbsListMarginObj??]
        [#assign swiper_mediaThumbsListMarginLeft = componentSettingJSON.mediaThumbsListMarginObj['margin-left'] + componentSettingJSON.mediaThumbsListMarginObj.unit]
        [#assign swiper_mediaThumbsListMarginTop = componentSettingJSON.mediaThumbsListMarginObj['margin-top'] + componentSettingJSON.mediaThumbsListMarginObj.unit]
        [#assign swiper_mediaThumbsListMarginRight = componentSettingJSON.mediaThumbsListMarginObj['margin-right'] + componentSettingJSON.mediaThumbsListMarginObj.unit]
        [#assign swiper_mediaThumbsListMarginBottom = componentSettingJSON.mediaThumbsListMarginObj['margin-bottom'] + componentSettingJSON.mediaThumbsListMarginObj.unit]
    [/#if]
    <style>
        #${pageNodeId} .lead_swiper_container{
              /* 主图大小 */
            --swiper_wrapperWidth: 100%;
            --swiper_wrapperHeight: ${swiper_wrapperHeight!'432px'};
            /* 整个缩略图 整个缩略图间距*/
            /* --swiper_thumbsWidth: 108px; */
            --swiper_thumbsWidth: ${swiper_mediaThumbsListWidth!'100%'};
            --swiper_slidesPerView: ${swiper_mediaThumbsNums!4};
            --swiper_thumbsSpaceBetween_top: ${swiper_mediaThumbsListMarginTop!'10px'};
            --swiper_thumbsSpaceBetween_right: ${swiper_mediaThumbsListMarginRight!'0px'};
            --swiper_thumbsSpaceBetween_bottom: ${swiper_mediaThumbsListMarginBottom!'0px'};
            --swiper_thumbsSpaceBetween_left: ${swiper_mediaThumbsListMarginLeft!'0px'};
            /* 缩略图一个小块间距 */
            --swiper_thumbsSlideHeight: ${swiper_mediaThumbsListHeight!'108px'};;
            --swiper_swiperSlideSpaceBetween:${swiper_mediaThumbsSpace!'10px'};
        }
    </style>
    <script>
        window._block_namespaces_['swiperPhotoImg77361_style1'].init({
          'nodeId':'${nodeId!}',
          "pageNodeId":"${pageNodeId!''}",
          "selectorUuid": "#${pageNodeId}",
          "slidesPerView": ${swiper_mediaThumbsNums!4},
          "spaceBetween": ${swiper_mediaThumbsSpaceNum!10},
          "componentSetting":'${componentSetting!}',
          "currentVariable":"${currentVariable!'upAndDown'}"
        });
    </script>
[#else]
  [@web_backend]
    请在后台产品添加产品图片
  [/@web_backend]
[/#if]
</div>