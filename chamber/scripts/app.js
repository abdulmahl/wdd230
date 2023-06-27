// Set the date and time.
let date = new Date();
let fullDateandTime = `${date.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

// Select the html elements and give them their values.
document.querySelector("#dateTime").textContent = fullDateandTime;
document.querySelector("#year").textContent = date.getFullYear();
let dateString = new Intl.DateTimeFormat('en-ZA', { dateStyle: 'full' }).format(date);
document.querySelector(".dateAndTime").textContent = dateString;

// Create a function for the menu button.
let toggleMenu = function() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

// Create variable for days of the week, in an if statement
// write the banner message and give it some styling.
const dayOfWeek = date.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2) {
  const banner = document.createElement('div');
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 19H00";
  banner.style.color = 'black';
  banner.style.padding = '10px';
  banner.style.fontWeight = 'bold';
  banner.style.textAlign = 'center';
  
  const header = document.querySelector('header');
  header.parentNode.insertBefore(banner, header.nextSibling);
}

// Display a number of visits for user to see.
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
console.log("this is visit number" + " " + numVisits);
if (numVisits !== 0) {
  visitsDisplay.textContent = `This is visit number ${numVisits + 1} of the day`;
} else {
  visitsDisplay.textContent = `This is your first visit`;
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);