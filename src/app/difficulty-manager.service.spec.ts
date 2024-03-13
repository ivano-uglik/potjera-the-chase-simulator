import { TestBed } from '@angular/core/testing';

import { DifficultyManagerService } from './difficulty-manager.service';

describe('DifficultyManagerService', () => {
  let service: DifficultyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifficultyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
