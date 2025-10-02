import { Component } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  products = [
    { defaultImage: 'assets/images/product1a.jpg', hoverImage: 'assets/images/product1b.jpg' },
    { defaultImage: 'assets/images/product2a.jpg', hoverImage: 'assets/images/product2b.jpg' },
    { defaultImage: 'assets/images/product3a.jpg', hoverImage: 'assets/images/product3b.jpg' },
    { defaultImage: 'assets/images/product4a.jpg', hoverImage: 'assets/images/product4b.jpg' },
    { defaultImage: 'assets/images/product5a.jpg', hoverImage: 'assets/images/product5b.jpg' },
    { defaultImage: 'assets/images/product6a.jpg', hoverImage: 'assets/images/product6b.jpg' },
    { defaultImage: 'assets/images/product7a.jpg', hoverImage: 'assets/images/product7b.jpg' },
    { defaultImage: 'assets/images/product8a.jpg', hoverImage: 'assets/images/product8b.jpg' },
    { defaultImage: 'assets/images/product9a.jpg', hoverImage: 'assets/images/product9b.jpg' },
    { defaultImage: 'assets/images/product10a.jpg', hoverImage: 'assets/images/product10b.jpg' }
  ];

  // Swap image on hover
  swapImage(event: Event, hoverImage: string) {
    (event.target as HTMLImageElement).src = hoverImage;
  }

  // Reset to default image
  resetImage(event: Event, defaultImage: string) {
    setTimeout(() => {
      (event.target as HTMLImageElement).src = defaultImage;
    }, 2000);
  }

  // Toggle on click (manual swap)
  toggleImage(event: Event, item: any) {
    const img = event.target as HTMLImageElement;
    img.src = (img.src.includes(item.defaultImage)) ? item.hoverImage : item.defaultImage;
  }

  // Handle top card clicks
  onCardClick(cardNumber: number) {
    console.log('Clicked card:', cardNumber);
    // navigate to page or do something
  }
}
