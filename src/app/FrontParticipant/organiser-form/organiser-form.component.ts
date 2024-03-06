import { Component, OnInit } from '@angular/core';
import { TypeTask } from 'src/app/models/typeTask';
import { Task } from 'src/app/models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganiserService } from 'src/app/Services/organiser.service';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import { Role } from 'src/app/models/role';
import { EmailService } from 'src/app/Services/email.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-organiser-form',
  templateUrl: './organiser-form.component.html',
  styleUrls: ['./organiser-form.component.css'],
  providers :[TaskService]

})
export class OrganiserFormComponent {
  private baseUrl = 'http://localhost:8089/pidev/back/task';

  userForm: FormGroup;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private emailService: EmailService) {
    this.userForm = this.formBuilder.group({
      idUser: ['', Validators.required],
      idTask: ['', Validators.required],
      userName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      typeTask: ['', Validators.required],
    });
  }

  tasktype: string[] = Object.values(TypeTask).filter(value => typeof value === 'string') as string[];

  handleButtonClick(): void {
    this.taskService.getAffectationRequests(this.userForm).subscribe(
      (requests) => {
        console.log('Demandes d\'affectation chargées avec succès :', requests);
      },
      (error) => {
        console.error('Erreur lors du chargement des demandes d\'affectation', error);
      }
    );
  }

}  
