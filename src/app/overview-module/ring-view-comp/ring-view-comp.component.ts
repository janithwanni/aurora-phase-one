import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ring-view-comp",
  templateUrl: "./ring-view-comp.component.html",
  styleUrls: ["./ring-view-comp.component.scss"]
})
export class RingViewCompComponent implements OnInit {
  constructor() {
    for (var j = 0; j < this.values.length; j++) {
      this.node_names[j] = new Array(this.values[j].nodes).fill("");
    }
    for (var i = 0; i < 20; i++) {
      let v = this.getRandomInt(0, 4);
      let p = this.getRandomInt(0, this.values[v].nodes);

      this.node_names[v][p] = i + 1 < 10 ? "0" + (i + 1) : i + 1 + "";
    }
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

  ngOnInit() {}
}
