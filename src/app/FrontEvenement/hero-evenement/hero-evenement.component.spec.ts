import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEvenementComponent } from './hero-evenement.component';

describe('HeroEvenementComponent', () => {
  let component: HeroEvenementComponent;
  let fixture: ComponentFixture<HeroEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
