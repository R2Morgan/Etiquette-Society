import {Component} from '@angular/core';
import {ScrollAnimateDirective} from "../../../utils/scroll-animate.directive";
import {MemberMetadata, MemberService} from "../../../services/member.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'member-page',
  standalone: true,
  imports: [
    ScrollAnimateDirective
  ],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.scss'
})
export class MemberPageComponent {
  member: MemberMetadata | undefined;
  paragraph1 = '';
  paragraph2 = '';
  urlToMemberFolder = 'assets/members/';

  constructor(private memberService: MemberService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')!;

    this.memberService.getMember(id).pipe(
      switchMap(member => {
        this.member = member;
        return this.memberService.getMemberContent(member.slug);
      })
    ).subscribe(content => {

      const paragraphs = content.split('\n').filter(p => p.trim());

      this.paragraph1 = paragraphs[1];
      this.paragraph2 = paragraphs[2];

    });

  }

  getName(whichName: string): string {
    if (!this.member || !this.member.name) {
      throw new Error('There was a problem fetching the member!');
    }
    let names = this.member.name.split(' ');
    if (whichName === 'first') {
      return names[0];
    } else if (whichName === 'last') {
      return names[1];
    } else throw new Error('There was a problem fetching the first/last name');
  }

  getRank(): string {
    if (!this.member || !this.member.rank) {
      throw new Error('There was a problem fetching the rank!');
    }
    return this.member.rank;
  }

  getPicturePath(pictureNumber: number): string {
    if (!this.member || !this.member.description) {
      throw new Error('There was a problem fetching the images!');
    }
    let pictureUrl = '';
    switch (pictureNumber) {
      case 0:
        pictureUrl = 'main.jpg';
        break;
      case 1:
        pictureUrl = 'picture1.jpg';
        break;
      case 2:
        pictureUrl = 'picture2.jpg';
        break;
      case 3:
        pictureUrl = 'picture3.jpg';
        break;
    }
    return this.urlToMemberFolder + this.member.slug + '/' + pictureUrl;
  }
}
