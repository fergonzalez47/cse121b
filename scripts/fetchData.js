export let countryList = [];

export const allContinents = [];




const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

         countryList = await response.json();
        // displayCountriesConsole(countryList);
        displayCountries(countryList);


        countryList.forEach(country => {
            country.continents.forEach(continent => {
                if (!allContinents.includes(continent)) {
                    allContinents.push(continent);
                }
            });
        });

    } catch (error) {
        console.error('Error fetching countries:', error);
        return []; 
    }
}

const displayCountriesConsole = (countries) => {
    console.log(countries);
}


export const displayCountries= (countries) => {

    const fragment = document.createDocumentFragment(); // Crear un fragmento

    countries.forEach(country => {
        const cardCountry = document.createElement("div");
        cardCountry.classList.add("card-country");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-inner");

        const countryImg = document.createElement("div");
        countryImg.classList.add("card-inner-img");

        const img = document.createElement("img");
        img.setAttribute("src", country.flags.png);
        img.setAttribute("alt", country.flags.alt);

        const countryInf = document.createElement("div");
        countryInf.classList.add("card-inner-info");

        const h3 = document.createElement("h3");
        h3.textContent = country.name.common;

        const capital = document.createElement("p");
        capital.innerHTML = `<span>Capital: </span> ${country.capital}`;

        const population = document.createElement("p");
        population.innerHTML = `<span>Population: </span> ${country.population.toLocaleString()}`;

        const area = document.createElement("p");
        area.innerHTML = `<span>Area: </span> ${country.area.toLocaleString()} km`;

        const languagesArray = country.languages ? Object.keys(country.languages).map(key => `${country.languages[key]} (${key})`) : [];
        const languagesString = languagesArray.join(', ');
        const languages = document.createElement("p");
        languages.innerHTML = `<span>Languages: </span> ${languagesString}`;

        const continent = document.createElement("p");
        continent.innerHTML = `<span>Continent: </span> ${country.continents[0]}`;

        const timezone = document.createElement("p");
        timezone.innerHTML = `<span>Timezone: </span> ${country.timezones[0]}`;

        countryImg.appendChild(img);

        countryInf.appendChild(h3);
        countryInf.appendChild(capital);
        countryInf.appendChild(area);
        countryInf.appendChild(population);
        countryInf.appendChild(languages);
        countryInf.appendChild(continent);
        countryInf.appendChild(timezone);

        cardInfo.appendChild(countryImg);
        cardInfo.appendChild(countryInf);

        cardCountry.appendChild(cardInfo);

        fragment.appendChild(cardCountry);
    });

    document.getElementById("container").appendChild(fragment);
}





export default getCountries;

