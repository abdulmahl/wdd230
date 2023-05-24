const person = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    age: 23,
    bio: function() {
        console.log(`${this.name.last} is ${this.age} years of age.`);
    },

    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name.first}`);
    },
};

person.bio();
person.introduceSelf();