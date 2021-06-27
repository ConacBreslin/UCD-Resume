function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        
        { lat: 54.06450237553732, lng: -6.028528786630264 },
        { lat: 54.21745592671618, lng: -5.894286737071791 },
        { lat: 53.34399843039578, lng: -6.254711065282497 },
        { lat: 51.504661005519154, lng: -0.08087226188185156 },
        { lat: 51.471797256184345, lng: -0.09322029038247819 },
        { lat: 53.29828271680004, lng: -6.178635738030834 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}