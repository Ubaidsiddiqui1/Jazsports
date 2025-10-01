import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuActive = false;
  activeDropdown: string | null = null;
  isMobile = false;

  constructor() {
    this.checkScreen();
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleDropdown(dropdown: string) {
    if (this.isMobile) {
      // Only toggle on mobile
      this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
    }
  }

  closeMenu() {
    this.menuActive = false;
    this.activeDropdown = null;
  }

  // detect screen resize
  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
  }

  // Optional: close menu if user clicks outside
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-navbar')) {
      this.closeMenu();
    }
  }
}