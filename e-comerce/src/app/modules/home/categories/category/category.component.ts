import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/i-category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private router: Router){}
  currentUrl: string | undefined;

  @Input() category: ICategory | undefined;

  ngOnInit(): void {
      this.currentUrl = this.router.url;
  }

}
