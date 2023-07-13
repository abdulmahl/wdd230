function initMap() {
    const mapOptions = {
        center: {lat: -26.093611, lng: 28.006390 },
        zoom: 15
    };
    
    new google.maps.Map(document.querySelector('.google-map'), mapOptions);
}