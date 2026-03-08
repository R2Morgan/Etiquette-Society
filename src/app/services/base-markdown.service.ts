import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseMarkdownService {

  constructor(protected http: HttpClient) { }

  protected baseParseFrontmatter(md: string): any {
    const frontmatter = md.split('---')[1];
    const lines = frontmatter.split('\n').filter(line => line.includes(':'));
    const data: any = {};
    lines.forEach(line => {
      const [key, ...rest] = line.split(':');
      data[key.trim()] = rest.join(':').trim().replace(/"/g, '');
    });
    return data;
  }
}
