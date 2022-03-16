import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartFormComponent } from './start-form/start-form.component';

const routes: Routes = [
  {path: 'startForm', component: StartFormComponent},
  {path: '**', redirectTo: 'startForm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
