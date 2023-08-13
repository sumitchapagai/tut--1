import { Router } from '@angular/router';
import { TeamService } from './../../services/team.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team:any={};
teamForm:FormGroup;
  constructor(private teamService:TeamService,
    private router:Router) { }

  ngOnInit() {
  }
  addTeam(){
    console.log("here team object",this.team);
    this.teamService.addTeam(this.team).subscribe(
      (data)=>{
        console.log("here msg add match",data.message);
        this.router.navigate(['admin']);
        
      }
    );
    
  }

}
