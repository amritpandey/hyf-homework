/*function with 4 parameters and check  for male female gender*/

function getFullname2(firstname, surname, useFormalName, gender){
    
    let fullname = firstname + " " + surname;
    if(firstname==="" || surname===""){
      return "firstname and surname cant be empty";
    }
    switch(gender) {
        case "male":
          useFormalName? fullname= "Lord " + fullname:fullname;
          break;
        case "female":
            useFormalName? fullname= "Lordess " + fullname:fullname;
      }
      return fullname;
}
console.log(getFullname2("chunmei","",false,"female"));

