import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule  } from '@angular/forms';
import{EmployeeService}from'../employee.service'
@Component({
  selector: 'app-preheader',
  templateUrl: './preheader.component.html',
  styleUrls: ['./preheader.component.css']
})
export class PreheaderComponent implements OnInit {


    
  firstname: string = "";
  lastname: string = "";
  birthday: string = "";
  email: string = "";
  gender: string = "";
  experience: string = "";
  education: string = "";
  company: string = "";
  salary: string = "";



  employees: any[] = [];
  selectedEmployee: any = {};
  queryControl = new FormControl();
  constructor(private employeeService: EmployeeService) { }
 
  ngOnInit(): void {
    this.getEmployees();
  }
  // get
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: any) => {
        console.log('Employees:', response.data); // Log the data array
        this.employees = response.data; // Assign the data array to the employees property
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
// post
    submit(){
      const employee = {
        firstname: this.firstname,
        lastname: this.lastname,
        birthday: this.birthday,
        email: this.email,
        gender: this.gender,
        experience: this.experience,
        education: this.education,
        company: this.company,
        salary: this.salary
      };   
      
    this.employeeService.addEmployee(employee).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        this.getEmployees(); 
        this.clearForm();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );

  
  } 
    // delete
    deleteEmployee(employeeId: number): void {
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response) => {
          console.log('Employee deleted successfully:', response);
          this.getEmployees(); // Refresh the employee list after deletion
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
    // puthmethod
    update(employee: any) {
      this.selectedEmployee = { ...employee };
      this.firstname = this.selectedEmployee.firstname;
      this.lastname = this.selectedEmployee.lastname;
      this.birthday = this.selectedEmployee.birthday;
      this.gender = this.selectedEmployee.gender;
      this.education = this.selectedEmployee.education;
      this.email = this.selectedEmployee.email;
      this.company = this.selectedEmployee.company;
      this.experience = this.selectedEmployee.experience;
      this.salary = this.selectedEmployee.salary;
    }
    
    save() {
      if (this.selectedEmployee.id) {
        // Update existing employee
        const updatedEmployee = {
          id: this.selectedEmployee.id,
          firstname: this.firstname,
          lastname: this.lastname,
          birthday: this.birthday,
          gender: this.gender,
          education: this.education,
          email: this.email,
          company: this.company,
          experience: this.experience,
          salary: this.salary
        };
  
        this.employeeService.updateEmployee(this.selectedEmployee.id, updatedEmployee).subscribe(
          (response) => {
            console.log('Employee updated successfully:', response);
            this.getEmployees();
            this.clearForm();
          },
          (error) => {
            console.error('Error updating employee:', error);
          }
        );
      } else {
        // Add new employee
        const newEmployee = {
          firstname: this.firstname,
          lastname: this.lastname,
          birthday: this.birthday,
          gender: this.gender,
          education: this.education,
          email: this.email,
          company: this.company,
          experience: this.experience,
          salary: this.salary
        };
  
        this.employeeService.addEmployee(newEmployee).subscribe(
          (response) => {
            console.log('New employee added successfully:', response);
            this.getEmployees();
            this.clearForm();
          },
          (error) => {
            console.error('Error adding new employee:', error);
          }
        );
      }
    }
  
    clearForm() {

      this.firstname = "";
      this.lastname = "";
      this.birthday = "";
      this.gender = "";
      this.education = "";
      this.email = "";
      this.company = "";
      this.experience = "";
      this.salary = "";
      this.selectedEmployee = {}; 
      if (!this.selectedEmployee) {
        this.queryControl.reset();
      }
    }
  

  
  
    }


  
 

  


