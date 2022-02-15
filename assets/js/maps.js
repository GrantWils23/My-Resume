function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.6192621,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.472991111950435, lng: -0.2753259201079939} , 
        { lat: 51.454343586901246, lng: -2.5886901193503604} , 
        { lat: 51.63355864223156, lng: -0.1276839988353709} , 
        { lat: 50.08599667468619, lng: 19.880093043810746} ,
        { lat: 47.52304765897562, lng: 19.112176210569785} ,
        { lat: 30.331187990052587, lng: 35.441586285604494} ,
        { lat: 29.56026000401422, lng: 35.38874186481247} ,
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });    
}