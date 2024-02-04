/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myProfile = {
    name: "Fernando Gonzalez",
    photo: "./images/me.jpg",
    favoriteFoods: ["pizza", "pasta", "cachapa", "pan andino"],
    hobbies: ["surf", "playing CODM", "Exercise", "ride a bike", "Music"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({ place: "chile", length: "5 years" });
myProfile.placesLived.push({ place: "Tachira, Venezuela", length: "1 year" });
myProfile.placesLived.push({ place: "Colombia", length: "3 months" });



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo);
document.getElementById("photo").setAttribute("alt", myProfile.name);


/* Favorite Foods List*/
let ul = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    ul.appendChild(li);
});

/* Hobbies List */
let ulHobbies = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    ulHobbies.appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    console.log(place.place);
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});

