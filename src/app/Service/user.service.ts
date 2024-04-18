import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegisterDto } from '../models/Registerdto/registerDto';
import { JwtService } from './jwt-service.service';
import { User } from '../models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8089/pidev';
  private accessTokenKey = 'access_token';

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  registerUser(registerDto: RegisterDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, registerDto, { responseType: 'text' });
  }

  changePassword(email: string, oldPass: string, newPass: string): Observable<any> {
    const request = { email, oldPass,  newPass };
    return this.http.put(`${this.baseUrl}/change-password`, request, { responseType: 'text' });
  }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password }; 
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginRequest).pipe(
      tap(response => this.storeAccessToken(response.accessToken))
    );
  }

  private storeAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }
  
  getUserRoles(): string[] | null {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      try {
        const decodedToken: any = this.jwtService.decodeToken(accessToken);
        if (decodedToken && decodedToken.role) {
          const rolesString = decodedToken.role;
          const rolesArray = rolesString.split(',').map((role: string) => role.replace(/[\[\]']+/g, '').trim());
          return rolesArray;
        } else {
          console.error('Invalid token or missing roles:', decodedToken);
          return null;
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${username}`);
  }

  
  getAllUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/findall`; 
    return this.http.get<User[]>(url);
  }
}
