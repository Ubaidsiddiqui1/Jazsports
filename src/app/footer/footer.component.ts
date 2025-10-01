import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  // Replace with actual profiles if needed
  instagramUrl = 'https://www.instagram.com/jazsportsofficial?igsh=NXJwMHZhYW5qenY0&utm_source=qr';
  facebookUrl  = 'https://www.facebook.com/share/1GEP5JteYc/?mibextid=wwXIfr';
  tiktokUrl    = 'https://www.tiktok.com'; // update with your TikTok page if you have one

  getWhatsAppHref(): string {
    return 'https://wa.me/923199220813';
  }
}
