import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEvenementComponent } from './contact-evenement.component';

describe('ContactEvenementComponent', () => {
  let component: ContactEvenementComponent;
  let fixture: ComponentFixture<ContactEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
