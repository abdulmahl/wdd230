
// Create a variable for the json url.
const url = "https://abdulmahl.github.io/wdd230/chamber/json/data.json";

// Using Fetch, access the url and return the response in json formatt. 
fetch(url)
    .then( (response) => {
        return response.json();
    })

    // Put the json formatted data into a variable called companies.
    .then( (jsonObject) => {
        const companies = jsonObject['companies'];
        // Select the html element to house the json data.
        const cards = document.querySelector('div.cards');

        // Create elements  and then append them into the main section selected above "json data".
        companies.forEach((company) => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let logo = document.createElement('img');
            let p = document.createElement('p');
            let anchor = document.createElement('a');

            h2.textContent = company.name;

            logo.setAttribute('src', company.iconurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('laoding', 'lazy');
            logo.setAttribute('width', '250');
            logo.setAttribute('height', '200');
            anchor.setAttribute('href', company.companyurl);

            p.textContent = `${company.address} 
            ${company.phoneNumber}  
            ${company.membershipLevel}`;
            anchor.textContent = company.companyurl;

            card.append(h2);
            card.append(logo);
            card.append(p);
            card.append(anchor);

            cards.append(card)
        });  
    });