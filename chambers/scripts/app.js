let date = new Date(Date.UTC(2023, 05, 08,));
let dateString = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);

document.querySelector(".dateAndTime").textContent = dateString;