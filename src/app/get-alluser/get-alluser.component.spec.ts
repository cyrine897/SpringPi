import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetALLUSERComponent } from './get-alluser.component';

describe('GetALLUSERComponent', () => {
  let component: GetALLUSERComponent;
  let fixture: ComponentFixture<GetALLUSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetALLUSERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetALLUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
