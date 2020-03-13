import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SparkRoutingModule } from './spark-routing.module';
import { SIntroductionComponent } from './introduction/introduction.component';
import { Spark } from './spark';



@NgModule({
  declarations: [
    SIntroductionComponent,
    Spark
  ],
  imports: [
    BrowserModule,
    SparkRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SparkModule { }
