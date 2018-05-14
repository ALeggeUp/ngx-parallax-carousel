import { NgxParallaxCarouselModule } from './ngx-parallax-carousel.module';

describe('NgxParallaxCarouselModule', () => {
  let ngxParallaxCarouselModule: NgxParallaxCarouselModule;

  beforeEach(() => {
    ngxParallaxCarouselModule = new NgxParallaxCarouselModule();
  });

  it('should create an instance', () => {
    expect(ngxParallaxCarouselModule).toBeTruthy();
  });
});
