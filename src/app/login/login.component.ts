import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { JwtService } from '../Service/jwt-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private userService: UserService, private jwtService: JwtService, private router: Router) { }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        console.log('Logged in successfully:', response);
        const token = response.accessToken;
        const decodedToken = this.jwtService.decodeToken(token);
        if (decodedToken) {
          console.log('Decoded token:', decodedToken);
          const roles = this.userService.getUserRoles(); // Retrieve roles from service
          if (roles) {
            console.log('Roles:', roles);
            // Proceed with handling roles as needed
            this.redirectBasedOnRole(roles);
          } else {
            console.error('Unable to retrieve user roles.');
          }
        } else {
          console.error('Invalid token or decoding error.');
        }
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  
  
  redirectBasedOnRole(roles: string[]) {
    if (roles.includes('ROLE_ADMIN')) {
      console.log('Redirecting to /profile');
      this.router.navigate(['/contact']);
      // Redirect logic goes here
    } else if (roles.includes('ROLE_PARTICIPENT')) {
      console.log('Redirecting to /contact');
      this.router.navigate(['/contact']);
      // Redirect logic goes here
    } else if (roles.includes('ROLE_EVENTORG')) {
      console.log('Redirecting to /etudiant');
      this.router.navigate(['/contact']);
      // Redirect logic goes here
    } else if (roles.includes('ROLE_COMPANY')) {
      console.log('Redirecting to /teacher');
      this.router.navigate(['/contact']);
      // Redirect logic goes here
    } else {
      console.error('Unknown role:', roles);
      // Handle unknown roles or errors
    }
  }
}
