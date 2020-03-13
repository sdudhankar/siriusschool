import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CassendraRoutingModule } from './cassendra-routing.module';
import { CIntroductionComponent } from './introduction/introduction.component';
import { Cassendra } from './cassendra';



@NgModule({
  declarations: [
    CIntroductionComponent,
    Cassendra
  ],
  imports: [
    BrowserModule,
    CassendraRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CassendraModule { }
