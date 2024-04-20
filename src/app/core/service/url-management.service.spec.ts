import { TestBed } from '@angular/core/testing';

import { UrlManagementService } from './url-management.service';

describe('UrlManagementService', () => {
  let service: UrlManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
