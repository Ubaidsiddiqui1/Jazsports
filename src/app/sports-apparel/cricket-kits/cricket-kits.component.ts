import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cricket-kits',
  templateUrl: './cricket-kits.component.html',
  styleUrls: ['./cricket-kits.component.css']
})
export class CricketKitsComponent implements OnInit {
  products = [
    {
      id: 201,
      category: 'sports-apparel',
      subCategory: 'cricket-kits',
      name: 'CA Pro Cricket Kit',
      price: 14999,
      color: 'White & Blue',
      size: 'Adult',
      brand: 'CA',
      description:
        'Complete cricket kit including bat, pads, gloves, and helmet — ideal for professional and club players.',
      defaultImage: 'assets/sportapparel/cricketkits/ca-kit-main.png',
      hoverImage: 'assets/sportapparel/cricketkits/ca-kit-side.png',
      images: [
        'assets/sportapparel/cricketkits/ca-kit-main.png',
        'assets/sportapparel/cricketkits/ca-kit-side.png',
        'assets/sportapparel/cricketkits/ca-kit-open.png'
      ]
    },
    {
      id: 202,
      category: 'sports-apparel',
      subCategory: 'cricket-kits',
      name: 'SG Tournament Cricket Kit',
      price: 12999,
      color: 'White & Red',
      size: 'Adult',
      brand: 'SG',
      description:
        'Durable and comfortable cricket kit made from high-quality materials. Includes gloves, pads, and helmet.',
      defaultImage: 'assets/sportapparel/cricketkits/sg-kit-main.png',
      hoverImage: 'assets/sportapparel/cricketkits/sg-kit-side.png',
      images: [
        'assets/sportapparel/cricketkits/sg-kit-main.png',
        'assets/sportapparel/cricketkits/sg-kit-side.png',
        'assets/sportapparel/cricketkits/sg-kit-open.png'
      ]
    }
  ];

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Register cricket kits under shared ProductService
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
