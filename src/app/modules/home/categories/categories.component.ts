import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor() { }

  categories = [
    { id: 1, title: 'Category1' },
    { id: 2, title: 'Category2' },
    { id: 3, title: 'Category3' },
    { id: 4, title: 'Category4' },
  ];


  splitArr(arr: any, size:number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  getListCategory = () => {
    return this.splitArr(this.categories, 3)
  };
}
