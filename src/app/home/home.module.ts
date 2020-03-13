import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home';



@NgModule({
  declarations: [
    Home
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
