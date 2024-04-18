import { Component } from '@angular/core';
import { User } from '../models/User/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-get-alluser',
  templateUrl: './get-alluser.component.html',
  styleUrls: ['./get-alluser.component.css']
})
export class GetALLUSERComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}