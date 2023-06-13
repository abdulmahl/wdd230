
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
        // Select the html element to house the json data
        // and display the data as grid.
        const cards = document.querySelector('article.cards');

        // Select another html element to display the data as a list.
        const businessList = document.querySelector('div.business-list');

        // Dynamicly add elements  and then append them into the main section
        // selected above "json data".
        companies.forEach((company) => {
            let list = document.createElement('table');

            let card = document.createElement('section');
            let logo = document.createElement('img');
            let membership = document.createElement('p');
            let phoneNumber = document.createElement('p');
            let address = document.createElement('p');
            let anchor = document.createElement('a');
            let name = document.createElement('td');

            logo.setAttribute('src', company.iconurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('laoding', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '175');
            anchor.setAttribute('href', company.companyurl);

            address.textContent = company.address;
            phoneNumber.textContent = company.phoneNumber;
            membership.textContent = company.membershipLevel;
            anchor.textContent = company.companyurl;

            card.append(logo);
            card.append(address);
            card.append(phoneNumber);
            card.append(membership);
            card.append(anchor);

            cards.append(card);

            address = document.createElement('td');
            phoneNumber = document.createElement('td');
            anchor = document.createElement('td');

            anchor.setAttribute('href', company.companyurl)

            name.textContent = company.name;
            address.textContent = company.address;
            phoneNumber.textContent = company.phoneNumber;
            anchor.textContent = company.anchor;

            list.append(name);
            list.append(address);
            list.append(phoneNumber);
            list.append(anchor);

            businessList.append(list);
        });  
    });