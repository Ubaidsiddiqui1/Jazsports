import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  addToCart(product: any, qty: number = 1) {
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += qty; // add quantity
    } else {
      this.cartItems.push({ ...product, quantity: qty });
    }

    console.log(`🛒 Added ${qty} x ${product.name} to cart`);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  clearCart() {
    this.cartItems = [];
  }
}
