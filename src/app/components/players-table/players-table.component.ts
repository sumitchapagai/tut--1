import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { playersData } from "./../../data/data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  players: any = [];

  constructor(private router:Router,
    private playerService:PlayerService) {}

  ngOnInit() {
    // this.players = playersData;
    this.playerService.getAllPlayer().subscribe(
       // data : reponse from service
       (data) => {
        this.players = data.players;
      }
    );
  }
  goToDisplay(id:number){
this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`playerEdit/${id}`]);
  }
  delete(id:number){
    alert(`object N°${id} is deleted`);
    this.playerService.deletePlayer(id).subscribe((data)=>{
      console.log("here msg after deleted" ,data.message);
      this.playerService.getAllPlayer().subscribe((data)=>{
        this.players=data.players;
      })

      
    });
  }
}
