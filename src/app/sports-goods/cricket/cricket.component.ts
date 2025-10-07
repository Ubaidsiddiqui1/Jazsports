import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  products = [
    {
      id: 1,
      category: 'cricket',
      name: 'Gemini Tennis Bat',
      price: 2499,
      color: 'Natural Wood',
      size: 'Full Size',
      brand: 'CA',
      description:
        'Lightweight tennis bat made from high-quality Kashmir willow for practice and casual play.',
      defaultImage: 'assets/sportgoodscategory/cricket/bats/ca bat.png',
      hoverImage: 'assets/sportgoodscategory/cricket/bats/ca back.png',
      images: [
        'assets/sportgoodscategory/cricket/bats/ca bat.png',
        'assets/sportgoodscategory/cricket/bats/ca back.png',
        'assets/sportgoodscategory/cricket/bats/ca back.png'
      ]
    },
    {
      id: 2,
      category: 'cricket',
      name: 'Cricket Hardball Bat',
      price: 4999,
      color: 'Natural Finish',
      size: 'Full Size',
      brand: 'CA',
      description:
        'Professional-grade hardball bat with superior balance and power.',
      defaultImage: 'assets/sportgoodscategory/cricket/bats/ca bat.png',
      hoverImage: 'assets/sportgoodscategory/cricket/bats/ca back.png',
      images: [
        'assets/sportgoodscategory/cricket/bats/ca bat.png',
        'assets/sportgoodscategory/cricket/bats/ca back.png',
        'assets/sportgoodscategory/cricket/bats/ca side.png'
      ]
    },
    // Add more products below if needed
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Register cricket products in shared ProductService
    this.productService.addProducts(this.products);
  }

  // ====== Hover Effects ======
  swapImage(event: Event, hoverImage: string) {
    const img = event.target as HTMLImageElement;
    img.style.transition = 'opacity 0.3s ease-in-out';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = hoverImage;
      img.style.opacity = '1';
    }, 200);
  }

  resetImage(event: Event, defaultImage: string) {
    const img = event.target as HTMLImageElement;
    img.style.transition = 'opacity 0.3s ease-in-out';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = defaultImage;
      img.style.opacity = '1';
    }, 200);
  }

  // ====== Cart & Navigation ======
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`🛒 Added to cart: ${product.name}`);
  }

  viewProduct(item: any) {
    this.router.navigate([`/sports-goods/${item.category}`, item.id]);
  }
}
