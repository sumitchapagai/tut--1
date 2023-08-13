import { PlayerService } from './../../services/player.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player:any={};
playerForm:FormGroup;
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
  }
  addPlayer(){
    console.log("here player object",this.player);
    this.playerService.addPlayer(this.player).subscribe();
    
  }

}
