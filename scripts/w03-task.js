/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        console.log(`${number1} and ${number2} must be numbers`);
    } else {
        return number1 + number2;
    }

}


let addNumbers = function () {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    let form = document.getElementById("sum").value = add(add1, add2);

}
document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

let subtractNumbers = function () {
    let sub1 = Number(document.getElementById("subtract1").value);
    let sub2 = Number(document.getElementById("subtract2").value);
    let form = document.getElementById("difference").value = subtract(sub1, sub2);

}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (num1, num2) => {
    return num1 * num2;
}


let multiplyNumbers = function () {
    let num1 = Number(document.getElementById("factor1").value);
    let num2 = Number(document.getElementById("factor2").value);
    let form = document.getElementById("product").value = multiply(num1, num2);

}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide (num1, num2) {
    return num1 / num2;
}


let divideNumbers = function () {
    let num1 = Number(document.getElementById("dividend").value);
    let num2 = Number(document.getElementById("divisor").value);
    let form = document.getElementById("quotient").value = divide(num1, num2);

}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", (e) => {
    let number = Number(document.getElementById("subtotal").value);
    let membership = document.getElementById("member").checked;
    if (membership) {
    
} else {
    
}

});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
