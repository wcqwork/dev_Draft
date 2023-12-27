var longtitude = 0;
var latitude = 0;
function GetPostion(address) {
    //通过百度获取经纬度
    var url = "http://api.map.baidu.com/geocoder/v2/?address=" + address + "&output=json&ak=FG7wxr1VUj0k2NwoO3yXzymd&callback=?";

    $.getJSON(url, function (data) {
        longtitude = data.result.location.lng;
        latitude = data.result.location.lat;
    });
}
var address = "中国江苏省盐城市建湖县客运站";
GetPostion(address);