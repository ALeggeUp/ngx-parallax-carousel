import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxParallaxCarouselModule } from '../../lib';

@NgModule({
  imports: [ BrowserModule, NgxParallaxCarouselModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
