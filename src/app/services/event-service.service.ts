import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {BaseMarkdownService} from "./base-markdown.service";

export interface EventMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  mainImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseMarkdownService {
  private eventsFolder = 'assets/events';

  constructor(http: HttpClient) {
    super(http);
  }

  getEvents(): Observable<EventMetadata[]> {
    const slugs = [
      '01.5-Doamna_T',
      '01-Introduction',
      '02-Prosecco_Night',
      '03-Personal_Branding',
      '04-Cocktail_Night'
    ];

    const observable = slugs.map(slug =>
    this.http.get(`${this.eventsFolder}/${slug}/event.md`, {responseType: "text"})
      .pipe(
        map(md => this.parseFrontmatter(md, slug))
      )
    );

    return forkJoin(observable);
  }

  private parseFrontmatter(md: string, slug: string): EventMetadata {
    const data = this.baseParseFrontmatter(md);
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      mainImage: `assets/events/${encodeURIComponent(slug)}/${data.mainImage}`
    };
  }

}
