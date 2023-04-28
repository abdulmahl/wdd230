let date = new Date();

let fullDate = `${date.toDateString()} @ ${date.toLocaleTimeString()}`;
document.querySelector("#dateTime").textContent = fullDate;
document.querySelector("#year").textContent = date.getFullYear();

document.querySelector("#myName").style.fontSize = "large";
document.querySelector("#year").style.fontSize = "large";

document.querySelector("#update").style.fontSize = "small"; 
document.querySelector("#dateTime").style.fontSize = "small"; 