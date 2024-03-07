import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceParticipantService } from 'src/app/Services/service-participant.service'
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEvenementService } from 'src/app/Services/service-evenement.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceEvenementService]
})


  export class HomeComponent  {
  constructor(){}
  }
  
    
  


