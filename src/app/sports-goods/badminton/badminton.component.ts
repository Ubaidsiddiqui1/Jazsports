import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Yonex Badminton Racket',
      price: 3999,
      color: 'Black & Yellow',
      size: 'Standard',
      description: 'Lightweight carbon graphite racket offering excellent control and power for intermediate players.',
      defaultImage: 'assets/sportgoodscategory/badminton/racket1.jpg',
      hoverImage: 'assets/sportgoodscategory/badminton/racket1-hover.jpg'
    },
    {
      id: 2,
      name: 'Feather Shuttlecock Pack',
      price: 1599,
      color: 'White',
      size: '12 Pack',
      description: 'High-quality goose feather shuttlecocks with consistent flight and durability.',
      defaultImage: 'assets/sportgoodscategory/badminton/shuttle.jpg',
      hoverImage: 'assets/sportgoodscategory/badminton/shuttle-hover.jpg'
    },
    {
      id: 3,
      name: 'Badminton Grip Set',
      price: 499,
      color: 'Multi-color',
      size: 'Standard',
      description: 'Comfortable and anti-slip racket grips to improve your hold and control during long matches.',
      defaultImage: 'assets/sportgoodscategory/badminton/grips.jpg',
      hoverImage: 'assets/sportgoodscategory/badminton/grips-hover.jpg'
    },
    {
      id: 4,
      name: 'Badminton Net',
      price: 2499,
      color: 'Red & White',
      size: '6m x 0.76m',
      description: 'Durable nylon net suitable for both indoor and outdoor play, easy to set up and store.',
      defaultImage: 'assets/sportgoodscategory/badminton/net.jpg',
      hoverImage: 'assets/sportgoodscategory/badminton/net-hover.jpg'
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
    this.router.navigate(['/sports-goods/badminton', product.id]);
}
}
