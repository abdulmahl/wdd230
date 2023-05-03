let date = new Date();

let fullDateandTime = `${date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: false,
})}`;

document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#dateTime").textContent = fullDateandTime;

let Person = function(firstName, lastName, age, email, purpose) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName}  ${lastName}`;
    this.age = age;
    this.email = email;
    this.purpose = purpose;
};

let person1 = new Person("Elizabeth", "Mfati", 57, "remfati@edu.co.za", "advertising online");
let persona1 = document.querySelector(".persona1");
// let persona1Name = document.querySelector(".persona1-name");


persona1.textContent = `is a ${person1.age} year old woman who wants to grow her 
business by ${person1.purpose}. Her email address is ${person1.email}. Mrs ${person1.lastName} is a primary school teacher who owns a small pre-school.`;

let person2 = new Person("Emmanuel", "Masinga", 46, "imza@millitarybase.co.za", "grow his network");
let persona2 = document.querySelector(".persona2");

persona2.textContent = `2.is a ${person2.age} year old male is looking to ${person2.purpose}.
His email address is ${person2.email}. Mr ${person2.lastName} is SANDF employee who also in his off days 
makes deliveries for Uber-Eats, Mr D Foods, and other well known restuarants.`