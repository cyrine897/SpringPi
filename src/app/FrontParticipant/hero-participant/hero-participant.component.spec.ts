import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParticipantComponent } from './hero-participant.component';

describe('HeroParticipantComponent', () => {
  let component: HeroParticipantComponent;
  let fixture: ComponentFixture<HeroParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
