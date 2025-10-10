import { Component } from '@angular/core';

interface ApparelProduct {
  name: string;
  image: string;
}

@Component({
  selector: 'app-sports-apparel',
  templateUrl: './sports-apparel.component.html',
  styleUrls: ['./sports-apparel.component.css']
})
export class SportsApparelComponent {
  apparels: ApparelProduct[] = [
    { name: 'Football kits', image: 'assets/sports-apparel-main/football jersey.jpg' },
    { name: 'Sports Uniform', image: 'assets/sports-apparel-main/uniform logo.jpg' },
    { name: 'Cricket kits', image: 'assets/sports-apparel-main/cricket jersey logo.jpg' },
    { name: 'Running Tracksuit', image: 'assets/sports-apparel-main/track suit.jpg' },
    { name: 'Training Shorts', image: 'assets/sports-apparel-main/baseball jersey.jpg' },
    { name: 'Hoodie', image: 'assets/sports-apparel-main/Hoodie.jpg' },
    { name: 'Compression Shirt', image: 'assets/sports-apparel-main/track suit.jpg' },
    { name: 'Gym Tank Top', image: 'assets/sports-apparel-main/bibs.jpg' }
  ];

  getWhatsAppMessage(product: ApparelProduct): string {
    return `Hello, I am interested in the ${product.name}. Could you please share more details?`;
  }

  encodeMessage(message: string): string {
    return encodeURIComponent(message);
  }

  getWhatsAppLink(product: ApparelProduct): string {
    const message = this.getWhatsAppMessage(product);
    return `https://wa.me/923199220813?text=${this.encodeMessage(message)}`;
  }
}
