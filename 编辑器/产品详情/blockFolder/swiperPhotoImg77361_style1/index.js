(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "swiperPhotoImg77361_style1";
  var swiperPhotoImg77361_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(swiperPhotoImg77361_style1, {
      "init": init
  })

  function init(nodeObj) {
      if (!!!nodeObj) {
          return;
      }
      console.log('swiperPhotoImg77361_style1')
      var $selector = $('#' + nodeObj.pageNodeId);

      const renderCallback = function (options) {
          console.log('miniUnitProductImg init callback')
          const upAndDown = {
              swiperSetting: function (config) {
                  return {
                      selector: config.selectorUuid + " .upAndDown .lead_swiper_thumbs",
                      config: {
                          spaceBetween: config.spaceBetween || 10,
                          slidesPerView: config.slidesPerView || 4,
                          freeMode: true,
                          watchSlidesProgress: true,
                      }
                  }
              },
              thumbsSetting: function (swiper, config) {
                  return {
                      selector: config.selectorUuid + " .upAndDown .lead_swiper_wrapper",
                      config: {
                          navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                          },
                          thumbs: {
                              swiper: swiper,
                          },
                      }
                  }
              }
          }
          const leftAndRight = {
              swiperSetting: function (config) {
                  return {
                      selector: config.selectorUuid + " .leftAndRight .lead_swiper_thumbs",
                      config: {
                          spaceBetween: config.spaceBetween || 10,
                          slidesPerView: config.slidesPerView || 4,
                          direction: 'vertical',
                          freeMode: true,
                          watchSlidesProgress: true,
                      }
                  }
              },
              thumbsSetting: function (swiper, config) {
                  return {
                      selector: config.selectorUuid + " .leftAndRight .lead_swiper_wrapper",
                      config: {
                          navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                          },
                          thumbs: {
                              swiper: swiper,
                          },
                      }
                  }
              }
          }

          const leadSwiperOption = {
              upAndDown,
              leftAndRight
          }

          const initLeaSwiper = (setting, config) => {
              const { swiperSetting, thumbsSetting } = setting
              const swiperOption = swiperSetting(config)
              var swiper;
              if (document.querySelector(swiperOption.selector)) {
                  swiper = new Swiper(swiperOption.selector, swiperOption.config);
              }
              const thembsOption = thumbsSetting(swiper, config)
              var swiper2 = new Swiper(thembsOption.selector, thembsOption.config);
          }
          initLeaSwiper(leadSwiperOption[options.currentVariable], options)
      }
      const componentParams = {
          callback: function () {
              console.log('swiperPhotoImg77361_style1 init callback')
              renderCallback(nodeObj)
          }
      }
      const params = Object.assign(nodeObj, componentParams)
      leadComponentSite.miniUnitProductImg.init(params);
  }
})(window, jQuery);