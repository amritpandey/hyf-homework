const firstPerson = "Peter";
const houseCostFor100M2 = 25000000;
const widthP = 8; heightP=10; breadthP = 10; gardenSizeP = 100;
const volumeP = widthP*heightP*breadthP;

const secondPerson = "Julia";
const houseCostFor70M2 = 1000000;
const widthJ = 5; heightJ=11; breadthJ = 8; gardenSizeJ = 70;
const volumeJ = widthJ*breadthJ*heightJ;

let housePriceForPeter = volumeP * 2.5 * 1000 + gardenSizeP * 300;
let housePriceForJulia = volumeJ * 2.5 * 1000 + gardenSizeJ * 300;
//console.log("peter paid: " + housePriceForPeter+ "Julia paid: "+ housePriceForJulia );

let calculate = Math.abs(houseCostFor100M2 - housePriceForPeter );
let calculateJ = Math.abs(houseCostFor70M2 - housePriceForJulia );

if(houseCostFor100M2>housePriceForPeter){
    console.log("Peter is paying "+ calculate +" less for the house.");
}else if(houseCostFor100M2<housePriceForPeter){
    console.log("Peter is paying " + calculate + " much for the house.");
}else{
    console.log("Peter is paying the right amount for the house.");
}

if(houseCostFor70M2>housePriceForJulia){
    console.log(`${secondPerson} is paying ${calculateJ} less for the house.`);
}else if(houseCostFor70M2<housePriceForJulia){
    console.log(`${secondPerson} is paying ${calculateJ} much for the house.`);
}
else{
    console.log(`${secondPerson} is paying the right amount for the house.`);

}

