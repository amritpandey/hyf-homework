const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/calculator/add', getAddition);
app.get('/calculator/multiply', getMultiplication);
app.get('/calculator/subtraction', getSubtraction);
app.get('/calculator/division', getDivision);

app.post('/calculator/add', postAddition);
app.post('/calculator/multiply', postMultiplication);
app.post('/calculator/subtraction', postSubtraction);
app.post('/calculator/division', postDivision);

function getAddition(req, res) {
    const firstParam = Number(req.query.firstParam);

    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.query.secondParam);
    if (typeof req.query.secondParam === 'object') {
        const newSecondParam = req.query.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam + newSecondParam);
    } else {
        const add = firstParam + secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(add);
    }
}
function getMultiplication(req, res) {
    const firstParam = Number(req.query.firstParam);
    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.query.secondParam);
    if (typeof req.query.secondParam === 'object') {
        const newSecondParam = req.query.secondParam.reduce(
            (first, second) => Number(first) * Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam * newSecondParam);
    } else {
        const multiply = firstParam * secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(multiply);
    }
}

function getSubtraction(req, res) {
    const firstParam = Number(req.query.firstParam);
    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.query.secondParam);
    if (typeof req.query.secondParam === 'object') {
        const newSecondParam = req.query.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam - newSecondParam);
    } else {
        const subtraction = firstParam - secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(subtraction);
    }
}

function getDivision(req, res) {
    const firstParam = Number(req.query.firstParam);
    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.query.secondParam);
    if (typeof req.query.secondParam === 'object') {
        const newSecondParam = req.query.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam / newSecondParam);
    } else {
        const division = firstParam / secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(division);
    }
}

//post methods

function postAddition(req, res) {
    const firstParam = Number(req.body.firstParam);

    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.body.secondParam);
    if (typeof secondParam === 'object') {
        const newSecondParam = req.body.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam + newSecondParam);
    } else {
        const add = firstParam + secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(add);
    }
}
function postMultiplication(req, res) {
    const firstParam = Number(req.body.firstParam);

    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.body.secondParam);
    if (typeof secondParam === 'object') {
        const newSecondParam = req.body.secondParam.reduce(
            (first, second) => Number(first) * Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam * newSecondParam);
    } else {
        const multiply = firstParam * secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(multiply);
    }
}

function postDivision(req, res) {
    const firstParam = Number(req.body.firstParam);

    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.body.secondParam);
    if (typeof secondParam === 'object') {
        const newSecondParam = req.body.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam / newSecondParam);
    } else {
        const division = firstParam / secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(division);
    }
}
function postSubtraction(req, res) {
    const firstParam = Number(req.body.firstParam);

    if (isNaN(firstParam)) {
        return res.send('First parameter is not a number');
    }
    const secondParam = Number(req.body.secondParam);
    if (typeof secondParam === 'object') {
        const newSecondParam = req.body.secondParam.reduce(
            (first, second) => Number(first) + Number(second),
        );
        if (isNaN(newSecondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(firstParam - newSecondParam);
    } else {
        const subtraction = firstParam - secondParam;
        if (isNaN(secondParam)) {
            return res.send('Second parameter is not a number');
        }
        res.json(subtraction);
    }
}

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
