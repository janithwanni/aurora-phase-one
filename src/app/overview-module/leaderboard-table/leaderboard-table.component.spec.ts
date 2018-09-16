
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTableComponent } from './leaderboard-table.component';

describe('LeaderboardTableComponent', () => {
  let component: LeaderboardTableComponent;
  let fixture: ComponentFixture<LeaderboardTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
