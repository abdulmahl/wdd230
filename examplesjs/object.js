const book = {
    title: 'Justice For Vicky',
    author: 'Stan Smith',
    isAvailable: false
}

const person = {
    name: 'Brad Spitt',
    age: 76,
    race: 'Asian'
}

const plate = new Object()
plate.name = 'Spaghetti Bolognais',
plate.type = 'pasta',
plate.price = 20.00,
plate.preparedBy = 'Guissepi'

const storeInfo = new Object();
storeInfo.name = 'Nasif Shoes',
storeInfo.emplyees = 10;
storeInfo.openTime = '07:00',
storeInfo.closeTime = '17:00'

for (const info in storeInfo) {
    if (storeInfo.hasOwnProperty.call(storeInfo, info)) {
        const element = storeInfo[info];
        console.log(element);
    }
}

for (const item in person) {
    if (person.hasOwnProperty.call(person, item)) {
        const element = person[item];
        console.log(element);
    }
}

for (const item in book) {
    if (book.hasOwnProperty.call(book, item)) {
        const element = book[item];
        console.log(element);
    }
}

for (const food in plate) {
    if (plate.hasOwnProperty.call(plate, food)) {
        const element = plate[food];
        console.log(element);
    }
}