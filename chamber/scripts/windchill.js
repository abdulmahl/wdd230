// Select the html tags to target for the medium 
// viewport.
const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const windChill = document.querySelector('.wind-chill');

// Select the html tags to target for the base 
// viewport.
const tempSmall = document.querySelector('#current-temp-small');
const smallWeatherIcon = document.querySelector('#weather-icon-small');
const smallCaption = document.querySelector('.description-small');
const windSpeedSmall = document.querySelector('.wind-speed-small');
const windChillSmall = document.querySelector('.wind-chill-small');


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

    // Small viewport display.
    const smallIconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const smallScription = weatherData.weather[0].description;

    smallWeatherIcon.setAttribute('src', smallIconSrc);
    smallWeatherIcon.setAttribute('alt', smallScription);

    tempSmall.innerHTML = `<strong>${weatherData.main.temp.toFixed()}&deg;C</strong> <br>`;
    smallCaption.textContent = `${smallScription.toUpperCase()}`;
    windSpeedSmall.textContent = weatherData.wind.speed;
    windChillSmall.innerHTML = tempSmall - (windSpeedSmall * .7);

    // Medium viewport display.
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const scription = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', scription);

    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed()}&deg;C</strong>`;
    caption.textContent = scription.toUpperCase();
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} km/h`;
    windChill.innerHTML = `Wind Chill: ${temp - (windSpeed * .7)}&deg;C`;

};