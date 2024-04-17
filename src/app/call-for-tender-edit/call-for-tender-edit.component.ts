import { Component } from '@angular/core';
import { CallForTender } from '../../models/callfortender';
import { CallForTenderService } from '../../Services/callfortender.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-call-for-tender-edit',
  templateUrl: './call-for-tender-edit.component.html',
  styleUrls: ['./call-for-tender-edit.component.css']
})
export class CallForTenderEditComponent {
  private baseUrl = 'http://localhost:8089/pidev/callfortenders';
  callForTenderForm: FormGroup =new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private callForTenderService: CallForTenderService
  ) {}

  ngOnInit(): void {
    this.callForTenderForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.callForTenderForm.invalid) {
      return;
    }

    const callForTenderData: CallForTender = {
      dCOT: this.callForTenderForm.value.id,
      ...this.callForTenderForm.value,
    };

    this.callForTenderService
      .updateCallForTender(callForTenderData.idCOT, callForTenderData)
      .subscribe(
        (updateCallForTender) => {
          // Mise à jour réussie, faire quelque chose (par exemple, naviguer vers une autre page)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  
}
