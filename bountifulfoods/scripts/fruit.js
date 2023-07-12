const fruitUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const elements = document.querySelectorAll('select')

fetch(fruitUrl)
    .then(fruitData => fruitData.json())
    .then(fruitData => {
        // console.log(fruitData);
        elements.forEach(element => {
            fruitData.forEach(fruit => {

                const choice = document.createElement('option');
                choice.value = fruit.name;
                choice.innerHTML = `${fruit.name}, '${fruit.genus}'`;

                element.append(choice)
            });
        });
    });

// get the feedback div element so we can do something with it.
const feedbackElement = document.querySelector('#feedback');
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener('submit', function(e) {
    // stop the form from doing the default action.
    e.preventDefault();

    feedbackElement.innerHTML = `Ordered by: ${formElement.fname.value}! <br>`;

    let email = document.createElement('p');
    email.innerHTML = `Email: ${formElement.email.value} <br>`;
    feedbackElement.append(email);

    let phoneNumber = `Phone Number: ${formElement.phone.value}`;
    phoneNumber.textContent = phoneNumber;
    feedbackElement.append(phoneNumber);

    let h3 = document.createElement('h3');
    h3.textContent = 'Fruit Combination';
    h3.style.padding = '20px 0px 0px 0px';
    feedbackElement.append(h3);

    let fruitList = document.createElement('ul');
    let combo = [];
    elements.forEach(element => {
        let fruit = document.createElement('li');
        fruit.innerText = element.value;
        fruitList.append(fruit);
        combo.push(fruit.innerText);
    })
    feedbackElement.append(fruitList);

    // make the feedback element visible.
    feedbackElement.style.display = 'block';
    feedbackElement.style.margin = '9px 0px';
    feedbackElement.style.textAlign = 'center';
    feedbackElement.style.fontSize = '1.5rem';
    feedbackElement.style.fontFamily = 'Amatic SC';
    feedbackElement.style.padding = '0px 0px 20px 0px';
    
    // add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle('moveDown');

    let info = document.createElement('ul');
    let nutritionalInfo = document.createElement('h3');
    nutritionalInfo.textContent = 'Nutritional Information';
    nutritionalInfo.style.padding = '15px 0px 0px 0px';
    feedbackElement.append(nutritionalInfo);

    fetch(fruitUrl).then(fruitData => fruitData.json()).then(data => {
        // Filter only necessary data
        let nutritions = data.filter(fruit => {
            // Return only selected fruits
            return combo.includes(fruit.name);
        }).map(fruit => {
            // Return only nutritions
            return fruit.nutritions;
        });
    
        // Create nutritional list
        Object.keys(nutritions[0]).forEach(key => {
            // Add up values
            let value = 0;
            nutritions.forEach(nutrition => {
                value += nutrition[key];
            });
            let li = document.createElement('li');
            li.innerText = `${key}: ${value.toFixed(2)}`;
            info.append(li);
        });
        feedbackElement.append(info);

        let formDate = document.createElement('p');
        formDate.innerText = `Date And Time: ${fullDateandTime}`;
        formDate.style.padding = '15px 0px 0px 0px';
        feedbackElement.append(formDate);
    });
});