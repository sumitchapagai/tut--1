import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  // object
  match:any={};
  // Form ID
  matchForm:FormGroup;
  constructor(private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
  }
  // Called method when btn is clicked
  addMatch(){
console.log("here match object",this.match);
this.matchService.addMatch(this.match).subscribe(
  (data)=>{
    console.log("here msg add match",data.message);
    this.router.navigate(['admin']);
    
  }
);

  }

}
