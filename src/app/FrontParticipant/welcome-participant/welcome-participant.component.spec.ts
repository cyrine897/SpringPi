import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeParticipantComponent } from './welcome-participant.component';

describe('WelcomeParticipantComponent', () => {
  let component: WelcomeParticipantComponent;
  let fixture: ComponentFixture<WelcomeParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
