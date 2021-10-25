const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let shouldShowResultInDogYears = true; //boolean data type
let humanYear = dogYearFuture - dogYearOfBirth;
let  dogYear = humanYear * 7;

//console.log(dogYear);

if(shouldShowResultInDogYears){
    document.write(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}else{
    document.write(`Your dog will be ${humanYear} human years old in ${dogYearFuture}`);
}