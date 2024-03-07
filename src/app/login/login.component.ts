import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  login() {
    // Vérifier si l'email et le mot de passe sont renseignés
    if (!this.email || !this.password) {
      this.toastr.error("Veuillez remplir tous les champs.");
      return;
    }
  
    // Construire le corps de la requête
    const bodyData = {
      email: this.email,
      password: this.password
    };

    // En-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<any>("http://localhost:8089/pidev/user/Login    ", bodyData, { headers: headers }).subscribe(
      (response: any) => {
        if (response && response.message === "Login Success") {
          this.toastr.success("Connexion réussie!");
          // Rediriger vers la page d'accueil
          this.router.navigateByUrl('/home');
        } else {
          this.toastr.error("Échec de la connexion. Veuillez vérifier vos informations d'identification.");
        }
      },
      (error) => {
        console.error(error);
        this.toastr.error("Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.");
      }
    );
  }  



logout() {
  // Appelez la méthode de déconnexion de votre service d'authentification
 // this.authService.logout();

  // Redirigez l'utilisateur vers la page de connexion
  this.router.navigate(['/login']);
}
}