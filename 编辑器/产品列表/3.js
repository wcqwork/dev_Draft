(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "prodInquire_style1";
  var prodInquire_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(prodInquire_style1, {
    "init": init
  })

  function init() {
    var paymentFun = function (paramsObj) {
      const {
        prodIds,
        skuValueId,
        quantity
      } = paramsObj;
      const params = {
        prodIds,
        skuParam: skuValueId,
        quantity
      }
      console.log(params);
      if (window.leadProductBaseEvents) {
        window.leadProductBaseEvents.productInquire(params);
      }
    }

    $('body').off('click', '.prodInquire').on('click', '.prodInquire', function () {
      var that = $(this);
      var prodIds = that.attr("data-prodIds")
      var nodeId = that.attr("data-nodeId")
      var containerComponentType = that.attr("data-componentType")
      if (!prodIds || !nodeId) {
        console.log('缺少prodIds、nodeId参数');
        return;
      }
      // 产品列表
      if (containerComponentType && containerComponentType === 'dynamic-list-container') {
        paymentFun({
          prodIds,
          skuValueId: "",
          quantity: 1
        })
      } else {
        var nodeExtendParams = _block_namespaces_[nodeId] || (_block_namespaces_[nodeId] = {});
        var skuParam = nodeExtendParams.getSkuParams && nodeExtendParams.getSkuParams();
        var quantity = (nodeExtendParams.getQuantity && nodeExtendParams.getQuantity()) || 1;
        if (skuParam && quantity) {
          var { skuValueId } = skuParam;
          paymentFun({
            prodIds,
            skuValueId,
            quantity
          })
        } else {
          console.log('缺少sku、quantity参数');
        }
      }
    })
  }
  onloadHack(function () {
    init()
  })
})(window, jQuery);