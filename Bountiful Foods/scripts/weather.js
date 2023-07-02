import axios from "axios"

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timeformat=unixtime&timezone=America%2FLos_Angeles&past_days=5

export function getWeather(lat, lon, timezone) {
    axios.get()
};