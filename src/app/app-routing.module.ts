import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';
import { HomeComponent } from './Back/home/home.component';

import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path:'back' , component:HomeComponent},
  {path:'add' , component:FormEvenementComponent},
  {path:'review' , component:FormReviewComponent},
  {path:'hero' , component:HeroEvenementComponent}
  

  
  
  


  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
