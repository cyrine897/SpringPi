import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferParticipantComponent } from './offer-participant.component';

describe('OfferParticipantComponent', () => {
  let component: OfferParticipantComponent;
  let fixture: ComponentFixture<OfferParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
