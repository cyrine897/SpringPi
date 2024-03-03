import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactParticipantComponent } from './contact-participant.component';

describe('ContactParticipantComponent', () => {
  let component: ContactParticipantComponent;
  let fixture: ComponentFixture<ContactParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
