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

const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';
const city = 'Randburg';

// const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// const weatherCardsContainer = document.querySelector('.weather-cards');

let gotPosition = function(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    // console.log(lat);
    // console.log(long);
    getForecast(lat, long);
}

let getForecast = function(lat, long) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&d=Randburg&units=metric&appid=' 
    + apiKey;
    getWeatherText(url);
}

async function getWeatherText(url) {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    // console.log(weatherObject);
    // console.log(weatherText);
    parseWeather(weatherText);
}

let parseWeather = function(weatherText) {
    let weatherJSON = JSON.parse(weatherText);
    let dailyForecast = weatherJSON.daily;

    for (let x = 0; x < dailyForecast; x++) {
        let day = dailyForecast[x];
        let today = new Date().getDay() + x;
            if(today > 6) {
                today = today - 7;
            }
            let dayOfWeek = getDayOfWeek(today);
            let icon = day.weather[0].icon;
            let description = day.weather[0].description;
            let temp = kToc(day.temp.max);
            displayWeatherDay(dayOfWeek, icon, description, temp);
    }
}

let displayWeatherDay = function(dayOfWeek, icon, description, temp) {
    let out = "<h3>" + dayOfWeek + "</h3>";
    out += "<div class='weatherDay'> <img src='http://openweathermap.org/img/wn/" + icon + " .png'/>";
    out += "<h4>" + description + "</h4>";
    out += "<p>Temperature: " + temp + "</p>";
    document.getElementById('weather-cards').innerHTML += out;
}

let getDayOfWeek = function(dayNum) {
    var weekDay = new Array(7);
    weekDay[0] = 'Sun';
    weekDay[1] = 'Mon';
    weekDay[2] = 'Tue';
    weekDay[3] = 'Wed';
    weekDay[4] = 'Thu';
    weekDay[5] = 'Fri';
    weekDay[6] = 'Sat';

    return weekDay[dayNum];
}

let kToc = function(kelvinTemp) {
    const celsius = kelvinTemp - 273;
    return celsius;
}

navigator.geolocation.getCurrentPosition(gotPosition);

