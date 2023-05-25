const temp = document.querySelector(".description");
temp.textContent = "33°C";

const windSpeed = 25;
const wind = document.querySelector(".wind");
wind.textContent = `Wind Speed: ${windSpeed} km/h`;

const windChill = "N/A"
const chill = document.querySelector(".wind-chill");
chill.textContent = `Wind Chill: ${windChill}`;


const tempMed = document.querySelector(".description-med");
tempMed.textContent = "33°C";

const windSpeedMed = 25;
const windMed = document.querySelector(".wind-med");
windMed.textContent = `Wind Speed: ${windSpeedMed} km/h`;

const windChillMed = "N/A"
const chillMed = document.querySelector(".wind-chill-med");
chillMed.textContent = `Wind Chill: ${windChillMed}`;