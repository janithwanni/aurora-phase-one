import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";
import { LeaderboardTableDataSource } from "./leaderboard-table-datasource";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-leaderboard-table",
  templateUrl: "./leaderboard-table.component.html",
  styleUrls: ["./leaderboard-table.component.css"]
})
export class LeaderboardTableComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: LeaderboardTableDataSource;

  constructor(private db: AngularFireDatabase) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["teamID", "teamName", "score"];

  ngOnInit() {
    this.dataSource = new LeaderboardTableDataSource(
      this.paginator,
      this.sort,
      this.db
    );
  }
}
