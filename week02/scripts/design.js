let date = new Date();

let fullDate = `${date.toDateString()} @ ${date.toLocaleTimeString()}`;
document.querySelector("#dateTime").textContent = fullDate;
document.querySelector("#year").textContent = date.getFullYear();