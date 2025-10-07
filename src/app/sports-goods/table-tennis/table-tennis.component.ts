import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-table-tennis',
  templateUrl: './table-tennis.component.html',
  styleUrls: ['./table-tennis.component.css']
})
export class TableTennisComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Table Tennis Racket',
      price: 4999,
      color: 'Red & Black',
      size: 'Standard',
      description: 'High-performance racket with carbon layers for better control and spin.',
      defaultImage: 'assets/sportgoodscategory/tabletennis/racket.jpg',
      hoverImage: 'assets/sportgoodscategory/tabletennis/racket-hover.jpg'
    },
    {
      id: 2,
      name: 'Table Tennis Balls (Pack of 6)',
      price: 1299,
      color: 'White',
      size: '40mm',
      description: 'Durable seamless 3-star balls suitable for both training and competition.',
      defaultImage: 'assets/sportgoodscategory/tabletennis/balls.jpg',
      hoverImage: 'assets/sportgoodscategory/tabletennis/balls-hover.jpg'
    },
    {
      id: 3,
      name: 'Table Tennis Net Set',
      price: 3499,
      color: 'Blue',
      size: 'Standard',
      description: 'Clamp-style adjustable net set designed for quick setup and removal.',
      defaultImage: 'assets/sportgoodscategory/tabletennis/net.jpg',
      hoverImage: 'assets/sportgoodscategory/tabletennis/net-hover.jpg'
    },
    {
      id: 4,
      name: 'Table Tennis Table Cover',
      price: 2599,
      color: 'Black',
      size: 'Full Size',
      description: 'Water-resistant heavy-duty cover for protecting your table tennis table.',
      defaultImage: 'assets/sportgoodscategory/tabletennis/cover.jpg',
      hoverImage: 'assets/sportgoodscategory/tabletennis/cover-hover.jpg'
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
    this.router.navigate(['/sports-goods/table-tennis', product.id]);
}
}