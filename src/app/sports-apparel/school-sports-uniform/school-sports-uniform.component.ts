import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-school-sports-uniform',
  templateUrl: './school-sports-uniform.component.html',
  styleUrls: ['./school-sports-uniform.component.css']
})
export class SchoolSportsUniformComponent implements OnInit {
  products = [
    {
      id: 301,
      category: 'sports-apparel',
      subCategory: 'school-sports-uniform',
      name: 'Boys Sports Uniform (Blue & White)',
      price: 2499,
      color: 'Blue / White',
      size: 'S, M, L, XL',
      brand: 'SRS Apparel',
      description:
        'Comfortable and durable boys sports uniform designed for daily school activities and sports events.',
      defaultImage: 'assets/sportapparel/uniforms/boys-blue-main.png',
      hoverImage: 'assets/sportapparel/uniforms/boys-blue-back.png',
      images: [
        'assets/sportapparel/uniforms/boys-blue-main.png',
        'assets/sportapparel/uniforms/boys-blue-back.png',
        'assets/sportapparel/uniforms/boys-blue-side.png'
      ]
    },
    {
      id: 302,
      category: 'sports-apparel',
      subCategory: 'school-sports-uniform',
      name: 'Girls Sports Uniform (Red & White)',
      price: 2699,
      color: 'Red / White',
      size: 'S, M, L, XL',
      brand: 'SRS Apparel',
      description:
        'Breathable and lightweight girls sports uniform with flexible stitching for maximum comfort.',
      defaultImage: 'assets/sportapparel/uniforms/girls-red-main.png',
      hoverImage: 'assets/sportapparel/uniforms/girls-red-back.png',
      images: [
        'assets/sportapparel/uniforms/girls-red-main.png',
        'assets/sportapparel/uniforms/girls-red-back.png',
        'assets/sportapparel/uniforms/girls-red-side.png'
      ]
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Register these uniforms globally so they can be accessed in ProductDetail
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
    this.router.navigate([`/sports-apparel/${item.subCategory}`, item.id]);
  }
}
