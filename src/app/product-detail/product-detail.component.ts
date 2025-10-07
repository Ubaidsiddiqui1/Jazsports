import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedImage: string = '';
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.product = this.productService.getProductById(id);

        if (this.product?.defaultImage) {
          this.selectedImage = this.product.defaultImage;
        }
      }
    });
  }

  selectImage(img: string) {
    const prevImage = this.selectedImage;
    this.selectedImage = img;

    // Swap clicked image with the main image
    const index = this.product.images.indexOf(img);
    if (index > -1) {
      this.product.images[index] = prevImage;
    }
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(product: any, qty: number) {
    this.cartService.addToCart(product, qty);
    console.log(`🛒 Added ${qty} x ${product.name} to cart`);
  }
}
