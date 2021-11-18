/**
 * voice assistant project
 */
const getName = [];
const todo = [];
const operators = ['+', '-', '*', '/'];

function getReply(command) {
    const words = command.split(' ');

    //Hello my name is Benjamin
    if (command === '') {
        return 'Please give a command';
    }

    if (command.includes('my name is') && getName.length === 0) {
        const givenName = words[words.length - 1];
        getName.push(givenName);
        return `Nice to meet you ${getName}`;
    }

    // what is my name
    if (command.includes('is my name') && getName.length !== 0) {
        return `Your name is ${getName}`;
    }

    //Add fishing to my todo
    if (command.match(/Add fishing/gi)) {
        todo.push(words[1]);
        return 'fishing added to your todo';
    }

    //Add singing in the shower
    if (command.includes('Add singing in the shower')) {
        const itemToAdd = command.substring(4, 25);
        todo.push(itemToAdd);
        return 'Singing in the shower added to your todo';
    }

    // remove fishing from todo list
    if (command.match(/remove fishing/gi) && todo.length !== 0) {
        const removeItem = 'fishing';
        const deleteThisItem = todo.indexOf(removeItem);
        todo.splice(deleteThisItem, 1);
        return `Removed ${removeItem} from my todo`;
    }

    // what is on my todo
    if (command.match(/what is on/gi) && todo.length !== 0) {
        //console.log('Following task are listed in todo list :');
        /*  for (let i = 0; i < todo.length; i++) {
            let todoList = `${[i + 1]}. ${todo[i]}`;
            return todoList;
        } */
        return `You have (${todo} ) in your todo list`;
    }

    // What day is it today
    if (command.match(/ is it today/gi)) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const today = new Date();
        let month = months[today.getMonth()];
        return `${today.getDate()} of ${month} ${today.getFullYear()}`;
    }

    // what is 3 + 3
    if (command.match(/what is/gi)) {
        for (const word of words) {
            if (operators.includes(word)) {
                const positionOfOperator = words.indexOf(word);
                const firstNumber = parseInt(words[positionOfOperator - 1]);
                const secondNumber = parseInt(words[positionOfOperator + 1]);

                switch (word) {
                    case '+':
                        const sum = firstNumber + secondNumber;
                        return `Sum of ${firstNumber} + ${secondNumber} = ${sum}`;
                    case '-':
                        const sub = firstNumber - secondNumber;
                        return sub;
                    case '*':
                        const mul = firstNumber * secondNumber;
                        return `Multiplication of ${firstNumber} * ${secondNumber} = ${mul}`;
                    case '/':
                        const div = firstNumber / secondNumber;
                        return div;
                    default:
                        return 'NOT A VALID OPERATOR!!!';
                }
            }
        }
    }

    //set timer for 4 minutes
    if (command.match(/set a timer/gi)) {
        const totalMinutes = command.match(/\d+/g);
        const totalInMilliseconds = totalMinutes[0] * 60 * 1000;
        setTimeout(function () {
            console.log('Timer done');
        }, totalInMilliseconds);
        console.log(`Timer set for ${totalMinutes} minute(s)`);
    }
}

console.log(getReply('Hello my name is Benjamin')); // "Nice to meet you benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
console.log(getReply('Add singing in the shower to my todo')); // "fishing added to your todo"
console.log(getReply('Add fishing to my todo')); // "fishing added to your todo"
console.log(getReply('Remove fishing from my todo')); // "fishing added to your todo"
console.log(getReply('What is on my todo?')); // "fishing added to your todo"
console.log(getReply('What day is it today'));
console.log(getReply('what is 3 + 5'));
console.log(getReply('Set a timer for 1 minutes'));
