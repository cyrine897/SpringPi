import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyProfile } from '../../models/companyProfile';
import { CompanyProfileService } from '../../Services/company-profile.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyProfiles: CompanyProfile[] = [];
  displayedCompanyProfiles: CompanyProfile[] = [];
  itemsPerPage = 9;
  currentPage = 1;
  closeResult:string;
  searchDomain: string = '';

  

  
  constructor(
    private route: ActivatedRoute,
    private modalService:NgbModal ,
    private companyProfileService: CompanyProfileService
  ) { }

  ngOnInit(): void {
    this.retrieveCompanyProfiles();
  }


  retrieveCompanyProfiles(): void {
    this.companyProfileService.retrieveCompanyProfiles()
      .subscribe(
        (profiles: CompanyProfile[]) => {
          console.log(profiles); // Ajout du console.log pour vérifier les données récupérées
          this.companyProfiles = profiles;       
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des profils d\'entreprise :', error);
          // Gérer l'erreur de manière appropriée (affichage à l'utilisateur, journalisation, etc.)
        }
      );
  }
  updateDisplayedCompanyProfiles(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCompanyProfiles = this.companyProfiles.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedCompanyProfiles();
  }
  


  searchCompanyByName(companyName: string): void {
    if (companyName.trim()) {
      this.companyProfileService.searchCompanyProfiles(companyName)
        .subscribe(
          (profiles: CompanyProfile[]) => {
            console.log(profiles); // Ajout du console.log pour vérifier les données récupérées
            this.companyProfiles = profiles;
          },
          (error) => {
            console.error('Une erreur s\'est produite lors de la recherche des profils d\'entreprise :', error);
            // Gérer l'erreur de manière appropriée (affichage à l'utilisateur, journalisation, etc.)
          }
        );
    } else {
      // Si le nom de la société est vide, récupérez tous les profils d'entreprise
      this.retrieveCompanyProfiles();
    }
  }

  onSearch(): void {
    this.searchCompanyByName(this.searchDomain);
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


    
   
}
