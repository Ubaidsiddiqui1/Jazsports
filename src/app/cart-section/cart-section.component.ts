import { Component } from '@angular/core';

interface Product {
  name?: string;
  price?: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css']
})
export class CartSectionComponent {
  products: Product[] = [
    {
      name: 'Basketball Goal/Post',
      price: 'Rs. 2,500',
      image: 'assets/home-cart-images/basketball pole-post.jpg',
      description: '16 Guage Pipes, Unbreakable Sheets, Easy to move, Commercial Use'
    },
    {
      name: 'Basketball',
      price: 'Rs. 3,200',
      image: 'assets/home-cart-images/molten-basketball.jpg',
      description: 'Durable indoor/outdoor basketball with strong grip.'
    },
    {
      name: 'Cricket Bat',
      price: 'Rs. 5,500',
      image: 'assets/home-cart-images/molten-basketball.jpg',
      description: 'English willow bat, lightweight, perfect for power hitting.'
    },
    {
      name: 'Badminton Racket',
      price: 'Rs. 1,800',
      image: 'assets/home-cart-images/molten-basketball.jpg',
      description: 'Lightweight graphite badminton racket for faster swings.'
    },
    {
      name: 'Table Tennis Set',
      price: 'Rs. 4,000',
      image: 'assets/home-cart-images/medals-cart.jpg',
      description: '2 bats + 6 balls set for professional table tennis practice.'
    },
    {
      name: 'Hockey Stick',
      price: 'Rs. 3,000',
      image: 'assets/home-cart-images/trophy-carts.jpg'
    },
    {
      name: 'Volleyball',
      price: 'Rs. 2,200',
      image: 'assets/home-cart-images/sports-apparel-cart.jpg'
    },
    {
      image: 'assets/home-cart-images/sports goodscart.jpg'
    }
  ];

  getWhatsAppMessage(product: Product): string {
    return `Hello, I am interested in ${product.name ?? 'this product'} priced at ${product.price ?? ''}`;
  }

  encodeMessage(message: string): string {
    return encodeURIComponent(message);
  }

  getWhatsAppLink(product: Product): string {
    const message = this.getWhatsAppMessage(product);
    return `https://wa.me/923199220813?text=${this.encodeMessage(message)}`;
  }
}
