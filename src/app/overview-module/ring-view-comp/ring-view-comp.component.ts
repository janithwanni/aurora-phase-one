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
  node_names: Array<Array<string>> = new Array(this.values.length).fill([]);
  node_names_obs: Observable<string[][]> = of(this.node_names);
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
    //console.log(this.node_names);
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
            this.node_names[0][+nodeid.split("-")[2] - 1] =
              +node.payload.val()["occupiedBy"].split("-")[1] < 10
                ? "0" + +node.payload.val()["occupiedBy"].split("-")[1] + ""
                : +node.payload.val()["occupiedBy"].split("-")[1] + "";
            //console.log(this.node_names);
            this.node_names[0].forEach(element => {
              console.log(element);
            });
            console.log(this.node_names[0][+nodeid.split("-")[2] - 1]);
            this.node_names_obs = of(this.node_names);
            //console.log(this.node_names_obs);
          } else {
            this.node_names[0][+node.key.split("-")[2] - 1] = "";
          }
        }
      });
    this.db
      .list("/node/3")
      .snapshotChanges()
      .subscribe(data => {
        for (let node of data) {
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
              this.node_names[1][+nodeid.split("-")[2] - 1] =
                +node.payload.val()["occupiedBy"].split("-")[1] < 10
                  ? "0" + +node.payload.val()["occupiedBy"].split("-")[1] + ""
                  : +node.payload.val()["occupiedBy"].split("-")[1] + "";
              //console.log(this.node_names);
              this.node_names[1].forEach(element => {
                console.log(element);
              });
              console.log(this.node_names[1][+nodeid.split("-")[2] - 1]);
              this.node_names_obs = of(this.node_names);
              //console.log(this.node_names_obs);
            } else {
              this.node_names[1][+node.key.split("-")[2] - 1] = "";
            }
          }
        }
      });
    this.db
      .list("/node/2")
      .snapshotChanges()
      .subscribe(data => {
        for (let node of data) {
          //console.log(node);
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
              this.node_names[2][+nodeid.split("-")[2] - 1] =
                +node.payload.val()["occupiedBy"].split("-")[1] < 10
                  ? "0" + +node.payload.val()["occupiedBy"].split("-")[1] + ""
                  : +node.payload.val()["occupiedBy"].split("-")[1] + "";
              //console.log(this.node_names);
              this.node_names[2].forEach(element => {
                console.log(element);
              });
              console.log(this.node_names[2][+nodeid.split("-")[2] - 1]);
              this.node_names_obs = of(this.node_names);
              //console.log(this.node_names_obs);
            } else {
              this.node_names[2][+node.key.split("-")[2] - 1] = "";
            }
          }
        }
      });
    this.db
      .list("/node/1")
      .snapshotChanges()
      .subscribe(data => {
        for (let node of data) {
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
              this.node_names[3][+nodeid.split("-")[2] - 1] =
                +node.payload.val()["occupiedBy"].split("-")[1] < 10
                  ? "0" + +node.payload.val()["occupiedBy"].split("-")[1] + ""
                  : +node.payload.val()["occupiedBy"].split("-")[1] + "";
              //console.log(this.node_names);
              this.node_names[3].forEach(element => {
                console.log(element);
              });
              console.log(this.node_names[3][+nodeid.split("-")[2] - 1]);
              this.node_names_obs = of(this.node_names);
              //console.log(this.node_names_obs);
            } else {
              this.node_names[3][+node.key.split("-")[2] - 1] = "";
            }
          }
        }
      });
  }
}
