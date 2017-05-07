function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.8524387,
            lng: 2.373949
        },
        scrollwheel: true,
        zoom: 15

    });
    var myLatLng = {lat: 48.8524387, lng: 2.373949};
    var image = {
        url: '../img/logo9.svg',
    };
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Agence Digital Web 5 rue de Charonne 75011 - Paris',
        icon : image
    });
}