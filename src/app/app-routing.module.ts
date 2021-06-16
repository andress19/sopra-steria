import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterGuard } from './guards/counter.guard';
import { LoginComponent } from './login/login.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path: 'session',
  component: SessionComponent,
  canActivate: [CounterGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
