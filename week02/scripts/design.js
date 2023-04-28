let date = new Date();

let fullDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;
document.querySelector("#dateTime").textContent = fullDate;
document.querySelector("#year").textContent = date.getFullYear();
const line = document.querySelector(".contact");
line.style.position = "center";