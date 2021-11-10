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
  console.log(names);  // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
   
 
  /* When will we be there?? */

  //write a function where you provide speed and distance in km

  function specifySpeed(speed, distance){
    const totalTime = distance/speed;
    const timeInMinutes = totalTime*60;
    const hours = Math.floor(timeInMinutes/60);
    const minutes = Math.floor(timeInMinutes % 60);

    /* const totalTimeToSplit = totalTime.toString().split(".");
    const onlyMinutes = (totalTimeToSplit[1]/100)*60; */

    //function should return the time
    return `${hours} hours and ${minutes} minutes` ;

  }

  console.log(specifySpeed(40,239));
  
  //format of time like this 3 hours and 34 minutes

  /** Series duration of my life */
  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  const lifespanInHours = 80*365*24;//Assuming 80 years of life expectancy and converting into hours
  let totalPercentage = 0;

  function calculateLifespanPercentage(){
    for (let i = 0; i < seriesDurations.length; i++) {
    percentageValue = ((seriesDurations[i].days*24) + seriesDurations[i].hours)*100/lifespanInHours;
    
    /* if(i===0){
      console.log(`${seriesDurations[0].title} took ${percentageValue.toFixed(3)}% of my life` );
    }
    if(i===1){
      console.log(`${seriesDurations[1].title} took ${percentageValue.toFixed(3)}% of my life` );
    }
    if(i===2){
      console.log(`${seriesDurations[2].title} took ${percentageValue.toFixed(3)}% of my life` );
    } */
    totalPercentage +=percentageValue;
    }  
 
    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
  }
 /*
  
   for (const item of seriesDurations) {
    percentageValue = (item.days*24 + item.hours)*100/lifespanInHours;
   }      
    */
  console.log(calculateLifespanPercentage()); 