// 1. Log out the text Called after 2.5 seconds when script is loaded
/* */

// 1. with arrow function
/* const logText = () => console.log('Called after 4.1 seconds');
setTimeout(logText, 4010);
window.addEventListener('load', setTimeout); */

window.addEventListener('load',()=>{
  setTimeout(() => {
    console.log('Called after 2.5 seconds');
  }, 2500);
})


// 2. Create a function that takes 2 parameters

const getLogged = (delay, stringToLog) => {
    setTimeout(() => {
        console.log(`${stringToLog} after ${delay} seconds`);
    }, delay * 1000);
};

getLogged(3, 'This string logged');
getLogged(5, 'This string is logged');

// 3. Create a button in html.

const btnClicked = document.querySelector('#btn');

btnClicked.addEventListener('click', () => {
    getLogged(5, 'This string is logged when clicking the click button');
});

// 4. Create two functions and assign them to two different variables.

const earthLogger = function earth() {
    console.log('Earth');
};

const saturnLogger = function saturn() {
    console.log('Saturn');
};

function planetLogFunction(callback) {
    callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5. Create a button with the text called "Log location".
const button = document.querySelector('#btnLogLocation');

function logLocation() {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const div = document.querySelector('#showLocation');
        div.innerHTML = '';
        div.innerHTML = `<strong>Latitude :</strong> <em>${latitude}</em> <strong>Longitude :</strong> <em> ${longitude}</em>`;
        
    }

    function error(err) {
        console.warn(`ERROR(${err.code}):${err.message}`);
    }
}

button.addEventListener('click', logLocation);

// 6. show that location on a map
 const buttonToShowOnMap = document.querySelector('#btnShowOnMap')
 const locationToLink = document.querySelector("#location-link")

 buttonToShowOnMap.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      locationToLink.href= `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed`;
      locationToLink.textContent=` Your location is ${latitude}° Latitude by ${ longitude}° Longitude`
      
  }
 });

 
// 7. Create a function called runAfterDelay

function runAfterDelay(delay, callback){
  setTimeout(() => {
    callback(delay);
}, delay * 1000);
}

function add(delay){
  console.log(`Should be logged after ${delay} seconds`);
}
function multiply(delay){
console.log(`This is logged after ${delay} seconds`);
}

runAfterDelay(7,multiply)
runAfterDelay(8,add)

// 8. Check if we have double clicked on the page

setTimeout(() => {
  document.addEventListener('dblclick',(e)=>console.log("double click !!!"));
}, 500);


//9. Create a function called jokeCreator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
  shouldTellFunnyJoke?logFunnyJoke():logBadJoke()
}

const logFunnyJoke=()=>console.log("funny bunny")
const logBadJoke=()=>console.log("Good Bad and ugly")

jokeCreator(false,logFunnyJoke,logBadJoke)


// Function as a variable
//1
const threeItems = [fn1(), fn2(), fn3()]
function fn1(){console.log("I am first fn");}
function fn2(){console.log("I am second fn");}
function fn3(){console.log("I am third fn");}
threeItems.forEach(item =>item);

//2
const functionAsConst = function (){return 5;}
function normalFunction(){console.log("this is normal function");}

console.log(functionAsConst);
functionAsConst; // calling expression function
normalFunction() // calling normal named declaration function
/**
 * expression function will execute only when the code reach the line 
   where the function is written. So the function can be called(invoked) only
   after the expression function 
 * declaration (normal) function will loaded while the page is executed and 
   can be called anytime anywhere of that particular page
 */
//3 
const obj ={
  name:"Amrit",
  age:22,
  val:function(){
    console.log(`${this.name} is ${this.age} year old.`);
  }
}

obj.val() // calling the function using object

const obj1 = {key:fnObj}
function fnObj(){
  console.log('I am inside the object');
}

obj1.key()
console.log(addition2(5,7));




