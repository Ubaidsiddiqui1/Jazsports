import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  products = [
    {
      id: 101,
      name: 'Adidas Football',
      price: 2499,
      brand:'adidas',
      color: 'White & Blue',
      size: 'Standard 5',
      description: 'Premium match-quality football designed for durability, grip, and consistent flight.',
      defaultImage: 'assets/sportgoodscategory/football/front/football1.png',
      hoverImage: 'assets/sportgoodscategory/football/back/football1 back.png'
    },
    {
      id: 102,
      name: 'Nike Strike Football',
      price: 2799,
      color: 'Yellow & Black',
      size: 'Standard 5',
      description: 'Textured casing and reinforced rubber bladder for superior touch and shape retention.',
      defaultImage: 'assets/sportgoodscategory/football/nike-football.jpg',
      hoverImage: 'assets/sportgoodscategory/football/nike-football-hover.jpg'
    },
    {
      id: 3,
      name: 'Football Net Goal Post',
      price: 4999,
      color: 'White',
      size: '7x5 Feet',
      description: 'Portable and durable goal post with strong nylon net, perfect for training and backyard matches.',
      defaultImage: 'assets/sportgoodscategory/football/goal-post.jpg',
      hoverImage: 'assets/sportgoodscategory/football/goal-post-hover.jpg'
    },
    {
      id: 4,
      name: 'Shin Guards',
      price: 1199,
      color: 'Black & Silver',
      size: 'Medium',
      description: 'Lightweight, ergonomic shin guards with foam padding for comfort and safety.',
      defaultImage: 'assets/sportgoodscategory/football/shin-guards.jpg',
      hoverImage: 'assets/sportgoodscategory/football/shin-guards-hover.jpg'
    },
    {
      id: 5,
      name: 'Football Shoes',
      price: 3999,
      color: 'Black & Red',
      size: 'UK 9',
      description: 'Non-slip football cleats with enhanced grip and breathable upper for long matches.',
      defaultImage: 'assets/sportgoodscategory/football/shoes.jpg',
      hoverImage: 'assets/sportgoodscategory/football/shoes-hover.jpg'
    },
    {
      id: 6,
      name: 'Goalkeeper Gloves',
      price: 2499,
      color: 'White & Green',
      size: 'Large',
      description: 'Professional-grade gloves offering superior grip and comfort under all conditions.',
      defaultImage: 'assets/sportgoodscategory/football/gloves.jpg',
      hoverImage: 'assets/sportgoodscategory/football/gloves-hover.jpg'
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Store products globally so other components (like product detail) can access them
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
    this.router.navigate(['/sports-goods/football', product.id]);
  }
}
