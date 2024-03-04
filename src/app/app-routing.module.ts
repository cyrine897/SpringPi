import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantComponent } from './FrontParticipant/participant/participant.component';

import { HeroParticipantComponent } from './FrontParticipant/hero-participant/hero-participant.component';
import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
import { FormParticipantComponent } from './FrontParticipant/form-participant/form-participant.component';
import { HomeComponent } from './Back/home/home.component';
import { PackComponent } from './Back/pack/pack.component';
import { HeaderCompanyComponent } from './FrontCompany/header-company/header-company.component';
import { HeroCompanyComponent } from './FrontCompany/hero-company/hero-company.component';
import { FrontPackComponent } from './FrontCompany/front-pack/front-pack.component';
import { BoothComponent } from './Back/booth/booth.component';
const routes: Routes = [
  // ...
  { path: 'participant', component: ParticipantComponent },
  { path: 'contact', component: ContactCompanyComponent },
  {path:'test' , component:FormParticipantComponent},
  {path:'back',component:HomeComponent},
  {path:'pack',component:FrontPackComponent},
  {path:'booth/:idPack',component:BoothComponent}
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
