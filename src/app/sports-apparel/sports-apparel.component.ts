import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ApparelProduct {
  name: string;
  image: string;
  route: string; // 👈 add route property
}

@Component({
  selector: 'app-sports-apparel',
  templateUrl: './sports-apparel.component.html',
  styleUrls: ['./sports-apparel.component.css']
})
export class SportsApparelComponent {
  constructor(private router: Router) {}

  apparels: ApparelProduct[] = [
    { name: 'Football Kits', image: 'assets/sports-apparel-main/football jersey.jpg', route: 'football-kits' },
    { name: 'Sports Uniform', image: 'assets/sports-apparel-main/uniform logo.jpg', route: 'school-sports-uniform' },
    { name: 'Cricket Kits', image: 'assets/sports-apparel-main/cricket jersey logo.jpg', route: 'cricket-kits' },
    { name: 'Running Tracksuit', image: 'assets/sports-apparel-main/track suit.jpg', route: 'track-suits' },
    { name: 'Training Shorts', image: 'assets/sports-apparel-main/baseball jersey.jpg', route: 'short' },
    { name: 'Hoodie', image: 'assets/sports-apparel-main/Hoodie.jpg', route: 'hoodies' },
    { name: 'Compression Shirt', image: 'assets/sports-apparel-main/track suit.jpg', route: 'compression-shirt' },
    { name: 'Gym Tank Top', image: 'assets/sports-apparel-main/bibs.jpg', route: 'gym-tank-top' }
  ];

  navigateToCategory(product: ApparelProduct) {
    this.router.navigate([`/sports-apparel/${product.route}`]);
  }

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
