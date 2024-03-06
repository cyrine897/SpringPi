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
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
import { ContactEvenementComponent } from './FrontEvenement/contact-evenement/contact-evenement.component';
import { HeroEvenementComponent } from './FrontEvenement/hero-evenement/hero-evenement.component';
import { HeaderEvenementComponent } from './FrontEvenement/header-evenement/header-evenement.component';
import { FormEvenementComponent } from './Back/form-evenement/form-evenement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormReviewComponent } from './FrontEvenement/form-review/form-review.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';





@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormParticipantComponent,
    ContactCompanyComponent,
    HeaderCompanyComponent,
    HeroCompanyComponent,
    ContactEventOrganiserComponent,
    HeroEventOrganiserComponent,
    HeaderEventOrganiserComponent,
    HeroParticipantComponent,
    HeaderParticipantComponent,
    ContactParticipantComponent,
    ContactEvenementComponent,
    HeroEvenementComponent,
    HeaderEvenementComponent,
    FormEvenementComponent,
    HomeComponent,
    FormReviewComponent,
    FormEvenementComponent,
    
    
    
  
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
