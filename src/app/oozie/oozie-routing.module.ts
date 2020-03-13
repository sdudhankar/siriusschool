import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'ointroduction', component: OIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class OozieRoutingModule { }
