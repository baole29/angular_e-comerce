import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'categories', loadChildren:  () => import('./categories/categories.module').then(m => m.CategoriesModule)},
  { path: '', component: HomeComponent},
  { path: 'cat', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
