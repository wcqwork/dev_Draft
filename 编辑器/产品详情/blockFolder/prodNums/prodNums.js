(function (window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "prodNums_style1";
  var prodNums_style1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(prodNums_style1, {
      "init": init
  })

  function init(nodeObj) {
      if (!!!nodeObj) {
          return;
      }
      var $selector = $('#' + nodeObj.pageNodeId);

      var decrease_btn = $selector.find('.decrease_btn');
      var increase_btn = $selector.find('.increase_btn');
      var quantityNum = $selector.find('.quantity__input');
      function quantityCalc(type) {
          var currentVal = quantityNum.val();
          if (type === 'increase') {
              quantityNum.val(++currentVal).trigger("change");
          } else if (type === 'decrease') {
              quantityNum.val(--currentVal).trigger("change");
          }
      }
      decrease_btn.click(function () {
          quantityCalc('decrease')
      })
      increase_btn.click(function () {
          quantityCalc('increase')
      })
      quantityNum.change(function (event) {
          var tagetEl = event.target;
          if(tagetEl.value){
              // 通知所有订阅
              if(leadComponentSite && leadComponentSite.globalMinimumUnitEvent && nodeObj.nodeId){
                  leadComponentSite.globalMinimumUnitEvent.emit(nodeObj.nodeId, {
                      prodNums:parseInt(tagetEl.value)
                  })
              }
          }
      })
  }
})(window, jQuery);