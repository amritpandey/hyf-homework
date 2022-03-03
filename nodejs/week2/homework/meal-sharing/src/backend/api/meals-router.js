const express = require('express');
const router = express.Router();

const meals = require('./../data/meals.json');

router.get('/', async (request, response) => {
    try {
        let result;
        if ('title' in request.query) {
            const title = request.query.title;
            const getTitle = meals.find((meal) =>
                meal.title.toLowerCase().includes(title.toLowerCase()),
            );
            result = getTitle;
        }

        if ('maxPrice' in request.query) {
            const maxPrice = Number(request.query.maxPrice);
            const lessThanMaxPrice = meals.filter(
                (meal) => meal.price < maxPrice,
            );
            result = lessThanMaxPrice;
        }

        if ('createdAfter' in request.query) {
            const createdAfter = new Date(request.query.createdAfter);
            const d1 = createdAfter.getTime();

            const createdAfterDate = meals.filter((meal) => {
                const availableDate = new Date(meal.createdAt);
                const d2 = availableDate.getTime();
                return d1 < d2;
            });
            result = createdAfterDate;
        }

        if ('limit' in request.query) {
            const limit = Number(request.query.limit);
            if (meals.length >= 1) {
                const limitedNoOfMeal = meals.slice(0, limit);
                result = limitedNoOfMeal;
            } else {
                result = 'No data found';
            }
        }
        response.send(result);
    } catch (error) {
        throw error;
    }
});

// /api/meals/
/* router.get('/', async (request, response) => {
    try {
        const allMeal = meals.map((meal) => meal);
        response.send(allMeal);
    } catch (error) {
        throw error;
    }
}); */

// /api/meals/{id}

router.get('/:id', async (request, response) => {
    try {
        const id = Number(request.params.id);
        const allMeal = meals.find((meal) => meal.id === id);
        if (allMeal) {
            response.send(allMeal);
        } else {
            response.send('Wrong data or No match found');
        }
    } catch (error) {
        throw error;
    }
});


module.exports = router;
