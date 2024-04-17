import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetrineComponent } from './vetrine.component';

describe('VetrineComponent', () => {
  let component: VetrineComponent;
  let fixture: ComponentFixture<VetrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetrineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
