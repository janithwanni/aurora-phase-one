import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerViewCompComponent } from './timer-view-comp.component';

describe('TimerViewCompComponent', () => {
  let component: TimerViewCompComponent;
  let fixture: ComponentFixture<TimerViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
