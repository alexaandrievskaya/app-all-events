import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleItemComponent} from './sample-item/sample-item.component';
import {OuterComponent} from './outer/outer.component';

const routes: Routes = [
  {path: 'sample', component: SampleItemComponent},
  {path: 'outer', component: OuterComponent},
  {path: '', redirectTo: 'sample', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


