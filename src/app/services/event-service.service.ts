import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";

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
export class EventService {
  private eventsFolder = 'assets/events';

  constructor(private http: HttpClient) { }

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
    const frontmatter = md.split('---')[1];
    const lines = frontmatter.split('\n').filter(line => line.includes(':'));
    const data: any = {};
    lines.forEach(line => {
      const [key, ...rest] = line.split(':');
      data[key.trim()] = rest.join(':').trim().replace(/"/g, '');
    });
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      mainImage: `/assets/events/${encodeURIComponent(slug)}/${data.mainImage}`
    };
  }

}
