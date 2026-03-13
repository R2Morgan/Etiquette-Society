import { Component } from '@angular/core';
import {EventMetadata, EventService} from "../../../services/event-service.service";
import {DatePipe} from "@angular/common";
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-upcoming-event-popup',
  standalone: true,
  imports: [
    DatePipe,
    MatDialogClose
  ],
  templateUrl: './upcoming-event-popup.component.html',
  styleUrl: './upcoming-event-popup.component.scss'
})
export class UpcomingEventPopupComponent {
  upcomingEvent: EventMetadata | undefined;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: EventMetadata[]) => {
      this.upcomingEvent = events.filter(event =>
        this.isFutureDate(event.date)
      )[0];
    })
  }

  private isFutureDate(dateStr: string): boolean {
    const inputDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate > today;
  }

  protected redirect() {
    window.location.href = this.upcomingEvent?.link!;
  }
}
