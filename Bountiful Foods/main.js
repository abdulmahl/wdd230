import { getWeather } from "./weather";

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timezone).then(
    response => {
        console.log(response.data);
})