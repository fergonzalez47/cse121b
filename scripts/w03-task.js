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

function subtract(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        console.log(`${number1} and ${number2} must be numbers`);
    } else {
        return number1 - number2;
    }

}



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


document.getElementById("getTotal").addEventListener("click", () => {
    let number = parseFloat(document.getElementById("subtotal").value);
    let membership = document.getElementById("member").checked;

    if (membership) {
        document.getElementById("total").innerHTML = (number - (number * 0.2)).toFixed(2);
        console.log(parseFloat((number - (number * 0.2))).toFixed(2))
    } else {
        document.getElementById("total").innerHTML = number.toFixed(2);
        console.log(parseFloat(number).toFixed(2));
    }

});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = arrayNumbers;

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = arrayNumbers.filter((number) => number % 2 != 0);

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = arrayNumbers.filter((number) => number % 2 == 0)
/* Output Sum of Org. Array */

document.getElementById("sumOfArray").innerHTML =arrayNumbers.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = arrayNumbers.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = arrayNumbers.map((number) => number * 2).reduce((sum, value) => sum + value, 0);
