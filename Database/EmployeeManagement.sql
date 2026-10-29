-- Employee Management System Database
-- MySQL 8.0+

CREATE DATABASE IF NOT EXISTS employee_management;
USE employee_management;

CREATE TABLE IF NOT EXISTS Employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    age INT NOT NULL,
    role VARCHAR(255),
    salary FLOAT NOT NULL,
    experience VARCHAR(255),
    address VARCHAR(255),
    contactno BIGINT,
    PRIMARY KEY (id)
);
