import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeExceededCompComponent } from './time-exceeded-comp.component';

describe('TimeExceededCompComponent', () => {
  let component: TimeExceededCompComponent;
  let fixture: ComponentFixture<TimeExceededCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeExceededCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeExceededCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
