

const a = parseInt(prompt('Enter the a number'));
const b = parseInt(prompt('Enter the b number'));
let result;

if ((a % 2) === 0) {
    result = a * b;
} else {
    result = a + b;
}

alert (result);

const c = parseInt(prompt('Enter the c number'));
const d = parseInt(prompt('Enter the d number'));

let result1;

if (d - c === 5) {
    result1 = 'Hello';
} else {
    result1 = 'Bye';
}

alert(result1);

d === c
d > c
d >= c
d !== c
c - d === 2
(d % 2) !== 0
(d + c) === 5
d * c === 5
d % c === 5
d / c === 5
d / c >= 5

// если bla это Hello - вывести Bye
// иначе если bla это Bye - вывести Hello
// иначе вывести Bla

const bla = prompt('Enter the string');

if (bla === 'Hello') {
    alert ('Bye');
} else if (bla === 'Bye') {
    alert('Hello');
} else {
    alert ('Bla');
}

switch (bla) {
    case 'Hello':
        alert ('Bye');
        break;

    case 'Bye':
        alert('Hello');
        break;

    default:
        alert ('Bla');
        break;
}