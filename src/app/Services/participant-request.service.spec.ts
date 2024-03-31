import { TestBed } from '@angular/core/testing';

import { ParticipantRequestService } from './participant-request.service';

describe('ParticipantRequestService', () => {
  let service: ParticipantRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
