<<<<<<< HEAD
import { Component, ElementRef, ViewChild  , TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; // Import MatPaginator
import { ParticipantRequestService } from 'src/app/Services/participant-request.service';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { ParticipantRequest } from 'src/app/models/participantRequest';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importer DomSanitizer
import { TypeTask } from 'src/app/models/typeTask';
import { Chart } from 'highcharts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/models/Status';
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';
import { UserService } from 'src/app/Services/user.service';
import { Task } from 'src/app/models/task';
import { User } from 'src/app/models/user';

>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
@Component({
  selector: 'app-assignment-list-component',
  templateUrl: './assignment-list-component.component.html',
  styleUrls: ['./assignment-list-component.component.css']
})
export class AssignmentListComponentComponent {
<<<<<<< HEAD
  p: number = 1;
  itemsPerPage:number=8;
  private Url = 'http://localhost:8089/pidev/participantRequest'; // Remplacez cela par l'URL réelle de votre backend

  @ViewChild('content') popupview !: ElementRef;
  searchQuery: string;
  searchResults: any[];
    searchText: string = '';
    validatedCount: number;
    rejectedCount: number;
    idParticipantRequest: number;
    requestId:number;
  Invoiceheader: any;
  invoiceno: any;
  affectationRequests: any[] = [];
  userForm: FormGroup; // Assurez-vous que cette propriété est correctement initialisée
  users: any[]; // Déclarez le tableau users avec le type approprié
  files: any = [];
  lineChart: Chart;
  pieChart: Chart;
  acceptedCount: number = 0;
  refusedCount: number = 0;
  statsData: any;
  constructor(private http : HttpClient,private formBuilder: FormBuilder,private sanitizer: DomSanitizer, private taskService: TaskService , private participantRequestService: ParticipantRequestService) {
    


    this.users = [
      {
        userName: 'cyrine',
        mail: 'cyrine.mezzi@esprit.tn',
        role: 'ORGANISER',
        address: 'rades',
        // Ajoutez d'autres propriétés d'utilisateur ici
      },
      
      // Ajoutez d'autres utilisateurs au besoin
    ];
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; // ViewChild for MatPaginator

  listParticipantRequest: ParticipantRequest[] = [];
  dataSource: MatTableDataSource<ParticipantRequest>;

  displayedColumns: string[] = ['userName', 'file', 'filename', 'typeTask', 'contentType', 'actions'];
  statusCounts: any;

  totalParticipantRequests: number;


ngOnInit(): void {
  this.getParticipantRequests();
  this.getStats();
  this.loadStatusCounts();
  this.participantRequestService.getTotalParticipantRequests().subscribe(total => {
    this.totalParticipantRequests = total;
  });
  this.lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      
    ]
  });

  this.pieChart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Piechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID19', y: 1, color: '#eeeee' },
          { name: 'EBOLA', y: 2, color: '#eeeee' },
          { name: 'DISPORA', y: 3, color: '#0688959' },
          { name: 'DIABETES', y: 4, color: '#eeeee' },
        ]
      }
    ]
  });
}

loadCounts() {
  this.participantRequestService.getValidatedParticipantRequestCount().subscribe(count => {
    this.validatedCount = count;
  });

  this.participantRequestService.getRejectedParticipantRequestCount().subscribe(count => {
    this.rejectedCount = count;
  });
}
exportToExcel(data: any[], fileName: string): void {
  // Parcourir les données
  data.forEach((rowData) => {
    // Parcourir les propriétés de chaque objet dans les données
    Object.keys(rowData).forEach((key) => {
      // Vérifier si la valeur dépasse la limite de 32767 caractères
      if (rowData[key] && rowData[key].length > 32767) {
        // Tronquer la valeur pour qu'elle respecte la limite
        rowData[key] = rowData[key].substring(0, 32767);
      }
    });
  });

  // Maintenant que les données ont été traitées, vous pouvez exporter vers Excel
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // Télécharger le fichier Excel
  saveAs(blob, fileName + '.xlsx');
}



