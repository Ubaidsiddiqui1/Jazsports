import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})
export class HockeyComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Field Hockey Stick',
      price: 4999,
      color: 'Black & Orange',
      size: '36.5 inch',
      description: 'Lightweight carbon composite hockey stick designed for better control and power.',
      defaultImage: 'assets/sportgoodscategory/hockey/stick1.jpg',
      hoverImage: 'assets/sportgoodscategory/hockey/stick1-hover.jpg'
    },
    {
      id: 2,
      name: 'Hockey Ball (Pack of 3)',
      price: 1499,
      color: 'White',
      size: 'Standard',
      description: 'Durable smooth-surface hockey balls ideal for practice and professional matches.',
      defaultImage: 'assets/sportgoodscategory/hockey/balls.jpg',
      hoverImage: 'assets/sportgoodscategory/hockey/balls-hover.jpg'
    },
    {
      id: 3,
      name: 'Hockey Goalkeeper Pads',
      price: 8499,
      color: 'Blue & Black',
      size: 'Adult',
      description: 'Protective and lightweight goalkeeper pads designed for flexibility and safety.',
      defaultImage: 'assets/sportgoodscategory/hockey/pads.jpg',
      hoverImage: 'assets/sportgoodscategory/hockey/pads-hover.jpg'
    },
    {
      id: 4,
      name: 'Hockey Gloves',
      price: 2499,
      color: 'Black',
      size: 'Medium',
      description: 'Durable gloves offering superior grip and protection during intense gameplay.',
      defaultImage: 'assets/sportgoodscategory/hockey/gloves.jpg',
      hoverImage: 'assets/sportgoodscategory/hockey/gloves-hover.jpg'
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
    this.router.navigate(['/sports-goods/hockey', product.id]);
}
}
