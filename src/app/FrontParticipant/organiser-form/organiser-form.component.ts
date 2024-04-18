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
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ParticipantRequestService } from 'src/app/Services/participant-request.service';
import { ParticipantRequest } from 'src/app/models/participantRequest';
import { Status } from 'src/app/models/Status';
=======
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
@Component({
  selector: 'app-organiser-form',
  templateUrl: './organiser-form.component.html',
  styleUrls: ['./organiser-form.component.css'],
  providers :[TaskService]

})
export class OrganiserFormComponent {
  private baseUrl = 'http://localhost:8089/pidev/back/task';
<<<<<<< HEAD
  private Url = 'http://localhost:8089/pidev/participantRequest'; // Remplacez cela par l'URL réelle de votre backend
  toEmail: string = '';

  participantRequest: ParticipantRequest = {
    userName: '',
    file: null,
    email: '',
    typeTask: null,
    filename: '',
    contentType: '',
    invoiceNo: '',
    idParticipantRequest: 0,
    status: null
  };
  userForm: FormGroup;
  userName : string;
  email : string ;
  idUser : number ;
  idTask : number ;
  file : File ;
  idParticipantRequest :number;
  selectedFile: File | null = null;
  isFileSelected: boolean = false;
  uploadProgress: number ;
  result$: Observable<string>;
  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private dialog: MatDialog , private http : HttpClient , private ParticipantRequestService : ParticipantRequestService) {
=======

  userForm: FormGroup;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private emailService: EmailService) {
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
    this.userForm = this.formBuilder.group({
      idUser: ['', Validators.required],
      idTask: ['', Validators.required],
      userName: ['', Validators.required],
<<<<<<< HEAD
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      typeTask: ['', Validators.required],
      file: ['', Validators.required],
      idParticipantRequest: ['', Validators.required],
    });
  }



  typeTask: string[] = Object.values(TypeTask).filter((value) => typeof value === 'string') as string[];
    
  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
  

 
  uploadFile(): void {
    if (this.selectedFile) {
      this.ParticipantRequestService.uploadFile(
        this.selectedFile,
        this.userForm.get('email').value,
      
        this.userForm.get('userName').value,
        this.userForm.get('typeTask').value

      ).subscribe(
        progress => {
          this.uploadProgress = progress;
          if (progress === 100) {
            console.log("File upload completed");
            this.createParticipant;
          }
        },
        error => {
          console.error("Error uploading file:", error);
          alert("Error uploading file. Please try again.");
        }
      );
    }
  }
  

  createParticipant(): void {
    if (this.selectedFile) {
      const participantRequest: ParticipantRequest = {
        userName: this.userForm.get('userName').value,
        email: this.userForm.get('email').value,
        typeTask: this.userForm.get('typeTask').value,
        file: this.selectedFile // Utilisez this.selectedFile pour le champ de fichier
        ,




        contentType: '',
        filename: '',
        invoiceNo: '',
        idParticipantRequest: 0,
        status: this.userForm.get('Status').value
      };
  
      this.ParticipantRequestService.addOrganiserToTask(participantRequest)
        .subscribe(
          response => {
            console.log('Participant added successfully:', response);
            // Ajoutez ici toute logique supplémentaire nécessaire après l'ajout réussi
          },
          error => {
            console.error('An error occurred while adding participant:', error);
            // Ajoutez ici la gestion des erreurs, par exemple, afficher un message à l'utilisateur
          }
        );
    }
  }
  
  

  
  affecterTaskUser(idUser: number, idTask: number): void {
    this.taskService.affectTaskUser(idUser, idTask).subscribe(
      (response) => {
        console.log('Task affected successfully:', response);
        // Handle success, if needed
      },
      (error) => {
        console.error('Error affecting task:', error);
        // Handle error, if needed
      }
    );
  }
  openConfirmation(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // L'utilisateur a confirmé sa candidature
        console.log('Candidature confirmée');
        // Ajoutez ici le code pour traiter la confirmation de la candidature
      } else {
        // L'utilisateur a annulé sa candidature
        console.log('Candidature annulée');
        // Ajoutez ici le code pour annuler la candidature
      }
    });
  }
  handleOn(): void {
    this.openConfirmation();
    this.uploadFile();
   this.sendEmail();
  }
 
  sendEmail() {
    this.ParticipantRequestService.sendEmail(this.email).subscribe(
      response => {
        console.log('Email envoyé avec succès');
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email : ', error);
      }
    );
  }
 
 add(participantRequest: ParticipantRequest): void {
  this.ParticipantRequestService.addOrganiserToTask(participantRequest)
    .subscribe(
      (response) => {
        console.log('Participant ajouté avec succès:', response);
        // Ajoutez ici toute logique supplémentaire nécessaire après l'ajout réussi
      },
      (error) => {
        console.error('Une erreur est survenue lors de l\'ajout du participant:', error);
        // Ajoutez ici la gestion des erreurs, par exemple, afficher un message à l'utilisateur
      }
    );
}
 openPopup(): void {
  const dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmationComponent, {
    width: '250px', // Largeur de la fenêtre contextuelle
    data: 'Contenu de la fenêtre contextuelle' // Contenu de la fenêtre contextuelle
  });

  dialogRef.afterClosed().subscribe(result => {
    // Effectuez les traitements nécessaires après la fermeture de la fenêtre contextuelle
    console.log('Fenêtre contextuelle fermée');
  });
}

 openConfirmationDialog(): void {
  const dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmationComponent, {
    width: '250px', // Largeur de la boîte de dialogue
    data: 'Confirmez-vous cette action ?' // Message de confirmation
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // L'utilisateur a confirmé l'action, effectuez les traitements nécessaires
      console.log('Action confirmed');
    } else {
      // L'utilisateur a annulé l'action
      console.log('Action canceled');
    }
  });
}

=======
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
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865

}  
