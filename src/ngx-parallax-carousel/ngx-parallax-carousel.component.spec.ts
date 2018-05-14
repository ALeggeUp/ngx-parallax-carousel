import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxParallaxCarouselComponent } from './ngx-parallax-carousel.component';

describe('CarouselComponent', () => {
  let component: NgxParallaxCarouselComponent;
  let fixture: ComponentFixture<NgxParallaxCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxParallaxCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxParallaxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
