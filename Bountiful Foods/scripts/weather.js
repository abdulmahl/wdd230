// Assuming dt_txt is in UTC format like "2023-07-03 12:00:00"
// const dtTxt = "2023-07-03 12:00:00";

// Create a new Date object with the dt_txt value
// const date = new Date(dtTxt);

// Get the day of the week as a number (0-6, where Sunday is 0)
const dayOfWeek = date.getUTCDay();

// Array of weekdays
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the weekday string using the dayOfWeek as the index
const day = weekdays[dayOfWeek];

// console.log(day); // Output: Monday



// For the larger screens display five days.
const lrgForecast = document.querySelector('.forecast');
lrgForecast.textContent = 'Carlsbad Five Day Weather Forecast'

const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    + 'lat=33.158092&lon=-117.350594&d=Carlsbad&units=metric&appid=' 
    + apiKey;
    
let fetchApi = async function() {
    try {
        const response = await fetch(apiUrl);
        if(response.ok) {
            const jsonData = await response.json();
            // console.log(jsonData);
            // console.log(jsonData.list[0].weather[0].description);
            // console.log(jsonData.list[0].weather[0].icon);
            // console.log(jsonData.list[0].main.temp);
            // console.log(jsonData.list[0].dt_txt);
            showResults(jsonData);
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error);
    }
}

fetchApi();

let showResults = function(weatherData) {

    for(let i = 8; i < weatherData.length; i += 8) {

        const dayForecast = weatherData[i];
        let {  } = dayForecast;

        const cards = document.querySelector('.weather-cards');

        const card = document.createElement('div');
        card.classList.add('weather-card');
    
        const weekDay = document.createElement('p');
        weekDay.classList.add('card-day');
        weekDay. textContent = day;
    
    
        const icon = document.createElement('img');
        icon.classList.add('card-icon');
        const iconSrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
        const description = weatherData.list[0].weather[0].description;
        icon.setAttribute('src', iconSrc)
        icon.setAttribute('alt', description)
    
        const temp = document.createElement('p');
        temp.classList.add('temperature');
        temp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}&deg;C</strong>`;
    
        const condition = document.createElement('p');
        condition.classList.add('card-description');
        condition.textContent = description;
    
        card.append(weekDay);
        card.append(icon);
        card.append(temp);
        card.append(condition);
    
        cards.append(card);
    }
}


