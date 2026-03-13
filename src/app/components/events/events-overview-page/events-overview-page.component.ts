import {Component} from '@angular/core';
import {EventMetadata, EventService} from "../../../services/event-service.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'events-overview-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './events-overview-page.component.html',
  styleUrl: './events-overview-page.component.scss'
})
export class EventsOverviewPageComponent {
  events: EventMetadata[] | undefined;
  eventsUpcoming: EventMetadata[] | undefined;
  events2026: EventMetadata[] | undefined;
  events2025: EventMetadata[] | undefined;

  constructor(private readonly eventService: EventService) {

  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events: EventMetadata[]) => {
      this.events = events;
      this.eventsUpcoming = events.filter(event =>
        this.isFutureDate(event.date)
      );
      this.events2026 = events.filter(event =>
        !this.isFutureDate(event.date) && event.date.split('-')[0] === "2026"
      ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.events2025 = events.filter(event =>
        !this.isFutureDate(event.date) && event.date.split('-')[0] === "2025"
      ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      console.log(this.events2026);
    });
  }

  private isFutureDate(dateStr: string): boolean {
    const inputDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate > today;
  }

  protected getDay(date: string){
    return date.split('-')[2];
  }

  protected getMonth(date: string) {
    switch (date.split("-")[1]) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "";
    }
  }
}
