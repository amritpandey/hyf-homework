/*function with 4 parameters and check  for male female gender*/

function getFullname2(firstname, surname, useFormalName, gender){
    
    let fullname = firstname + " " + surname;
    switch(gender) {
        case "male":
          useFormalName? fullname= "Lord " + fullname:fullname;
          break;
        case "female":
            useFormalName? fullname= "Lordess " + fullname:fullname;
      }
      return fullname;
}
console.log(getFullname2("","",true,"male"));
