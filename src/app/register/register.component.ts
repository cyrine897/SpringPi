import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
    userName: string = "";
    address: string = "";
    email: string = "";
    password: string = "";
    role: string = "";
  
  

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  save() {
    const bodyData = {
      "userName": this.userName,
      "role": this.role,
      "address": this.address,
      "email": this.email,
      "password": this.password
    };
 const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/i;
  
    if ( !this.userName || !this.address || !this.email || !this.password || !this.role) {
      this.toastr.error("Tous les champs sont requis.", "Essayer à nouveau", { closeButton: true });
      return;
    }
  
    if (this.userName.length < 3 ) {
      this.toastr.error("Le prénom et le nom doivent contenir plus de 3 caractères.", "Essayer à nouveau", { closeButton: true });
      return;
    }
  
    if (this.password.length < 8 || this.password.length > 16 || !passwordRegex.test(this.password)) {
      this.toastr.error("Le mot de passe doit contenir entre 8 et 16 caractères, avec au moins une lettre majuscule, une lettre minuscule et un chiffre.", "Essayer à nouveau", { closeButton: true });
      return;
    }
  
    if (!emailRegex.test(this.email)) {
      this.toastr.error("Format d'email invalide. Il devrait être comme : exemple@domaine.com", "Essayer à nouveau", { closeButton: true });
      return;
    }
  
    // Envoyer la requête POST seulement si toutes les validations passent
    this.http.post("http://localhost:8089/pidev/user/addUser", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.toastr.success("Admin enregistré avec succès.", "Succès", { closeButton: true });
      },
      (error) => {
        console.error(error);
        this.toastr.error("Échec de l'enregistrement de l'administrateur.", "Erreur", { closeButton: true });
      }
    );
  }

  
}


