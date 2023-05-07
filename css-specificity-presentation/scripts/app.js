let date = new Date();
let fullDateAndTime = `${date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#dateTime").textContent = fullDateAndTime;