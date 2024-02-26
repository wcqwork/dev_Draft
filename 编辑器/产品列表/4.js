(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "prodbasket_style1";
  var prodbasket_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(prodbasket_style1, {
    "init": init
  })

  function init() {
    var paymentFun = function (paramsObj) {
      const {
        prodIds,
        prodName,
        skuImgUrl,
        skuValueId,
        quantity
      } = paramsObj;
      const params = {
        prodId: prodIds,
        prodPhotoUrl: skuImgUrl,
        quantity,
        skuParam: skuValueId,
        selectParam: "",
        prodName
      }
      console.log(params);
      if (window.leadProductBaseEvents) {
        window.leadProductBaseEvents.inquireBasket(params);
      }
    }
    $('body').off('click', '.prodbasket').on('click', '.prodbasket', function () {
      var that = $(this);
      var prodIds = that.attr("data-prodIds")
      var nodeId = that.attr("data-nodeId")
      var prodName = that.attr("data-prodName")
      var containerComponentType = that.attr("data-componentType")
      if (!prodIds || !nodeId) {
        console.log('缺少prodIds、nodeId参数');
        return;
      }
      // 产品列表
      if (containerComponentType && containerComponentType === 'dynamic-list-container') {
        paymentFun({
          prodIds,
          prodName,
          skuImgUrl: "",
          skuValueId: "",
          quantity: 1
        })
      } else {
        var nodeExtendParams = _block_namespaces_[nodeId] || (_block_namespaces_[nodeId] = {});
        var skuParam = nodeExtendParams.getSkuParams && nodeExtendParams.getSkuParams();
        var quantity = (nodeExtendParams.getQuantity && nodeExtendParams.getQuantity()) || 1;
        if (skuParam && quantity) {
          var { relationImage, skuValueId, stock, transValueList } = skuParam;
          paymentFun({
            prodIds,
            prodName,
            skuImgUrl: relationImage,
            skuValueId,
            quantity
          })
        } else {
          console.log('缺少sku、quantity参数');
        }
      }
    });
  }
  onloadHack(function () {
    init()
  })
})(window, jQuery);