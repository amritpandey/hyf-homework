const class07Students = ['Chris', 'Anne', 'Colin'];

 function addStudentToClass(studentName) {
     if(studentName===""){
        return "Cannot be empty student name!!!"
    }
     if(class07Students.length<6){
          for(let i=0;i<class07Students.length;i++)
         {
            if(class07Students[i].includes(studentName))
            {
             console.log(`student ${studentName} already exits`); 
             return;
            }
        } 
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
   return class07Students.length; 
} 
console.log(addStudentToClass("Michael"));
console.log(addStudentToClass("queen"));
console.log(addStudentToClass("Julia"));

console.log(getNumberOfStudents());