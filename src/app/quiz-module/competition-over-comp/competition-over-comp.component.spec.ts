import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionOverCompComponent } from './competition-over-comp.component';

describe('CompetitionOverCompComponent', () => {
  let component: CompetitionOverCompComponent;
  let fixture: ComponentFixture<CompetitionOverCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionOverCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionOverCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
