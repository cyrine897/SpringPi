import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';
import { CompanyProfileComponent } from './FrontCompany/company-profile/company-profile.component';
import { WelcomePageComponent } from './FrontCompany/welcome-page/welcome-page.component';
import { CompanyComponent } from './FrontParticipant/company/company.component';
import {WelcomeParticipantComponent} from './FrontParticipant/welcome-participant/welcome-participant.component';
import { InterviewRequestComponent } from './FrontCompany/interview-request/interview-request.component';
import { RefusedComponent } from './FrontCompany/refused/refused.component';
import { AcceptedComponent } from './FrontCompany/accepted/accepted.component';
import { CalendarComponent } from './FrontCompany/calendar/calendar.component';
import { ChangepasswfSmsComponent } from './changepasswf-sms/changepasswf-sms.component';
import { GetALLUSERComponent } from './get-alluser/get-alluser.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordSmsComponent } from './reset-password-sms/reset-password-sms.component';
import { ParticipationListComponent } from './Back/participation-list/participation-list.component';
import { CallForTenderEditComponent } from './call-for-tender-edit/call-for-tender-edit.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { addappeloffrecomponent } from './Back/add-appeloffre/add-appeloffre.component';
import { BoothComponent } from './Back/booth/booth.component';
import { PackComponent } from './Back/pack/pack.component';
import { FrontBoothComponent } from './FrontCompany/front-booth/front-booth.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';
import { StatisticsComponent } from './Back/statistics/statistics.component';
import { TaskComponent } from './Back/task/task.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { ConfirmationDialogComponent } from './FrontParticipant/confirmation-dialog/confirmation-dialog.component';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';

import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { ChatComponent } from './FrontEvenement/chat/chat.component';
import { ChatbotEvenementComponent } from './FrontEvenement/chatbot-evenement/chatbot-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
import { HomeComponent } from './Back/home/home.component';


const routes: Routes = [
  // ...
  
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test2' , component:HeaderCompanyComponent},
  {path:'homecompany' , component:HeroCompanyComponent},
  {path:'homeparticipant' , component:HeroParticipantComponent},
  {path:'crudoffer' , component:FormCompanyComponent},
  {path:'headerC' , component:HeaderParticipantComponent},
  {path:'listoffer' , component:OfferParticipantComponent},
  {path:'CompanyProfile' , component:CompanyProfileComponent},
  {path:'WelcomePage' , component:WelcomePageComponent},
  {path:'showcompanys' , component:CompanyComponent},
  {path:'welcomeparticipant' , component:WelcomeParticipantComponent},
  {path:'InterviewRequest' , component:InterviewRequestComponent},
  {path:'refused' , component:RefusedComponent},
  {path:'accepted' , component:AcceptedComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'GetAlluser', component:GetALLUSERComponent},
  {path:'login', component:LoginComponent},
  {path:'Profil', component:ProfilComponent},
  {path:'Register', component:RegisterComponent},
  {path:'ChangepasswfSms', component:ChangepasswfSmsComponent},
  {path:'ResetPassword', component:ResetPasswordComponent},
  {path:'ResetPasswordSms', component:ResetPasswordSmsComponent},

  {path:'callfortender' , component:addappeloffrecomponent},

  {path:'listcall' , component:CallForTenderListComponent},
  {path:'editcall/:id' , component:CallForTenderEditComponent},
  {path:'eventhome' , component:HeroEventOrganiserComponent},
  {path:'participationlist' , component:ParticipationListComponent},


  {path:'Booth' , component:BoothComponent},
  {path:'GestionPack' , component:PackComponent},
  {path:'FrontBooth' , component:FrontBoothComponent},
  {path:'FrontPack' , component:FrontPackComponent},




  {path:'AssignmentListComponent' , component:AssignmentListComponentComponent},
  {path:'Statistics' , component:StatisticsComponent},
  {path:'TaskComponent' , component:TaskComponent},
  {path:'TaskList' , component:TaskListComponent},
  {path:'ConfirmationDialog' , component:ConfirmationDialogComponent},
  {path:'InterfOrganiser' , component:InterfOrganiserComponent},
  {path:'Organiser' , component:OrganiserComponent},
  {path:'OrganiserForum/:typeTask' , component:OrganiserFormComponent},


  {path: 'chat' , component:ChatbotEvenementComponent},
  {path:'back' , component:HomeComponent},
  {path:'add' , component:FormEvenementComponent},
  {path:'review' , component:FormReviewComponent},
  {path:'hero' , component:HeroEvenementComponent},
  {path:'real' , component:ChatComponent},


  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
