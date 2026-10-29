#🗄️ Employee Management System — Database #


📌 Overview:-

This directory contains the SQL schema required for the Employee Management System.

The application uses MySQL to store employee records.


🛠️ Technologies Used:-

* MySQL
* SQL
* Spring Data JPA
* Hibernate


📂 Database Files:-

Database/
├── EmployeeManagement.sql
└── Student.sql
|__ README.md

EmployeeManagement.sql :- creates the database and Employee table required by the application.

> Note: The existing "Student.sql" file contains tables and sample data from multiple exercises. It is not required for setting up this Employee Management System.


📋 Employee Table Structure:-

| Column     | Data Type    |         Description             |
| ---------- | ------------ | ------------------------------- |
| id         | INT          | Primary key with auto-increment |
| name       | VARCHAR(255) | Employee name                   |
| email      | VARCHAR(255) | Employee email                  |
| age        | INT          | Employee age                    |
| role       | VARCHAR(255) | Employee job role               |
| salary     | FLOAT        | Employee salary                 |
| experience | VARCHAR(255) | Work experience                 |
| address    | VARCHAR(255) | Employee address                |
| contactno  | BIGINT       | Contact number                  |


⚙️ Database Setup:-

1. Install MySQL:-

Install and start MySQL Server.


2. Execute the SQL Script:-

From the repository root, run:-

mysql -u YOUR_USERNAME -p < Database/EmployeeManagement.sql


Replace "YOUR_USERNAME" with your MySQL username. Enter your password when prompted.

Alternatively, open "EmployeeManagement.sql" in MySQL Workbench and execute it.

The script creates the "employee_management" database and the "Employee" table.


3. Configure the Backend:-

Configure these environment variables for a local MySQL database:-

SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/employee_management
SPRING_DATASOURCE_USERNAME=YOUR_USERNAME
SPRING_DATASOURCE_PASSWORD=YOUR_PASSWORD

Use your own MySQL credentials.


⚠️ Important Notes:-

* This SQL script creates the database schema; it does not contain the live database's employee records.
* Do not publish database passwords or sensitive employee information.
* Ensure the database name matches the backend configuration.
* The existing live database is not changed by adding this SQL file to GitHub.

👨‍💻 Developer:-
              *Samarth Adhao*
