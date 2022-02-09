INSERT INTO
  customer (name, email, phone, city)
VALUES
  (
    'suman ghimire',
    'suman0@harvard.edu',
    '483-396-8795',
    'ishoj'
  ),
  (
    'chunmei shui',
    'chunmei@harvard.edu',
    '483-396-8795',
    'lyngby'
  );
-- Statuses
INSERT INTO
  status (id, name)
VALUES
  (1, 'Not started');
INSERT INTO
  status (id, name)
VALUES
  (2, 'In progress');
INSERT INTO
  status (id, name)
VALUES
  (3, 'Done');
INSERT INTO
  product(name, description, price)
VALUES
  ('tv', 'smart lcd tv', 5000),('mobile', 'iphone 12', 8000),('watch', 'smart watch', 2000);
INSERT INTO
  `order`(`order_date`, `customer_id`, `status_id`)
VALUES
  ('2021-10-25 06:23:16', 1, 2),('2022-01-25 07:54:16', 2, 1);
INSERT INTO
  order_product(order_id, product_id)
VALUES
  (1, 1),(1, 2),(2, 3),(3, 1),(3, 3);
-- how many products bought by customer name  is not suman and status is other than done;
SELECT
  COUNT(product.id),
  customer.name
FROM
  product
  JOIN order_product ON order_product.product_id = product.id
  JOIN `order` ON order.id = order_product.order_id
  JOIN customer ON customer.id = order.customer_id
  JOIN status ON status.id = order.status_id
WHERE
  customer.name NOT LIKE "%suman%"
  AND status.name != "Done "
GROUP BY
  customer.name;