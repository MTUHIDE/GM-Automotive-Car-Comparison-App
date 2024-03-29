

CREATE DATABASE IF NOT EXISTS my_gm_db;

-- Create a user for the database and connection to django
CREATE USER IF NOT EXIST 'djangouser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL ON blog_data.* TO 'djangouser'@'localhost';
FLUSH PRIVILEGES;


USE my_gm_db;
-- Add your table creation statements here

-- Create a table for cars
CREATE TABLE IF NOT EXISTS cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
