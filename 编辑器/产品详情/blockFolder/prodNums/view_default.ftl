<div id="${pageNodeId}" class="prodNums" data-block-uuid="prodNums" data-minimumUnit-component="" data-default-setting={}>
  <div class="decrease_btn quantity__button" data-quantity-type="decrease">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor"></path>
    </svg>
  </div>
  <input type="number" name="quantity" class="quantity__input" min="1" step="1" value="1" />
  <div class="increase_btn quantity__button" data-quantity-type="increase">
    <svg viewBox="0 0 50 50" fill="currentColor" style="--h-xs: 30;">
      <path d="M47.9167 20.8333H29.1667V2.08333C29.1667 0.932292 28.2344 0 27.0833 0H22.9167C21.7656 0 20.8333 0.932292 20.8333 2.08333V20.8333H2.08333C0.932292 20.8333 0 21.7656 0 22.9167V27.0833C0 28.2344 0.932292 29.1667 2.08333 29.1667H20.8333V47.9167C20.8333 49.0677 21.7656 50 22.9167 50H27.0833C28.2344 50 29.1667 49.0677 29.1667 47.9167V29.1667H47.9167C49.0677 29.1667 50 28.2344 50 27.0833V22.9167C50 21.7656 49.0677 20.8333 47.9167 20.8333Z"></path>
    </svg>
  </div>
  <!-- 产品订购量  -->
  <div class="prodStockContainer">
    <span class="prodStock"></span>
    [#if product.wholeSaleFlag?? && product.wholeSaleFlag == '1']
    <span class="prodOrderQuantity">
      [#-- 最小最大订购量 --]
      [#if product.minOrderQuantity?? && product.minOrderQuantity!='']
      min order: ${product.minOrderQuantity!''}
      [#if product.productUnitValue?? && product.productUnitValue!='']
      ${product.productUnitValue!''}
      [/#if]
      [/#if]
      [#if product.maxOrderQuantity?? && product.maxOrderQuantity!='']
      max order: ${product.maxOrderQuantity!''}
      [#if product.productUnitValue?? && product.productUnitValue!='']
      ${product.productUnitValue!''}
      [/#if]
      [/#if]
    </span>
    [/#if]
  </div>
  <script>
  window._block_namespaces_['prodNums_style1'].init({
    'nodeId': '${nodeId!}',
    "pageNodeId": "${pageNodeId!''}",
  });
  </script>
</div>