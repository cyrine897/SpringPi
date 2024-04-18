import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPackComponent } from './front-pack.component';

describe('FrontPackComponent', () => {
  let component: FrontPackComponent;
  let fixture: ComponentFixture<FrontPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
