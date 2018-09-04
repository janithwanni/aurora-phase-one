import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewModuleRoutingModule } from './overview-module-routing.module';
import { LeaderboardCompComponent } from './leaderboard-comp/leaderboard-comp.component';
import { RingViewCompComponent } from './ring-view-comp/ring-view-comp.component';
import { OverviewCompComponent } from './overview-comp/overview-comp.component';
import { TimerViewCompComponent } from './timer-view-comp/timer-view-comp.component';

@NgModule({
  imports: [
    CommonModule,
    OverviewModuleRoutingModule
  ],
  declarations: [LeaderboardCompComponent, RingViewCompComponent, OverviewCompComponent, TimerViewCompComponent]
})
export class OverviewModuleModule { }
