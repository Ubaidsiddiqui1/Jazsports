import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css']
})
export class CartSectionComponent {
  products = [
    {
      name: 'Basketball Goal/Post',
      price: 'Rs. 2,500',
      image: 'assets/home-cart-images/basketball pole-post.jpg',
      description: '16 Guage Pipes, Unbreakable Sheets, Easy to move, Commercial Use'
    },
    {
      name: 'Basketball',
      price: 'Rs. 3,200',
      image: 'assets/products/basketball.jpg',
      description: 'Durable indoor/outdoor basketball with strong grip.'
    },
    {
      name: 'Cricket Bat',
      price: 'Rs. 5,500',
      image: 'assets/products/cricket-bat.jpg',
      description: 'English willow bat, lightweight, perfect for power hitting.'
    },
    {
      name: 'Badminton Racket',
      price: 'Rs. 1,800',
      image: 'assets/products/badminton.jpg',
      description: 'Lightweight graphite badminton racket for faster swings.'
    },
    {
      name: 'Table Tennis Set',
      price: 'Rs. 4,000',
      image: 'assets/products/table-tennis.jpg',
      description: '2 bats + 6 balls set for professional table tennis practice.'
    },
    {
      name: 'Hockey Stick',
      price: 'Rs. 3,000',
      image: 'assets/products/hockey.jpg',
      description: 'Wooden hockey stick with premium grip and strong durability.'
    },
    {
      name: 'Volleyball',
      price: 'Rs. 2,200',
      image: 'assets/products/volleyball.jpg',
      description: 'Synthetic leather volleyball, perfect for indoor & outdoor play.'
    },
    {
      name: 'Track Suit',
      price: 'Rs. 3,800',
      image: 'assets/products/tracksuit.jpg',
      description: 'Comfortable sports tracksuit made with breathable fabric.'
    }
  ];

  // WhatsApp message generator
  getWhatsAppMessage(product: any): string {
    return `Hello, I am interested in this product:\n${product.name}`;
  }

  // Encode message for safe URL
  encodeMessage(message: string): string {
    return encodeURIComponent(message);
  }

  // Generate WhatsApp link
  getWhatsAppLink(product: any): string {
    const message = this.getWhatsAppMessage(product);
    return `https://wa.me/923199220813?text=${this.encodeMessage(message)}`;
  }
}
