import { TestBed } from '@angular/core/testing';

import { BaseMarkdownService } from './base-markdown.service';

describe('BaseMarkdownService', () => {
  let service: BaseMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
