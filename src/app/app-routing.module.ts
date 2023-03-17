import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortComponent } from './components/sort/sort.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'users', component:UserComponent},
  {path:'sort', component:SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
