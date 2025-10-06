import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  whatsappNumber = '923199220813'; // 👈 Replace with your real WhatsApp number
  message = 'Hello! I want to know more about your products.';

  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;
  }
}
