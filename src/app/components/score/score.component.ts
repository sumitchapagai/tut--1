import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() matchInput:any;
  constructor() { }

  ngOnInit() {
  }
  scoreColor(a:number,b:number){
    if(a>b){
      return 'green';
    }else if (a<b) {
      return 'orange';
    }else{
      return 'blue';
    }
  }
  scoreResult(a:number,b:number){
    if(a>b){
      return 'win';
    }else if (a<b) {
      return 'loss';
    }else{
      return 'draw';
    }
  }

}
