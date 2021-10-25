const firstFriend = "Peter";
const secondFriend = "Julia";

const houseCostFor100M2 = 25000000;
const houseCostFor70M2 = 1000000;

let volumeInMetersForPeter = 8*10*10;
let gardenSizeInM2ForPeter = 100;

let volumeInMetersForJulia = 5*11*8;
let gardenSizeInM2ForJulia = 70;

let housePriceForPeter = volumeInMetersForPeter * 2.5 * 1000 + gardenSizeInM2ForPeter * 300;
let housePriceForJulia = volumeInMetersForJulia * 2.5 * 1000 + gardenSizeInM2ForJulia * 300;
console.log("peter paid: " + housePriceForPeter+ "Julia paid: "+ housePriceForJulia );

if(houseCostFor100M2>housePriceForPeter){
    console.log("Peter is paying too little for the house.");
}else{
    console.log("Peter is paying too much for the house.");
}
if(houseCostFor70M2>housePriceForJulia){
    console.log("Julia is paying too little for the house.");
}else{
    console.log("Julia is paying too much for the house.");
}