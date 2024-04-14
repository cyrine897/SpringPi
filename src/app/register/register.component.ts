import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { RegisterDto } from 'src/app/models/Registerdto/registerDto';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  userForm: FormGroup;
  
 
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      dateN: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      numtlfn: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
     
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const registerDto: RegisterDto = new RegisterDto(
        this.userForm.get('nom')!.value,
        this.userForm.get('prenom')!.value,
        this.userForm.get('cin')!.value,
        this.userForm.get('dateN')!.value,
        this.userForm.get('username')!.value,
        this.userForm.get('email')!.value,
        this.userForm.get('role')!.value,
        this.userForm.get('password')!.value,
        this.userForm.get('numtlfn')!.value,
      );
      
      this.userService.registerUser(registerDto).subscribe(
        (response) => {  
          console.log(response); // Affiche la réponse du serveur
          if (response === 'User registered successfully') {
            console.log('User registered successfully! Redirecting to login page...');
            this.router.navigate(['/login']); // Redirection vers la page de connexion
          } else {
            console.error('Unexpected response from server:', response);
            // Gérer la réponse inattendue du serveur
          }
        },
        (error) => {
          console.error('Error registering user:', error);
          // Gérer l'erreur en conséquence
        }
      );
    } else {
      console.log('Form is invalid. Cannot register user.');
    }
  }
  
  




}