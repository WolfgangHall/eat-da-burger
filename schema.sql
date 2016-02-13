CREATE DATABASE burgers_db;

USE DATABASE  burgers_db;

CREATE TABLE burger_table (
  id INT AUTO_INCREMENT,
  Primary Key(id),
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN,
  date TIMESTAMP
);

