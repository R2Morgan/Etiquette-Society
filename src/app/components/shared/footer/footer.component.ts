import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
