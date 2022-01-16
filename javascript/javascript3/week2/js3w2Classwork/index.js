/* ;(async ()=>{
  try{
  const result= await functionName();
  }catch(error){
console.log(error);
  }
});

()=>{} */

//exercise 1 using async await to fetch yes or no

(async () => {
    try {
        const yesNoResponse = await fetch('https://yesno.wtf/api');
        const yesNoData = await yesNoResponse.json();
        console.log(yesNoData.answer);
    } catch (error) {
        console.log(error);
    }
})();

// Exercise 2 using promises
const promise = fetch('https://yesno.wtf/api');
promise
    .then((response) => response.json())
    .then((data) => console.log(data.answer))
    .catch((error) => console.log(error));

//Try fetching a url that rejects
const promise2 = fetch('https://knajskdskj.jasdk');
promise2
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//Exercise 3
//1 Create a promise that resolves after 4 seconds

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
     // resolve('Hello');
     reject("Making fail by rejecting")
    }, 4000);
});

promise3.then((data) => console.log(data)).catch((error) => console.log(error));

//Exercise 4
// Create a function that returns a promise,
function YesNoFail4Seconds() {
  const rand = Math.floor(Math.random()*3);
  const promise4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      if (rand===0) {
        resolve("yes")
      } else if(rand===1) {
        resolve("no")
      }else{
        reject("Rejected by getting rand=2")
      }
    }, 4000);
    
  })
  return promise4;
}

/* YesNoFail4Seconds()
.then((data)=>console.log(`The answer is ${data}`))
.catch((err)=>console.log(err))
 */
//Now try consume the YesNoFail4Seconds using async/await

;(async()=>{
  try {
    const response= await YesNoFail4Seconds();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})(); // self executing arrow function in async

//Exercise 5 using async await

async function getAstronautsAndMovies(){
    const astronautsResponse = await fetch("http://api.open-notify.org/astros.json");
  const astronauts=await astronautsResponse.json();
  setTimeout(() => {
  for (const astronaut of astronauts.people) {
    console.log(astronaut.name);
  }
  }, 2000);
 
  
 // return astronauts;
 // fetching another api

  const yesNoResponse = await fetch('https://yesno.wtf/api');
  const yesNoData = await yesNoResponse.json();
  setTimeout(() => {
  console.log(yesNoData.answer);
}, 4000);
 
}

getAstronautsAndMovies();

// Exercise 6 Display together both api using aysnc await

async function displayBothApiTogether(){
  try {
    const astronautsResponse = await fetch("http://api.open-notify.org/astros.json");
  const astronauts=await astronautsResponse.json();
  const astronaut = astronauts.people.map((man)=>man.name);
       
  const moviesResponse =  await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");

  const movies= await moviesResponse.json();
  const movie= movies.map((movie)=>movie.title)


const values = await Promise.all([astronaut,movie])
//battery status

navigator.getBattery().then(function(battery) {
  console.log("Battery status "+battery.level);
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    console.log("Battery status "+this.level);
  };
});

console.log(values);
console.log(movie);
  } catch (error) {
    console.log(error);
  }
}

displayBothApiTogether();