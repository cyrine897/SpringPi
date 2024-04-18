import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';
import { CompanyProfileComponent } from './FrontCompany/company-profile/company-profile.component';
import { WelcomePageComponent } from './FrontCompany/welcome-page/welcome-page.component';
import { CompanyComponent } from './FrontParticipant/company/company.component';
import { WelcomeParticipantComponent } from './FrontParticipant/welcome-participant/welcome-participant.component';
import { InterviewRequestComponent } from './FrontCompany/interview-request/interview-request.component';
import { AcceptedComponent } from './FrontCompany/accepted/accepted.component';
import { RefusedComponent } from './FrontCompany/refused/refused.component';
import { CalendarComponent } from './FrontCompany/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChangepasswfSmsComponent } from './changepasswf-sms/changepasswf-sms.component';
import { GetALLUSERComponent } from './get-alluser/get-alluser.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordSmsComponent } from './reset-password-sms/reset-password-sms.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { ParticipationListComponent } from './Back/participation-list/participation-list.component';
import { CallForTenderEditComponent } from './call-for-tender-edit/call-for-tender-edit.component';
import { SearchComponent } from './FrontEventOrganiser/search/search.component';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TaskModalComponent } from './Back/task-modal/task-modal.component';
import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { ChatComponent } from './FrontEvenement/chat/chat.component';
import { ChatbotEvenementComponent } from './FrontEvenement/chatbot-evenement/chatbot-evenement.component';
import { ContactEvenementComponent } from './FrontEvenement/contact-evenement/contact-evenement.component';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { HeaderEvenementComponent } from './FrontEvenement/header-evenement/header-evenement.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';



@NgModule({
  declarations: [
    AppComponent,
  
   
    ContactCompanyComponent,
    HeaderCompanyComponent,
    HeroCompanyComponent,
    ContactEventOrganiserComponent,
    HeroEventOrganiserComponent,
    HeaderEventOrganiserComponent,
    HeroParticipantComponent,
    HeaderParticipantComponent,
    ContactParticipantComponent,
    FormCompanyComponent,
    OfferParticipantComponent,
    CompanyProfileComponent,
    WelcomePageComponent,
    CompanyComponent,
    WelcomeParticipantComponent,
    InterviewRequestComponent,
    AcceptedComponent,
    RefusedComponent,
    CalendarComponent,
    ChangepasswfSmsComponent,
    GetALLUSERComponent,
    LoginComponent,
    ProfilComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordSmsComponent,
    addappeloffrecomponent,
    CallForTenderListComponent,
    ParticipationListComponent,
    CallForTenderEditComponent,
    SearchComponent,
    BoothComponent,
    PackComponent,
    FrontBoothComponent,
    FrontPackComponent,
    AssignmentListComponentComponent,
    StatisticsComponent,
    TaskComponent,
    TaskListComponent,
    
    ConfirmationDialogComponent,
    InterfOrganiserComponent,
    OrganiserComponent,
    OrganiserFormComponent,
    TaskModalComponent,
    FormEvenementComponent,
    ChatComponent,
    ChatbotEvenementComponent,
    ContactEvenementComponent,
    FormReviewComponent,
    HeaderEvenementComponent,
    HeroEvenementComponent,
  
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    FullCalendarModule,
    NgxPaginationModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
