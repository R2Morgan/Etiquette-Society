import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {HeaderComponent} from "./components/shared/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./components/shared/footer/footer.component";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePageComponent, HeaderComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EtiquetteSociety';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
