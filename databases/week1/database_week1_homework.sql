-- db week1 hw
-- 1. Find out how many tasks are in the task table
SELECT
  COUNT(id) as "Total tasks"
FROM
  task;
-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT
  COUNT(id) AS "Total invalid due date"
FROM
  task
WHERE
  due_date is NULL;
-- 3. Find all the tasks that are marked as done
SELECT
  task.title AS Task,
  status.name AS Status
FROM
  task
  JOIN status ON task.status_id = status.id
WHERE
  status.name = "Done";
-- 4. Find all the tasks that are not marked as done
SELECT
  task.title AS Task,
  status.name AS Status
FROM
  task
  JOIN status on task.status_id = status.id
WHERE
  status.name != "Done";
-- 5. Get all the tasks, sorted with the most recently created first
SELECT
  title AS Tasks,
  created AS "Created Date"
FROM
  task
ORDER BY
  created DESC;
-- 6. Get the single most recently created task
SELECT
  title AS Tasks,
  created AS "Created Date"
FROM
  task
ORDER BY
  created DESC
LIMIT
  1;
-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT
  title AS Name,
  due_date AS "Due Date"
FROM
  task
WHERE
  title like "%database%"
  OR description like "%database%";
-- 8. Get the title and status (as text) of all tasks
SELECT
  task.title AS Task,
  status.name AS Status
FROM
  task
  JOIN status ON task.status_id = status.id;
--9.Get the name of each status, along with a count of how many tasks have that status
SELECT
  status.name AS Status,
  COUNT(task.id) AS "Total Task"
FROM
  status
  JOIN task ON status.id = task.status_id
GROUP BY
  status.name;
-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT
  status.name AS "Status",
  COUNT(task.id) AS "Total Task"
FROM
  task
  INNER JOIN status ON status.id = task.status_id
GROUP BY
  status.name
ORDER BY
  COUNT(task.id) DESC;