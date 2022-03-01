import { TestBed } from '@angular/core/testing';

import { NpcrepositoryService } from './npcrepository.service';

describe('NpcrepositoryService', () => {
  let service: NpcrepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcrepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
