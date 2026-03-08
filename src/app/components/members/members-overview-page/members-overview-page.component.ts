import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {MetadataService} from "../../../services/metadata.service";
import {MemberMetadata, MemberService} from "../../../services/member.service";
import {forkJoin, switchMap} from "rxjs";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'members-overview-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members-overview-page.component.html',
  styleUrl: './members-overview-page.component.scss'
})
export class MembersOverviewPageComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  foundingMembers: MemberMetadata[] = [];
  patronalMembers: MemberMetadata[] = [];
  regularMembers: MemberMetadata[] = [];
  affiliateMembers: MemberMetadata[] = [];
  currentSection = 'Founders';

  constructor(
    private metadataService: MetadataService,
    private memberService: MemberService,
    private router: Router
  ) {
  }

  ngOnInit() {
    forkJoin({
      founders: this.metadataService.parseFounders().pipe(
        switchMap(names => this.memberService.getMembers(names))
      ),
      patrons: this.metadataService.parsePatrons().pipe(
        switchMap(names => this.memberService.getMembers(names))
      ),
      members: this.metadataService.parseMembers().pipe(
        switchMap(names => this.memberService.getMembers(names))
      ),
      affiliates: this.metadataService.parseAffiliates().pipe(
        switchMap(names => this.memberService.getMembers(names))
      )
    }).subscribe(result => {
      this.foundingMembers = result.founders;
      this.patronalMembers = result.patrons;
      this.regularMembers = result.members;
      this.affiliateMembers = result.affiliates;
    });
  }

  ngAfterViewInit() {
    const container = document.querySelector('.members-wrapper') as HTMLElement;
    if (!container) return;

    container.addEventListener('scroll', () => {
      this.updateCurrentSection(container);
    });

    this.updateCurrentSection(container);
  }

  private updateCurrentSection(container: HTMLElement) {
    const scrollTop = container.scrollTop;

    let closestSection = '';
    let minDistance = Infinity;

    this.sections.forEach(sectionRef => {
      const el = sectionRef.nativeElement as HTMLElement;
      const offsetTop = el.offsetTop;
      const distance = Math.abs(offsetTop - scrollTop);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = el.dataset['title']!;
      }
    });

    this.currentSection = closestSection;
  }

  getMemberDetails(member: MemberMetadata) {
    if(member.description !== ''){
      this.router.navigate(["member", member.slug]);
    }
  }
}
