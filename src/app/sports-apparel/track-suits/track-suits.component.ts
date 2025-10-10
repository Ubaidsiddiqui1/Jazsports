import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-track-suits',
  templateUrl: './track-suits.component.html',
  styleUrls: ['./track-suits.component.css']
})
export class TrackSuitsComponent implements OnInit {
  products = [
    {
      id: 1,
      category: 'track-suits',
      name: 'Men’s Training Track Suit',
      price: 4999,
      color: 'Black & White',
      size: 'L',
      brand: 'Jaz Sports',
      description:
        'Comfortable polyester track suit with sweat-wicking fabric. Ideal for workouts or casual wear.',
      defaultImage: 'assets/sportapparel/tracksuits/black-white-front.png',
      hoverImage: 'assets/sportapparel/tracksuits/black-white-back.png',
      images: [
        'assets/sportapparel/tracksuits/black-white-front.png',
        'assets/sportapparel/tracksuits/black-white-back.png'
      ]
    },
    {
      id: 2,
      category: 'track-suits',
      name: 'Classic Blue Track Suit',
      price: 4599,
      color: 'Navy Blue',
      size: 'M',
      brand: 'Jaz Sports',
      description:
        'Stylish navy track suit featuring breathable mesh lining and elastic cuffs for a snug fit.',
      defaultImage: 'assets/sportapparel/tracksuits/navy-front.png',
      hoverImage: 'assets/sportapparel/tracksuits/navy-back.png',
      images: [
        'assets/sportapparel/tracksuits/navy-front.png',
        'assets/sportapparel/tracksuits/navy-back.png'
      ]
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Add all track suits to shared product service
    this.productService.addProducts(this.products);
  }

  // ===== Hover Effects =====
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

  // ===== Cart & Navigation =====
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`🛒 Added to cart: ${product.name}`);
  }

  viewProduct(item: any) {
    this.router.navigate([`/sports-apparel/${item.category}`, item.id]);
  }
}
