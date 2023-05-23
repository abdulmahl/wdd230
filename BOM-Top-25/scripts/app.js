const childOne = document.querySelector("#child-id1");
const childTwo = childOne.nextElementSibling;
const childThree = childTwo.nextElementSibling;


let changeColor = function(element) {
    element.style.backgroundColor = "#333";
};

changeColor(childTwo);