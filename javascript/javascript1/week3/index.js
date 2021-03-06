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
  const nameToRemove = "Samuel";

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

  console.log(names);  // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
   
 
  /**
   * When will we be there??
   **/ 


  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function calculateDuration(){
    const totalTime = travelInformation.destinationDistance/travelInformation.speed;
    const timeInMinutes = totalTime*60;
    const hours = Math.floor(timeInMinutes/60);
    const minutes = Math.floor(timeInMinutes % 60);

    return `${hours} hours and ${minutes} minutes` ;
  }
  
  console.log(calculateDuration());


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
      console.log(`${seriesDurations[i].title} took ${percentageValue.toFixed(3)}% of my life` );//tofixed return string not a number

      totalPercentage +=percentageValue;
    }  
 
    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
  }
 
  console.log(calculateLifespanPercentage()); 

  /**
   * Note taking App
   */

  const notes = []; //empty array
  
  //function to save notes with two parameters
  function saveNote(content, id){
   let obj = {
      content:content,
      id:id
    };
    notes.push(obj);
  }

  saveNote("pick up groceries",1);
  saveNote("Do laundry", 2);
  saveNote("Cook food", 3);

  console.log(notes);

  // function to get a note
  function getNote(id) {
    for (const note of notes) {
      if(note.id===id){
        return note;
      }
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}

  // function to log out notes
  function logOutNotesFormatted() {

    for (const note of notes) {
      console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    } 
  }
  
  console.log(logOutNotesFormatted());

  //function to change your note
  function updateContentOfNote(id, content){
    for (const note of notes) {
      if(note.id===id){
        note.content=content;
      }
    }
  }
  updateContentOfNote(3, "Dont cook food, i will buy today");
  console.log(notes);


  /**
   * Smart phone usage app
   */

  const activities=[];

  function addActivity(date, activity, duration){
   /*  if(typeof date==="string" && typeof activity==="string"&& typeof duration ==="number"){
      return "Error, supplied wrong arguments";
    }  */// here i tried to check parameters datatype but not working yet

    let obj1 = {
      "date":date,
      "activity":activity,
      duration:duration
    };
    activities.push(obj1);
  }

  addActivity("23/7-18", "Youtube", 30);
  addActivity("25/7-18", "Youjz", 23);
  addActivity("25/8-18", "Youjz", 5);

  console.log(activities);

  function showStatus(){//global activities is not visible now if i use activities as parameter here
    let totalDuration = 0;
    const limit = 100;
    if(activities.length===0){
      console.log("Add some activities before calling showStatus");
    }else{
      for (const activity of activities) {
        totalDuration += activity.duration;
      }
      if(totalDuration<limit){
      console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);
    }else{
      console.log("You have reached your limit, no more smartphoning for you!");
    }
    }
  }

  showStatus(activities);//how activities passed here matters, elaborate it