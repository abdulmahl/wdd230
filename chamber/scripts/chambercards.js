
const apiUrl = "https://abdulmahl.github.io/wdd230/chamber/json/data.json";

fetch(apiUrl)
    .then( (response) => {
        return response.json();
    })

    .then((jsonData) => {
        const members = jsonData['companies'];

        const chamberCard1 = document.querySelector('div.chamber-card1');
        const chamberCard2 = document.querySelector('div.chamber-card2');
        const chamberCard3 = document.querySelector('div.chamber-card3');

        const chamberCard4 = document.querySelector('div.med-chamber-card1');
        const chamberCard5 = document.querySelector('div.med-chamber-card2');

        members.forEach(member => {
            // Create section element and all the other elements 
            // to insert inside the scetion.
            if (member.name == 'Premier Hotels') {
                    
                let card = document.createElement('section');
                let logo = document.createElement('img');
                let membership = document.createElement('p');
                let phoneNumber = document.createElement('p');
                let companyUrl = document.createElement('a');

                // Set attributes for the img element.
                logo.setAttribute('src', member.iconurl);
                logo.setAttribute('alt', member.name);
                logo.setAttribute('loading', 'lazy');

                // Set attributes for the anchor element.
                companyUrl.setAttribute('href', member.companyurl);
                companyUrl.setAttribute('target', '_blank');

                // Write out the information pulled from the 
                // json file.
                membership.textContent = member.membershipLevel;
                phoneNumber.textContent = member.phoneNumber;
                companyUrl.textContent = member.companyurl;

                // Append each element inside the card element.
                card.append(logo);
                card.append(membership);
                card.append(phoneNumber);
                card.append(companyUrl);

                // Append the card element into the cahmberCards element.
                chamberCard1.append(card);
            }
        });

        members.forEach(member => {
              // Create section element and all the other elements 
            // to insert inside the scetion.
            if (member.name == 'Minuteman Press') {
                    
                let card = document.createElement('section');
                let logo = document.createElement('img');
                let membership = document.createElement('p');
                let phoneNumber = document.createElement('p');
                let companyUrl = document.createElement('a');

                // Set attributes for the img element.
                logo.setAttribute('src', member.iconurl);
                logo.setAttribute('alt', member.name);
                logo.setAttribute('loading', 'lazy');

                // Set attributes for the anchor element.
                companyUrl.setAttribute('href', member.companyurl);
                companyUrl.setAttribute('target', '_blank');

                // Write out the information pulled from the 
                // json file.
                membership.textContent = member.membershipLevel;
                phoneNumber.textContent = member.phoneNumber;
                companyUrl.textContent = member.companyurl;

                // Append each element inside the card element.
                card.append(logo);
                card.append(membership);
                card.append(phoneNumber);
                card.append(companyUrl);

                // Append the card element into the cahmberCards element.
                chamberCard2.append(card);
            }

        });

        members.forEach(member => {
              // Create section element and all the other elements 
            // to insert inside the scetion.
            if (member.name == 'Multichoice') {
                    
                let card = document.createElement('section');
                let logo = document.createElement('img');
                let membership = document.createElement('p');
                let phoneNumber = document.createElement('p');
                let companyUrl = document.createElement('a');

                // Set attributes for the img element.
                logo.setAttribute('src', member.iconurl);
                logo.setAttribute('alt', member.name);
                logo.setAttribute('loading', 'lazy');

                // Set attributes for the anchor element.
                companyUrl.setAttribute('href', member.companyurl);
                companyUrl.setAttribute('target', '_blank');

                // Write out the information pulled from the 
                // json file.
                membership.textContent = member.membershipLevel;
                phoneNumber.textContent = member.phoneNumber;
                companyUrl.textContent = member.companyurl;

                // Append each element inside the card element.
                card.append(logo);
                card.append(membership);
                card.append(phoneNumber);
                card.append(companyUrl);

                // Append the card element into the cahmberCards element.
                chamberCard3.append(card);
            }
        });

        members.forEach(member => {
            // Create section element and all the other elements 
            // to insert inside the scetion.
            if (member.name == 'Premier Hotels') {
                    
                let card = document.createElement('section');
                let logo = document.createElement('img');
                let membership = document.createElement('p');
                let phoneNumber = document.createElement('p');
                let companyUrl = document.createElement('a');

                // Set attributes for the img element.
                logo.setAttribute('src', member.iconurl);
                logo.setAttribute('alt', member.name);
                logo.setAttribute('loading', 'lazy');

                // Set attributes for the anchor element.
                companyUrl.setAttribute('href', member.companyurl);
                companyUrl.setAttribute('target', '_blank');

                // Write out the information pulled from the 
                // json file.
                membership.textContent = member.membershipLevel;
                phoneNumber.textContent = member.phoneNumber;
                companyUrl.textContent = member.companyurl;

                // Append each element inside the card element.
                card.append(logo);
                card.append(membership);
                card.append(phoneNumber);
                card.append(companyUrl);

                // Append the card element into the cahmberCards element.
                chamberCard4.append(card);
            }
        });

        members.forEach(member => {
            // Create section element and all the other elements 
          // to insert inside the scetion.
          if (member.name == 'Multichoice') {
                  
              let card = document.createElement('section');
              let logo = document.createElement('img');
              let membership = document.createElement('p');
              let phoneNumber = document.createElement('p');
              let companyUrl = document.createElement('a');

              // Set attributes for the img element.
              logo.setAttribute('src', member.iconurl);
              logo.setAttribute('alt', member.name);
              logo.setAttribute('loading', 'lazy');

              // Set attributes for the anchor element.
              companyUrl.setAttribute('href', member.companyurl);
              companyUrl.setAttribute('target', '_blank');

              // Write out the information pulled from the 
              // json file.
              membership.textContent = member.membershipLevel;
              phoneNumber.textContent = member.phoneNumber;
              companyUrl.textContent = member.companyurl;

              // Append each element inside the card element.
              card.append(logo);
              card.append(membership);
              card.append(phoneNumber);
              card.append(companyUrl);

              // Append the card element into the cahmberCards element.
              chamberCard5.append(card);
            }
        });
    });