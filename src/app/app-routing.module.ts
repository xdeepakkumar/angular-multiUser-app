import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponentComponent } from './pages/admin/admin-dashboard-component/admin-dashboard-component.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:"full"},
  {path:"login", component: LoginComponent, pathMatch:"full"},
  {path:"register", component: RegisterComponent, pathMatch:"full"},
  { path: 'admin-dashboard', component: AdminDashboardComponentComponent, canActivate: [AdminGuard],
    children : [
      { path: '', component: WelcomeComponent, pathMatch:'full'},
    ],
  },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [UserGuard]},
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
