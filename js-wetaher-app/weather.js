import axios from "axios"

// https://api.open-meteo.com/v1/forecast?&daily=weathercode,temperature_2m_max&current_weather=true&

const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?'
    + 'lat=-26.08&lon=27.98&d=Randburg&units=metric&appid=' 
    + apiKey;


export function getWeather() {
    return axios.get(weatherApi);
}