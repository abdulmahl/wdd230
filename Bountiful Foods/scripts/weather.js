// let dayOfWeek = () => {
//     new Date().toLocaleDateString('en-EN', {'weekday': 'short'});
// }


// For the larger screens display five days.
const lrgForecast = document.querySelector('.forecast');
lrgForecast.textContent = 'Carlsbad Weather Forecast'

const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';

// let gotPosition = function(pos) {
//     let lat = pos.coord.latitude;
//     let lon = pos.coord.longitude;
//     console.log(lat);
//     console.log(lon);
//     getForecast(lat, lon);
// }

let getForecast = function() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    + 'lat=33.158092&lon=-117.350594&d=Carlsbad&units=metric&appid=' 
    + apiKey;
    getWeatherText(apiUrl);
}

let getWeatherText = async function(url) {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    console.log(weatherText);
    console.log(weatherObject);
    // parseWeather(weatherText);
}

getWeatherText();


