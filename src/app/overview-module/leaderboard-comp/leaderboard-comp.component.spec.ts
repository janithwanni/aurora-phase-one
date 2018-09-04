import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCompComponent } from './leaderboard-comp.component';

describe('LeaderboardCompComponent', () => {
  let component: LeaderboardCompComponent;
  let fixture: ComponentFixture<LeaderboardCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
