import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css']
})
export class ShortComponent implements OnInit {
  products = [
    {
      id: 1,
      category: 'shorts',
      name: 'Athletic Training Shorts',
      price: 1999,
      color: 'Black',
      size: 'M',
      brand: 'Jaz Sports',
      description:
        'Lightweight, quick-dry training shorts with breathable fabric and elastic waistband for a perfect fit.',
      defaultImage: 'assets/sportapparel/shorts/black-shorts-front.png',
      hoverImage: 'assets/sportapparel/shorts/black-shorts-back.png',
      images: [
        'assets/sportapparel/shorts/black-shorts-front.png',
        'assets/sportapparel/shorts/black-shorts-back.png'
      ]
    },
    {
      id: 2,
      category: 'shorts',
      name: 'Performance Running Shorts',
      price: 2299,
      color: 'Navy Blue',
      size: 'L',
      brand: 'Jaz Sports',
      description:
        'Moisture-wicking running shorts designed for comfort and performance with inner lining support.',
      defaultImage: 'assets/sportapparel/shorts/navy-shorts-front.png',
      hoverImage: 'assets/sportapparel/shorts/navy-shorts-back.png',
      images: [
        'assets/sportapparel/shorts/navy-shorts-front.png',
        'assets/sportapparel/shorts/navy-shorts-back.png'
      ]
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
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
