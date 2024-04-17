import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefComponent } from './homef.component';

describe('HomefComponent', () => {
  let component: HomefComponent;
  let fixture: ComponentFixture<HomefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
