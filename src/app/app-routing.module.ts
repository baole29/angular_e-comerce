import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren:  () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'auth', loadChildren:  () => import('./modules/auth/auth.module').then(m => m.AuthModule),
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
