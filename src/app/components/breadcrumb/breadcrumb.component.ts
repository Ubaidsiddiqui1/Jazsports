import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() currentCategory: string | null = null;
  parentSection: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (!this.currentCategory) {
      const segments = this.router.url.split('/');

      // Check which main section the user is in
      if (segments.includes('sports-goods')) {
        this.parentSection = 'Sports Goods';
        const categoryIndex = segments.indexOf('sports-goods') + 1;
        if (categoryIndex > 0 && segments[categoryIndex]) {
          this.currentCategory = segments[categoryIndex];
        }
      } else if (segments.includes('sports-apparel')) {
        this.parentSection = 'Sports Apparel';
        const categoryIndex = segments.indexOf('sports-apparel') + 1;
        if (categoryIndex > 0 && segments[categoryIndex]) {
          this.currentCategory = segments[categoryIndex];
        }
      }
    }
  }
}
