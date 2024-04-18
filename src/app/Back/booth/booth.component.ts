import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoothService } from 'src/app/Services/booth.service';
import { Booth } from 'src/app/models/booth';
import {PackService} from "../../Services/pack.service";

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent {

  listbooth:Booth[]=[];
  booth!:Booth;
  form:boolean=false;
  closeResult!:string;
  idPack:any;
  selectedStatus: string = '';
  isPackFull: boolean;

  constructor(private boothservice: BoothService,private packService: PackService,private modalService: NgbModal,private activatedroute : ActivatedRoute) {}
  ngOnInit():void{
    this.activatedroute.paramMap.subscribe(params => {
      this.idPack = params.get('idPack');
      this.getPack(this.idPack);
      this.afficherListBoothWithPackId(this.idPack);
      console.log(this.listbooth)
    });

    this.booth={
      idBooth:0,
      description:'',
      statusBooth:'',
      company:null,
      isInListBooth:null
    }

  }
  getPack(idPack: any) {
    this.packService.retrivePack(idPack).subscribe(
      (pack: any) => {
        this.isPackFull = pack.nbMax === pack.nbBooths;
      },
      (error) => {
        console.error('Error fetching pack', error);
      }
    );
  }
  getAllBooths() {
    this.boothservice.getAllBooths().subscribe(
      (res:Booth[])=>{
        this.listbooth=res;
        console.log(this.listbooth);

      },
      (error)=>{
        console.error('Error fetching packs',error);


      });


  }
  ajouterBoothEtAffecterAPack(idPack:any,booth: any){
    console.log(this.idPack)
    this.boothservice.ajouterBoothEtAffecterAPack(idPack,booth).subscribe(()=>
    {
      this.afficherListBoothWithPackId(this.idPack);
      this.form=false;

    });


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
    editBooth(booth: Booth){
      this.boothservice.editBooth(booth).subscribe();
    }
    deleteBooth(idBooth : any){
      this.boothservice.deleteBooth(idBooth).subscribe(() => this.afficherListBoothWithPackId(this.idPack))
    }
    afficherListBoothWithPackId(idPack:any){
      this.boothservice.afficherListBoothWithPackId(idPack).subscribe( (res:Booth[])=>{
        this.listbooth=res;
        console.log(this.listbooth);

      },
      (error)=>{
        console.error('Error fetching packs',error);


      });

    }

  getFilteredBooths() {
    if (!this.selectedStatus) {
      return this.listbooth;
    }
    return this.listbooth.filter(booth => booth.statusBooth === this.selectedStatus);
  }

  confirmaBooth(idBooth: any) {
    if (window.confirm('Are you sure you want to confirm this booth?')) {
      this.boothservice.confirmBooth(idBooth).subscribe(
        (response) => {
          console.log('Booth confirmation successful:', response);
          this.afficherListBoothWithPackId(this.idPack);
        },
        (error) => {
          console.error('Booth confirmation error:', error);
        }
      );
    }
  }

  cancelaBooth(idBooth: any) {
    if (window.confirm('Are you sure you want to cancel this booth?')) {
      this.boothservice.cancelBooth(idBooth).subscribe(
        (response) => {
          console.log('Booth canceled successful:', response);
          this.afficherListBoothWithPackId(this.idPack);
        },
        (error) => {
          console.error('Booth cancellation error:', error);
        }
      );
    }
  }


}


