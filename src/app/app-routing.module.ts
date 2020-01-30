import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelComponenteComponent } from './tel-componente/tel-componente.component';


const routes: Routes = [
  { path: 'meu-componente', component: 
  TelComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
