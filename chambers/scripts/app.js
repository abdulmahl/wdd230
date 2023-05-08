let d = new Date();
let fullDateandTime = `${d.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

document.querySelector("#dateTime").textContent = fullDateandTime;
document.querySelector("#year").textContent = d.getFullYear();

let date = new Date(Date.UTC(2023, 05, 08,));
let dateString = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);

document.querySelector(".dateAndTime").textContent = dateString;

let toggleMenu = function() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;