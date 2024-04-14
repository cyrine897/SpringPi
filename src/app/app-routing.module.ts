import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Back/home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordSmsComponent } from './reset-password-sms/reset-password-sms.component';
import { ChangepasswfSmsComponent } from './changepasswf-sms/changepasswf-sms.component';
const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path: 'smsreset' , component:ResetPasswordSmsComponent},
  {path:'changesms ' , component: ChangepasswfSmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
