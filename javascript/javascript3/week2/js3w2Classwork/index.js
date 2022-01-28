//exercise 1 using async await to fetch yes or no
/*
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
        reject('Making fail by rejecting');
    }, 4000);
});

promise3.then((data) => console.log(data)).catch((error) => console.log(error));

//Exercise 4
// Create a function that returns a promise,
function YesNoFail4Seconds() {
    const rand = Math.floor(Math.random() * 3);
    const promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand === 0) {
                resolve('yes');
            } else if (rand === 1) {
                resolve('no');
            } else {
                reject('Rejected by getting rand=2');
            }
        }, 4000);
    });
    return promise4;
}

YesNoFail4Seconds()
    .then((data) => console.log(`The answer is ${data}`))
    .catch((err) => console.log(err));

//Now try consume the YesNoFail4Seconds using async/await
(async () => {
    try {
        const response = await YesNoFail4Seconds();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})(); // self executing arrow function in async
*/
// making function because of duplication of the code

//Exercise 5 using async await
async function getAstronauts(){
  try {
    const astronautsResponse = await fetch(
       'http://api.open-notify.org/astros.json',
   );
   const astronauts = await astronautsResponse.json(); 
   const astronautName = await astronauts.people.map(
       (astronaut) => astronaut.name,
   );
   //console.log(astronautName);
   return astronautName;
}catch(err){
  console.log(err);
}
}

async function getMovies() {
  try {
    
  const yesNoResponse = await fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json',
);
const movies = await yesNoResponse.json();
const filteredMovies = movies
    .map((movie) => movie.title)
    .filter((newMovie) => newMovie.includes('aba'));
    //console.log(filteredMovies);
    return filteredMovies;
} catch (error) {
    console.log(error);
}}

async function getAstronautsAndMovies() {
    try {
         
        const astronauts = await getAstronauts();
        const movies = await getMovies();
        
        console.log(astronauts)
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}
getAstronautsAndMovies();


// Exercise 6 Display together both api using async await first method

async function displayBothApiTogether() {
    try {
        const astronauts = await getAstronauts();
        const movies = await getMovies();

        const values = await Promise.all([astronauts, movies]);

        //battery status checking using navigator.getBattery

        let battery = await navigator.getBattery();
        const result = await batteryStatus(battery);

        async function batteryStatus(battery) {
            console.log('battery level: ', battery.level * 100 + ' %');

            // ... and any subsequent updates.
            battery.onlevelchange = function () {
                console.log('battery level changed: ', this.level * 100 + ' %');
            };

            battery.onchargingchange = function () {
                const batteryStatus = battery.charging
                    ? 'charging'
                    : 'not charging';
                console.log(batteryStatus);
            };

            battery.ondischargingtimechange = function () {
                const ondischargingtimechange = battery.dischargingTime / 60;
                console.log(ondischargingtimechange);
            };
        }

        //console.log(result*100 +" %");
        console.log(values);
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

displayBothApiTogether();
/*
//Another method for solving exercise 6
(async () => {
    try {
        const API1 = 'http://api.open-notify.org/astros.json';
        const API2 =
            'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

        const fetchApi = await Promise.all([fetch(API1), fetch(API2)]);
        const fetchJson = fetchApi.map((fetchEach) => fetchEach.json());
        const output = await Promise.all(fetchJson);
        console.log(output);
    } catch (error) {
        console.log(`${error.code}: ${error}`);
    }
})();*/
