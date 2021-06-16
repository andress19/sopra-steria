import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'session',
  component: SessionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
