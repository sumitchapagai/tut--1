import { Router } from '@angular/router';
import { TeamService } from './../../services/team.service';
import { teamsData } from './../../data/data';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  teamForm:FormGroup;
  team:any={};
  teams:any=[];
  id:any;
  errorMsg:string;
  constructor(private ativatedRoute:ActivatedRoute,
    private teamService:TeamService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.ativatedRoute.snapshot.paramMap.get('id');
    
    this.teamService.getTeamById(this.id).subscribe((data)=>{
      this.team=data.team;
    });
  }
  editTeam(){
    console.log('here new object team',this.team);
    this.teamService.editTeam(this.team).subscribe((data)=>{
      if (data.message=="Success") {
        this.router.navigate(['admin']);
      } else {
        this.errorMsg="Match object is not updated";
      }
    });
  }

}
