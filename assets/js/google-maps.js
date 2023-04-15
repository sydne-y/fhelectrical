function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -26.241334992135563, lng: 28.038491382222546};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '101 Bertha St, Turffontein, Johannesburg South, 2140' // Title Location
    });
}

