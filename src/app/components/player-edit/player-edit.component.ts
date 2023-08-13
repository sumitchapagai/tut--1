import { Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { playersData } from './../../data/data';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  playerForm:FormGroup;
  player:any={};
  players:any=[];
  id:any;
  errorMsg:string;
  constructor(private activatedRoute:ActivatedRoute,
    private playerService:PlayerService,
    private router:Router) { }
  
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("here id player ",this.id);
    this.playerService.getPlayerById(this.id).subscribe((data)=>{
      this.player=data.player;
    });

  }
  EditPlayer(){
console.log("here object Edit player",this.player);
this.playerService.editPlayer(this.player).subscribe(
  (data)=>{
    if (data.message=="Success") {
      this.router.navigate(['admin']);
    } else {
      this.errorMsg="player object is not updated";
    }
  }
);

  }

}
