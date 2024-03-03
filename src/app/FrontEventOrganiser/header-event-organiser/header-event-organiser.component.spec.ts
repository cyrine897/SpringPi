import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEventOrganiserComponent } from './header-event-organiser.component';

describe('HeaderEventOrganiserComponent', () => {
  let component: HeaderEventOrganiserComponent;
  let fixture: ComponentFixture<HeaderEventOrganiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEventOrganiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEventOrganiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
