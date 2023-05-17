let date = new Date();
let fullDateandTime = `${date.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

document.querySelector("#dateTime").textContent = fullDateandTime;
document.querySelector("#year").textContent = date.getFullYear();

let dateString = new Intl.DateTimeFormat('en-ZA', { dateStyle: 'full' }).format(date);

document.querySelector(".dateAndTime").textContent = dateString;

let toggleMenu = function() {
    document.querySelector("#primaryNav2").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// W
let weather = {
    apiKey: "4fed1c1f13441350cc57b7327e7c8a00",
    getWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },

    showWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in" + " " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function() {
        this.getWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search()
});