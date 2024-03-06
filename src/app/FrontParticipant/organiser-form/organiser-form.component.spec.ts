import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserFormComponent } from './organiser-form.component';

describe('OrganiserFormComponent', () => {
  let component: OrganiserFormComponent;
  let fixture: ComponentFixture<OrganiserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganiserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
