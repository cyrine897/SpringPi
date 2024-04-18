import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepasswf-sms',
  templateUrl: './changepasswf-sms.component.html',
  styleUrls: ['./changepasswf-sms.component.css']
})
export class ChangepasswfSmsComponent {



  numtlfn: string = '';
  code: string = '';
  password: string = '';
  response: any;

  constructor(private http: HttpClient, private router: Router) {}

  resetPasswordSMS() {
    const requestBody = {
      numtlfn: this.numtlfn,
      code: this.code,
      password: this.password
    };

    this.http.post<any>('http://localhost:8089/pidev/UserRestController/resetPasswordSMS', requestBody)
      .subscribe(
        (data) => {
          this.response = data;
          console.log('Response:', this.response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }
}
