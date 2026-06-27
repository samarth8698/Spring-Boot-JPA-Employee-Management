# Spring Boot JPA Employee Management System

A Full-Stack Employee Management System developed using **Spring Boot (Backend)**, **React.js (Frontend)**, **MySQL Database**, and **Spring Data JPA (Hibernate)**.

This application provides complete CRUD operations for managing employee records.

## 🚀 Features

- Add Employee
- View All Employees
- Update Employee
- Delete Employee
- REST API using Spring Boot
- MySQL Database Integration
- Spring Data JPA (Hibernate)
- React.js Frontend
- Axios API Communication
- Responsive User Interface



## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

### Frontend
- React.js
- Axios
- Bootstrap

### Tools
- Spring Tool Suite (STS)
- Visual Studio Code
- MySQL Workbench
- Git
- GitHub



## 📁 Project Structure:-

Spring-Boot-JPA-Employee-Management

│
├── Backend
│ └── Spring Boot Project
│ ├── src/main/java
│ │ ├── EmployeeController.java
│ │ ├── EmployeeRepos.java
│ │ ├── EmpRec.java
│ │ └── SpringBootJpaEmployeeManagementApplication.java
│ │
│ ├── src/main/resources
│ │ └── application.properties
│ │
│ └── pom.xml
│
├── Frontend
│ └── React Project
│ ├── src
│ ├── public
│ └── package.json
│
└── Database
└── Student.sql



## ⚙️ Installation & Setup


### Clone Repository

bash
git clone https://github.com/samarth8698/Spring-Boot-JPA-Employee-Management.git
Backend Setup
Open Backend project in Spring Tool Suite (STS).
Configure MySQL database.
Update application.properties.
spring.datasource.url=jdbc:mysql://localhost:3306/Student
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
Run Spring Boot Application.

Backend URL:-

http://localhost:8080
Frontend Setup

Open Frontend folder in VS Code.

Install dependencies:

npm install

Run React application:

npm start

Frontend URL:-

http://localhost:3000
📌 REST API Endpoints
Method	Endpoint	Description
GET	/api/employees	Get All Employees
POST	/api/employees	Add Employee
PUT	/api/employees/{id}	Update Employee
DELETE	/api/employees/{id}	Delete Employee
💾 Database Details

Database Name:-
Student

Table Name:-
Employee

Employee Fields:-
id
name
email
age
role
salary
experience
address
contactno


👨‍💻 Developer
          Samarth Adhao



GitHub:-
https://github.com/samarth8698
