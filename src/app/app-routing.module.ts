import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReacrtivesignupformComponent } from './reacrtivesignupform/reacrtivesignupform.component';

const routes: Routes = [
  {
    path : 'login',
    component:LoginComponent, 
    
  },

  {
    path : 'register',
    component:ReacrtivesignupformComponent, 
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
