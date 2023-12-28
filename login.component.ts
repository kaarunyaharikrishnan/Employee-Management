// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private router: Router) {}

  login() {
    const staticUsername = 'Admin123';
    const staticPassword = 'password123';
  
    // console.log('Entered Username:', this.username);
    // console.log('Entered Password:', this.password);

    if (this.username == staticUsername && this.password == staticPassword) {
      alert('Login successful. Redirecting to the next page...');
      setTimeout(() => {
        this.router.navigate(['/system']);
      }, 1000);
    } else {
      alert('Login failed. Please check your username and password.');
    }
  }
}
