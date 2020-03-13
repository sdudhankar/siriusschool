import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HadoopRoutingModule } from './hadoop-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { Hadoop } from './hadoop'

@NgModule({
  declarations: [
    IntroductionComponent,
    Hadoop
  ],
  imports: [
    BrowserModule,
    HadoopRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HadoopModule { }
