import { PlayerService } from './../../services/player.service';
import { playersData } from './../../data/data';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
player:any={};
id:any;
players:any=[];
  constructor(private ativatedRoute:ActivatedRoute,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.id=this.ativatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe((data)=>{
      this.player=data.player;
    });
  }

}
