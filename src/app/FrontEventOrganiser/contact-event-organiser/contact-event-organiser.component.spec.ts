import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEventOrganiserComponent } from './contact-event-organiser.component';

describe('ContactEventOrganiserComponent', () => {
  let component: ContactEventOrganiserComponent;
  let fixture: ComponentFixture<ContactEventOrganiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEventOrganiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEventOrganiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
