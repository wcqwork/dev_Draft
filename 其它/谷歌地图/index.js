if ($.cookie("appPoi") == null || $.cookie("appPoi") == "undefined" || $.cookie("appPoi") == undefined) {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (r.point != undefined) {
            $lng = r.point.lng;
            $lat = r.point.lat;
        }
        if (r.longitude != undefined) {
            $lng = r.longitude;
            $lat = r.latitude;
        }
        if ($lng != 0) {
            $.cookie("appPoi", $lng + "a" + $lat, { expires: 1 });
        }
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            appPoi = $lng + "a" + $lat;
        } else {
            appPoi = defaultPosition;
        }

    }, {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 5000 * 60
    });
} else {
    appPoi = $.cookie("appPoi");
}