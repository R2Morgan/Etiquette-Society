import {Component, Pipe, PipeTransform} from '@angular/core';
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";
import {MetadataService} from "../../services/metadata.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgForOf, NgIf} from "@angular/common";

@Pipe({ name: 'safeUrl', standalone: true })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'podcast-page',
  standalone: true,
  imports: [
    ScrollAnimateDirective,
    NgForOf,
    NgIf
  ],
  templateUrl: './podcast-page.component.html',
  styleUrl: './podcast-page.component.scss'
})
export class PodcastPageComponent {
  latestPodcast: SafeResourceUrl = '';
  previousEpisodes: SafeResourceUrl[] = [];

  constructor(
    private metadataService: MetadataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.metadataService.parseLatestPodcast().subscribe(url => {
      this.latestPodcast = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
    this.metadataService.parseLatestEpisodes().subscribe(urls => {
      this.previousEpisodes = urls.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));
    });
  }
}
