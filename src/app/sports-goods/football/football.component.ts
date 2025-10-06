import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
 // ✅ Import the service

@Component({
  selector: 'app-cricket',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {
  constructor(private cartService: CartService) {}

  products = [
    {
      id: 101,
      name: 'Fifa football',
      price: 2499,
      defaultImage: 'assets/sportgoodscategory/football/front/football1.png',
      hoverImage: 'assets/sportgoodscategory/football/back/football1 back.png'
    },
    {
      id: 2,
      name: 'Cricket Hardball Bat',
      price: 4999,
      defaultImage: 'assets/sportgoodscategory/cricket/bats/gemini tennis bat.png',
      hoverImage: 'assets/sportgoodscategory/cricket/bats/ca back.png'
    },
    {
      id: 3,
      name: 'Leather Cricket Ball',
      price: 1299,
      defaultImage: 'assets/sportgoodscategory/cricket ball.jpg',
      hoverImage: 'assets/sportgoodscategory/cricket ball hover.jpg'
    },
    {
      id: 4,
      name: 'Cricket Helmet',
      price: 3499,
      defaultImage: 'assets/sportgoodscategory/cricket helmet.jpg',
      hoverImage: 'assets/sportgoodscategory/cricket helmet hover.jpg'
    },
    {
      id: 5,
      name: 'Batting Gloves',
      price: 1999,
      defaultImage: 'assets/sportgoodscategory/batting gloves.jpg',
      hoverImage: 'assets/sportgoodscategory/batting gloves hover.jpg'
    },
    {
      id: 6,
      name: 'Cricket Pads',
      price: 2799,
      defaultImage: 'assets/sportgoodscategory/cricket pads.jpg',
      hoverImage: 'assets/sportgoodscategory/cricket pads hover.jpg'
    }
  ];

  // Smooth hover transition
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

  toggleImage(event: Event, item: any) {
    const img = event.target as HTMLImageElement;
    img.src = img.src.includes(item.defaultImage)
      ? item.hoverImage
      : item.defaultImage;
  }

  onCardClick(cardNumber: number) {
    console.log('Clicked card:', cardNumber);
  }

  // ✅ Add product to cart using CartService
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`🛒 Added to cart: ${product.name} (ID: ${product.id})`);
    console.log('Current cart:', this.cartService.getCartItems());
  }
}
