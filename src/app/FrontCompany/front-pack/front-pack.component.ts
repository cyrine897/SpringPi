import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackService } from 'src/app/Services/pack.service';
import { Pack } from 'src/app/models/pack';
import {PackType} from "../../models/packType";


@Component({
  selector: 'app-front-pack',
  templateUrl: './front-pack.component.html',
  styleUrls: ['./front-pack.component.css']
})
export class FrontPackComponent {
  listPack:Pack[] = [];
  filteredListPack: Pack[] = [];
  pack:Pack;
  form:boolean;
  closeResult:string;
  packTypes: string[] = (Object.values(PackType) as PackType[]).filter(value => typeof value !== 'number').map(value => String(value));
  selectedType: PackType = null;
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
      salle:'',
      nbMax:0,
      nbBooths:0
    }
  }
  getAllPacks() {
    this.packService.getAllPacks().subscribe(
      (res: Pack[]) => {
        this.listPack = res;
        this.filteredListPack = this.listPack;
        console.log(this.listPack);
      },
      (error) => {
        console.error('Error fetching packs:', error);
      }
    );

  }

  filterPacks() {
    if (!this.selectedType) {
      this.filteredListPack = this.listPack;
    } else {
      this.filteredListPack = this.listPack.filter(pack => pack.typePack === this.selectedType);
    }
  }
}
