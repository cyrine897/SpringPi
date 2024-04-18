import { Component, OnInit } from '@angular/core';
import { User } from '../models/User/user';
import { UserService } from '../Service/user.service';
import { JwtService } from '../Service/jwt-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: User = {
    username: '',
    
    email: '',
    password: '',
    role: '',
    nom: '',
    prenom: '',
    cin: 0,
    dateN: new Date()
  };

  constructor(private userService: UserService, private jwtService: JwtService) {}

  ngOnInit(): void {
    const username = this.getUsernameFromToken();
    if (username) {
      this.getUserByUsername(username);
    } else {
      console.error('Username not found in token.');
    }
  }

  getUsernameFromToken(): string | null {
    const token = this.userService.getAccessToken();
    if (token) {
      const decodedToken: any = this.jwtService.decodeToken(token);
      return decodedToken ? decodedToken.username : null;
    }
    return null;
  }

  getUserByUsername(username: string): void {
    this.userService.getUserByUsername(username).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
