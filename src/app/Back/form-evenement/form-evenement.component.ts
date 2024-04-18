import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ServiceEvenementService } from 'src/app/Services/service-evenement.service';
import { Evenement } from 'src/app/models/evenement';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'datatables.net';
import * as L from 'leaflet';
import * as $ from 'jquery';

@Component({
  selector: 'app-form-evenement',
  templateUrl: './form-evenement.component.html',
  styleUrls: ['./form-evenement.component.css'],
  providers :[ServiceEvenementService]
})
export class FormEvenementComponent implements OnInit  {
evenement:Evenement[] = [];
event:Evenement | undefined;

@ViewChild('dataTable') private dataTable: ElementRef;
searchQuery: ['']
[x: string]: any;
  form: boolean = false;;
  private searchTerms = new Subject<string>();
  closeResult : any;
  private baseUrl = 'http://localhost:8089/pidev/Evenement'; 
  evenementForm: FormGroup = new FormGroup({});
  eventExists: { [eventId: number]: boolean } = {};
  map: L.Map | undefined;
  latitude: number = 0; // Variable to store latitude
  longitude: number = 0;
  
  

constructor(private fb: FormBuilder, private evenementService: ServiceEvenementService, private router : Router, private modalService:NgbModal,private http: HttpClient) {}
ngOnInit():void{
  this.evenementForm = this.fb.group({
    searchQuery: [''] // You need to include this control in your form group
  });

  
    
  

 
  
  this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),  
    switchMap((term: string) => this.evenementService.searchEvenementsByName(term))
  ).subscribe(data => {
    const table = $('#dataTable').DataTable();
    table.clear().draw();
    table.rows.add(data).draw();
  });

  this.loadData();
  this.getAllEvents();
  this.event={
    idEvenement:0,
    nom:'',
    dateEvenement: new Date() ,
    description:'',
    qrCodeUrl: '',
    latitude: 0,
    longitude: 0
  }


  
}

ngAfterViewInit(): void {
  // Initialize the map after the view has been initialized
  this.initMap();
  this.addMarkers();
}

initMap(): void {
  // Create the map and set its view
  this.map = L.map('map').setView([51.505, -0.09], 13);

  // Add tile layer from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.map);
}



open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  
  
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

closeForm(){
  
}
cancel(){
  this.form = false;
}


addEvenement(event : any) {
  console.log('Form Data:', this.evenementForm.value);
  this.evenementService.addEvenement(event).subscribe(() => {
    // Gérer les données de réponse selon vos besoins
    this.getAllEvents();
  });
}

  
  navigateToFormEvenement() {
    this.router.navigate(['/Formevenement']);
  }

  getAllEvents() {
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
  UpdateEvenement(evenement: Evenement){
    this.evenementService.updateEvenement(1,evenement).subscribe();
  }
  deleteEvenement(idEvenement : any){
    this.evenementService.deleteEvenement(idEvenement).subscribe(() => this.getAllEvents())
  } 

  loadData(): void {
    this.http.get<Evenement[]>('http://localhost:8089/pidev/Evenement/getAllEvenement').subscribe(data => {
      const table = $(this.dataTable.nativeElement);
      table.DataTable({
        data: data,
        columns: [
          { data: 'idEvenement' },
          { data: 'nom' },
          { data: 'dateEvenement' },
          { data: 'description' }
        ]
      });
    });
  }

  search(): void {
    this.http.get<Evenement[]>('http://localhost:8089/pidev/Evenement/searchByName?query=' + this.searchQuery).subscribe(data => {
      const table = $(this.dataTable.nativeElement).DataTable();
      table.clear().draw();
      table.rows.add(data).draw();
    });
  }
  onSearchInputChange(event: Event): void {
    
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchTerms.next(searchQuery);
  }

  
  


  openQRCodeModal(qrCodeUrl: string): void {
    const modalRef = this.modalService.open(qrCodeUrl, { size: 'lg' }); // Replace 'QRCodeModalComponent' with the name of your modal component
    modalRef.componentInstance.qrCodeUrl = qrCodeUrl; // Pass the QR code URL to the modal component
}

  generateQRCode(eventId: number): void {
    // Call the service method to fetch the QR code for the specified event
    this.evenementService.generateQRCodeImage(eventId).subscribe(
        (qrCodeBlob: Blob) => {
            const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
            const event = this.evenement.find(e => e.idEvenement === eventId);
            if (event) {
                event.qrCodeUrl = qrCodeUrl;
            }
        },
        (error) => {
            console.error('Error fetching QR code:', error);
        }
    );
}

addMarkers(): void {
  if (!this.map) return;
  this.evenement.forEach((event) => {
    L.marker([event.latitude, event.longitude])
      .addTo(this.map!)
      .bindPopup(event.nom)
      .openPopup();
  });
}
  
  
}
