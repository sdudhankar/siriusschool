import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'bintroduction', component: BIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class HbaseRoutingModule { }
