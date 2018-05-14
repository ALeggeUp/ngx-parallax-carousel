import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-parallax-carousel',
  templateUrl: './ngx-parallax-carousel.component.html',
  styleUrls: ['./ngx-parallax-carousel.component.css']
})
export class NgxParallaxCarouselComponent implements OnInit {

  constructor() {
    console.debug('NgxParallaxCarouselComponent constructor');
  }

  public ngOnInit() {
    console.debug('NgxParallaxCarouselComponent init');
  }
}
