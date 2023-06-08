const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = response.json();
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector(".cards");
    
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");

        h2.textContent = `${prophet.name} ____________`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ____________`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("heigth", "440");

        card.appendChild(h2);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

let date = new Date();
let fullDateandTime = `${date.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

document.querySelector("#dateTime").textContent = fullDateandTime;