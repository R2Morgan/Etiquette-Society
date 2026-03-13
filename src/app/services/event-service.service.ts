import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {BaseMarkdownService} from "./base-markdown.service";
import {MetadataService} from "./metadata.service";

export interface EventMetadata {
  slug: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  description: string;
  mainImage: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseMarkdownService {
  private eventsFolder = 'assets/events';

  constructor(
    http: HttpClient,
    private readonly metadataService: MetadataService
  ) {
    super(http);
  }

  getEvents(): Observable<EventMetadata[]> {
    return this.metadataService.parseEvents().pipe(
      switchMap((events: string[]) => {
        const observable = events.map(slug =>
          this.http.get(`${this.eventsFolder}/${slug}/event.md`, { responseType: 'text' }).pipe(
            map(md => this.parseFrontmatter(md, slug))
          )
        );
        return forkJoin(observable);
      })
    );
  }

  private parseFrontmatter(md: string, slug: string): EventMetadata {
    const data = this.baseParseFrontmatter(md);
    return {
      slug,
      title: data.title,
      date: data.date,
      location: data.location,
      excerpt: data.excerpt,
      description: data.description,
      mainImage: `assets/events/${encodeURIComponent(slug)}/${data.mainImage}`,
      link: data.link
    };
  }

}
