import React, { useEffect, useState } from "react";
import axios from "axios";

import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";

const API_URL =
  "https://spring-boot-jpa-employee-management.onrender.com/api/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  const getEmployees = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const addEmployee = async (employee) => {
    try {
      await axios.post(API_URL, employee);
      await getEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Please try again.");
    }
  };

  const updateEmployee = async (updatedEmployee) => {
    try {
      await axios.put(
        `${API_URL}/${updatedEmployee.id}`,
        updatedEmployee
      );

      await getEmployees();
      setEditEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee. Please try again.");
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      await getEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Employee Management</h2>

      <EmployeeForm
        addEmployee={addEmployee}
        editEmployee={editEmployee}
        updateEmployee={updateEmployee}
      />

      <EmployeeList
        employees={employees}
        onEdit={setEditEmployee}
        onDelete={deleteEmployee}
      />
    </div>
  );
}

export default App;