import { Component, OnInit } from '@angular/core';
import { PackService } from 'src/app/Services/pack.service';
import { Pack } from 'src/app/models/pack';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit{

  listPack:Pack[] = [];
  pack:Pack;
  form:boolean;
  closeResult:string;
  
  
  constructor(private packService:PackService,private modalService:NgbModal,private router : Router)
  {

  }
  ngOnInit():void{
    this.getAllPacks();
    this.pack={
      idPack:0,
      description:'',
      typePack :null,
      price:0,
      salle:''
    }
  }
  getAllPacks() {
    this.packService.getAllPacks().subscribe(
      (res: Pack[]) => {
        this.listPack = res;
        console.log(this.listPack);
      },
      (error) => {
        console.error('Error fetching packs:', error);
      }
    );
         
  }
  addPack(pack: any){
    this.packService.addPack(pack).subscribe(() => {
      this.getAllPacks();
      this.form = false;
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
    editPack(pack: Pack){
      this.packService.editPack(pack).subscribe();
    }
    deletePack(idPack : any){
      this.packService.deletePack(idPack).subscribe(() => this.getAllPacks())
    }  
    showBooth(idPack: number) {
      this.router.navigate(['booth/'+idPack]);
      }
    
  }

