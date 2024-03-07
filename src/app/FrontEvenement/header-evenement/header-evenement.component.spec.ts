import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEvenementComponent } from './header-evenement.component';

describe('HeaderEvenementComponent', () => {
  let component: HeaderEvenementComponent;
  let fixture: ComponentFixture<HeaderEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
