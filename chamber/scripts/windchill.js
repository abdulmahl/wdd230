const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.08&lon=27.98&d=Randburg&units=metric&appid=cb266327ed92e9d613d6ebe5e148d6ca';

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

let displayResults = function(weatherData) {
    temp.innerHTML = `Temperature: <strong>${weatherData.main.temp.toFixed()}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const scription = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', scription);
    weatherIcon.setAttribute('width', '70');
    weatherIcon.setAttribute('height', '70');

    caption.textContent = scription.toUpperCase()


};