import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingViewCompComponent } from './ring-view-comp.component';

describe('RingViewCompComponent', () => {
  let component: RingViewCompComponent;
  let fixture: ComponentFixture<RingViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
