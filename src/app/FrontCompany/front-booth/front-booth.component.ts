import { Component } from '@angular/core';
import {BoothService} from "../../Services/booth.service";
import {PackService} from "../../Services/pack.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {Booth} from "../../models/booth";

@Component({
  selector: 'app-front-booth',
  templateUrl: './front-booth.component.html',
  styleUrls: ['./front-booth.component.css']
})
export class FrontBoothComponent {
  listallbooth:Booth[]=[];
  listbooth:Booth[]=[];
  booth!:Booth;
  idUser:any;
  idPack:any;
  closeResult:string;

  constructor(private boothservice: BoothService,private packService: PackService,private modalService: NgbModal,private activatedroute : ActivatedRoute) {}

  ngOnInit(): void {
    this.idUser = 2;
    this.afficherListBooth();
    this.activatedroute.paramMap.subscribe(params => {
      this.idPack = params.get('idPack');
      this.afficherListBoothWithPackId(this.idPack);
    });

    this.booth = {
      idBooth: 0,
      description: '',
      statusBooth: '',
      company: null,
      isInListBooth: false
    }
  }

  afficherListBooth(): void {
    this.boothservice.getAllBooths().subscribe(
      (res: Booth[]) => {
        this.listallbooth = res;
        console.log(this.listallbooth);
      },
      (error) => {
        console.error('Error fetching all booths', error);
      }
    );
  }

  afficherListBoothWithPackId(idPack: any): void {
    this.boothservice.afficherListBoothWithPackId(idPack).subscribe(
      (res: Booth[]) => {
        this.listbooth = res.map(booth => {
          booth.isInListBooth = true;
          return booth;
        });
        console.log(this.listbooth);
      },
      (error) => {
        console.error('Error fetching booths', error);
      }
    );
  }



  isBoothInListBooth(booth: Booth): boolean {
    return this.listbooth.some(lb => lb.idBooth === booth.idBooth);
  }

  open(content: any, booth: Booth) {
    this.booth = booth;
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

  requestBooth(idUser: any,idBooth: any) {
    this.boothservice.requestBooth(idUser,idBooth).subscribe(
      (response) => {
        console.log('Booth request successful:', response);
        this.afficherListBoothWithPackId(this.idPack);
      },
      (error) => {
        console.error('Booth request error:', error);
      }
    );
  }

}
