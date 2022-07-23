import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface Link {
  path: string;
  text: string;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  cartLength: number = 0;
  links: Link[] = [
    {
      path: '/',
      text: 'Products',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/contact',
      text: 'Contact',
    },
    {
      path: '/cart',
      text: 'Cart',
    },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartLength = this.cartService.getCart().length;
    this.cartService
      .watchStorage()
      .subscribe((data: string) => (this.cartLength = parseInt(data)));
    this.links[3].text = this.cartLength ? `Cart (${this.cartLength})` : 'Cart';
  }
}
