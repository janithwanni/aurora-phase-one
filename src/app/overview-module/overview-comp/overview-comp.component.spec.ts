import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCompComponent } from './overview-comp.component';

describe('OverviewCompComponent', () => {
  let component: OverviewCompComponent;
  let fixture: ComponentFixture<OverviewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
