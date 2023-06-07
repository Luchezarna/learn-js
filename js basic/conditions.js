//Const cannot be reassigned
const a = 5;
const someString = "Hello world";
const someBoolean = true;

//Let can be reassigned
let b = 3;

b = 6;

const firstNumber = parseInt(prompt('Enter the first number'));
const secondNumber = parseInt(prompt('Enter the second number'));

let result;

//If operator
if (firstNumber > secondNumber) {
    result = firstNumber * secondNumber;
} else if (firstNumber < secondNumber) {
    result = firstNumber + secondNumber;
} else {
    result = 0;
}

alert('Result is ' + result);

//Ternary operator
const result1 = firstNumber > secondNumber ? firstNumber * secondNumber : firstNumber + secondNumber;

//This is equal to line 26;
// let result1;
// if (firstNumber > secondNumber) {
//     result1 = firstNumber * secondNumber;
// } else {
//     result1 = firstNumber + secondNumber;
// }

//Switch ... case
const someNumber = parseInt(prompt('Enter the number'));

switch (someNumber) {
    case 1:
        alert('Hahahaha');
        break;

    case 2:
        alert('Boooooo');
        break;

    case 3:
        alert('Trulala');
        break;

    default:
        alert("You've entered some stupid stuff");
        break;
}

//The same via if...else
if (someNumber === 1) {
    alert('Hahahaha');
} else if (someNumber === 2) {
    alert('Boooooo');
} else if (someNumber === 3) {
    alert('Trulala');
} else {
    alert("You've entered some stupid stuff");
}

if (firstNumber > 100) {
    alert('Hey');
}



