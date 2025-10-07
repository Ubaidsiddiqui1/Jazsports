import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-squash',
  templateUrl: './squash.component.html',
  styleUrls: ['./squash.component.css']
})
export class SquashComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Squash Racket',
      price: 6999,
      color: 'Black & Yellow',
      size: 'Standard',
      description: 'Lightweight carbon-fiber squash racket designed for precision and control.',
      defaultImage: 'assets/sportgoodscategory/squash/racket.jpg',
      hoverImage: 'assets/sportgoodscategory/squash/racket-hover.jpg'
    },
    {
      id: 2,
      name: 'Squash Ball (Pack of 3)',
      price: 1499,
      color: 'Black',
      size: 'Standard',
      description: 'Durable double-dot squash balls suitable for professional and club play.',
      defaultImage: 'assets/sportgoodscategory/squash/balls.jpg',
      hoverImage: 'assets/sportgoodscategory/squash/balls-hover.jpg'
    },
    {
      id: 3,
      name: 'Squash Goggles',
      price: 2499,
      color: 'Clear',
      size: 'One Size',
      description: 'Anti-fog protective goggles designed for comfort and safety during play.',
      defaultImage: 'assets/sportgoodscategory/squash/goggles.jpg',
      hoverImage: 'assets/sportgoodscategory/squash/goggles-hover.jpg'
    },
    {
      id: 4,
      name: 'Squash Grip Tape',
      price: 799,
      color: 'Blue',
      size: 'Universal',
      description: 'Sweat-absorbent grip tape for maximum comfort and better racket handling.',
      defaultImage: 'assets/sportgoodscategory/squash/grip.jpg',
      hoverImage: 'assets/sportgoodscategory/squash/grip-hover.jpg'
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
    this.router.navigate(['/sports-goods/squash', product.id]);
}
}
