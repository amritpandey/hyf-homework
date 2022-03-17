const express = require('express');
const app = express();

// import data here
const meals = require('./data/meals.json');
const reservations = require('./data/reservations.json');
const reviews = require('./data/reviews');

app.get('/', sendGreeting);
app.get('/meals', listMeals);
app.get('/reservations', listReservations);
app.get('/cheap-meals', cheapMealsList);
app.get('/large-meals', largeMealsList);
app.get('/meal', listMeal);
app.get('/reservation', listReservation);

async function sendGreeting(request, response) {
    response.send('asd');
}

async function listMeals(request, response) {
    response.json(joinMealsWithReviews(meals));
}

function joinMealsWithReviews(meals) {
    const mealWithReview = meals.map((meal) => {
        const reviewOfEachMeal = reviews.filter(
            (review) => review.mealId === meal.id,
        );
        return {
            ...meal,
            reviews: reviewOfEachMeal,
        };
    });
    return mealWithReview;
}

async function cheapMealsList(request, response) {
    const allCheapMeals = meals.filter((meal) => meal.price < 80);
    response.json(joinMealsWithReviews(allCheapMeals));
}

async function largeMealsList(request, response) {
    const largeMeals = meals.filter((meal) => meal.maxNumberOfGuests > 20);

    response.json(joinMealsWithReviews(largeMeals));
}

async function listMeal(request, response) {
    let randomMeal = meals[randomValue(meals.length)];
    /* const reviewOfRandMeal = meals
        .filter((meal) => meal.id === randomMeal.id); */
    const mealsWithReviews = joinMealsWithReviews([randomMeal]);

    response.json(joinMealsWithReviews(mealsWithReviews));
}

async function listReservations(request, response) {
    response.json(reservations);
}

function randomValue(upperLimit) {
    const random = Math.round(Math.random() * upperLimit);
    return random;
}
randomValue(3);

async function listReservation(request, response) {
    const randomIndex = reservations[randomValue(reservations.length)];
    response.json(randomIndex);
}

module.exports = app;
