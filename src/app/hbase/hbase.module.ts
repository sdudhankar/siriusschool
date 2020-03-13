import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HbaseRoutingModule } from './hbase-routing.module';
import { BIntroductionComponent } from './introduction/introduction.component';
import { Hbase } from './hbase';



@NgModule({
  declarations: [
    BIntroductionComponent,
    Hbase
  ],
  imports: [
    BrowserModule,
    HbaseRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HbaseModule { }
