import React, { useEffect, useState } from "react";

import axios from "axios";

import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";

function App() 
{
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // const [editFormToggel, setEditFormToggel] = useState(false);

  const getEmployees = async () =>
  {
    const { data } = await axios.get("http://localhost:8080/api/employees");
    setEmployees(data);
  }

  useEffect(() =>
  {
    getEmployees();
  }, [])

  const addEmployee = async (employee) => 
  {
    //setEmployees([...employees, { ...employee, id: Date.now() }]);
    await axios.post("http://localhost:8080/api/employees", employee);

    const { data } = await axios.get("http://localhost:8080/api/employees");
    setEmployees(data);
  };

  const updateEmployee = async (updatedEmployee) => 
  {
   // setEmployees( employees.map((e) => e.id === updatedEmployee.id ? updatedEmployee : e));
    //setEditEmployee(null);
    await axios.put("http://localhost:8080/api/employees/" + updatedEmployee.id,updatedEmployee);

    const { data } = await axios.get("http://localhost:8080/api/employees");
    setEmployees(data);
    setEditEmployee(null);
  };

  const deleteEmployee = async(id) => 
  {
    // setEmployees(employees.filter((e) => e.id !== id));
    await axios.delete("http://localhost:8080/api/employees/" + id);

    const { data } = await axios.get("http://localhost:8080/api/employees");
    setEmployees(data);
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