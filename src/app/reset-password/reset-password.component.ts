import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  oldPass: string = '';
  newPass: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  changePassword(): void {
    this.userService.changePassword(this.email, this.oldPass, this.newPass)
      .subscribe(
        () => {
          this.successMessage = 'Password changed successfully.';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Failed to change password. ' + error.message;
          this.successMessage = '';
        }
      );
  }
}
