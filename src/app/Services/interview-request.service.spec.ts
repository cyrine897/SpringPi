import { TestBed } from '@angular/core/testing';

import { InterviewRequestService } from './interview-request.service';

describe('InterviewRequestService', () => {
  let service: InterviewRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
