import { Component } from '@angular/core';
import { CallForTender } from '../models/callfortender';
import { CallForTenderService } from '../Services/callfortender.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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
    private callForTenderService: CallForTenderService , 
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.callForTenderForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    if (this.callForTenderForm.invalid) {
      return;
    }

    const callForTenderData: CallForTender = {
      ...this.callForTenderForm.value,
    };
   console.log (callForTenderData)
    this.callForTenderService
      .updateCallForTender(id, callForTenderData)
      .subscribe(
        (updateCallForTender) => {
          this.router.navigate(['listcall'])
        },
        (error) => {
          console.log(error);
        }
      );
  }

  
}
