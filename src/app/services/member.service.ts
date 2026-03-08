import {Injectable} from '@angular/core';
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseMarkdownService} from "./base-markdown.service";

export interface MemberMetadata {
  slug: string;
  name: string;
  description: string;
  mainImage: string;
  rank: string;
  instagram: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseMarkdownService{
  private membersFolder = 'assets/members';

  constructor(http: HttpClient) {
    super(http);
  }

  getMember(name: string): Observable<MemberMetadata> {
    return this.http.get(`${this.membersFolder}/${name}/member.md`, {responseType: "text"})
      .pipe(
        map(md => this.parseFrontmatter(md, name))
      );
  }

  getMembers(memberNames: string[]): Observable<MemberMetadata[]> {
    const requests: Observable<MemberMetadata>[] = memberNames.map(name => this.getMember(name));
    return forkJoin(requests);
  }

  private parseFrontmatter(md: string, slug: string): MemberMetadata {
    const data = this.baseParseFrontmatter(md);
    return {
      slug,
      name: data.name as string,
      description: data.description as string,
      mainImage: `assets/members/${encodeURIComponent(slug)}/${data.mainImage}`,
      rank: data.rank,
      instagram: data.instagram
    };
  }

  private extractContent(md: string): string {
    const parts = md.split('---');

    if (parts.length >= 3) {
      return parts.slice(2).join('---').trim();
    }

    return md.trim();
  }

  getMemberContent(name: string): Observable<string> {
    return this.http.get(`${this.membersFolder}/${name}/member.md`, { responseType: "text" })
      .pipe(
        map(md => this.extractContent(md))
      );
  }
}
