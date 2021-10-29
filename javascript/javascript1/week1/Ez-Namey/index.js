const firstWords = ["Easy", "Awesome","Corporate", "Profitable","New way","Smily","Delighted","Complete","Stardom","Superstar"];
const secondWords = ["Feel great", "Fabulous","Connect tightly", "Sustainable","Right way","Fun","Enthusiasm","Full package","Freedom","Megastar"];

/* console.log(firstWords[1]);
console.log(secondWords.length);
 */
let startupName;

const randomNumber =Math.floor(Math.random()*10);
const randomNumber1 = Math.floor(Math.random()*10);
console.log(randomNumber, randomNumber1);

startupName = firstWords[randomNumber]  +" "+  secondWords[randomNumber1];
console.log(`The startup: \"${startupName}\" contains ${startupName.length} characters`);