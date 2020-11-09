import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserCustomArrayComponent } from './user-custom-array/user-custom-array.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'user-table', component:UserTableComponent},
  {path:'user-form', component:UserFormComponent},
  {path:'user-custom-table',component:UserCustomArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
