const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(url)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let p = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
      
      p.innerHTML = `Birth: ${prophet.birthdate} <br>
      Place: ${prophet.birthplace} <br>
      Children: ${prophet.numofchildren} <br>
      Prophet Years: ${prophet.length} <br>
      Died: ${prophet.death}`;
    //   const birthdateArray = JSON.parse(prophet.birthdate);
    //   const deathArray = JSON.parse(prophet.death);
    //   `Age: ${deathArray[2] - birthdateArray[2]}`;
      
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(p);
  
      cards.appendChild(card);
    }); // end of forEach loop
}); //end of function expression


let date = new Date();
let fullDateandTime = `${date.toLocaleString('en-ZA', {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: false,
})}`;

document.querySelector('#dateTime').textContent = fullDateandTime;