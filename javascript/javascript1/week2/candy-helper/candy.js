/* Candy helper */

const candyTypes = [["Sweet",0.5],["Chocolate",0.7],["Toffee",1.1],["Chewing-gum",0.03]];
const boughtCandyPrices =[];

function addCandy(candyType, weight){
    //find candy price for any candy type

    let pricePerGram;
    for (const item of candyTypes) {
        if(candyType===item[0]){
            pricePerGram=item[1];
        }
    }

    //calculate candy price
    let totalPrice = pricePerGram * weight;

    //Add to shopping cart
    boughtCandyPrices.push(totalPrice);
}

addCandy("Sweet",20);
addCandy("Toffee",20);
console.log(boughtCandyPrices);


const amountToSpend = Math.random()*100;//gives 0 to 99 random number

function canBuyMoreCandy(piecesOfCandy){
    
   for (let i = 0; i < boughtCandyPrices.length; i++) {
       let amoutYouHave = boughtCandyPrices[i]*piecesOfCandy;
       if(amoutYouHave<amountToSpend){
           console.log("You can buy more, so please do!");
       }else{
            console.log("Enough candy for you!");
       }
   }
}

console.log(canBuyMoreCandy(2));
