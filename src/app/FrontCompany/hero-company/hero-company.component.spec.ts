import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCompanyComponent } from './hero-company.component';

describe('HeroCompanyComponent', () => {
  let component: HeroCompanyComponent;
  let fixture: ComponentFixture<HeroCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
