import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carouselImages') carouselImages!: ElementRef<HTMLDivElement>;
  currentIndex = 0;
  totalImages = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    // ✅ Count total images directly from the DOM
    this.totalImages = this.carouselImages.nativeElement.querySelectorAll('img').length;
    document.documentElement.style.setProperty('--image-count', this.totalImages.toString());
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); // ⏳ 4 seconds per image
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
