import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRegulationCompComponent } from './rules-regulation-comp.component';

describe('RulesRegulationCompComponent', () => {
  let component: RulesRegulationCompComponent;
  let fixture: ComponentFixture<RulesRegulationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesRegulationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesRegulationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
