import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KafkaRoutingModule } from './kafka-routing.module';
import { KIntroductionComponent } from './introduction/introduction.component';
import { Kafka } from './kafka';



@NgModule({
  declarations: [
    KIntroductionComponent,
    Kafka
  ],
  imports: [
    BrowserModule,
    KafkaRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class KafkaModule { }
