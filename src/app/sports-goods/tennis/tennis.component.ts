import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Tennis Racket',
      price: 8999,
      color: 'Black & Green',
      size: 'Standard',
      description: 'Professional-grade graphite tennis racket with excellent control and power.',
      defaultImage: 'assets/sportgoodscategory/tennis/racket.jpg',
      hoverImage: 'assets/sportgoodscategory/tennis/racket-hover.jpg'
    },
    {
      id: 2,
      name: 'Tennis Balls (Pack of 3)',
      price: 1999,
      color: 'Yellow',
      size: 'Standard',
      description: 'ITF-approved tennis balls for all court types and professional use.',
      defaultImage: 'assets/sportgoodscategory/tennis/balls.jpg',
      hoverImage: 'assets/sportgoodscategory/tennis/balls-hover.jpg'
    },
    {
      id: 3,
      name: 'Tennis Grip Tape',
      price: 999,
      color: 'White',
      size: 'Universal',
      description: 'Sweat-resistant overgrip providing extra comfort and superior racket hold.',
      defaultImage: 'assets/sportgoodscategory/tennis/grip.jpg',
      hoverImage: 'assets/sportgoodscategory/tennis/grip-hover.jpg'
    },
    {
      id: 4,
      name: 'Tennis Bag',
      price: 4999,
      color: 'Blue & Black',
      size: '6-Racket Capacity',
      description: 'Durable, spacious tennis bag with separate compartments for gear and accessories.',
      defaultImage: 'assets/sportgoodscategory/tennis/bag.jpg',
      hoverImage: 'assets/sportgoodscategory/tennis/bag-hover.jpg'
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.setProducts(this.products);
  }

  swapImage(event: Event, hoverImage: string) {
    const img = event.target as HTMLImageElement;
    img.style.transition = 'opacity 0.6s ease-in-out';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = hoverImage;
      img.style.opacity = '1';
    }, 200);
  }

  resetImage(event: Event, defaultImage: string) {
    const img = event.target as HTMLImageElement;
    img.style.transition = 'opacity 0.6s ease-in-out';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = defaultImage;
      img.style.opacity = '1';
    }, 200);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`🛒 Added to cart: ${product.name}`);
  }

  viewProduct(product: any) {
    // Navigate to football product detail page
    this.router.navigate(['/sports-goods/tennis', product.id]);
}
}
