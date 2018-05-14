import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'ngx-parallax-carousel',
  exportAs: 'ngxParallaxCarousel',
  templateUrl: './ngx-parallax-carousel.component.html',
  styleUrls: ['./ngx-parallax-carousel.component.css']
})
export class NgxParallaxCarouselComponent implements OnInit {

  @HostBinding('class.isActive')
  public isActive: boolean = true;

  @HostBinding('style.display')
  public styleDisplay: string = 'block';

  constructor() {
    console.debug('NgxParallaxCarouselComponent constructor');
  }

  public ngOnInit() {
    console.debug('NgxParallaxCarouselComponent init');
  }

  @HostListener('mouseenter')
  public pause() {
    console.log('pause');
  }

  @HostListener('mouseleave')
  public cycle() {
    console.log('cycle');
  }

  public prev() {
    console.log('prev');
  }

  public next() {
    console.log('next');
  }

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    console.log(event.key);
    event.stopPropagation();
    if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }
}
