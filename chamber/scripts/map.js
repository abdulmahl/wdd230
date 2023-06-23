
function initMap() {
    const mapOptions = {
        center: {lat: -26.093611, lng: 28.006390 },
        zoom: 12
    };
    let map = new google.maps.Map(document.querySelector('.google-map'), mapOptions);
}