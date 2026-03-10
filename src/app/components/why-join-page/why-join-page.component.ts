import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";

@Component({
  selector: 'why-join-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ScrollAnimateDirective
  ],
  templateUrl: './why-join-page.component.html',
  styleUrl: './why-join-page.component.scss'
})
export class WhyJoinPageComponent {
  constructor(private router: Router) { }

  goToMemberships() {
    this.router.navigate(["/memberships"]);
  }
}
