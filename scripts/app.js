let d = new Date();
let fullDate = `${d.toDateString()} | ${d.toLocaleTimeString()}`;
document.querySelector("#dateTime").textContent = fullDate;
document.querySelector("#year").textContent = d.getFullYear();