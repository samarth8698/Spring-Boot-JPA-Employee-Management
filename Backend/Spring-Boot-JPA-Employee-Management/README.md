# ☕ Spring Boot JPA Employee Management

A backend REST API for managing employee records built using **Spring Boot**, **Spring Data JPA**, and **MySQL**. The application supports complete CRUD operations and follows a layered architecture using Controller, Repository, and Entity classes.

## 🚀 Features

- Add Employee
- Get All Employees
- Get Employee by ID
- Update Employee
- Delete Employee
- RESTful APIs
- Spring Data JPA
- MySQL Integration
- Maven Project


## 🛠️ Technologies Used

- Java 17
- Spring Boot
- Spring Data JPA
- Spring Web
- MySQL
- Maven



## 📂 Project Structure

src
├── main
│   ├── java
│   │   └── com.example.demo
│   │       ├── EmployeeController.java
│   │       ├── EmployeeRepos.java
│   │       ├── EmpRec.java
│   │       └── SpringBootJpaEmployeeManagementApplication.java
│   │
│   └── resources
│       ├── static
│       ├── templates
│       └── application.properties
│
└── test



## ⚙️ Database Configuration

Configure your MySQL database inside:

```
src/main/resources/application.properties
```

Example:

properties:-
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080


## ▶️ Run the Project

Clone the repository:-

bash
git clone https://github.com/samarth8698/Spring-Boot-JPA-Employee-Management.git

Open the project in Eclipse or STS and run:


SpringBootJpaEmployeeManagementApplication.java


Or using Maven:-
bash
mvn spring-boot:run


## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /employees | Get All Employees |
| GET | /employees/{id} | Get Employee by ID |
| POST | /employees | Add Employee |
| PUT | /employees/{id} | Update Employee |
| DELETE | /employees/{id} | Delete Employee |

---

## 📁 Architecture


Client
   │
REST API
   │
Controller
   │
Repository (JPA)
   │
MySQL Database



## 👨‍💻 Developer

**Samarth Adhao**

GitHub: https://github.com/samarth8698
