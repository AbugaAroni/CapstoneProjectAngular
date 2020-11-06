import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component'
import { MyprojectsComponent} from './myprojects/myprojects.component'
import { NewprojectComponent} from './newproject/newproject.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'myprojects', component: MyprojectsComponent},
  { path: 'newproject', component: NewprojectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
