import { TestBed } from '@angular/core/testing';

import { CallfortenderService } from './callfortender.service';

describe('CallfortenderService', () => {
  let service: CallfortenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallfortenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
