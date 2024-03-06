import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfOrganiserComponent } from './interf-organiser.component';

describe('InterfOrganiserComponent', () => {
  let component: InterfOrganiserComponent;
  let fixture: ComponentFixture<InterfOrganiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfOrganiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfOrganiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
