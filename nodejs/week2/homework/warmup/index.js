const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('nodejs week2 homework'));

app.get('/numbers/add', (req, res) => {
    let firstNumber, secondNumber;

    if ('firstNumber' in req.query) {
        firstNumber = Number(req.query.firstNumber);
    }
    if ('secondNumber' in req.query) {
        secondNumber = Number(req.query.secondNumber);
    }
    const sum = firstNumber + secondNumber;
    res.send(`Sum of ${firstNumber} + ${secondNumber} : ${sum}`);
});

app.get('/numbers/multiply', (req, res) => {
    const firstNumber = Number(req.query.firstNumber);
    const secondNumber = Number(req.query.secondNumber);
    const multiply = firstNumber * secondNumber;
    if (!multiply) {
      res.send("Not a valid number")
    }else{
    res.send(
        `Multiplication of ${firstNumber} * ${secondNumber} : ${multiply}`,
    );
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
