import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBoothComponent } from './front-booth.component';

describe('FrontBoothComponent', () => {
  let component: FrontBoothComponent;
  let fixture: ComponentFixture<FrontBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
