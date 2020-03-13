import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'sintroduction', component: SIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class SparkRoutingModule { }
