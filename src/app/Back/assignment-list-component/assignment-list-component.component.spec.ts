import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentListComponentComponent } from './assignment-list-component.component';

describe('AssignmentListComponentComponent', () => {
  let component: AssignmentListComponentComponent;
  let fixture: ComponentFixture<AssignmentListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
