import { TestBed } from '@angular/core/testing';

import { ErpserviceService } from './erpservice.service';

describe('ErpserviceService', () => {
  let service: ErpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
