import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [];

  setProducts(products: any[]) {
    this.products = products;
  }

  addProducts(products: any[]) {
    this.products = [...this.products, ...products];
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string) {
    return this.products.filter(p => p.category === category);
  }
}
