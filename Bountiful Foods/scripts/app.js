const d = new Date();

const fullYear = document.querySelector('#year');
fullYear.textContent = d.getFullYear();

let toggleMenu = function() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

const apiKey = 'cb266327ed92e9d613d6ebe5e148d6ca';
const city = 'Randburg';

const weatherCardsContainer = document.querySelector('.weather-cards');

async function getWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function createWeatherCard(date, icon, temperature, description) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  
  card.innerHTML = `
    <div class="date">${date}</div>
    <img src="http://openweathermap.org/img/w/${icon}.png" width="100" alt="Weather Icon">
    <div class="temperature">${temperature}°C</div>
    <div class="description">${description}</div>
  `;

  return card;
}

async function displayWeatherCards() {
  const weatherData = await getWeatherData();
  
  if (!weatherData) return;

  weatherData.slice(0, 5).forEach((data) => {
    const date = data.dt_txt;
    const icon = data.weather[0].icon;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    
    const card = createWeatherCard(date, icon, temperature, description);
    weatherCardsContainer.appendChild(card);
  });
}

displayWeatherCards();
