function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.67652,
            lng: 3.1883
        },
        scrollwheel: true,
        zoom: 15

    });
    var myLatLng = {lat: 50.67652, lng: 3.1883};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}