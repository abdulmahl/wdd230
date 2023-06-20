// Select the html tags to target for the medium 
// viewport.
const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('.description');

// Select the html tags to target for the base 
// viewport.
const tempSmall = document.querySelector('#current-temp-small');
const smallWeatherIcon = document.querySelector('#weather-icon-small');
const smallCaption = document.querySelector('.description-small');

// Put the API url in variable.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.08&lon=27.98&d=Randburg&units=metric&appid=cb266327ed92e9d613d6ebe5e148d6ca';

// Using the async function in a try catch statement,
// display the data, passed from the displayResults function.
let fetchApi = async function() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

fetchApi();

// Create the function that will display the results.
let displayResults = function(weatherData) {
    tempSmall.innerHTML = `Temperature: <strong>${weatherData.main.temp.toFixed()}&deg;C</strong>`;

    const smallIconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const smallScription = weatherData.weather[0].description;

    smallWeatherIcon.setAttribute('src', smallIconSrc);
    smallWeatherIcon.setAttribute('alt', smallScription);
    smallWeatherIcon.setAttribute('width', '80');
    smallWeatherIcon.setAttribute('height', '80');

    smallCaption.textContent = smallScription.toUpperCase();

    temp.innerHTML = `Temperature: <strong>${weatherData.main.temp.toFixed()}&deg;C</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const scription = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', scription);
    weatherIcon.setAttribute('width', '90');
    weatherIcon.setAttribute('height', '90');

    caption.textContent = scription.toUpperCase();
};