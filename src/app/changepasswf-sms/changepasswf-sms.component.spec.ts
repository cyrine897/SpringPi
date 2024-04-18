import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswfSmsComponent } from './changepasswf-sms.component';

describe('ChangepasswfSmsComponent', () => {
  let component: ChangepasswfSmsComponent;
  let fixture: ComponentFixture<ChangepasswfSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswfSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswfSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
