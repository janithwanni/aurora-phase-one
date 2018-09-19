import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable, of, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-ring-view-comp",
  templateUrl: "./ring-view-comp.component.html",
  styleUrls: ["./ring-view-comp.component.scss"]
})
export class RingViewCompComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {
    for (var j = 0; j < this.values.length; j++) {
      this.node_names[j] = new Array(this.values[j].nodes).fill("");
    }
    /* for (var i = 0; i < 20; i++) {
      let v = this.getRandomInt(0, 4);
      let p = this.getRandomInt(0, this.values[v].nodes);

      this.node_names[v][p] = i + 1 < 10 ? "0" + (i + 1) : i + 1 + "";
      //this.node_names_obs.next(this.node_names);
    } */
  }
  private common_x = 60;
  private common_y = 60;
  values: Array<{ radius: number; nodes: number }> = [
    { radius: 50, nodes: 20 },
    { radius: 37.5, nodes: 10 },
    { radius: 25, nodes: 8 },
    { radius: 12.5, nodes: 4 }
  ];
  node_names: Array<Array<string>> = new Array(this.values.length);
  node_names_obs: Observable<string[][]>;
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  getRadius(i: number): number {
    return this.values[i].radius;
  }
  getNodes(i: number): number {
    return this.values[i].nodes;
  }
  getXCoord(i: number, x: number): number {
    let rad_angle = (Math.PI * (360 / this.values[i].nodes) * x) / 180;
    return this.common_x + this.values[i].radius * Math.cos(rad_angle);
  }
  getYCoord(i: number, x: number): number {
    let rad_angle = (Math.PI * (360 / this.values[i].nodes) * x) / 180;
    return this.common_y + this.values[i].radius * Math.sin(rad_angle);
  }
  getText(i: number, x: number): string {
    return this.node_names[i][x];
  }
  getColor(i: number, x: number): string {
    if (this.node_names[i][x] == "") {
      return "#f5a61f";
    } else {
      return "#2ba9e0";
    }
  }

  ngOnInit() {
    this.db
      .list("/node/4")
      .snapshotChanges()
      .subscribe(data => {
        for (let node of data) {
          //console.log(Object.keys(node.payload.val()));
          if (
            Object.keys(node.payload.val()).find(x => {
              return x == "occupiedBy";
            }) != undefined
          ) {
            console.log("occupiedby ekak thieynawa");
            let nodeid =
              node.key; /*  +data[
              Object.keys(node.payload.val()).find(x => {
                return x == "occupiedBy";
              }) 
            ].split("-")[2]; */
            console.log(nodeid);
            this.node_names[3][nodeid.split("-")[2]] =
              +node.payload.val()["occupiedBy"].split("-")[1] < 10
                ? +node.payload.val()["occupiedBy"].split("-")[1] + "0"
                : +node.payload.val()["occupiedBy"].split("-")[1] + "";
            console.log(this.node_names);
            this.node_names[3].forEach(element => {
              console.log(element);
            });
            console.log(this.node_names[3][nodeid]);
            this.node_names_obs = of(this.node_names);
            console.log(this.node_names_obs);
          }
        }
      });
    this.db
      .list("/node/3")
      .valueChanges()
      .subscribe(data => {
        for (let node of data) {
          //console.log(node);
        }
      });
    this.db
      .list("/node/2")
      .valueChanges()
      .subscribe(data => {
        for (let node of data) {
          //console.log(node);
        }
      });
    this.db
      .list("/node/1")
      .valueChanges()
      .subscribe(data => {
        for (let node of data) {
          //console.log(node);
        }
      });
  }
}
