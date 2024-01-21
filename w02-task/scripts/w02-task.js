/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Fernando Antonio Gonzalez Valdez";
const currentYear = new Date().getFullYear();
const profilePicture = "./images/me.jpg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = nameElement.getElementById("food");
const yearElement = document.querySelector("#year");
let img = document.getElementsByTagName("img");

/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}<strong/>`;
yearElement.textContent = currentYear;
img.setAttribute("src", profilePicture);


/* Step 5 - Array */


const food = [];



