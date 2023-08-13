import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articles:any=[];
  constructor() { }

  ngOnInit() {
    this.articles=[
      {id:1, title:"title1", description:"description1", date:"date1"},
      {id:2, title:"title2", description:"description2", date:"date2"},
      {id:3, title:"title3", description:"description3", date:"date3"},
      {id:4, title:"title4", description:"description4", date:"date4"}
    ];
  }

}
