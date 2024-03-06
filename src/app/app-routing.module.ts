import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';

import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Back/home/home.component';
const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'home' , component:HomeComponent}
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
