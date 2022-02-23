const express = require("express");
const app = express();


// import data here
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews");
//console.log(meals[0].title);

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("asd");
});

/*
Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)
*/

app.get("/meals", async(request, response)=>{
  const allTheMeals = meals.map(meal=>{
    const reviewOfEachMeal = reviews.filter(review=>review.mealId===meal.id)
    return {
      ...meal,
      reviews:reviewOfEachMeal
    }
  })
  response.send(allTheMeals);
});

/*
Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
*/ 
app.get("/cheap-meals",async(request, response)=>{
  const allCheapMeals = meals.filter(meal=>meal.price<80).map(cheapMeal=>{
    const reviewOfEachCheapMeal= reviews.filter(review=>review.mealId===cheapMeal.id)
    return{
      ...cheapMeal,
      reviews:reviewOfEachCheapMeal
    }
  });
  response.send(allCheapMeals);
})

/*Respond with the json for all the meals (including it's reviews) that can fit lots of people
 */

app.get("/large-meals",async(request, response)=>{
  
  const largeMeals = meals.filter(meal=>meal.maxNumberOfGuests>20).map(largeMeal=>{
    const reviewOfEachLargeMeal= reviews.filter(review=>review.mealId===largeMeal.id)
    return{
      ...largeMeal,
      reviews:reviewOfEachLargeMeal
    }
  });
  response.send(largeMeals);
  });

  
// 	Respond with the json for a random meal (including it's reviews)

app.get("/meal",async(request,response)=>{
  const rMeal = meals.map(all=>all);
  const random = Math.round(Math.random()*rMeal.length+1);
  const reviewOfRandMeal= reviews.filter(review=>review.mealId===random).map(randomMeal=>{
    const reviewOfEachRandomMeal= reviews.filter(review=>review.mealId===randomMeal.id)
    return{
      ...randomMeal,
      reviews:reviewOfEachRandomMeal
    }
  });
  response.send(reviewOfRandMeal);
  });
  

app.get("/reservations",async(request,response)=>{
  const allRes = reservations.map(all=>all);
  response.send(allRes);
});

// Respond with the json for a random reservation

app.get("/reservation",async(request,response)=>{
  const allReservation = reservations.map(all=>all);
  const random = Math.round(Math.random()*allReservation.length+1);
  const allRes = reservations.filter(randRes=>randRes.id===random);
  response.send(allRes);
});

 
module.exports = app;
