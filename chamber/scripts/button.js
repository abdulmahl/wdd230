// Create variables to hold the grid and the 
// list buttons.
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
// const display = document.querySelector('div.business-list');

// Create a functions to display either a list or a grid.
let showList = function() {
    display.classList.add('list');
    display.classList.remove('grid');
};

listButton.addEventListener('click', showList());

let showGrid = function() {
    display.classList.add('grid');
    display.classList.remove('list');
};

gridButton.addEventListener('click', showGrid());
