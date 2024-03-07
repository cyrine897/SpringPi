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

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';



import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';

import { TaskModalComponent } from './Back/task-modal/task-modal.component';
import { TaskComponent } from './Back/task/task.component';

import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { SearchComponent } from './Back/search/search.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormParticipantComponent,
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
    
    HomeComponent,
   
    LoginComponent,
    RegisterComponent,
    HeaderParticipantComponent,
    HeroParticipantComponent,
    ContactParticipantComponent,
    
 TaskModalComponent,

 OrganiserComponent,
 OrganiserFormComponent,
 SearchComponent,
 InterfOrganiserComponent,
 AssignmentListComponentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,

    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
