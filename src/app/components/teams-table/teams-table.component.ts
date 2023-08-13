import { TeamService } from './../../services/team.service';
import { Router } from "@angular/router";
import { teamsData } from "./../../data/data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teams-table",
  templateUrl: "./teams-table.component.html",
  styleUrls: ["./teams-table.component.css"],
})
export class TeamsTableComponent implements OnInit {
  teams: any = [];
  constructor(private router: Router,
    private teamService:TeamService) {}

  ngOnInit() {
    // this.teams = teamsData;
    this.teamService.getAllTeams().subscribe((data)=>{
      // data : reponse from service
      this.teams=data.teams;
    });
  }
  goToDisplay(id: number) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`teamEdit/${id}`]);
  }
  delete(id:number){
    alert(`object N°${id} is deleted `);
    this.teamService.deleteTeam(id).subscribe((data)=>{
      console.log("Here msg after delete", data.message);
      this.teamService.getAllTeams().subscribe((data)=>{
        this.teams=data.teams;
      });
      
    });
  }
}
