import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [{ path: 'category', component: CategoryComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
