//javascript 3 week2 homework
// Movies exercise
/*
  Create an array of bad movies
  Creat an array of bad movies since year 2000
*/

fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json',
)
    .then((response) => response.json())
    .then((data) => {
        getBadMovies(data);
        const badMovies = data.filter((movie) => movie.tag === 'Bad');
        const badMoviesAfter2000 = badMovies.filter(
            (movie) => movie.year >= 2000,
        );
        console.log(badMovies);
        console.log(badMoviesAfter2000);
    })
    .catch((error) => {
        console.log(error);
    });

function getBadMovies(data) {
    const movies = data.map((movie) => {
        if (movie.rating >= 7) {
            movie.tag = 'Good';
        } else if (movie.rating > 2 && movie.rating < 7) {
            movie.tag = 'Average';
        } else {
            movie.tag = 'Bad';
        }
        data.push(movie);
    });
    return movies;
}

//Promise that resolves after set time

function promiseAfterSetTime(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000);
    });
}
promiseAfterSetTime(8).then(() => {
    console.log('I am called asynchronously'); // logged out after 8 seconds
});

// using above code in async await

(async (resolveAfter) => {
    try {
        await promiseAfterSetTime(resolveAfter);
        console.log('I am called asynchronously using async await');
    } catch (error) {
        console.log(error);
    }
})(8);

//Rewrite time
//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.

function setTimeoutPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('fudjdd');
        }, value);
    });
}

setTimeoutPromise(3000)
    .then((data) => {
        console.log(data + ' Called after a3 seconds');
    })
    .catch((error) => {
        console.log(error);
    });

// geo location
function getCurrentLocation() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject),
        );
    }
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(
            `Current Location found at these coordinates: Latitude:${lat}, Longitude:${lon} `,
        );
    })
    .catch((error) => {
        // called if there was an error getting the users location
        let msg = null;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                msg = 'User denied the request for Geolocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                msg = 'Location information is unavailable.';
                break;
            case error.TIMEOUT:
                msg = 'The request to get user location timed out.';
                break;
            case error.UNKNOWN_ERROR:
                msg = 'An unknown error occurred.';
                break;
        }
        console.log(msg);
    });

// Fetching and waiting
/*
  Do the 3 steps below using promises and .then.
  Do the 3 steps below using async/await
  The 3 steps:

  Wait 3 seconds
  After 3 seconds fetch some data from any api you like
  Log out the data from the api
*/
// first 3 steps using promises and .then

const fetchUsingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const fetchApi = fetch('https://yesno.wtf/api')
            .then((resolve) => resolve.json())
            .then((data) => {
                //console.log(data);
            });
        !fetchApi
            ? resolve('successfully fetched')
            : reject('Problem occur during fetching');
    }, 3000);
});

//consuming promise here

fetchUsingPromise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//the 3 steps below using async/await

(async () => {
    try {
        const fetchApiResponse = await fetch('https://yesno.wtf/api');
        const fetchApi = await fetchApiResponse.json();

        setTimeout(() => {
            console.log('Info from async is ' + fetchApi.answer);
        }, 4000);
    } catch (error) {
        console.log(error);
    }
})();
