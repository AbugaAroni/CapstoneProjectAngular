import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component'
import { MyprojectsComponent} from './myprojects/myprojects.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'myprojects', component: MyprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
