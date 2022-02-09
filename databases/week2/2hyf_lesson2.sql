-- db week2 hw
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SELECT
  *
FROM
  task;
INSERT INTO
  task(
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES(
    "Prepare for next week",
    "Study database joins",
    now(),
    now(),
    now(),
    2,
    1
  );
-- Change the title of a task
UPDATE
  task
SET
  title = "No need to prepare"
WHERE
  id = 36;
-- Change a task due date
UPDATE
  task
SET
  due_date = "22-02-01"
where
  id = "36";
--  Change a task status
UPDATE
  task
SET
  status_id = 1
WHERE
  id = 36;
-- Mark a task as complete
UPDATE
  task
SET
  status_id = 3
WHERE
  id = 36;
-- Delete a task */
DELETE FROM
  task
WHERE
  id = 36;