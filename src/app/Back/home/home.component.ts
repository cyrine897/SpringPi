import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceParticipantService } from 'src/app/Services/service-participant.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { HttpClient } from '@angular/common/http';




import { response } from 'express';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceParticipantService]
})
export class HomeComponent   {

  
 
  constructor(private activatedroute : ActivatedRoute) {}


  getParticipants() {
    this.http.get<any>(this.baseUrl).subscribe(
      (response) => {
        console.log('response:', response);
        this.Participants = response;
      },
      (error) => {
        console.log('error:', error);
      }
    );
  }
  ngOnInit() {
    this.getParticipants();
  }

  logout() {
    // Appelez la méthode de déconnexion de votre service d'authentification
   // this.authService.logout();
  
    // Redirigez l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }

}