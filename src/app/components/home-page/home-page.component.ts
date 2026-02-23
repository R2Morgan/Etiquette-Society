import { Component } from '@angular/core';
import {EventMetadata, EventService} from "../../services/event-service.service";
import {CommonModule, NgForOf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {MemberMetadata, MemberService} from "../../services/member.service";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    CommonModule,
  ],
  providers: [EventService, MemberService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  events: EventMetadata[] = [];
  featuredMember: MemberMetadata | null = null;
  featuredMemberName = "Flaviu_Celsie";

  constructor(private eventService: EventService,  private memberService: MemberService) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.events = this.events.slice(0, 10);
    });
    this.memberService.getMember(this.featuredMemberName).subscribe(member => {
      this.featuredMember = member;
    })
  }
}
