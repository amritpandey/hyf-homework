-- class exercises
-- 1. SELECT the names and phones of all users;
SELECT
  name,
  phone
FROM
  user;
-- 2. SELECT the name of the user with id=11;
SELECT
  name
FROM
  user
WHERE
  user.id = 11;
-- 3. Find how many users exist in the database
SELECT
  COUNT(id)
FROM
  user;
-- 4. SELECT the names of the first 5 users in the database
SELECT
  name
FROM
  user
LIMIT
  5;
-- 5. SELECT the names of the last 3 users in the database;
SELECT
  id,
  name
FROM
  user
ORDER BY
  id DESC
LIMIT
  3;
-- 6 Sum all the ids in the user table
SELECT
  SUM(id) AS "Total ID"
FROM
  user;
-- 7.SELECT all users and order them alphabetically by name;
SELECT
  name
FROM
  user
ORDER BY
  name asc;
-- 8 Find all tasks that include SQL either on the title or on the description;
SELECT
  title,
  description
FROM
  task
WHERE
  title LIKE "%sql%"
  OR description like "%sql";
-- 9 Find the title of all tasks that the user Maryrose is responsible for;
SELECT
  task.title
FROM
  task
  INNER JOIN user ON task.user_id = user.id
WHERE
  user.name LIKE "%Maryrose%";
-- 10 Find how many tasks each user is responsible for;
SELECT
  user.name,
  COUNT(task.id) AS "Total Task"
FROM
  user
  INNER JOIN task ON task.user_id = user.id
GROUP BY
  user.id;
-- 11. Find how many tasks with a status=Done each user is responsible for;
SELECT
  user.name AS Username,
  status.name AS Status,
  COUNT(task.id) AS Total
FROM
  (
    user
    JOIN task ON task.user_id = user.id
  )
  JOIN status ON task.status_id = status.id
WHERE
  status.name = "Done"
GROUP BY
  user.id;