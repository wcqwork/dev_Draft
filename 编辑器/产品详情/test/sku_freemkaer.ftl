<div class="sku_container">
    <div class="sku_item">
        <p class="skuName">尺寸：</p>
        <div class="specBox">
            <div class="specOption specAction ">S</div>
            <div class="specOption ">M</div>
            <div class="specOption ">L</div>
        </div>
    </div>
    <div class="sku_item">
        <p class="skuName">颜色：</p>
        <div class="specBox">
            <div class="specOption "><img class="transImage"
                    src="//rornrwxhjjjr5o.leadongcdn.cn:6541/cloud/lnBqmKmiSRmknplpikk/qwe-120-120.png">红色</div>
            <div class="specOption specAction "><img class="transImage"
                    src="//rornrwxhjjjr5o.leadongcdn.cn:6541/cloud/lqBqmKmiSRmknplpkkk/1341041-120-120.png">黑色</div>
            <div class="specOption "><img class="transImage"
                    src="//rornrwxhjjjr5o.leadongcdn.cn:6541/cloud/lmBqmKmiSRmknplpnkk/hzhmynft-120-120.jpg">黄色</div>
            <div class="specOption "><img class="transImage"
                    src="//rornrwxhjjjr5o.leadongcdn.cn:6541/cloud/ljBqmKmiSRmknplpmjl/hzh-nft-120-120.jpg">白色</div>
        </div>
    </div>
</div>
<div class="sku_container">
    [#if product.productSkuItem.skuOptionItemListStr?? && product.productSkuItem.skuOptionItemListStr != ""]
    [#assign skuOptionItemListStrObj=product.productSkuItem.skuOptionItemListStr?eval /]
    [#list skuOptionItemListStrObj as skuOptionItem]
    <div class="sku_item">
        <p class="skuName">
            ${skuOptionItem.skuName!''}
        </p>
        [#if skuOptionItem.transNameList??]
        <div class="specBox">
            [#list skuOptionItem.transNameList as transName]
            <div class="specOption ">
                ${transName!''}
            </div>
            [/#list]
        </div>
        [/#if]
    </div>
    [/#list]
    [/#if]
</div>