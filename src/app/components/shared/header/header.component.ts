import {Component, HostListener} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lastScrollTop = 0;
  isHidden = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth > 768) { // only apply hide effect on desktop
      const st = window.pageYOffset || document.documentElement.scrollTop;
      this.isHidden = st > this.lastScrollTop && st > 50;
      this.lastScrollTop = st <= 0 ? 0 : st;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
