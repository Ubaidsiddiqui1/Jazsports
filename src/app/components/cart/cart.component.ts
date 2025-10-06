import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isOpen = false;

  constructor(public cartService: CartService) {}

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  closeCart(event: Event) {
    this.isOpen = false;
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  orderOnWhatsapp() {
  const items = this.cartService.getCartItems();

  if (!items.length) {
    alert('Your cart is empty.');
    return;
  }

  // First line (custom message)
  let message = 'I would like to place my order for:%0A%0A';

  // Each item starts on a new line
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*%0A`;
    message += `Qty: ${item.quantity}%0A`;
    message += `Price: Rs ${item.price}%0A%0A`;
  });

  // Add total and closing line
  const total = this.totalPrice;
  message += `*Total: Rs ${total}*%0A%0A`;
  message += `Please confirm the order.%0AThank you!`;

  // Replace with your WhatsApp number (without +)
  const phoneNumber = '923199220813';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, '_blank');
}



  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  get totalPrice() {
    return this.cartService.getCartItems()
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
