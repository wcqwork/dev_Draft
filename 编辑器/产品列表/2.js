(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "prodPayment_style1";
  var prodPayment_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(prodPayment_style1, {
    "init": init
  })

  function init() {
    var paymentFun = function (paramsObj) {
      const {
        prodIds,
        skuImgUrl,
        skuValueId,
        quantity,
        extendProp
      } = paramsObj;
      const params = {
        confirmType: 1,
        extendProp,
        prodIds,
        quantity,
        skuValueId,
        skuImgUrl,
        pluginType: "",
        subscribeId: ""
      }
      console.log(params);
      if (window.leadProductBaseEvents) {
        window.leadProductBaseEvents.placeOrder(params);
      }
    }
    $('body').off('click', '.prodPayment_btn').on('click', '.prodPayment_btn', function () {
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
          skuImgUrl: "",
          skuValueId:"",
          quantity:1,
          extendProp: []
        })
      } else {
        var nodeExtendParams = _block_namespaces_[nodeId] || (_block_namespaces_[nodeId] = {});
        var skuParam = nodeExtendParams.getSkuParams && nodeExtendParams.getSkuParams();
        var quantity = (nodeExtendParams.getQuantity && nodeExtendParams.getQuantity()) || 1;
        if (skuParam && quantity) {
          var { relationImage, skuValueId, stock, transValueList } = skuParam;
          const propMap = transValueList.map((item) => {
            return {
              "value": item,
              "quantity": quantity
            }
          })
          paymentFun({
            prodIds,
            skuImgUrl: relationImage,
            skuValueId,
            quantity,
            extendProp: propMap
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