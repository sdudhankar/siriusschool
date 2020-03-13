import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HadoopRoutingModule } from './hadoop/hadoop-routing.module'
import { HiveRoutingModule } from './hive/hive-routing.module';
import { HomeRoutingModule } from './home/home-routing.module'
import { PigRoutingModule} from './pig/pig-routing.module';
import { SqoopRoutingModule } from './sqoop/sqoop-routing.module';
import { HbaseRoutingModule } from './hbase/hbase-routing.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),
    HadoopRoutingModule,
    HiveRoutingModule,
    HomeRoutingModule,
    PigRoutingModule,
    SqoopRoutingModule,
    HbaseRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
