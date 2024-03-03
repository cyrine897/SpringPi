import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEventOrganiserComponent } from './hero-event-organiser.component';

describe('HeroEventOrganiserComponent', () => {
  let component: HeroEventOrganiserComponent;
  let fixture: ComponentFixture<HeroEventOrganiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEventOrganiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEventOrganiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
