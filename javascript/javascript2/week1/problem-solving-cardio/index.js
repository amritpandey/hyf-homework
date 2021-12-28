//Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'yø', 'planetarium'];
//notThisFunctionName(danishWords); // returns 'ø'

function findShortestWord(danishWords) {
    const result = danishWords.reduce((previousValue, currentValue) =>
        previousValue.length < currentValue.length
            ? previousValue
            : currentValue,
    );
    return `Shortest word : ${result}`;
}

console.log(findShortestWord(danishWords));

//Find and count the Danish letters

const danishLetters = ['æ', 'ø', 'å'];
const danishString = 'Jeg har en blå bil';
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = 'Blå grød med røde bær';
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function findDanishLetters(dansk) {
    const newArray = dansk.split('');
    let count = 0;
    countOfØ = 0;
    countOfæ = 0;
    countOfå = 0;
    for (const newArr of newArray) {
        if (danishLetters.includes(newArr)) {
            newArr === 'ø' ? countOfØ++ : countOfØ;
            newArr === 'æ' ? countOfæ++ : countOfæ;
            newArr === 'å' ? countOfå++ : countOfå;
            count++;
        }
    }
    //console.log(`total: ${count}, ø:${co}, æ:${cae}, å:${ca}`);
    return `total: ${count}, ø:${countOfØ}, æ:${countOfæ}, å:${countOfå}`;
}

console.log(findDanishLetters(danishString2));
