CREATE DATABASE mealsharing DEFAULT CHARACTER SET = 'utf8mb4';
use mealsharing;
CREATE TABLE `Reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT(10) NOT NULL,
  `created_date` DATETIME NOT NULL,
  `contact_phonenumber` VARCHAR(10),
  `contact_name` VARCHAR(50) NOT NULL,
  `contact_email` VARCHAR(50),
  `meal_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE
  SET
    NULL ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE Table Meal(
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  location VARCHAR(255),
  `when` DATETIME,
  max_reservations int(10),
  price DECIMAL,
  created_date DATE,
  PRIMARY KEY(id)
);
CREATE TABLE `Review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255),
  `stars` int(10),
  `created_date` DATE,
  `meal_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE
  SET
    NULL ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;