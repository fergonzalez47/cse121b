/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Fernando Antonio Gonzalez Valdez";
const currentYear = new Date().getFullYear();
const profilePicture = "./images/me.jpg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.querySelector('#home picture img');

// Ahora, imageElement contiene una referencia al elemento de la imagen.


/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}<strong/>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);


/* Step 5 - Array */


const foods = ['Empanadas',
    'Cazuela',
    'Completo',
    'Pastel de Choclo',
    'Humitas',
    'Arepas',
    'Pabellón Criollo',
    'Hallaca',
    'Tequeños',
    'Cachapa'];


const favoriteFood = "Pizza";

foods.push(favoriteFood);
foodElement.innerHTML += `<br>${foods}`;
// foods.forEach(food => {
//     foodElement.innerHTML += `<br>${food}`;
// });

foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;