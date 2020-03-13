import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'hintroduction', component: HIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class HiveRoutingModule { }
