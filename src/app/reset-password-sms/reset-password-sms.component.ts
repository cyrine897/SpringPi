import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password-sms',
  templateUrl: './reset-password-sms.component.html',
  styleUrls: ['./reset-password-sms.component.css']
})
export class ResetPasswordSmsComponent {
  phone: string = ''; 
  response: any;

  constructor(private http: HttpClient, private router: Router) {}

  checkSMS() {
    const requestBody = {
      phone: this.phone
    };

    this.http.post<any>('http://localhost:8089/pidev/UserRestController/checkSMS', requestBody)
      .subscribe(
        (data) => {
          this.response = data;
          console.log('Response:', this.response);
          this.router.navigate(['/register']); // Redirection logic
        },
        (error) => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }
}
