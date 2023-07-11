const fruitUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const elements = document.querySelectorAll('select');

fetch(fruitUrl)
    .then(fruitData => fruitData.json())
    .then(fruitData => {
        // console.log(fruitData);
        elements.forEach(element => {
            fruitData.forEach(fruit => {
                const choice = document.createElement('option');
                choice.value = fruit.name;
                choice.innerHTML = `${fruit.name}`;

                element.append(choice)
            });
        });
    });