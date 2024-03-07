import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServiceParticipantService } from 'src/app/Services/service-participant.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';

import { ServiceEvenementService } from 'src/app/Services/service-evenement.service';

import { Evenement } from 'src/app/models/evenement';

import { HttpClient } from '@angular/common/http';




import { response } from 'express';
<<<<<<< HEAD
=======

>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceEvenementService]
})
<<<<<<< HEAD
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
=======



  

  
  
 
  export class HomeComponent  implements OnInit {
    private baseUrl = 'http://localhost:8089/pidev/Evenement'; // Remplacez cela par l'URL réelle de votre backend
  
    evenement: Evenement[] = [];
    constructor(
      private fb: FormBuilder,
      private evenementService: ServiceEvenementService,
      private router: Router , private http : HttpClient
    ) {}
    getAllEvenement() {
      
        this.evenementService.retriveEvenements().subscribe(
          (res: Evenement[]) => {
            this.evenement= res;
            console.log(this.evenement);
          },
          (error) => {
            console.error('Error fetching events:', error);
          }
        );
    }
    ngOnInit() {
      this.getAllEvenement();
    }
  }
  
    
  

>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
