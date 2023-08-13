import { MatchService } from './../../services/match.service';
import { matchesData } from "./../../data/data";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-match-edit",
  templateUrl: "./match-edit.component.html",
  styleUrls: ["./match-edit.component.css"],
})
export class MatchEditComponent implements OnInit {
  match: any = {};
  matchForm = FormGroup;
  matches: any = [];
  errorMsg:string;
  id: any;
  constructor(private ativatedRoute: ActivatedRoute,
    private matchService:MatchService,
    private router:Router) {}

  ngOnInit() {
    this.id = this.ativatedRoute.snapshot.paramMap.get("id");
    // this.matches = matchesData;
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.id == this.matches[i].id) {
    //     this.match = this.matches[i];
    //     break;
    //   }
    // }
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.match=data.match;
      }
    );
  }
  editMatch() {
    console.log("here object edit match", this.match);
    this.matchService.editMatch(this.match).subscribe(
      (data)=>{
        console.log("here msg edit match",data.message);
        if (data.message=="Success") {
          this.router.navigate(["admin"]);
        } else {
          this.errorMsg="Match object is not updated";
        }
      }
    );
  }
}
