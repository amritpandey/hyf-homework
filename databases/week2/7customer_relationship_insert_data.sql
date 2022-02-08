insert into
  customer (name, email, phone, city)
values
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
insert into
  status (id, name)
values
  (1, 'Not started');
insert into
  status (id, name)
values
  (2, 'In progress');
insert into
  status (id, name)
values
  (3, 'Done');
INSERT INTO
  product(name, description, price)
VALUES
  ('tv', 'smart lcd tv', 5000),('mobile', 'iphone 12', 8000),('watch', 'smart watch', 2000);
insert into
  `order`(`order_date`, `customer_id`, `status_id`)
values
  ('2021-10-25 06:23:16', 1, 2),('2022-01-25 07:54:16', 2, 1);
INSERT INTO
  order_product(order_id, product_id)
VALUES
  (1, 1),(1, 2),(2, 3),(3, 1),(3, 3);
-- how many products bought by customer name  is not suman and status is other than done;
SELECT
  COUNT(product.id),
  customer.name
from
  product
  JOIN order_product ON order_product.product_id = product.id
  JOIN `order` ON order.id = order_product.order_id
  JOIN customer ON customer.id = order.customer_id
  JOIN status ON status.id = order.status_id
WHERE
  customer.name not like "%suman%"
  AND status.name != "Done "
GROUP BY
  customer.name;