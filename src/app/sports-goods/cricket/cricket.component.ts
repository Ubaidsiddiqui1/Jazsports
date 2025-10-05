import { Component } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  products = [
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
    { defaultImage: 'assets/sportgoodscategory/cricket tennis bat.jpg', hoverImage: 'assets/sportgoodscategory/cricket hardball.jpg' },
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
