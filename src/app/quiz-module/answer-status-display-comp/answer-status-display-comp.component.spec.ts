import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerStatusDisplayCompComponent } from './answer-status-display-comp.component';

describe('AnswerStatusDisplayCompComponent', () => {
  let component: AnswerStatusDisplayCompComponent;
  let fixture: ComponentFixture<AnswerStatusDisplayCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerStatusDisplayCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerStatusDisplayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
