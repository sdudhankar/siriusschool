import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home'

const routes: Routes = [
  { path: 'home', component: Home }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
