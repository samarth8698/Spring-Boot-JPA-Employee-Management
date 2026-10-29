# 💻 Employee Management System — Frontend #


📌 Overview:-

The Employee Management System Frontend is a responsive web application developed using React.js. It communicates with the Spring Boot backend through REST APIs to manage employee records.

GitHub:- https://github.com/samarth8698


🚀 Features:-

* View Employee List
* Add Employee
* Update Employee
* Delete Employee
* Responsive User Interface
* REST API Integration
* Component-Based Architecture


🛠️ Technologies Used:-

* React.js
* JavaScript (ES6)
* HTML5
* CSS3
* Bootstrap
* Axios


🌐 Live Demo:-

* Frontend — Vercel *
https://employee-management-system-frontend-sepia.vercel.app
                       
* Backend API — Render *
https://spring-boot-jpa-employee-management.onrender.com/api/employees


📂 Project Structure:-

reactproject/
├── public/
├── src/
│   ├── Components/
│   │   ├── EmployeeForm.js
│   │   └── EmployeeList.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── App.test.js
├── package.json
├── package-lock.json
└── README.md


⚙️ Installation and Setup:-

1. Clone the Repository:-

git clone https://github.com/samarth8698/Spring-Boot-JPA-Employee-Management.git


2. Navigate to the Frontend Directory:-

cd Frontend/reactproject


3. Install Dependencies:-

npm install


4. Start the Application:-

This project uses the start command configured in "package.json".


For Create React App:-

npm start


5. Open the Application:-

If the development server starts on port 3000, open:-
                                                        http://localhost:3000


🔗 Backend Integration:-

The frontend communicates with the Spring Boot backend using REST API requests.


Live Backend API:-

https://spring-boot-jpa-employee-management.onrender.com/api/employees


For local development, configure the frontend to use the local backend URL:-

http://localhost:8080/api/employees

Ensure that the backend is running and its CORS configuration allows the frontend origin.


🏗️ Application Architecture:-

React.js Frontend
       |
       | Axios REST API Requests
       v
Spring Boot REST API
       |
       v
Spring Data JPA / Hibernate
       |
       v
MySQL Database


☁️ Deployment:-

* Frontend:- Vercel
* Backend:- Render
* Database:- MySQL

The application requires an internet connection when using the live deployment.


📌 Future Enhancements:-

* Employee Search
* Pagination
* Form Validation
* Authentication and Authorization
* Dashboard
* Additional UI Improvements


👨‍💻 Developer:-
                *Samarth Adhao*
