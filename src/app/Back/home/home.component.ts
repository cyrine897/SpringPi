import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceEvenementService } from 'src/app/Services/service-evenement.service';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceEvenementService]
})

  

  
  
 
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
  
    
  
