const date = new Date();

document.querySelector("#year").textContent = date.getFullYear();

const list = document.querySelector("ul");
const input = document.querySelector("input");
const buttton = document.querySelector("button");

buttton.addEventListener("click", () => {
    const myBook = input.value;
    input.value = "";
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.append(listText);
    listText.textContent = myBook;
    listItem.append(listBtn);
    listBtn.textContent = "❌";
    list.append(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});