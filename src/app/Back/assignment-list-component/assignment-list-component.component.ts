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

@Component({
  selector: 'app-assignment-list-component',
  templateUrl: './assignment-list-component.component.html',
  styleUrls: ['./assignment-list-component.component.css']
})
export class AssignmentListComponentComponent {
  p: number = 1;
  itemsPerPage:number=8;
  @ViewChild('content') popupview !: ElementRef;
  searchQuery: string;
  searchResults: any[];
    searchText: string = '';
  Invoiceheader: any;
  invoiceno: any;
  affectationRequests: any[] = [];
  userForm: FormGroup; // Assurez-vous que cette propriété est correctement initialisée
  users: any[]; // Déclarez le tableau users avec le type approprié
  files: any = [];
  lineChart: Chart;
  pieChart: Chart;
  statsData: any;
  constructor(private formBuilder: FormBuilder,private sanitizer: DomSanitizer, private taskService: TaskService , private participantRequestService: ParticipantRequestService) {
    


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



ngOnInit(): void {
  this.getParticipantRequests();
  this.getStats();

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


/*getParticipantRequests(): void {
  this.participantRequestService.getAllParticipantRequests().subscribe(
    (res: ParticipantRequest[]) => {
      this.listParticipantRequest = res;
      console.log(this.listParticipantRequest);
    },
    (error) => {
      console.error('Error fetching tasks:', error);
    }
  );
}*/
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
}

refuseAction(idParticipantRequest: number): void {
  this.participantRequestService.updateParticipantStatus(idParticipantRequest, 'refused');
}


}
