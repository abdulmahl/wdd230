const temp = document.querySelector('#current-temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.09&lon=27.98&d=Randburg&units=metric&appid=cb266327ed92e9d613d6ebe5e148d6ca';

let fetchApi = async function() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

fetchApi();