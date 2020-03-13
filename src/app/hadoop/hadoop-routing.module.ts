import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'introduction', component: IntroductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class HadoopRoutingModule { }
