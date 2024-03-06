import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TypeTask } from 'src/app/models/typeTask';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interf-organiser',
  templateUrl: './interf-organiser.component.html',
  styleUrls: ['./interf-organiser.component.css']
})
export class InterfOrganiserComponent {
  typeTaskDetails = {
    [TypeTask.PARTICIPENTREGISTRATION]: {
      name: 'Participation Registration',
      imagePath: 'assets/img/team/team-4.jpg',
      // Add other details
    },
    [TypeTask.TIMEMANAGEMENT]: {
      name: 'Time Management',
      imagePath: 'assets/img/team/team-3.jpg',
      // Add other details
    },
    [TypeTask.TECHNICALSUPPORT]: {
      name: 'Technical Support',
      imagePath: 'assets/img/team/team-2.jpg',
      // Add other details
    },
    [TypeTask.SOCIALMEDIAMANAGMENT]: {
      name: 'Social Media Management',
      imagePath: 'assets/img/team/team-1.jpg',
      // Add other details
    }
  };
  typeTasks: TypeTask[] = [
    TypeTask.PARTICIPENTREGISTRATION,
    TypeTask.TIMEMANAGEMENT,
    TypeTask.TECHNICALSUPPORT,
    TypeTask.SOCIALMEDIAMANAGMENT
  ];
  listTask: Task[] = [];
  task: Task;
   constructor(private router : Router){}
  navigateToTaskDetails(typeTask: TypeTask): void {
    // Navigate to the task-details page with the selected TypeTask
    this.router.navigate(['/OrganiserForum', typeTask]);
  }
}
