import { TeamService } from './../../services/team.service';
import { ActivatedRoute } from "@angular/router";
import { teamsData } from "./../../data/data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team-info",
  templateUrl: "./team-info.component.html",
  styleUrls: ["./team-info.component.css"],
})
export class TeamInfoComponent implements OnInit {
  team: any = {};
  teams: any = [];
  id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private teamService:TeamService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    
    this.teamService.getTeamById(this.id).subscribe((data)=>{
      this.team=data.team;
    });
  }
}
