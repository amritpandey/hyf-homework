-- class exercises
-- 1. Select the names and phones of all users;
select
  name,
  phone
from
  user;
-- 2. Select the name of the user with id=11;
select
  name
from
  user
where
  user.id = 11;
--3. Find how many users exist in the database
select
  COUNT(id)
from
  user;
--4. Select the names of the first 5 users in the database
select
  name
from
  user
LIMIT
  5;
--5. Select the names of the last 3 users in the database;
select
  id,
  name
from
  user
ORDER BY
  id DESC
LIMIT
  3;
-- 6 Sum all the ids in the user table
select
  SUM(id) AS "Total ID"
from
  user;
--7.Select all users and order them alphabetically by name;
select
  name
from
  user
ORDER BY
  name asc;
--8 Find all tasks that include SQL either on the title or on the description;
select
  title,
  description
from
  task
where
  title like "%sql%"
  or description like "%sql";
--9 Find the title of all tasks that the user Maryrose is responsible for;
SELECT
  task.title
from
  task
  INNER JOIN user on task.user_id = user.id
WHERE
  user.name like "%Maryrose%";
--10 Find how many tasks each user is responsible for;
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
  user.name as Username,
  status.name as Status,
  COUNT(task.id) as Total
FROM
  (
    user
    JOIN task on task.user_id = user.id
  )
  JOIN status on task.status_id = status.id
where
  status.name = "Done"
GROUP BY
  user.id;