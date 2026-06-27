import React from "react";

function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="card p-3">
      <h2>Employees List</h2>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Address</th>
            <th>Contact-No</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4">No Data</td>
            </tr>
          ) : (
            employees.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
                <td>{e.age}</td>
                <td>{e.salary}</td>
                <td>{e.experience}</td>
                <td>{e.address}</td>
                <td>{e.contactno}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2"
                    onClick={() => onEdit(e)}>
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm"
                    onClick={() => onDelete(e.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
