import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';

import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';

import { addappeloffrecomponent } from './Back/add-appeloffre/add-appeloffre.component';
import { HomeComponent } from './Back/home/home.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { CallForTenderEditComponent } from './call-for-tender-edit/call-for-tender-edit.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';

const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path:'callfortender' , component:addappeloffrecomponent},
  {path:'home' , component:HomeComponent},
  {path:'listcall' , component:CallForTenderListComponent},
  {path:'editcall' , component:CallForTenderEditComponent},
  {path:'eventhome' , component:HeroEventOrganiserComponent}
  
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
