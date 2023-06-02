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

const dayOfWeek = date.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2) {
  const banner = document.createElement('div');
  banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 19H00";
  banner.style.color = 'black';
  banner.style.padding = '10px';
  banner.style.fontWeight = 'bold';
  banner.style.textAlign = 'center';
  
  const header = document.querySelector('header');
  header.parentNode.insertBefore(banner, header.nextSibling);
}

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit`;
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
  