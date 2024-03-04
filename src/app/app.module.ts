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
import { PackComponent } from './Back/pack/pack.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';

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
    PackComponent,
    FrontPackComponent,
    HomeComponent,
    BoothComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
