import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";

@Component({
  selector: 'podcast-page',
  standalone: true,
  imports: [
    ScrollAnimateDirective
  ],
  templateUrl: './podcast-page.component.html',
  styleUrl: './podcast-page.component.scss'
})
export class PodcastPageComponent {

}
