import axios from "axios"


export function getWeather(lat, lon, timezone) {
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timeformat=unixtime",
        { 
        params: {
            latitude: lat,
            longitude: lon,
            timezone,
        }}) 
};