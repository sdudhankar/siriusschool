import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'fintroduction', component: FIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class FlumeRoutingModule { }
