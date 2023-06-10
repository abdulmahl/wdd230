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

const url = "https://abdulmahl.github.io/wdd230/chamber/json/data.json";

fetch(url)
    .then( (response) => {
        return response.json();
    })

    .then( (jsonObject) => {
        const companies = jsonObject['companies'];
        const cards = document.querySelector('div.cards');

        companies.forEach((company) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let logo = document.createElement('img');
            let p = document.createElement('p');

            h2.textContent = `${company.name}`;

            logo.setAttribute('src', company.iconurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('laoding', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '300');

            p.innerHTML = `${company.address} <br>
            ${company.phoneNumber} <br> 
            ${company.companyurl} <br> 
            ${company.membershipLevel}`;

            card.append(h2);
            card.append(logo);
            card.append(p);

            cards.append(card)
        });  
    });