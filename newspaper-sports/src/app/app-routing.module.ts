import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { RoleGuard } from './auth/role.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  {
    path: 'create',
    component: BackofficeComponent,
    canActivate: [RoleGuard] // Apply the RoleGuard to the create page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
