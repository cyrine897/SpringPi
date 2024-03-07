import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForTenderListComponent } from './call-for-tender-list.component';

describe('CallForTenderListComponent', () => {
  let component: CallForTenderListComponent;
  let fixture: ComponentFixture<CallForTenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForTenderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallForTenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
