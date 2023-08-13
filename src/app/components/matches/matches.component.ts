import { Component, OnInit } from "@angular/core";
import { matchesData } from "src/app/data/data";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.css"],
})
export class MatchesComponent implements OnInit {
 
  matches: any = [];
  constructor() {}

  ngOnInit() {
   this.matches=matchesData;
  }
}
