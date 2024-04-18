import { Component, OnInit } from '@angular/core';
import { CompanyProfileService } from 'src/app/Services/company-profile.service';
import { CompanyProfile  } from '../../models/companyProfile';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  
  form:boolean;
  closeResult:string;

  companyProfiles: CompanyProfile[] = [];
  companyName: string = '';
  userId: number = 1;
  newCompanyProfile: CompanyProfile = new CompanyProfile();
  selectedCompanyProfile: CompanyProfile; 
  currentFileUplaod : File ;
  constructor(private companyProfileService:CompanyProfileService ,private modalService:NgbModal , private router : Router)
  { }

  ngOnInit():void{
    this.retrieveCompanyProfile();
    this.newCompanyProfile={
      idProfile:0,
      companyName: '', 
      secteur: '',
      contact: '',
      creationdate: new Date(),
      companySize: 0,
      location: '',            
      whyJoin: '',
      image: null
      

    }
  }
  retrieveCompanyProfile(): void {
    this.companyProfileService.retrieveCompanyProfile(this.userId)
      .subscribe(
        data => {
          this.companyProfiles = [data];
          console.log(data); // Utilisez les données comme vous le souhaitez
        },
        error => {
          console.error(error);
        }
      );
  }

 
 

  addAffectCompanyProfile(): void {
    this.companyProfileService.addAffectCompanyProfile(this.userId, this.newCompanyProfile)
      .subscribe(
        data => {
          console.log(data);
          
           // Utilisez les données comme vous le souhaitez
          // Réinitialiser les champs après l'ajout réussi
          this.companyProfiles.push(data);

          this.companyProfileService.uploadCompanyProfileImage(data.idProfile , this.currentFileUplaod).subscribe(
            res => {

            }
          )
          this.newCompanyProfile = new CompanyProfile();
        },
        error => {
          console.error(error);
        } , () => {

        }
      );
  }



  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    updateCompanyProfile(companyProfile: CompanyProfile): void {
      this.companyProfileService.updateCompanyProfile(companyProfile)
        .subscribe(
          data => {
            console.log(data); // Utilisez les données comme vous le souhaitez
          },
          error => {
            console.log(error);
          }
        );
    }
  
    
    searchCompanyProfiles(): void {
      this.companyProfileService.searchCompanyProfiles(this.companyName)
        .subscribe(
          data => {
            this.companyProfiles = data;
          },
          error => {
            console.log(error);
          }
        );
    }

    clearSearch(): void {
      this.companyProfiles = [];
      this.companyName = '';
    }
  

    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file ) {
        this.currentFileUplaod = file ; 
        this.selectedCompanyProfile.image = file; // Mettre à jour le modèle avec le fichier sélectionné pour le profil d'entreprise sélectionné
      }
    }
}
