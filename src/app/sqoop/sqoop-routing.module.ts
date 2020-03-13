import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'qintroduction', component: QIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class SqoopRoutingModule { }
