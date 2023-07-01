const d = new Date();

let fullDateandTime = `${d.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

const fullYear = document.querySelector('#year');
fullYear.textContent = d.getFullYear();
document.querySelector("#dateTime").textContent = fullDateandTime;



let toggleMenu = function() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// For the base only display 3 days weather forecast 
let baseForecast = document.querySelector('.forecast');
baseForecast.textContent = 'Randburg Three Day Weather Forecast'


const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';
const city = 'Randburg';

// const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// const weatherCardsContainer = document.querySelector('.weather-cards');

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    + 'lat=-26.08&lon=27.98&d=Randburg&units=metric&appid=' 
    + apiKey;
    console.log(apiUrl);

fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {
        for(let i = 0; i < 5; i++) {
            document.querySelector('#day', + (i + 1) + 'Max');
        }
    });