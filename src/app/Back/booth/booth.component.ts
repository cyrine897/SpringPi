import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoothService } from 'src/app/Services/booth.service';
import { Booth } from 'src/app/models/booth';

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
  constructor(private boothservice: BoothService,private modalService: NgbModal,private activatedroute : ActivatedRoute) {}
  ngOnInit():void{
    this.activatedroute.paramMap.subscribe(params => {
      this.idPack = params.get('idPack');
      this.afficherListBoothWithPackId(this.idPack);
      console.log(this.listbooth)
    });
    
    this.booth={
      idBooth:0,
      description:'',
      statusBooth:''
    }
    
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


 }


