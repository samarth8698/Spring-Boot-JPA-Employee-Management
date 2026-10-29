# Spring Boot JPA Employee Management System #

A full-stack Employee Management System built using ** Spring Boot, React.js, MySQL, and Spring Data JPA (Hibernate) **.

The application allows users to create, view, update, and delete employee records through a React-based user interface connected to a Spring Boot REST API.

🌐 Live Demo :-

* Frontend:-  [Employee Management System](https://employee-management-system-frontend-sepia.vercel.app)
* Backend API:-  [Employee REST API](https://spring-boot-jpa-employee-management.onrender.com/api/employees)
* GitHub Repository:-  [Spring Boot JPA Employee Management](https://github.com/samarth8698/Spring-Boot-JPA-Employee-Management)
* GitHub:- [samarth8698](https://github.com/samarth8698)


🚀 Features :-

* Add Employee
* View All Employees
* Update Employee
* Delete Employee
* RESTful API using Spring Boot
* MySQL Database Integration
* Spring Data JPA and Hibernate
* React.js Frontend
* Axios API Communication
* Responsive User Interface
* Cloud Deployment


🛠️ Tech Stack :-

Backend:-

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven
* REST API


Frontend:-

* React.js
* JavaScript
* Axios
* Bootstrap


Database:-

* MySQL


Tools and Platforms:-

* Spring Tool Suite (STS)
* Visual Studio Code
* MySQL Workbench
* Git and GitHub
* Render
* Vercel

📁 Project Structure:-

Spring-Boot-JPA-Employee-Management/
│
├── Backend/
│   └── Spring-Boot-JPA-Employee-Management/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── com/example/demo/
│       │       │       ├── EmpRec.java
│       │       │       ├── EmployeeController.java
│       │       │       ├── EmployeeRepos.java
│       │       │       └── SpringBootJpaEmployeeManagementApplication.java
│       │       └── resources/
│       │           └── application.properties
│       ├── pom.xml
│       └── README.md
│
├── Frontend/
│   └── reactproject/
│       ├── public/
│       ├── src/
│       ├── package.json
│       └── README.md
│
├── Database/
│   ├── EmployeeManagement.sql
│   └── README.md
│
└── README.md


⚙️ Installation and Setup:-

1. Clone the Repository:-

git clone https://github.com/samarth8698/Spring-Boot-JPA-Employee-Management.git


2. Database Setup:-

1. Install MySQL Server.
2. Open MySQL Workbench or the MySQL command-line client.
3. Execute:- Database/EmployeeManagement.sql.
4. Configure the backend to connect to the employee_management database.

See [ Database/README.md ](Database/README.md) for detailed instructions.


3. Backend Setup:-

Open the backend project directory:-

cd Backend/Spring-Boot-JPA-Employee-Management


Configure the required database environment variables:-

* SPRING_DATASOURCE_URL
* SPRING_DATASOURCE_USERNAME
* SPRING_DATASOURCE_PASSWORD


Example local database URL:-

jdbc:mysql://localhost:3306/employee_management


Run the Spring Boot application using the Maven Wrapper on Windows:-

mvnw.cmd spring-boot:run


See [ Backend README ](Backend/Spring-Boot-JPA-Employee-Management/README.md) for details.


4. Frontend Setup:-

Open a terminal in the frontend directory:-

cd Frontend/reactproject
npm install


Start the frontend using the command supported by the project's package.json.


For a Create React App project:-

npm start


For a Vite project:-

npm run dev


See [ Frontend README ](Frontend/reactproject/README.md) for details.


📌 REST API Endpoints:-

Base endpoint:-

/api/employees

| HTTP Method |      Endpoint       |      Description          |
| ----------- | --------------------| ------------------------- |
| GET         | /api/employees      | Retrieve employee records |
| POST        | /api/employees      | Add a new employee        |
| PUT         | /api/employees/{id} | Update an employee        |
| DELETE      | /api/employees/{id} | Delete an employee        |


💾 Database Details:-

* Database Name:- employee_management
* Table Name:- Employee


Employee Fields:-

| Field      | Description                 |
| ---------- | --------------------------- |
| id         | Employee ID and primary key |
| name       | Employee name               |
| email      | Employee email              |
| age        | Employee age                |
| role       | Employee job role           |
| salary     | Employee salary             |
| experience | Work experience             |
| address    | Employee address            |
| contactno  | Contact number              |

The SQL schema creates the table structure. It does not include the employee records stored in the live database.


☁️ Deployment:-

* Frontend:- Deployed on Vercel
* Backend:- Deployed on Render
* Database:- MySQL

The live application requires an internet connection. Backend availability may depend on the hosting service's plan and current status.


🔐 Security Notes:-

* Do not commit database passwords or other secrets to GitHub.
* Configure credentials using environment variables.
* Avoid publishing real employee contact details or other personal information in sample SQL files.


👨‍💻 Developer:-
              *Samarth Adhao*
