// employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8085/api/employees';
  private deleteUrl = 'http://localhost:8085/api/employees'; // Update this to your delete URL

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    const deleteUrl = `${this.deleteUrl}/${employeeId}`;
    return this.http.delete(deleteUrl);
  }
  // employee.service.ts

updateEmployee(employeeId: number, updatedEmployee: any): Observable<any> {
  const updateUrl = `${this.baseUrl}/${employeeId}`;
  return this.http.put(updateUrl, updatedEmployee);
}

}
