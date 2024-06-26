import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent ,children:[
    {path:'changePass' ,component:ChangePasswordComponent},
    { path: 'register', component: RegisterComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
