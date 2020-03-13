import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SqoopRoutingModule } from './sqoop-routing.module';
import { QIntroductionComponent } from './introduction/introduction.component';
import { Sqoop } from './sqoop';



@NgModule({
  declarations: [
    QIntroductionComponent,
    Sqoop
  ],
  imports: [
    BrowserModule,
    SqoopRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SqoopModule { }
