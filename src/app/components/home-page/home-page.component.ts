import {Component, ElementRef, ViewChild} from '@angular/core';
import {EventMetadata, EventService} from "../../services/event-service.service";
import {CommonModule, NgForOf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {MemberMetadata, MemberService} from "../../services/member.service";
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";
import {EMPageType} from "../../enums/EMPageType";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UpcomingEventPopupComponent} from "./upcoming-event-popup/upcoming-event-popup.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    CommonModule,
    ScrollAnimateDirective,
  ],
  providers: [EventService, MemberService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  @ViewChild('heroVideo') video!: ElementRef<HTMLVideoElement>;
  events: EventMetadata[] = [];
  featuredMember: MemberMetadata | null = null;
  featuredMemberName = "Flaviu_Celsie";
  protected readonly EMPageType = EMPageType;

  constructor(private router: Router,
              private eventService: EventService,
              private memberService: MemberService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if(hasSeenPopup !== "true") {
      this.openPopup();
      localStorage.setItem('hasSeenPopup', 'true');
    }
    this.eventService.getEvents()!.subscribe(events => {
      this.events = events.filter(event => !this.isFutureDate(event.date));
      this.events = this.events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.events = this.events.slice(0, 5);
    });
    this.memberService.getMember(this.featuredMemberName).subscribe(member => {
      this.featuredMember = member; console.log(this.featuredMember);
    })
  }

  ngAfterViewInit() {
    const vid = this.video.nativeElement;
    vid.muted = true;
    vid.play().catch(err => {
      console.log('Autoplay prevented:', err);
    });
  }

  goToPage(PageType: EMPageType) {
    this.router.navigate([PageType]);
  }

  private isFutureDate(dateStr: string): boolean {
    const inputDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate > today;
  }

  protected openPopup() {
    this.dialog.open(UpcomingEventPopupComponent, {
      width: '90vw',           // almost full width on mobile
      maxWidth: '700px',       // cap for desktop
      height: 'auto',          // let content decide height
      maxHeight: '70vh',       // but don’t overflow screen
      panelClass: 'event-dialog',
      disableClose: false
    });
  }
}
