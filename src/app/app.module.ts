import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HadoopModule } from './hadoop/hadoop.module';
import { HiveModule } from './hive/hive.module';
import { HomeModule } from './home/home.module';
import { PigModule } from './pig/pig.module';
import { SparkModule } from './spark/spark.module';
import { SqoopModule } from './sqoop/sqoop.module';
import { HbaseModule } from './hbase/hbase.module';
import { FlumeModule } from './flume/flume.module';
import { CassendraModule } from './cassendra/cassendra.module';
import { OozieModule } from './oozie/oozie.module';
import { KafkaModule } from './kafka/kafka.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HadoopModule,
    HiveModule,
    HomeModule,
    PigModule,
    SparkModule,
    SqoopModule,
    HbaseModule,
    FlumeModule,
    CassendraModule,
    OozieModule,
    KafkaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
