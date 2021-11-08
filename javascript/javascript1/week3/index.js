/* Item array removal */

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";

  //write code here
  // first method removing name using push() and new empty array 

  const newNames = [];
  let foundname = 0;

  for (let i = 0; i < names.length; i++) {
      if(names[i]===nameToRemove && foundname===0){
          foundname++;
      }else{
          newNames.push(names[i]);
      } 
  }

  
  console.log(newNames);

  // Alternate method to remove using splice function
 
  for (let i = 0; i < names.length; i++) {
    if(names[i]===nameToRemove){
        names.splice(i,1);
    }
}

  // Code done
  console.log(names);
  // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
   