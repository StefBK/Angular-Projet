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
  page=1;
  urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
  urlChuck='https://api.chucknorris.io/jokes/random';

  prevPage(){
    // Version ternaire
    this.page>1 ? this.page-- : null;
    // Ou en version non ternaire
    // if (this.page>1){
    //   this.page--;}
    // else {
    //   null
    //   }
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.loadPics();
    // console.log(this.page);
    // console.log(this.urlPicsum);
  }

  goToPage(nb:number){
    this.page=nb;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.loadPics();
    // console.log(this.page);
    // console.log(this.urlPicsum);
  }

  nextPage(){
    this.page=this.page+1;
    this.urlPicsum='https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.loadPics();
    // console.log(this.page);
    // console.log(this.urlPicsum);
  }
  
  getUrl(url:string){
    return this.http.get(url);
  }
  
  loadPics(){
    this.getUrl(this.urlPicsum).subscribe(
      data=>{
        this.gallery=data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.getUrl(this.urlChuck).subscribe(
      (data)=>{
        this.joke=data;
        this.jokeNotFound=false;
        console.log(data);
      }
    )
    this.loadPics();
  }
}
