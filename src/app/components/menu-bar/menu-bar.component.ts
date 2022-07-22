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
  cartLength: string;
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
    this.cartService
      .getCart()
      .subscribe((data) => (this.links[3].text = `Cart (${data.length})`));
  }
}
