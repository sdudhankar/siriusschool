import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HiveRoutingModule } from './hive-routing.module';
import { HIntroductionComponent } from './introduction/introduction.component';
import { Hive } from './hive';



@NgModule({
  declarations: [
    HIntroductionComponent,
    Hive
  ],
  imports: [
    BrowserModule,
    HiveRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HiveModule { }
