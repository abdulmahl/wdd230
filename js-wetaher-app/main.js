import "./style.css";
import { getWeather } from "./weather";

getWeather().then(response => {
    console.log(response.data);
});
