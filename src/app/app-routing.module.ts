import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';

import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';
const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path:'test2' , component:HeaderCompanyComponent},
  {path:'homecompany' , component:HeroCompanyComponent},
  {path:'homeparticipant' , component:HeroParticipantComponent},
  {path:'crudoffer' , component:FormCompanyComponent},
  {path:'headerC' , component:HeaderParticipantComponent},
  {path:'listoffer' , component:OfferParticipantComponent}
  

  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
