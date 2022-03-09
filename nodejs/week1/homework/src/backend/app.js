const express = require('express');
const app = express();

// import data here
const meals = require('./data/meals.json');
const reservations = require('./data/reservations.json');
const reviews = require('./data/reviews');


app.get("/", sendGreeting);
app.get("/meals", listMeals);
app.get("/reservations", listReservations);
app.get("/cheap-meals", cheapMealsList);
app.get("/large-meals", largeMealsList);
app.get("/meal", listMeal);
app.get("/reservation", listReservation);

app.get('/', async (request, response) => {
    response.send('asd');
});

async function sendGreeting(request, response)  {
  response.send('asd');
};

async function listMeals(request, response) {
    const allTheMeals = meals.map((meal) => {
        const reviewOfEachMeal = reviews.filter(
            (review) => review.mealId === meal.id,
        );
        return {
            ...meal,
            reviews: reviewOfEachMeal,
        };
    });
    response.json(allTheMeals);
};

async function cheapMealsList(request, response){
    const allCheapMeals = meals
        .filter((meal) => meal.price < 80)
        .map((cheapMeal) => {
            const reviewOfEachCheapMeal = reviews.filter(
                (review) => review.mealId === cheapMeal.id,
            );
            return {
                ...cheapMeal,
                reviews: reviewOfEachCheapMeal,
            };
        });
    response.json(allCheapMeals);
};

async function largeMealsList(request, response){
    const largeMeals = meals
        .filter((meal) => meal.maxNumberOfGuests > 20)
        .map((largeMeal) => {
            const reviewOfEachLargeMeal = reviews.filter(
                (review) => review.mealId === largeMeal.id,
            );
            return {
                ...largeMeal,
                reviews: reviewOfEachLargeMeal,
            };
        });
    response.json(largeMeals);
};

async function listMeal(request, response){
        const reviewOfRandMeal = reviews
        .filter((review) => review.mealId === randomValue(meals))
        .map((randomMeal) => {
            const reviewOfEachRandomMeal = reviews.filter(
                (review) => review.mealId === randomMeal.id,
            );
            return {
                ...randomMeal,
                reviews: reviewOfEachRandomMeal,
            };
        });
    response.json(reviewOfRandMeal);
};

async function listReservations(request, response){
    response.json(reservations);
};

function randomValue(upperLimit) {
  const random = Math.round(Math.random() * upperLimit.length + 1);
return random;
}

async function listReservation(request, response) {
    const allRes = reservations.filter((randRes) => randRes.id === randomValue(reservations));
    response.json(allRes);
};

module.exports = app;
