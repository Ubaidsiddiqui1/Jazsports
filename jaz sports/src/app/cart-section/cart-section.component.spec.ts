import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css']
})
export class CartSectionComponent {
  products = [
    { name: 'Football', description: 'Durable size 5 football', price: 'Rs. 1,500', image: 'assets/products/football.jpg' },
    { name: 'Basketball', description: 'Indoor/outdoor use', price: 'Rs. 2,000', image: 'assets/products/basketball.jpg' },
    { name: 'Badminton Racket', description: 'Lightweight carbon fiber', price: 'Rs. 3,200', image: 'assets/products/badminton.jpg' },
    { name: 'Cricket Bat', description: 'Professional grade willow', price: 'Rs. 7,500', image: 'assets/products/cricket-bat.jpg' },
    { name: 'Goalkeeper Gloves', description: 'Perfect grip & comfort', price: 'Rs. 2,800', image: 'assets/products/gloves.jpg' },
    { name: 'Running Shoes', description: 'Lightweight sports shoes', price: 'Rs. 4,000', image: 'assets/products/shoes.jpg' },
    { name: 'Sports Jersey', description: 'Custom sublimated kit', price: 'Rs. 1,800', image: 'assets/products/jersey.jpg' },
    { name: 'Table Tennis Bat', description: 'Balanced for spin & control', price: 'Rs. 2,200', image: 'assets/products/table-tennis.jpg' },
  ];
}
