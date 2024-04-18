import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { InterviewRequestService } from 'src/app/Services/interview-request.service';
import { InterviewRequest } from '../../models/InterviewRequest';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('fullcalendar') fullcalendar: any;
  calendar: Calendar | null = null;
  colors: string[] = ['#ff0000', '#00ff00', '#0000ff']; // Example colors array

  constructor(private service: InterviewRequestService) {}
  data: any;

  ngAfterViewInit() {
    this.service.retrieveAcceptedRequests().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      // After receiving data, update events
      this.updateCalendarEvents();
    });

    this.calendar = new Calendar(this.fullcalendar.nativeElement, {
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      weekends: true,
      editable: true,
      selectable: true,
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      eventDrop: this.handleEventDrop.bind(this),
      droppable: true,
      drop: this.handleDrop.bind(this),
    });

    this.calendar.render();
  }

  // Function to update calendar events when data is received
  updateCalendarEvents() {
    if (this.data && this.calendar) {
      const events = this.data.map((item: any, index: number) => {
        const startDate = new Date('2024-04-18T09:00:00'); // Assuming start is a property of the item in your data
        startDate.setMinutes(startDate.getMinutes() + index * 60); // Adding 30 minutes to each start time
        return {
          title: `Interview with ${item.name} for ${item.offer.name}`, // Assuming name and offer.name are properties of the item in your data
          start: startDate.toISOString(), // Convert to ISO string
          color: this.colors[index % this.colors.length], // Assign color based on index
        };
      });
      this.calendar.removeAllEvents(); // Remove existing events
      this.calendar.addEventSource(events); // Add new events
    }
  }

  handleEventDrop(eventInfo: any) {
    console.log('Event dropped:', eventInfo.event);
    // Handle event drop here
  }

  handleDrop(info: any) {
    console.log('Dropped:', info);
    const draggedEvent = info.draggedEl;
    const date = info.dateStr;
    const title = draggedEvent.innerText.trim();
    this.calendar?.addEvent({ title, start: date });
  }
}
