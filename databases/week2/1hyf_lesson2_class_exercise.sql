-- Get all the tasks assigned to Pavel;
SELECT
  task.title,
  user.name
FROM
  (
    task
    join user_task ON task.id = user_task.task_id
  )
  join user ON user.id = user_task.user_id
WHERE
  user.name = "Pavel Brushneen";
--Find how many tasks each user is responsible for;
SELECT
  COUNT(task.id),
  user.name
FROM
  (
    task
    JOIN user_task ON task.id = user_task.task_id
  )
  JOIN user ON user.id = user_task.user_id
GROUP BY
  user.name;
--Find how many tasks with a status=Done each user is responsible for;
SELECT
  count(task.id) as 'Total Task',
  user.name as User,
  status.name as Status
FROM
  status
  JOIN task ON status.id = task.status_id
  JOIN user_task on task.id = user_task.task_id
  JOIN user ON user.id = user_task.user_id
WHERE
  status.name = "Done"
GROUP BY
  user.name;