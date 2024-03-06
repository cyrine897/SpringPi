import { TestBed } from '@angular/core/testing';

import { CallForTenderService } from './callfortender.service';

describe('CallfortenderService', () => {
  let service: CallForTenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallForTenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
