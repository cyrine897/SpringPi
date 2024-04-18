import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  implements OnInit {
  private baseUrl = 'http://localhost:8089/pidev/participant/addParticipant'; // Remplacez cela par l'URL réelle de votre backend

  Participants: Participant[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router , private http : HttpClient
  ) {}

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
}