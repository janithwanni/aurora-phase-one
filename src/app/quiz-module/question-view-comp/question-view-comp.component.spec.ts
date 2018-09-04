import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionViewCompComponent } from './question-view-comp.component';

describe('QuestionViewCompComponent', () => {
  let component: QuestionViewCompComponent;
  let fixture: ComponentFixture<QuestionViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
