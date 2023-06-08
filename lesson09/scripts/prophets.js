const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = response.json();
    console.table(data.prophets)
    // displayProphets(data.prophets);
}

getProphetData();

// const displayProphets = (prophets) => {
//     const cards = document.querySelector('div.cards'); // select the output container element
  
//     prophets.forEach((prophet) => {
//       // Create elements to add to the div.cards element
//       let card = document.createElement('section');
//       let h2 = document.createElement('h2');
//       let portrait = document.createElement('img');
//       let p = document.createElement('p');
  
//       // Build the h2 content out to show the prophet's full name - finish the template string
//       h2.textContent = `Prophet ${prophet.name} ${prophet.lastname}`;
  
//       // Build the image portrait by setting all the relevant attribute
//       portrait.setAttribute('src', prophet.imageurl);
//       portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
//       portrait.setAttribute('loading', 'lazy');
//       portrait.setAttribute('width', '340');
//       portrait.setAttribute('height', '440');
//       p.textContent = `Birth: ${prophet.birthdate} Place: ${prophet.birthplace} 
//       Children: ${prophet.numofchildren} Prophet Years: Died in ${prophet.death} Died: ${prophet.death} Age: ${prophet.death[2] - prophet.birthdate[2]}`;
      
  
//       // Append the section(card) with the created elements
//       card.appendChild(h2);
//       card.appendChild(portrait);
//       card.appendChild(p);
  
//       cards.appendChild(card);
//     }); // end of forEach loop
//   } //end of function expression

let date = new Date();
let fullDateandTime = `${date.toLocaleString('en-ZA', {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: false,
})}`;

document.querySelector('#dateTime').textContent = fullDateandTime;