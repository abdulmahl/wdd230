// Create json data url.
const url = "https://abdulmahl.github.io/wdd230/chamber/json/data.json";

// Return url json data.
fetch(url)
    .then( (response) => {
        return response.json();
    })

    .then( (jsonObject) => {
        const companies = jsonObject['companies'];

        const spotlights = document.querySelector('div.spotlights');

        companies.forEach((company) => {

            if (company.membershipLevel == 'Gold Membership' || company.membershipLevel == 'Silver Membership') {
                let spot = document.createElement('div');
                let logo = document.createElement('img');
                let membership = document.createElement('p');
                let phoneNumber = document.createElement('p');
                let address = document.createElement('p');
                let anchor = document.createElement('a');
    
                logo.setAttribute('src', company.iconurl);
                logo.setAttribute('alt', `Logo of ${company.name}`);
                logo.setAttribute('laoding', 'lazy');
                logo.setAttribute('width', '100');
                logo.setAttribute('height', '100');
                anchor.setAttribute('href', company.companyurl);
    
                address.textContent = company.address;
                phoneNumber.textContent = company.phoneNumber;
                membership.textContent = company.membershipLevel;
                anchor.textContent = company.companyurl;
    
                spot.append(logo);
                spot.append(address);
                spot.append(phoneNumber);
                spot.append(anchor);
    
                spotlights.append(spot);
            }
        })
    });


