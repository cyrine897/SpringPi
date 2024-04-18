import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactCompanyComponent } from './FrontCompany/contact-company/contact-company.component';
<<<<<<< HEAD
=======
import { HomeComponent } from './Back/home/home.component';
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
import { ContactEventOrganiserComponent } from './FrontEventOrganiser/contact-event-organiser/contact-event-organiser.component';
import { TaskListComponent } from './Back/task-list/task-list.component';
import { TaskComponent } from './Back/task/task.component';
import { OrganiserComponent } from './FrontParticipant/organiser/organiser.component';
import { OrganiserFormComponent } from './FrontParticipant/organiser-form/organiser-form.component';
import { combineLatest } from 'rxjs';
import { InterfOrganiserComponent } from './FrontParticipant/interf-organiser/interf-organiser.component';
import { AssignmentListComponentComponent } from './Back/assignment-list-component/assignment-list-component.component';
<<<<<<< HEAD
import { StatisticsComponent } from './Back/statistics/statistics.component';
import { CalendarComponent } from './FrontParticipant/calendar/calendar.component';
const routes: Routes = [
  // ...
  { path: 'contact', component: ContactCompanyComponent },
  {path : 'statistics' , component:StatisticsComponent},
  {path: 'organiser' , component:OrganiserComponent},
  {path: 'calendar' , component:CalendarComponent},

=======
const routes: Routes = [
  // ...
  { path: 'contact', component: ContactCompanyComponent },
  {path:'back' , component:HomeComponent},
  {path : 'event' , component:ContactEventOrganiserComponent},
  {path : 'task' , component:TaskListComponent},
  {path: 'crud' , component:TaskComponent},
  {path: 'organiser' , component:OrganiserComponent},
>>>>>>> c91502e1192261371ec684b84cb4396acf0c5865
  {path: 'OrganiserForum/:typeTask' , component:OrganiserFormComponent},

  {path: 'taskListe' , component:TaskComponent},
  {path: 'InterfOrganiser' , component:InterfOrganiserComponent},
  {path: 'AssignementList' , component:AssignmentListComponentComponent}




  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
