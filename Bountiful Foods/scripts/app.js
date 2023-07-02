import axios from "axios"
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
baseForecast.textContent = 'Randburg Three Day Weather Forecast'

const lrgForecast = document.querySelector('.forecast-lrg');
lrgForecast.textContent = 'Randburg Five Day Weather Forecast'




const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';
const city = 'Randburg';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    + 'lat=-26.08&lon=27.98&d=Randburg&units=metric&appid=' 
    + apiKey;
    console.log(apiUrl);
    
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    
function getWeather()  {
   return axios.get(apiUrl);
}

getWeather();
    