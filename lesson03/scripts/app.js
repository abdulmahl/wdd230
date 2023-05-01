let date = new Date();

let fullDate = `${date.toDateString()} @ ${date.toLocaleTimeString()}`
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#dateTime").textContent = fullDate;
