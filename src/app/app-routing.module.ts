
import { RouterModule, Routes } from '@angular/router';

import { ParticipantComponent } from './FrontParticipant/participant/participant.component';


import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';

import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';


import { PackComponent } from './Back/pack/pack.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';


import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';

import { Component, NgModule } from '@angular/core';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { TaskComponent } from './Back/task/task.component';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { combineLatest } from 'rxjs';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';
import { HomeComponent } from './Back/home/home.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';

const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'booth/:idPack',component:BoothComponent},
  
  {path:'test' , component:FormParticipantComponent},
  {path:'gestionPack',component:PackComponent},
  
  {path : 'event' , component:ContactEventOrganiserComponent},
  {path: 'organiser' , component:OrganiserComponent},
  {path: 'OrganiserForum/:typeTask' , component:OrganiserFormComponent},
  {path: 'task' , component:TaskComponent},
  {path: 'InterfOrganiser' , component:InterfOrganiserComponent},
  {path: 'AssignementList' , component:AssignmentListComponentComponent},

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
