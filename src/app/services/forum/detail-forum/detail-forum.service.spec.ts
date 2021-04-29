import { TestBed } from '@angular/core/testing';

import { DetailForumService } from './detail-forum.service';

describe('DetailForumService', () => {
  let service: DetailForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
