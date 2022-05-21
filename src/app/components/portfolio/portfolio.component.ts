import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public hide: boolean = true;

  public avatarImg: string;

  constructor() {
    this.avatarImg = 'https://cdn-icons-png.flaticon.com/512/147/147140.png';
   }

  ngOnInit(): void {
  }

}
