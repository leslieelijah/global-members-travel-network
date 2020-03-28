import { TestBed } from '@angular/core/testing';

import { GmtnServicesService } from './gmtn-services.service';

describe('GmtnServicesService', () => {
  let service: GmtnServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmtnServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
