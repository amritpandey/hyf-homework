/* Flight booking fullname function */
/* when all 3 parameters are given  or formalName is not given*/
/*  function getFullname(firstname, surname, useFormalName){
    let fullname = firstname +" "+ surname;
    if(useFormalName){
        fullname = "Lord " + fullname;
    } 
return fullname;
}
let fullnameValue = getFullname("Amrit","Pandey");
console.log(fullnameValue);  */

/* function if useFormalName is not provided as argument */
/* function getFullname1(firstname, surname, useFormalName){
    if(useFormalName === undefined||useFormalName === ""||useFormalName === null){
        let fullname = firstname +" "+ surname;
    if(useFormalName){
        fullname = "Lord " + fullname;
    } 
return fullname;
    }
}

console.log(getFullname1("John", "Lenon", true)); */
//getFullname1("john","lenon");
/* function getFullname1(firstname, surname, useFormalName, gender){
    let fullname = firstname + " " + surname;
    if(gender==="male"){
        if(useFormalName){
            fullname = "Lord " + fullname;
        }
        
    }else if(gender==="female"){
        if(useFormalName){
            fullname = "Lordess " + fullname;
        }
        
    }
    return fullname;
}
    console.log(getFullname1("amrit","pandey",false,"male")); */

/*function with 4 parameters and check  for male female gender*/
  /*   function getFullname2(firstname, surname, useFormalName, gender){
        let fullname = firstname + " " + surname;
        switch(gender) {
            case "male":
              useFormalName? fullname= "Lord " + fullname:fullname;
              break;
            case "female":
                useFormalName? fullname= "Lordess " + fullname:fullname;
              break;
          }
          return fullname;
    }
    console.log(getFullname2("amrit","pandey",true,"female")); */

    /*Event application*/
    
   
   /*  function getEventWeekday(eventDay){
        const weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        const d = new Date();
        let today = d.getDay();
        let eventHappeningDay = today + eventDay;
        return weekdays[eventHappeningDay];

    }
    
    console.log(getEventWeekday(5));
    //console.log(d.getDate(), d.getDay(), d.getFullYear(),d.getMonth());
    
 */
/* weather wear */
/*     function getWeatherWear(temp){
        let preferClothes;
        if(temp<=0){
         preferClothes = "heavy jackets and inner trousers";   
        }else if(temp<15){
            preferClothes = "Normal jackets and pants";
        }else{
            preferClothes = "shorts and a t-shirt";
        }
        return preferClothes;
    }

    const clothesToWear = getWeatherWear(40);
    console.log(clothesToWear); */

    const class07Students = [];
 function addStudentToClass(studentName) {
     if(class07Students.length<6){
        class07Students.push(studentName);
    } else if(studentName==="queen"){
        class07Students.push(studentName);
    } else{
        return "Cannot add more students to class 07";
    } 
    return class07Students;
}

function getNumberOfStudents() {
  // You write code here
  return 
} 
console.log(addStudentToClass("ram"));






