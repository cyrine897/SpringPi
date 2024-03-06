import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addappeloffrecomponent } from 'src/app/Back/add-appeloffre/add-appeloffre.component'; 
import { FormsModule } from '@angular/forms';

describe('addappeloffrecomponent', () => {
  let component: addappeloffrecomponent;
  let fixture: ComponentFixture<addappeloffrecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addappeloffrecomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addappeloffrecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
