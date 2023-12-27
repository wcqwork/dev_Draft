$(function () {
    if ($('#siteblocks-setting-wrap-${componentBlock.settingId!}').length) {
        var settingid = '${componentBlock.settingId!}';
        var blockId = '${componentBlock.appId!}';
        var blockName = "block" + blockId;
        window._vueblock_namespaces_[blockName].$mount($('#siteblocks-setting-wrap-${componentBlock.settingId!}').get(0), settingid);
    }
});




    
//ga埋点
onloadHack(function(){
    buyOrderProduct(purchase)
});

function getCartProducts() {
    var cartArryList = [];
    $(".order-wrapper .order-list ul li").each(function () {
        var obj = {};
        obj.id = $(this).find("p.id").text();
        obj.name = $(this).find("p.name").text();
        cartArryList.push(obj);
    });
    return cartArryList;
}

function buyOrderProduct(purchase) {
    if (window.sendHit) {
        var cart = getCartProducts();
        buyProduct(cart, purchase);
    }
}

// 付款
function buyProduct(cart,purchase){
    ga("require", "ec");
    for(var i = 0; i < cart.length; i++) {
        var product = cart[i];
        ga('ec:addProduct', {
            'id': product.id,
            'name': product.name
        });
    }
    ga('ec:setAction', 'purchase', {
        'id': purchase.id,
        'revenue': purchase.revenue
    });
    ga('send', 'event', 'purchase', 'click', 'purchase');
}