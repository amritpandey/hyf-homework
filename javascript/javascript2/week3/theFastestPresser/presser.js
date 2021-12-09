// button to click
const btnClicked = document.querySelector('#btnStart');
const inputSeconds = document.querySelector('#setSeconds');

const msgDisplay = document.querySelector('#message-display');

const totalS = document.querySelector('#totalS');
const totalL = document.querySelector('#totalL');

inputSeconds.addEventListener('focus', () => (msgDisplay.innerHTML = ''));
// when button is clicked
btnClicked.addEventListener('click', () => {
    const userProvidedTime = inputSeconds.value;
    if (userProvidedTime !== '') {

        msgDisplay.innerHTML = '';
        totalL.innerHTML = '';
        totalS.innerHTML = '';
        
        setTimeout(() => {
            selectWinner();
        }, userProvidedTime * 1000);

        let countS = 0;
        let countL = 0;

        function selectWinner() {
            if (countS === 0 && countL === 0) {
                msgDisplay.textContent = 'No keys are pressed ';
                inputSeconds.value = '';
            } else {
                if (countS > countL) {
                    msgDisplay.innerHTML = '🚩 S WINS!!!';
                } else if (countL > countS) {
                    msgDisplay.innerHTML = 'L WINS!!! 🚩';
                } else {
                    msgDisplay.innerHTML = `<img src="goodluck.webp">`;
                }
            }

            document.removeEventListener('keypress', logKeyValue);
        }

        // when key is pressed to play the game
        document.addEventListener('keypress', logKeyValue);

        function logKeyValue(e) {
            if (userProvidedTime) {
                const key = e.key.toLowerCase();
                if (key === 's' || key === 'l') {
                    if (key === 's') {
                        countS++;
                        totalS.textContent = countS;
                    } else if (key === 'l') {
                        countL++;
                        totalL.textContent = countL;
                    }
                } else {
                    alert('Only s and l !!!');
                }
            }
        }
    } else {
        //else for empty input checking
        msgDisplay.innerHTML = 'First set time!!!';
    }
}); //end of btnClicked event listener

// restart button
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
    window.location.reload();
});
