import React, { useEffect, useState } from "react";

function EmployeeForm({ addEmployee, editEmployee, updateEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setEmail(editEmployee.email);
      setRole(editEmployee.role);
      setAge(editEmployee.age);
      setSalary(editEmployee.salary);
      setExperience(editEmployee.experience);
      setAddress(editEmployee.address);
      setContactNo(editEmployee.contactno);
    }
  }, [editEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      role.trim() === "" ||
      String(age).trim() === "" ||
      String(salary).trim() === "" || 
      String(experience).trim() === "" || 
      address.trim() === "" ||
      String(contactno).trim() === ""
    ) {
      alert("All fields required");
      return;
    }

    if (editEmployee) {
      updateEmployee({
        id: editEmployee.id,
        name,
        email,
        role,
        age,
        salary,
        experience,
        address,
        contactno,
      });
    } else {
      addEmployee({
        name,
        email,
        role,
        age,
        salary,
        experience,
        address,
        contactno,
      });
    }

    setName("");
    setEmail("");
    setRole("");
    setAge("");
    setSalary("");
    setExperience("");
    setAddress("");
    setContactNo("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <h4>{editEmployee ? "Update Employee" : "Add Employee"}</h4>

      <input
        className="form-control mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="ContactNo"
        value={contactno}
        onChange={(e) => setContactNo(e.target.value)}
      />

      <button className="btn btn-primary">
        {editEmployee ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
