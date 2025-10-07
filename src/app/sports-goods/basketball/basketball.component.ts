import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Spalding Street Basketball',
      price: 2999,
      color: 'Orange',
      size: 'Official Size 7',
      description: 'Durable rubber basketball designed for outdoor courts with excellent grip and bounce.',
      defaultImage: 'assets/sportgoodscategory/basketball/ball1.jpg',
      hoverImage: 'assets/sportgoodscategory/basketball/ball1-hover.jpg'
    },
    {
      id: 2,
      name: 'Indoor Composite Basketball',
      price: 4499,
      color: 'Brown',
      size: 'Size 6',
      description: 'Soft composite leather surface for superior feel and control during indoor matches.',
      defaultImage: 'assets/sportgoodscategory/basketball/ball2.jpg',
      hoverImage: 'assets/sportgoodscategory/basketball/ball2-hover.jpg'
    },
    {
      id: 3,
      name: 'Adjustable Basketball Hoop Stand',
      price: 15999,
      color: 'Black & Red',
      size: 'Height Adjustable (7ft–10ft)',
      description: 'Sturdy hoop stand with adjustable height and heavy-duty base for home or club use.',
      defaultImage: 'assets/sportgoodscategory/basketball/hoop.jpg',
      hoverImage: 'assets/sportgoodscategory/basketball/hoop-hover.jpg'
    },
    {
      id: 4,
      name: 'Basketball Arm Sleeve',
      price: 899,
      color: 'Black',
      size: 'Free Size',
      description: 'Compression arm sleeve improves circulation and reduces muscle fatigue during gameplay.',
      defaultImage: 'assets/sportgoodscategory/basketball/sleeve.jpg',
      hoverImage: 'assets/sportgoodscategory/basketball/sleeve-hover.jpg'
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
    this.router.navigate(['/sports-goods/basketball', product.id]);
}
}