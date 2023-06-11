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
    document.querySelector("#primaryNav2").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

// Create variable for days of the week, in an if statement
// write the banner message and give it some styling.
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

// Display a number of visits for user to see.
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit`;
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);


// Create a variable for the json url.
const url = "https://abdulmahl.github.io/wdd230/chamber/json/data.json";

// Using Fetch, access the url and return the response in json formatt. 
fetch(url)
    .then( (response) => {
        return response.json();
    })

    // Put the json formatted data into a variable called companies.
    .then( (jsonObject) => {
        const companies = jsonObject['companies'];
        // Select the html element to house the json data.
        const cards = document.querySelector('div.cards');

        // Create elements  and then append them into the main section selected above "json data".
        companies.forEach((company) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let logo = document.createElement('img');
            let p = document.createElement('p');
            let anchor = document.createElement('a');

            h2.textContent = company.name;

            logo.setAttribute('src', company.iconurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('laoding', 'lazy');
            logo.setAttribute('width', '250');
            logo.setAttribute('height', '200');
            anchor.setAttribute('href', company.companyurl);

            p.textContent = `${company.address} 
            ${company.phoneNumber}  
            ${company.membershipLevel}`;
            anchor.textContent = company.companyurl;

            card.append(h2);
            card.append(logo);
            card.append(p);
            card.append(anchor);

            cards.append(card)
        });  
    });