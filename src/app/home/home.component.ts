import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = "HOME";
  arrayImg = ['Nature01.jpg', 'Nature02.jpg', 'Nature03.jpg'];
  jsonImg = [
    {
      url: 'Nature01.jpg',
      alt: 'Nature couleur verte'
    },
    {
      url: 'Nature02.jpg',
      alt: 'Nature couleur rose'
    },
    {
      url: 'Nature03.jpg',
      alt: 'Nature couleur bleue'
    }
  ];
  randomIndex = 0;
  sourceImg = '';
  compteur = 0;
  myColor = 'red';
  myProp = 'block';
  myValue = false;
  myAlert(msg: string) {
    alert(msg);
  };
  changeImage() {
    this.randomIndex = Math.floor(Math.random() * 3);
    this.sourceImg = this.arrayImg[this.randomIndex];
    this.compteur++;
    console.log('Nombre de changement de source:', this.compteur);
    console.log('La nouvelle source est : ', this.sourceImg);
  };

  ngOnInit(): void {
    // console.log(this.randomIndex);
    // console.log(this.arrayImg[this.randomIndex]);
    this.changeImage();
  }

}
