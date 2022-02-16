use mealsharing;
-- Meal
-- Get all meals
SELECT
  title
from
  Meal;
-- Add a new meal
INSERT INTO
  Meal(
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES(
    'Rød grød med fløde',
    'lakkert mad alle skal elske',
    'sundby',
    '2021-10-25 06:54:16',
    15,
    179.00,
    '2021-10-26 06:54:16'
  );
-- Get a meal with any id,
select
  *
from
  Meal
WHERE
  id = 1;
-- fx 1 Update  a meal with any id,  fx 1.
UPDATE
  Meal
SET
  title = "Burger"
WHERE
  id = 1;
-- Update any attribute fx the title or multiple attributes
UPDATE
  Meal
SET
  title = "small pizza",
  description = "Pizza for babies"
WHERE
  id = 1;
-- Delete a meal with any id,  fx 1
DELETE FROM
  Meal
WHERE
  id = 3;
-- RESERVATION
  -- Get all reservations
SELECT
  *
FROM
  Reservation;
-- Add a new reservation
INSERT INTO
  Reservation
VALUES(
    6,
    21,
    "2022-02-13",
    67512412,
    "john lenon",
    "john.lenon@fmail.com",
    4
  );
-- Get a reservation with any id, fx 1
SELECT
  id,
  contact_name,
  contact_phonenumber,
  number_of_guests,
  created_date
from
  Reservation
WHERE
  id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  Reservation
SET
  number_of_guests = 32
WHERE
  id = 2;
-- Delete a reservation with any id, fx 1
DELETE FROM
  Reservation
WHERE
  id = 3;
-- REVIEW
  -- Get all reviews
SELECT
  *
FROM
  Review;
-- Add a new review
INSERT INTO
  Review
VALUES
  (
    4,
    "bad",
    "taste gobadod dont like it ",
    1,
    now(),
    4
  );
-- Get a review with any id, fx 1
SELECT
  *
FROM
  Review
WHERE
  id = 3;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  Review
SET
  title = "Excellent",
  stars = 5
WHERE
  id = 1;
-- Delete a review with any id, fx 1
DELETE FROM
  Review
WHERE
  id = 3;
-- ADDITIONAL QUERIES
  -- Get meals that has a price smaller than a specific price fx 90
select
  title,
  price
from
  Meal
WHERE
  price < 90;
-- Get meals that still has available reservations(unable to sort only positive numbers here)
select
  Meal.id,
  Meal.title as Item,
  Meal.max_reservations,
  SUM(Reservation.number_of_guests) as "Total guests",
  (
    Meal.max_reservations - SUM(Reservation.number_of_guests)
  ) as Remaining
FROM
  Meal
  INNER JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY
  Meal.id;
WHERE
  Meal.id = 1;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  *
FROM
  Meal
WHERE
  title LIKE "Rød grød med%";
-- Get meals that has been created between two dates
SELECT
  *
FROM
  Reservation
WHERE
  created_date BETWEEN '2022-01-26'
  AND '2022-02-03';
-- Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  Meal
LIMIT
  3;
-- Get the meals that have good reviews
select
  Meal.title AS Meal,
  Review.title AS Review
from
  Meal
  INNER JOIN Review ON Meal.id = Review.meal_id
WHERE
  Review.stars >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT
  Meal.title,
  Reservation.number_of_guests,
  Reservation.created_date
FROM
  Meal
  INNER JOIN Reservation ON Reservation.meal_id = Meal.id
WHERE
  title LIKE "%pizza%"
ORDER BY
  Reservation.created_date ASC;
-- Sort all meals by average number of stars in the reviews
SELECT
  Meal.title AS Meal,
  AVG(Review.stars) as Average
FROM
  Review
  INNER JOIN Meal ON Review.meal_id = Meal.id
GROUP BY
  Meal.id
ORDER BY
  Average;