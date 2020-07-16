var name = 'Corey';

const number = 50;

var add = add(5,4);
//* Let's use a function to add 2 numbers here *//
function add (num1, num2) {
    return num1 + num2;
}

function sayHello () {
    alert("Hello World!");
}
sayHello ();


let bot1 = {
    name: 'Charles',
    age: 21
};
let bot2 = {
    name: 'Abby',
    age: 27
};
let bot3 = {
    name: 'James',
    age: 18
};
let bot4 = {
    name: 'John',
    age: 17
};

function checkAge (anybot) {
    if (anybot.age < 21) {
        alert('Sorry'+ " " + anybot.name + " " +'you are not old enough to view this page!');
    }
}
checkAge (bot1);
checkAge (bot2);
checkAge (bot3);
checkAge (bot4);

let veggies = ['zucchini', 'squash', 'spinach', 'cucumber']

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[1]);
}

let pet = {
    name: "Ellie",
    breed: "German Shepherd"
}

console.log(pet);

let peeps = [
    {name: 'Steven', age: 32},
    {name: 'Joel', age: 44},
    {name: 'Kelly', age: 20},
    {name: 'Taylor', age: 19},
    {name: 'Bob', age: 58},
]

for (let i = 0; i < peeps.length; i++) {
    function checkAge (anypeep) {
        console.log(peeps);
    }
}
checkAge(peeps);

function getLength (anyword) {
    return anyword.length;  
}
let isEven = getLength('Hello World');

if (isEven % 2 ==0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}
