import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface MemberMetadata {
  slug: string;
  name: string;
  mainImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersFolder = 'assets/members';

  constructor(private http: HttpClient) { }

  getMember(name: string): Observable<MemberMetadata> {
    return this.http.get(`${this.membersFolder}/${name}/member.md`, {responseType: "text"})
      .pipe(
        map(md => this.parseFrontmatter(md, name))
      );
  }

  private parseFrontmatter(md: string, slug: string): MemberMetadata {
    const frontmatter = md.split('---')[1];
    const lines = frontmatter.split('\n').filter(line => line.includes(':'));
    const data: any = {};
    lines.forEach(line => {
      const [key, ...rest] = line.split(':');
      data[key.trim()] = rest.join(':').trim().replace(/"/g, '');
    });
    return {
      slug,
      name: data.name as string,
      mainImage: `assets/members/${encodeURIComponent(slug)}/${data.mainImage}`
    };
  }
}
