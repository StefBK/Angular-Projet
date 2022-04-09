import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient) { }

  joke:any;
  jokeNotFound=true;

  gallery:any;

  ngOnInit(): void {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(
      (data)=>{
        this.joke=data;
        this.jokeNotFound=false;
        console.log(data);
      }
    )

    this.http.get('https://picsum.photos/v2/list?page=2&limit=24').subscribe(
      data=>{
        this.gallery=data;
        console.log(data);
      }
    )
  }
}
