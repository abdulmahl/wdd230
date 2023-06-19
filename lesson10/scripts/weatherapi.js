const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.84&lon=-147.72&d=Fairbanks&units=imperail&appid=cb266327ed92e9d613d6ebe5e148d6ca';

let fetchApi = async function()  {
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
}

fetchApi();

let displayResults = function(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed()}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', '50');
    captionDesc.textContent = desc.toUpperCase();

};
