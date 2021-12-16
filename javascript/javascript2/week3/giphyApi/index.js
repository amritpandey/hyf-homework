const apiKey = 'lNCKrxGnysHNuatwiRb6g6Q8EUQqT8l6'; //api key
const searchGifInput = document.querySelector('#search-gif'); //input box
const searchGifButton = document.querySelector('#search-gif-button'); //gif searching button
const displayMessage = document.querySelector('#display-message'); // display message
let searchLimitInput = document.querySelector('#search-limit');//how many images input box


//Added event listener to search the number of gif images provided by users
searchLimitInput.addEventListener('input', () => {
    displayMessage.innerHTML = '';
    if (searchGifInput.value) {
        const inputValueForLimitGifhy = searchLimitInput.value;
        const webApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchGifInput.value}&limit=${inputValueForLimitGifhy}`;
        displayGiphyImages(webApi);
    } else {
        searchLimitInput.value = '';
        displayMessage.innerHTML = 'First enter the input search';
    }
});// end of limit add event listener

//adding event listener to gif searching buttton
searchGifButton.addEventListener('click', () => {
    displayMessage.innerHTML = '';
    const inputValue = searchGifInput.value;
    const webApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}`;

    displayGiphyImages(webApi);
}); // end of input box add event listener

function displayGiphyImages(webApi) {
    fetch(webApi)
        .then((response) => response.json())
        .then((getData) => {
            for (let i = 0; i < getData.data.length; i++) {
                const imgUrl = getData.data[i].images.original.url;

                const x = document.createElement('IMG'); //creating img element to hold the image
                x.setAttribute('src', `${imgUrl}`);
                x.setAttribute('height', 300);
                x.setAttribute('width', 400);
                const div = document.createElement('div');// create the div to put the image
                div.appendChild(x);
                displayMessage.appendChild(div); //just added after the error message
            }
        });
}
