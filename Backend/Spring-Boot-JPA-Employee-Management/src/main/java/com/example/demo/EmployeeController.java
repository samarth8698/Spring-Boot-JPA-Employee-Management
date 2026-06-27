package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeRepos repo;

    @GetMapping
    public List<EmpRec> getAllEmployees() {
        return repo.findAll();
    }

    @PostMapping
    public EmpRec addEmployee(@RequestBody EmpRec employee) {
        return repo.save(employee);
    }

    @PutMapping("/{id}")
    public EmpRec updateEmployee(@PathVariable int id,
                                 @RequestBody EmpRec employee) {

        EmpRec emp = repo.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(employee.getName());
            emp.setEmail(employee.getEmail());
            emp.setAge(employee.getAge());
            emp.setRole(employee.getRole());
            emp.setSalary(employee.getSalary());
            emp.setExperience(employee.getExperience());
            emp.setAddress(employee.getAddress());
            emp.setContactno(employee.getContactno());

            return repo.save(emp);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {

        repo.deleteById(id);

        return "Employee Deleted Successfully";
    }
}