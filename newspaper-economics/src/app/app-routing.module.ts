import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { RoleGuard } from './auth/role.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
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
