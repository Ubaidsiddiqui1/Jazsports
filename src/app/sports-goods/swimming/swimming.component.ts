import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.css']
})
export class SwimmingComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Swimming Goggles',
      price: 2499,
      color: 'Blue',
      size: 'Adjustable',
      description: 'Anti-fog UV-protected swimming goggles for clear underwater vision.',
      defaultImage: 'assets/sportgoodscategory/swimming/goggles.jpg',
      hoverImage: 'assets/sportgoodscategory/swimming/goggles-hover.jpg'
    },
    {
      id: 2,
      name: 'Swim Cap',
      price: 999,
      color: 'Black',
      size: 'Universal',
      description: 'High-quality silicone swim cap designed for comfort and reduced drag.',
      defaultImage: 'assets/sportgoodscategory/swimming/cap.jpg',
      hoverImage: 'assets/sportgoodscategory/swimming/cap-hover.jpg'
    },
    {
      id: 3,
      name: 'Swim Fins',
      price: 4999,
      color: 'Yellow',
      size: 'Medium',
      description: 'Training fins that improve kick strength and swimming performance.',
      defaultImage: 'assets/sportgoodscategory/swimming/fins.jpg',
      hoverImage: 'assets/sportgoodscategory/swimming/fins-hover.jpg'
    },
    {
      id: 4,
      name: 'Kickboard',
      price: 2799,
      color: 'Blue',
      size: 'Standard',
      description: 'Ergonomic kickboard for swim training and improving leg technique.',
      defaultImage: 'assets/sportgoodscategory/swimming/kickboard.jpg',
      hoverImage: 'assets/sportgoodscategory/swimming/kickboard-hover.jpg'
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
    this.router.navigate(['/sports-goods/swimming', product.id]);
}
}
