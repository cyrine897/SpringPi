import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackService } from 'src/app/Services/pack.service';
import { Pack } from 'src/app/models/pack';

@Component({
  selector: 'app-front-pack',
  templateUrl: './front-pack.component.html',
  styleUrls: ['./front-pack.component.css']
})
export class FrontPackComponent {
  listPack:Pack[] = [];
  pack:Pack;
  form:boolean;
  closeResult:string;
  
  
  constructor(private packService:PackService,private modalService:NgbModal)
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
}
