import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'kintroduction', component: KIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class KafkaRoutingModule { }
