import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotEvenementComponent } from './chatbot-evenement.component';

describe('ChatbotEvenementComponent', () => {
  let component: ChatbotEvenementComponent;
  let fixture: ComponentFixture<ChatbotEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
