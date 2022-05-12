import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public avatarImg: string;

  constructor() {
    this.avatarImg = 'https://cdn-icons-png.flaticon.com/512/147/147140.png';
   }

  ngOnInit(): void {
  }

}
