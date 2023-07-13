function initMap() {
    const mapOptions = {
        center: {lat: 33.158092, lng: -117.350594 },
        zoom: 12
    };
    
    new google.maps.Map(document.querySelector('.google-map'), mapOptions);
}