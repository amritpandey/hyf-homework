const btnClicked = document.querySelector('#btnStart');

let timerFunction= ()=>{
const inputSeconds= document.querySelector('#setSeconds').value;

}
btnClicked.addEventListener('click',timerFunction);

setTimeout(() => {
  
  console.log(`after ${inputSeconds}`);
}, inputSeconds*1000);