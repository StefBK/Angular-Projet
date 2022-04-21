import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // constructor(public http:HttpClient, private route:ActivatedRoute) { }
  constructor(
    public api:ApiService,
    private route:ActivatedRoute
    ) { }
  
  itemId=0;
  itemInfo:any;
  imgSrc='./assets/images/loader.gif';
  gray=false;
  blur=0;

  // Génère la source de l'image
  // generateSrc(id=this.itemId,gray=false,blur=0){
  generateSrc(){
    // this.imgSrc='https://picsum.photos/id/'+this.itemId+'/1280/960?';
    this.imgSrc=this.api.bigImgPicsum(this.itemId);
    this.gray? this.imgSrc +='grayscale&':null;
    // Expression ternaire équivaut à :
    // if(this.gray){
    //   this.imgSrc+='?grayscale';}
    // else{
    //   null;
    // }
    this.blur>0? this.imgSrc +='blur='+this.blur+'&':null;
    // console.log('New Source :', this.imgSrc);
  }

  grayscale(){
    this.gray=!this.gray;
    this.generateSrc();
    // console.log(this.gray);
  }

  addBlur(){
    this.blur<10?this.blur++:this.blur=0;
    this.generateSrc();
  }

  ngOnInit(): void {
    // On récupère l'id dans la route active
    this.itemId=this.route.snapshot.params['itemId'];
    // console.log('itemId:',this.itemId);
    // On charge les données correspondantes de l'image
    // this.http.get('https://picsum.photos/id/'+this.itemId+'/info').subscribe(
    // this.api.getUrl('https://picsum.photos/id/'+this.itemId+'/info').subscribe(
    this.api.getUrl(this.api.imgInfo(this.itemId)).subscribe(
          data=>{
        this.itemInfo=data;
        // this.generateSrc(this.itemId);
        this.generateSrc();
        // console.log(data)
        ;}
    );
  }
}