exportRowToExcel(rowData: any, fileName: string): void {
  // Crée un tableau contenant uniquement la ligne de données à exporter
  const data = [rowData];
  // Appelez la fonction exportToExcel avec le nom de fichier spécifié
  this.exportToExcel(data, fileName);
}

getStats(): void {
  this.participantRequestService.getStatsByTypeTask()
    .subscribe(data => {
      this.statsData = data;
    });
}

// add point to chart serie

getParticipantRequests(): void {
  this.participantRequestService.getAllParticipantRequests().subscribe(
    (res: ParticipantRequest[]) => {
      this.listParticipantRequest = res;
      console.log(this.listParticipantRequest);
      
      // Initialize the table data source
      this.dataSource = new MatTableDataSource(this.listParticipantRequest);

      // Assign the sorting and pagination to the data source
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
      console.error('Error fetching tasks:', error);
    }
  );
}
onSearchTextChanged(searchValue : string){
  this.searchText = searchValue;
  console.log(this.searchText);

}


/*acceptParticiperRequest(idParticipantRequest: number): void {
  this.participantRequestService.acceptParticiperRequest(idParticipantRequest)
    .subscribe(() => {
      // handle success
    }, error => {
      // handle error
    });
}

refuseParticiperRequest(idParticipantRequest: number): void {
  this.participantRequestService.refuseParticiperRequest(idParticipantRequest)
    .subscribe(() => {
      // handle success
    }, error => {
      // handle error
    });
}*/
updateCounts(): void {
  this.participantRequestService.getAcceptedParticipantRequestsCount().subscribe(count => {
    this.acceptedCount = count;
  });

  this.participantRequestService.getRefusedParticipantRequestsCount().subscribe(count => {
    this.refusedCount = count;
  });
}

openPDF(pdfData: string, fileName: string ): void {
  const byteCharacters = atob(pdfData);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });

  // Créer un lien de téléchargement
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  
  // Cliquez sur le lien pour démarrer le téléchargement
  link.click();
}



=======


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
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865


  

  // ... Autres méthodes et propriétés de votre composant ...


<<<<<<< HEAD
/*acceptRequest(requestId: number): void {
=======
acceptRequest(requestId: number): void {
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
    this.taskService.acceptAffectationRequest(requestId).subscribe(
        () => {
            // Mettez à jour la liste des demandes après l'acceptation
        },
        (error) => {
            console.error('Erreur lors de l\'acceptation de la demande d\'affectation', error);
        }
    );
<<<<<<< HEAD
}*/
getFiles(): void {
  this.participantRequestService.getFiles().subscribe(
    (response: any[]) => {
      response.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.data;
        this.files.push(element);
      });
    },
    error => {
      console.error('Error fetching files:', error);
    }
  );
}


downloadFile(idParticipantRequest: number): void {
  this.participantRequestService.downloadFile(idParticipantRequest).subscribe(response => {
    const fileNameFromUrl = "file";
    if (fileNameFromUrl) {
      const contentType = response.headers.get("Content-Type");
      const blob = new Blob([response.body], { type: contentType });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileNameFromUrl;

      link.click();

      window.URL.revokeObjectURL(link.href);
      link.remove();
    } else{
      console.log("Unable to extract file")
    }
  })
}




=======
}

>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
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

<<<<<<< HEAD
PrintInvoice(invoiceNo: string, filename: string, contentType: string, userName: string, email: string, typeTask: TypeTask ) {
  this.participantRequestService.GenerateInvoicePDF(invoiceNo, filename, contentType, userName, email,typeTask  ).subscribe(res => {

    let blob: Blob = res.body as Blob;
    let url1 = window.URL.createObjectURL(blob);
    window.open(url1);
  });
}

