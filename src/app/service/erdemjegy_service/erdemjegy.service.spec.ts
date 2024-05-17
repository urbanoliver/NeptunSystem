import { TestBed } from '@angular/core/testing';

import { ErdemjegyService } from './erdemjegy.service';

describe('ErdemjegyService', () => {
  let service: ErdemjegyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErdemjegyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
