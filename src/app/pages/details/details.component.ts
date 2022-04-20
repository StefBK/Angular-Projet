import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public http:HttpClient, private route:ActivatedRoute) { }
  
  itemId="";
  itemInfo:any;

  ngOnInit(): void {
    // On récupère l'id dans la route active
    this.itemId=this.route.snapshot.params['itemId'];
    console.log('itemId:',this.itemId);
    // On charge les données correspondantes de l'image
    this.http.get('https://picsum.photos/id/'+this.itemId+'/info').subscribe(
      data=>{
        this.itemInfo=data;
        // console.log(data)
        ;}
    );
  }

}
