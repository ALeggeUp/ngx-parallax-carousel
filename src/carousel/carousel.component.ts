import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-parallax-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() {
    console.debug('CarouselComponent constructor');
  }

  public ngOnInit() {
    console.debug('CarouselComponent init');
  }
}
