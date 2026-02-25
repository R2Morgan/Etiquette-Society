import {Component, ElementRef, ViewChild} from '@angular/core';
import {EventMetadata, EventService} from "../../services/event-service.service";
import {CommonModule, NgForOf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {MemberMetadata, MemberService} from "../../services/member.service";
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";
import {EMPageType} from "../../enums/EMPageType";
import {Router} from "@angular/router";

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

  constructor(private router: Router, private eventService: EventService,  private memberService: MemberService) {
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

  protected readonly EMPageType = EMPageType;
}
