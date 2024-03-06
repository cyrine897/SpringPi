import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceParticipantService } from 'src/app/Services/service-participant.service';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { HttpClient } from '@angular/common/http';


=======
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
>>>>>>> gestion_participant
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceParticipantService]
})
export class HomeComponent   {
<<<<<<< HEAD
  
 
  constructor(private activatedroute : ActivatedRoute) {}

  
=======

 
>>>>>>> gestion_participant
}