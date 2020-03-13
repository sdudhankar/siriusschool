import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CIntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: 'cintroduction', component: CIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class CassendraRoutingModule { }
