import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'pintroduction', component: PIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class PigRoutingModule { }
