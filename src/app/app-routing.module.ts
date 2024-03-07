

import { ParticipantComponent } from './FrontParticipant/participant/participant.component';


import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';

import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
<<<<<<< HEAD
<<<<<<< HEAD


import { PackComponent } from './Back/pack/pack.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';

import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { HomeComponent } from './Back/home/home.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { TaskComponent } from './Back/task/task.component';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { combineLatest } from 'rxjs';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';

=======
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';
>>>>>>> Gestion_offre
=======

import { addappeloffrecomponent } from './Back/add-appeloffre/add-appeloffre.component';
import { HomeComponent } from './Back/home/home.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { CallForTenderEditComponent } from './call-for-tender-edit/call-for-tender-edit.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';

>>>>>>> Gestion_COT
const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
<<<<<<< HEAD
<<<<<<< HEAD

  {path:'back',component:HomeComponent},
  {path:'gestionPack',component:PackComponent},
  {path:'pack',component:FrontPackComponent},
  {path:'booth/:idPack',component:BoothComponent},
  { path: 'contact', component: ContactCompanyComponent },
  {path:'back' , component:HomeComponent},
  {path : 'event' , component:ContactEventOrganiserComponent},
  {path : 'task' , component:TaskListComponent},
  {path: 'crud' , component:TaskComponent},
  {path: 'organiser' , component:OrganiserComponent},
  {path: 'OrganiserForum/:typeTask' , component:OrganiserFormComponent},

  {path: 'taskListe' , component:TaskComponent},
  {path: 'InterfOrganiser' , component:InterfOrganiserComponent},
  {path: 'AssignementList' , component:AssignmentListComponentComponent},





  {path:'back' , component:HomeComponent},
  {path:'add' , component:FormEvenementComponent},
  {path:'review' , component:FormReviewComponent},
  {path:'hero' , component:HeroEvenementComponent}
  

  
  
  



=======
  {path:'test2' , component:HeaderCompanyComponent},
  {path:'homecompany' , component:HeroCompanyComponent},
  {path:'homeparticipant' , component:HeroParticipantComponent},
  {path:'crudoffer' , component:FormCompanyComponent},
  {path:'headerC' , component:HeaderParticipantComponent},
  {path:'listoffer' , component:OfferParticipantComponent}
  

>>>>>>> Gestion_offre
=======
  {path:'callfortender' , component:addappeloffrecomponent},
  {path:'home' , component:HomeComponent},
  {path:'listcall' , component:CallForTenderListComponent},
  {path:'editcall' , component:CallForTenderEditComponent},
  {path:'eventhome' , component:HeroEventOrganiserComponent}
  
>>>>>>> Gestion_COT
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
