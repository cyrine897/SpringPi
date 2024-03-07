import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForTenderEditComponent } from './call-for-tender-edit.component';

describe('CallForTenderEditComponent', () => {
  let component: CallForTenderEditComponent;
  let fixture: ComponentFixture<CallForTenderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForTenderEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallForTenderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