DownloadInvoice(invoiceNo: string, filename: string, contentType: string, userName: string, email: string, typeTask: TypeTask ) {
  this.participantRequestService.GenerateInvoicePDF(invoiceNo, filename, contentType, userName, email, typeTask ).subscribe(res => {
  
    let blob: Blob = res.body as Blob;
    let url1 = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = filename; // Utiliser le nom de fichier fourni
    a.href = url1;
    a.click();
  });
}







acceptAction(idParticipantRequest: number): void {
  this.participantRequestService.updateParticipantStatus(idParticipantRequest, 'validated');
  // Mettez à jour les compteurs après chaque action
  this.updateCounts();
}

refuseAction(idParticipantRequest: number): void {
  this.participantRequestService.updateParticipantStatus(idParticipantRequest, 'refused');
  // Mettez à jour les compteurs après chaque action
  this.updateCounts();
}


AcceptRequest() {
  this.http.put(`${this.Url}/${this.requestId}/accept`, {}).subscribe(() => {
    console.log('Request accepted successfully');
  }, error => {
    console.error('Error accepting request:', error);
  });
}
/*refuseRequest() {
  this.http.put(`${this.Url}/${this.idParticipantRequest}/refuse`, {}).subscribe(() => {
    console.log('Request refused successfully');
  }, error => {
    console.error('Error refusing request:', error);
  });
}*/
ProgressRequest() {
  this.http.put(`${this.Url}/${this.idParticipantRequest}/progress`, {}).subscribe(() => {
    console.log('Request in progress ');
  }, error => {
    console.error('Error accepting request:', error);
  });
}

loadStatusCounts() {
  this.participantRequestService.getStatusCounts().subscribe(
    data => {
      this.statusCounts = data;
    },
    error => {
      console.error('Error loading status counts:', error);
    }
  );
}

//3éme essaie
accepterDemande(idParticipantRequest: number) {
  this.participantRequestService.acceptParticipantRequest(idParticipantRequest).subscribe(() => {
    console.log('Demande acceptée avec succès');
    // Ajoutez ici le code supplémentaire à exécuter après avoir accepté la demande
  }, error => {
    console.error('Erreur lors de l\'acceptation de la demande :', error);
  });
}

/*progresserDemande(idParticipantRequest: number) {
  this.participantRequestService.progresserDemande(idParticipantRequest).subscribe(() => {
    console.log('Demande en progression avec succès');
    // Ajoutez ici le code supplémentaire à exécuter après avoir progressé la demande
  }, error => {
    console.error('Erreur lors de la progression de la demande :', error);
  });
}

refuserDemande(idParticipantRequest: number) {
  this.participantRequestService.refuserDemande(idParticipantRequest).subscribe(() => {
    console.log('Demande refusée avec succès');
    // Ajoutez ici le code supplémentaire à exécuter après avoir refusé la demande
  }, error => {
    console.error('Erreur lors du refus de la demande :', error);
  });
}*/


acceptRequest(idParticipantRequest: number, email: string) {
  this.participantRequestService.acceptParticipantRequest(idParticipantRequest).subscribe(() => {
    console.log('Participant request accepted successfully.');
  }, (error) => {
    console.error('Error accepting participant request:', error);
  });
 
}

refuseRequest(idParticipantRequest: number) {
  this.participantRequestService.refuseParticipantRequest(idParticipantRequest).subscribe(() => {
    console.log('Participant request refused successfully.');
  }, (error) => {
    console.error('Error refusing participant request:', error);
  });
}
InProgressRequest(idParticipantRequest: number) {
  this.participantRequestService.inProgressParticipantRequest(idParticipantRequest).subscribe(() => {
    console.log('Participant request in Progress .');
  }, (error) => {
    console.error('Error refusing participant request:', error);
  });
}
SendEmailWithStat(idParticipantRequest: number, email: string, status: Status) {
  this.participantRequestService.sendEmailStat(idParticipantRequest, email, status).subscribe(
    () => {
      console.log('Email sent successfully');
    },
    (error) => {
      console.error('Failed to send email:', error);
    }
  );
}


}
=======
 
}

>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
