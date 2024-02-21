import { TestBed } from '@angular/core/testing';

import { BarManagerService } from './bar-manager.service';

describe('BarManagerService', () => {
  let service: BarManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
