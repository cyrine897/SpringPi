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
<<<<<<< HEAD
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';

import { PackComponent } from './Back/pack/pack.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';



=======

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
>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { HeroEventOrganiserComponent } from './FrontEventOrganiser/hero-event-organiser/hero-event-organiser.component';
import { HeaderEventOrganiserComponent } from './FrontEventOrganiser/header-event-organiser/header-event-organiser.component';
import { HeaderParticipantComponent } from './FrontParticipant/header-participant/header-participant.component';
import { ContactParticipantComponent } from './FrontParticipant/contact-participant/contact-participant.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { TaskListComponent } from './Back/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';

import { TaskModalComponent } from './Back/task-modal/task-modal.component';
import { TaskComponent } from './Back/task/task.component';

import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
<<<<<<< HEAD
=======
import { Ng2SearchPipeModule } from 'ng2-search-filter';
>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { SearchComponent } from './Back/search/search.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';




 


  

=======
import { FormCompanyComponent } from './FrontCompany/form-company/form-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferParticipantComponent } from './FrontParticipant/offer-participant/offer-participant.component';
>>>>>>> Gestion_offre
=======
import { addappeloffrecomponent } from './Back/add-appeloffre/add-appeloffre.component';
import { CallForTenderListComponent } from './Back/call-for-tender-list/call-for-tender-list.component';
import { CallForTenderEditComponent } from './call-for-tender-edit/call-for-tender-edit.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './FrontEventOrganiser/search/search.component';



>>>>>>> Gestion_COT

@NgModule({
  declarations: [
    
    ParticipantComponent,
  
    AppComponent,
<<<<<<< HEAD
    ParticipantComponent,
    FormParticipantComponent,
    AppComponent,
=======

>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
    ContactCompanyComponent,
    HeaderCompanyComponent,
    HeroCompanyComponent,
    ContactEventOrganiserComponent,
    HeroEventOrganiserComponent,
    HeaderEventOrganiserComponent,
<<<<<<< HEAD
    HeroParticipantComponent,
    HeaderParticipantComponent,
    ContactParticipantComponent,
    
    HomeComponent,
   
    LoginComponent,
    RegisterComponent,
=======

    HeroParticipantComponent,
    HeaderParticipantComponent,
    ContactParticipantComponent,
<<<<<<< HEAD
    FormCompanyComponent,
    OfferParticipantComponent,

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
>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
    HeaderParticipantComponent,
    HeroParticipantComponent,
    ContactParticipantComponent,
    
 TaskModalComponent,

 OrganiserComponent,
 OrganiserFormComponent,
 SearchComponent,
 InterfOrganiserComponent,
 AssignmentListComponentComponent,
<<<<<<< HEAD
  ],

=======
FormParticipantComponent ],

=======
    addappeloffrecomponent,
    CallForTenderListComponent,
    HomeComponent,
    CallForTenderEditComponent,
    SearchComponent
  
  ],
>>>>>>> Gestion_COT
>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    NgbModule,
    FormsModule,

>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
    BrowserAnimationsModule,
    FormsModule,
<<<<<<< HEAD

    ToastrModule.forRoot(),
    BrowserAnimationsModule
=======
    MatInputModule,
    MatDialogModule,
    NgbModule, 
    MatSelectModule,
    
    FormsModule,
    NgbModule,
     ],
=======
    NgbModule,
=======
>>>>>>> Gestion_COT
    FormsModule
>>>>>>> 89b8f7a21599738bef3490f5b8d076cb49352e73
  ],
>>>>>>> Gestion_offre
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
