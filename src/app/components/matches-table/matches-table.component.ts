import { MatchService } from "./../../services/match.service";
import { matchesData } from "./../../data/data";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  pageOfItems: Array<any>;
  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      // data : reponse from service
      (data) => {
        this.matches = data.matches;
      }
    );
  }
  goToDisplay(id: number) {
    this.router.navigate([`matchInfo/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`matchEdit/${id}`]);
  }
  delete(id: number) {
    this.matchService.deleteMatch(id).subscribe((data) => {
      console.log("Here msg after delete", data.message);
      // Get All matches
      this.matchService.getAllMatches().subscribe((data) => {
        this.matches = data.matches;
      });
    });
  }

  
onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }
}
