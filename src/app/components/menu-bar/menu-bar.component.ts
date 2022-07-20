import { Component, OnInit } from '@angular/core';

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
  links: Link[] = [
    {
      path: '/',
      text: 'Products',
    },
    {
      path: '/cart',
      text: 'Cart',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/contact',
      text: 'Contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
