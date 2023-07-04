const lrgForecast = document.querySelector('.forecast');
lrgForecast.textContent = 'Carlsbad Five Day Weather Forecast';

const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    + 'lat=33.158092&lon=-117.350594&d=Carlsbad&units=metric&appid=' 
    + apiKey;

fetch(apiUrl)
    .then(response => response.json())
    .then(jsonData => {

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#day' + (i + 1)).textContent = weekDay[checkDay(i)];
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#img' + (i + 1)).src = `https://openweathermap.org/img/w/${jsonData.list[i].weather[0].icon}.png`;
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#temp' + (i + 1)).innerHTML = `${jsonData.list[i].main.temp.toFixed(0)} &deg;C`;
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#cond' + (i + 1)).textContent = jsonData.list[i].weather[0].description;
        }
        // console.log(jsonData);
    });

let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function checkDay(day) {
    if(day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    } else {
        return day + date.getDay();
    }
}