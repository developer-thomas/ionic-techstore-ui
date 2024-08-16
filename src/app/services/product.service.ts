import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { products } from '../data/products.data';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return products;
  }

  getFeaturedProducts(): Product[] {
    return this.getProducts().slice(3, 8);
  }

  getBestSellingProducts(): Product[] {
    return this.getProducts().slice(0, 5);
  }
}
