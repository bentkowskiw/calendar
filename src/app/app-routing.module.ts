import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfigStepperComponent } from './config-stepper/config-stepper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'stepper', component: ConfigStepperComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
