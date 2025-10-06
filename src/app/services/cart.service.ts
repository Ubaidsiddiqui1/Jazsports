import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

 addToCart(product: any) {
  const existingItem = this.cartItems.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    this.cartItems.push({ ...product, quantity: 1 });
  }

  console.log(`Added to cart: ${product.name}`);
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
