import { Component } from '@angular/core';
import { ParticipantRequestService } from 'src/app/Services/participant-request.service';
import { TypeTask } from 'src/app/models/typeTask';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  statistics: Map<TypeTask, number>; 
  constructor(private participantRequestService: ParticipantRequestService) { } 
  ngOnInit() { 
    this.participantRequestService.getParticipantRequestStatisticsByTypeTask() .subscribe(data => { this.statistics = data; }); } 
}
