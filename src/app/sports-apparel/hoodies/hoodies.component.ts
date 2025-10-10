import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.component.html',
  styleUrls: ['./hoodies.component.css']
})
export class HoodiesComponent implements OnInit {
  products = [
    {
      id: 1,
      category: 'hoodies',
      name: 'Classic Pullover Hoodie',
      price: 3499,
      color: 'Black',
      size: 'M',
      brand: 'Jaz Sports',
      description:
        'Comfortable and stylish pullover hoodie with soft fleece fabric and a front pocket.',
      defaultImage: 'assets/sportapparel/hoodies/black-hoodie-front.png',
      hoverImage: 'assets/sportapparel/hoodies/black-hoodie-back.png',
      images: [
        'assets/sportapparel/hoodies/black-hoodie-front.png',
        'assets/sportapparel/hoodies/black-hoodie-back.png'
      ]
    },
    {
      id: 2,
      category: 'hoodies',
      name: 'Zip-Up Sports Hoodie',
      price: 3999,
      color: 'Grey',
      size: 'L',
      brand: 'Jaz Sports',
      description:
        'Lightweight zip-up hoodie made with breathable material, ideal for workouts and casual wear.',
      defaultImage: 'assets/sportapparel/hoodies/grey-hoodie-front.png',
      hoverImage: 'assets/sportapparel/hoodies/grey-hoodie-back.png',
      images: [
        'assets/sportapparel/hoodies/grey-hoodie-front.png',
        'assets/sportapparel/hoodies/grey-hoodie-back.png'
      ]
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Register hoodies in shared ProductService
    this.productService.addProducts(this.products);
  }

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

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`🛒 Added to cart: ${product.name}`);
  }

  viewProduct(item: any) {
    this.router.navigate([`/sports-apparel/${item.category}`, item.id]);
  }
}
