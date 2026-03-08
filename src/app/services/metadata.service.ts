import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseMarkdownService} from "./base-markdown.service";
import {map, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MetadataService extends BaseMarkdownService {
  private metadata$ = this.http
    .get('assets/metadata.md', { responseType: 'text' })
    .pipe(shareReplay(1));

  constructor(http: HttpClient) {
    super(http);
  }

  getMetadata() {
    return this.metadata$;
  }

  private parseMetadata() {
    return this.getMetadata().pipe(
      map(metadata => {
        const data = this.baseParseFrontmatter(metadata);

        return {
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          version: data.version
        };
      })
    );
  }

  private parseSection(md: string, section: string): string[] {
    const result: string[] = [];
    const lines = md.split('\n');

    let inSection = false;

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (line.startsWith('#')) {
        const sectionName = line.replace(/^#+\s*/, '').toLowerCase();
        inSection = sectionName === section.toLowerCase();
        continue;
      }

      if (inSection && line.startsWith('-')) {
        result.push(line.substring(1).trim());
      }
    }

    return result;
  }

  parseFounders() {
    return this.getMetadata().pipe(
      map(md => this.parseSection(md, 'Founders'))
    );
  }

  parsePatrons() {
    return this.getMetadata().pipe(
      map(md => this.parseSection(md, 'Patrons'))
    );
  }

  parseMembers() {
    return this.getMetadata().pipe(
      map(md => this.parseSection(md, 'Members'))
    );
  }

  parseAffiliates() {
    return this.getMetadata().pipe(
      map(md => this.parseSection(md, 'Affiliates'))
    );
  }
}
