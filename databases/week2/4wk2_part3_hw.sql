use hyf_lesson2;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  task.title,
  user.email
FROM
  task
  INNER JOIN user_task ON user_task.task_id = task.id
  JOIN user on user.id = user_task.user_id
WHERE
  user.email LIKE "%@spotify.com";
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
  task.title,
  user.name
FROM
  user
  JOIN user_task ON user_task.user_id = user.id
  JOIN task on task.id = user_task.task_id
  JOIN status ON status.id = task.status_id
WHERE
  user.name = "Donald Duck"
  AND status.name = "Not started";
--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
  task.title,
  task.created
FROM
  task
  INNER JOIN user_task on user_task.task_id = task.id
  JOIN user on user.id = user_task.user_id
WHERE
  user.name = 'Maryrose Meadows'
  AND month(created) = 09;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT
  COUNT(id) as 'Total task',
  month(created) as Month
FROM
  task
GROUP BY
  month(created);