import getCountries, { allContinents, countryList, displayCountries } from "./fetchData.js";



getCountries().then(() => {
    let options = document.getElementById("filtered");
    const fragment = document.createDocumentFragment();
    allContinents.forEach(continent => {
        let option = document.createElement("option");
        option.textContent = continent;
        option.setAttribute("value", continent);
        fragment.appendChild(option);
    });
    options.appendChild(fragment);
});



function CleanContainer() {
    document.getElementById("container").innerHTML = "";
}

function finterContinent(list) {

    let filter = document.getElementById("filtered").value;
    CleanContainer();
    switch (filter) {
        case "Europe":
            displayCountries(list.filter(country => (country.continents[0] == "Europe")));
            break;
        case "Africa":
            displayCountries(list.filter(country => (country.continents[0] == "Africa")));
            break;
        case "North America":
            displayCountries(list.filter(country => (country.continents[0] == "North America")));
            break;
        case "Oceania":
            displayCountries(list.filter(country => (country.continents[0] == "Oceania")));
            break;
        case "South America":
            displayCountries(list.filter(country => (country.continents[0] == "South America")));
            break;
        case "Asia":
            displayCountries(list.filter(country => (country.continents[0] == "Asia")));
            break;
        case "Antarctica":
            displayCountries(list.filter(country => (country.continents[0] == "Antarctica")));
            break;
    }
}


document.getElementById("filtered").addEventListener("change", () => {
    finterContinent(countryList);
})




// Switch to dark mode or not


const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
    const body = document.body;
    const cards = document.getElementsByClassName("card-inner");
    if (themeSwitch.checked) {
        // Cambiar a tema nocturno
        body.classList.add("dark-mode");
        for (let card of cards) {
            card.classList.add("dark-mode-card");
        }
    } else {
        // Cambiar a tema diurno
        body.classList.remove("dark-mode");
        for (let card of cards) {
            card.classList.remove("dark-mode-card");
        }
    }
});


