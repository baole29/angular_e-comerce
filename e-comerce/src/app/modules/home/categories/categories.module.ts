import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
    SubCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
