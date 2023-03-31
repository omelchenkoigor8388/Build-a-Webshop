import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PhotoComponent } from './components/photo/photo.component';
import * as SVG from 'svg.js';
import { InfoComponent } from './components/info/info.component';
import { TodayCartComponent } from './components/today-cart/today-cart.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BenefitsComponent,
    PhotoComponent,
    InfoComponent,
    TodayCartComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
