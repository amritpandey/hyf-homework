//Spirit animal part

//const userName = prompt("Enter your name");

const spiritAnimalNames = [
    'The crying butterfly',
    'The full moon wolf',
    'The dangerous tiger',
    'The gigantic giraffe',
    'The big old elephant',
];

//getting random numbers from spiritAnimalNames
let randomNumber = Math.floor(Math.random() * spiritAnimalNames.length);

const myNewButton = document.querySelector('#myButton');

    myNewButton.addEventListener('click', function () {
        if (document.querySelector('#click').checked) {
            getUsernameWithSpirit();
        }
    });

    myNewButton.addEventListener('mouseover', function () {
        if (document.querySelector('#hover').checked) {
            getUsernameWithSpirit();
        }
    });

function getUsernameWithSpirit() {
    const val = document.querySelector('#user-name').value;
    if (val) {
        const output = `${val} - ${spiritAnimalNames[randomNumber]}`;
        document.querySelector('.displaySpirit').innerHTML = output;
    } else {
        alert("Input field can't be empty!!!");
    }
}


