
import { RouterModule, Routes } from '@angular/router';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { PackComponent } from './Back/pack/pack.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
import { Component, NgModule } from '@angular/core';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { TaskComponent } from './Back/task/task.component';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { combineLatest } from 'rxjs';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';






import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';


import { addappeloffrecomponent } from './Back/add-appeloffre/add-appeloffre.component';
import { HomeComponent } from './Back/home/home.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HomefComponent } from './homef/homef.component';
import { ContactEvenementComponent } from './FrontEvenement/contact-evenement/contact-evenement.component';
import { VetrineComponent } from './vetrine/vetrine.component';
import {FrontBoothComponent} from "./FrontCompany/front-booth/front-booth.component";


const routes: Routes = [
  // back
  {path:'back',component:HomeComponent},
  {path:'gestionPack',component:PackComponent},
  {path:'gestionBooth/:idPack',component:BoothComponent},
  {path: 'AssignementList' , component:AssignmentListComponentComponent},

  {path: 'register',component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'home' , component:HomeComponent},
  {path:'back' , component:HomeComponent},
  {path:'evenment' , component:FormEvenementComponent},
  {path:'review' , component:FormReviewComponent},
  {path:'hero' , component:HeroEvenementComponent},
  {path:'test2' , component:HeaderCompanyComponent},

  {path:'homeparticipant' , component:HeroParticipantComponent},
  {path:'crudoffer' , component:FormCompanyComponent},
  {path:'headerC' , component:HeaderParticipantComponent},
  {path:'listoffer' , component:OfferParticipantComponent},
  {path:'callfortender' , component:addappeloffrecomponent},
  {path:'home' , component:HomeComponent},
  {path:'listcall' , component:CallForTenderListComponent},
  {path:'eventhome' , component:HeroEventOrganiserComponent},
  {path:'task' , component:TaskComponent},

  //front
  {path:'homef',component:HomefComponent},
  {path:'vetrine',component:VetrineComponent},
  {path:'pack',component:FrontPackComponent},
  {path:'booth/:idPack',component:FrontBoothComponent},
  {path: 'organiser' , component:OrganiserComponent},
  {path: 'OrganiserForum/:typeTask' , component:OrganiserFormComponent},
  {path: 'InterfOrganiser' , component:InterfOrganiserComponent},
  {path:'homecompany' , component:HeroCompanyComponent},
  {path: 'contact' , component:ContactEvenementComponent}





];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
