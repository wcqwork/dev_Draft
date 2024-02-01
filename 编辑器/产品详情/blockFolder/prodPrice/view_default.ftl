<div id="${pageNodeId}" class="prodPrice" data-block-uuid="prodPrice" data-minimumUnit-component='{"extraData":["coinSymbol","isB2cPlan","prodStructureData"],"list":["enabledTrade","isSkuProd","prodPrice","shopProdPrice","shopProdPriceMax","minPrice","maxPrice"]}' data-default-setting={}>
    [#if product.enabledTrade?? && product.enabledTrade == 'true']
    [#if product.isSkuProd?? && product.isSkuProd == 'true']
    <div class="prodPrice_original prodPrice_container">
        <div>原价：</div>
        <div class="prodPrice_price">
            <span class="prodPrice_coinSymbol">
                ${data.productList.extraData.coinSymbol!'$'}
            </span>
            <span class="prodPrice_value" data-origin-value="${product.minPrice?string["0.00"]} ~ ${product.maxPrice?string["0.00"]}">
                ${product.minPrice?string["0.00"]} ~ ${product.maxPrice?string["0.00"]}
            </span>
        </div>
    </div>
    <div class="prodPrice_discountprice prodPrice_container">
        <div>折扣价：</div>
        <div class="prodPrice_price">
            <span class="prodPrice_coinSymbol">
                ${data.productList.extraData.coinSymbol!'$'}
            </span>
            <span class="prodPrice_value" data-origin-value="${product.shopProdPrice?string["0.00"]} ~ ${product.shopProdPriceMax?string["0.00"]}">
                ${product.shopProdPrice?string["0.00"]} ~ ${product.shopProdPriceMax?string["0.00"]}
            </span>
        </div>
    </div>
    [#else]
    <div class="prodPrice_price prodPrice_prodPrice">
        <span class="prodPrice_coinSymbol">
            ${data.productList.extraData.coinSymbol!'$'}
        </span>
        <span class="prodPrice_value">
            ${product.prodPrice?string["0.00"]?html}
        </span>
    </div>
    [/#if]
    [#else]
    请后台开启在线交易功能
    [/#if]
    <script>
    leadComponentSite.globalMinimumUnitEvent.on("${nodeId!''}", function(notifyOriginType, selectedProdObj) {
        if (notifyOriginType && notifyOriginType == 'sku') {
            var originalEl = $("#${pageNodeId!''} .prodPrice_original .prodPrice_value");
            var discountpriceEl = $("#${pageNodeId!''} .prodPrice_discountprice .prodPrice_value");
            var prodPriceEl = $("#${pageNodeId!''} .prodPrice_prodPrice .prodPrice_value");
            if (selectedProdObj) {
                if (selectedProdObj.comparePrice) {
                    originalEl.text(selectedProdObj.comparePrice)
                }
                if (selectedProdObj.price) {
                   discountpriceEl.text(selectedProdObj.price)
                }
                if (selectedProdObj.prodPrice) {
                    prodPriceEl.text(selectedProdObj.prodPrice)
                }
            }else{
                var rangeOriginalPrice = originalEl.attr("data-origin-value");
                var rangeDiscountpricePrice = discountpriceEl.attr("data-origin-value");
                if(rangeOriginalPrice){
                    originalEl.text(rangeOriginalPrice)
                }
                if(rangeDiscountpricePrice){
                    discountpriceEl.text(rangeDiscountpricePrice)
                }
            }
        }
    })
    </script>
</div>