import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories!: Category[];
  featuredProducts!: Product[];
  bestSellingProducts!: Product[];

  constructor(
    private categoryService: CategoryService,
    private prodoctService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.featuredProducts = this.prodoctService.getFeaturedProducts();
    this.bestSellingProducts = this.prodoctService.getBestSellingProducts();
  }
}
