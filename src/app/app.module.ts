import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Back/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';

import { ParticipantComponent } from './FrontParticipant/participant/participant.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';


import { PackComponent } from './Back/pack/pack.component';

import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';

import { ContactEvenementComponent } from './FrontEvenement/contact-evenement/contact-evenement.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
import { HeaderEvenementComponent } from './FrontEvenement/header-evenement/header-evenement.component';
import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';

import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskModalComponent } from './Back/task-modal/task-modal.component';
import { TaskComponent } from './Back/task/task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { SearchComponent } from './Back/search/search.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';




 


  


@NgModule({
  declarations: [
    
    ParticipantComponent,
  
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

    PackComponent,
    FrontPackComponent,
    HomeComponent,
    BoothComponent,

    ContactEvenementComponent,
    HeroEvenementComponent,
    HeaderEvenementComponent,
    FormEvenementComponent,
    HomeComponent,
    FormReviewComponent,
    FormEvenementComponent,
    HeaderParticipantComponent,
    HeroParticipantComponent,
    ContactParticipantComponent,
    TaskListComponent,
 TaskModalComponent,
 TaskComponent,
 OrganiserComponent,
 OrganiserFormComponent,
 SearchComponent,
 InterfOrganiserComponent,
 AssignmentListComponentComponent,
FormParticipantComponent ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,

    NgbModule,
    FormsModule,

    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    NgbModule, 
    MatSelectModule,
    
    FormsModule,
    NgbModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }