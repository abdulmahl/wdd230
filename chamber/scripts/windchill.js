const temp = document.querySelector(".description");
temp.textContent = "33°C";

const windSpeed = 25;
const wind = document.querySelector(".wind");
wind.textContent = `Wind Speed: ${windSpeed} km/h`;

const windChill = "N/A"
const chill = document.querySelector(".wind-chill");
chill.textContent = `Wind Chill: ${windChill}`;