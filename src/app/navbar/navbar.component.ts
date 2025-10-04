import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuActive = false;              // controls sidebar open/close
  activeDropdown: string | null = null;  // stores which dropdown is open
  isMobile = false;                // detects mobile

  constructor() {
    this.checkScreen();
  }

  // Toggle the sidebar menu on mobile
  toggleMenu() {
    this.menuActive = !this.menuActive;
    if (!this.menuActive) {
      this.activeDropdown = null; // close dropdowns when menu closes
    }
  }

  // Toggle dropdown submenu by arrow click
  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }

  // Close menu and dropdowns
  closeMenu() {
    this.menuActive = false;
    this.activeDropdown = null;
  }

  // Detect mobile vs desktop
  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      // reset states when switching to desktop
      this.menuActive = false;
      this.activeDropdown = null;
    }
  }

  // Close menu if click outside navbar
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-navbar')) {
      this.closeMenu();
    }
  }
}
