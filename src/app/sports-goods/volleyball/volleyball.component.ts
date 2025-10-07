import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.html',
  styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Volleyball',
      price: 3499,
      color: 'White & Blue',
      size: 'Standard',
      description: 'Professional-grade synthetic leather volleyball suitable for indoor and outdoor play.',
      defaultImage: 'assets/sportgoodscategory/volleyball/volleyball.jpg',
      hoverImage: 'assets/sportgoodscategory/volleyball/volleyball-hover.jpg'
    },
    {
      id: 2,
      name: 'Volleyball Net',
      price: 2999,
      color: 'Black',
      size: '9.5m x 1m',
      description: 'Durable nylon net with reinforced edges for stable and long-lasting performance.',
      defaultImage: 'assets/sportgoodscategory/volleyball/net.jpg',
      hoverImage: 'assets/sportgoodscategory/volleyball/net-hover.jpg'
    },
    {
      id: 3,
      name: 'Volleyball Knee Pads',
      price: 1999,
      color: 'Black',
      size: 'One Size',
      description: 'Cushioned knee pads designed to absorb impact and protect during dives.',
      defaultImage: 'assets/sportgoodscategory/volleyball/kneepads.jpg',
      hoverImage: 'assets/sportgoodscategory/volleyball/kneepads-hover.jpg'
    },
    {
      id: 4,
      name: 'Volleyball Pump',
      price: 999,
      color: 'Yellow',
      size: 'Universal',
      description: 'Compact hand pump for quick and easy volleyball inflation.',
      defaultImage: 'assets/sportgoodscategory/volleyball/pump.jpg',
      hoverImage: 'assets/sportgoodscategory/volleyball/pump-hover.jpg'
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
    this.router.navigate(['/sports-goods/volleyball', product.id]);
}
}
