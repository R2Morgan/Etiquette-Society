import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lastScrollTop = 0;
  isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > this.lastScrollTop && st > 50) {
      // scrolling down
      this.isHidden = true;
    } else {
      // scrolling up
      this.isHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // prevent negative scroll
  }
}
