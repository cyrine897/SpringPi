import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppeloffreComponent } from './add-appeloffre.component';

describe('AddAppeloffreComponent', () => {
  let component: AddAppeloffreComponent;
  let fixture: ComponentFixture<AddAppeloffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppeloffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppeloffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
