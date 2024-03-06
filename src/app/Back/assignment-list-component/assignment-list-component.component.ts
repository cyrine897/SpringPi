import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-assignment-list-component',
  templateUrl: './assignment-list-component.component.html',
  styleUrls: ['./assignment-list-component.component.css']
})
export class AssignmentListComponentComponent {


  affectationRequests: any[] = [];
  user : User[];

  userForm: FormGroup; // Assurez-vous que cette propriété est correctement initialisée

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],

      typeTask: ['', Validators.required],
      message: ['', Validators.required],
      whyJoin: ['', Validators.required],
      cv: [null, Validators.required],
      motivationLetter: [null, Validators.required]    });
  }

  
  

// assignment-list-component.component.ts
ngOnInit(): void {
  this.taskService.getAffectationRequests(this.userForm).subscribe(
    (requests) => {
      // Traitement des demandes d'affectation
      console.log('Demandes d\'affectation chargées avec succès :', requests);
      this.affectationRequests = requests;
    },
    (error) => {
      console.error('Erreur lors du chargement des demandes d\'affectation', error);
    }
  );
}


  

  // ... Autres méthodes et propriétés de votre composant ...


acceptRequest(requestId: number): void {
    this.taskService.acceptAffectationRequest(requestId).subscribe(
        () => {
            // Mettez à jour la liste des demandes après l'acceptation
        },
        (error) => {
            console.error('Erreur lors de l\'acceptation de la demande d\'affectation', error);
        }
    );
}

rejectRequest(requestId: number): void {
    this.taskService.rejectAffectationRequest(requestId).subscribe(
        () => {
            // Mettez à jour la liste des demandes après le refus
        },
        (error) => {
            console.error('Erreur lors du refus de la demande d\'affectation', error);
        }
    );
}

 
}

