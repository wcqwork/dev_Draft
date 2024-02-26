(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "prodAddCart_style1";
  var prodAddCart_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(prodAddCart_style1, {
    "init": init
  })

  function init() {
    var paymentFun = function (paramsObj) {
      const {
        skuValueId,
        quantity
      } = paramsObj;
      const params = {
        prodIds: nodeObj.prodIds,
        quantity,
        skuValueId,
        pluginType: "",
        subscribeId: ""
      }
      console.log(params);
      if (window.leadProductBaseEvents) {
        window.leadProductBaseEvents.placeOrder(params);
      }
    }
    $('body').off('click', '.prodAddCart').on('click', '.prodAddCart', function () {
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
          skuValueId:'',
          quantity:1
        })
      } else {
        // 详情
        var nodeExtendParams = _block_namespaces_[nodeId] || (_block_namespaces_[nodeId] = {});
        var skuParam = nodeExtendParams.getSkuParams && nodeExtendParams.getSkuParams();
        var quantity = (nodeExtendParams.getQuantity && nodeExtendParams.getQuantity()) || 1;
        if (skuParam && quantity) {
          var { skuValueId } = skuParam;
          paymentFun({
            skuValueId,
            quantity
          })
        } else {
          console.log('缺少sku、quantity参数');
        }
      }
    })
  }

  onloadHack(function(){
    init()
  })
})(window, jQuery);