import { Component, Input, OnInit } from '@angular/core';
import { CartData } from 'src/app/services/models/cart-data.model';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.scss'],
})
export class OrderBoxComponent implements OnInit {
  @Input() data: CartData;

  constructor() {}

  ngOnInit(): void {}
}
