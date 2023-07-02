const date = new Date();

let fullDateandTime = `${date.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

const fullYear = document.querySelector('#year');
fullYear.textContent = date.getFullYear();
document.querySelector("#dateTime").textContent = fullDateandTime;



let toggleMenu = function() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// For the base only display 3 days weather forecast
const baseForecast = document.querySelector('.forecast');
baseForecast.textContent = 'Carlsbad Three Day Weather Forecast'

// For the larger screens display five days.
const lrgForecast = document.querySelector('.forecast-lrg');
lrgForecast.textContent = 'Carlsbad Five Day Weather Forecast'

// const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';

// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
//     + 'lat=33.158092&lon=-117.350594&d=Carlsbad&units=metric&appid=' 
//     + apiKey;
    
// fetch(apiUrl)
//  .then(response => response.json())
//  .then(data => {
//     const jsonData = data;
//     console.log(jsonData);
//     // displayData(jsonData)
//  })


// function displayData(weatherData) {
//     const weatherIcon = document.querySelector('.weather-icon');
//     const day = document.querySelector('.day-card-day');

//     const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     const description = weatherData.weather[0].description;

//     weatherIcon.setAttribute('src', iconSrc);
//     weatherIcon.setAttribute('alt', description);
// }
