const currentTemp = document.querySelector('#cyrrent-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captiobDesc = document.querySelector('figcaption');
// const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&d=Fairbanks&units=imperail&appid={cb266327ed92e9d613d6ebe5e148d6ca}';

async function fetchApi()  {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

fetchApi();