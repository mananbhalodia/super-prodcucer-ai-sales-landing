// src/app/components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  menuActive = false;

  /**
   * Listens to the window scroll and updates the isScrolled flag
   * to switch header styles if needed.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Toggles the mobile menu.
   */
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}