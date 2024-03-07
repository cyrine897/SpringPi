import { Component, OnInit } from '@angular/core';
import { ServiceParticipantService } from 'src/app/Services/service-participant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  ngOnInit(): void {
    console.log('Le composant Participant a été initialisé.');
  }
  constructor(private participantService : ServiceParticipantService , private router : Router)
  {

  }


  

 
 
}
