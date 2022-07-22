import { Component, Input, OnInit } from '@angular/core';
import { CartData } from 'src/app/services/models/cart-data.model';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() data: CartData;

  constructor() {}

  ngOnInit(): void {}
}
