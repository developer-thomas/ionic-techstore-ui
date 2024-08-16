import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../data/categories.data';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategories(): Category[] {
    return categories;
  }
}
