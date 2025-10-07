import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() currentCategory: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // If no input is provided, read from URL automatically
    if (!this.currentCategory) {
      const segments = this.router.url.split('/');
      // Example URL: /sports-goods/cricket/1
      const categoryIndex = segments.indexOf('sports-goods') + 1;
      if (categoryIndex > 0 && segments[categoryIndex]) {
        this.currentCategory = segments[categoryIndex];
      }
    }
  }
}
