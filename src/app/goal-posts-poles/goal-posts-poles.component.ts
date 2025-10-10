import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-goal-posts-poles',
  templateUrl: './goal-posts-poles.component.html',
  styleUrls: ['./goal-posts-poles.component.css']
})
export class GoalPostsPolesComponent implements OnInit, OnDestroy {
  products: Array<{
    image: string;
    secondImage: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    showSecond: boolean;
  }> = [
    {
      secondImage: 'assets/poles-post/goal post back.jpg',
      image: 'assets/poles-post/basketball pole-post.jpg',
      description: 'Durable metal football goal post ideal for practice and matches.',
      oldPrice: 25000,
      newPrice: 19999,
      showSecond: false
    },
    {
      image: 'assets/poles-post/football goal-post front.jpg',
      secondImage: 'assets/poles-post/Movable-Football-Goal-Post..jpg',
      description: 'Portable 7x8 feet goal post easy to assemble and store.',
      oldPrice: 22000,
      newPrice: 17999,
      showSecond: false
    },
    {
      image: 'assets/poles-post/badminton pole front.jpg',
      secondImage: 'assets/poles-post/badminton pole front.jpg',
      description: 'Heavy-duty steel frame perfect for professional use.',
      oldPrice: 27000,
      newPrice: 22999,
      showSecond: false
    }
  ];

  typedDescriptions: string[] = [];
  private timeouts: any[] = [];

  ngOnInit() {
    this.products.forEach((product, index) => {
      this.typeEffect(product.description, index);

      const timeout = setTimeout(() => {
        product.showSecond = true;
      }, 2000);

      this.timeouts.push(timeout);
    });
  }

  typeEffect(text: string, index: number) {
    let i = 0;
    this.typedDescriptions[index] = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        this.typedDescriptions[index] += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }

  openWhatsApp(product: any) {
    const message = `Hello! I'm interested in this product: ${product.description} — Price: Rs ${product.newPrice}`;
    const url = `https://wa.me/923199220813?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  ngOnDestroy() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  }
}
