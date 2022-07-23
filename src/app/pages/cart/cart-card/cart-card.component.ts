import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CartData } from 'src/app/services/models/cart-data.model';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() data: CartData;

  arr: number[] = [1, 2, 3, 4, 5];
  qtyForm = new FormGroup({
    quantity: new FormControl(''),
  });

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.arr = this.arr.filter((num) => num !== this.data.quantity);
  }

  onClick() {
    this.cartService.deleteItem(this.data.id);
  }

  onChange() {
    this.cartService.updateCart(
      parseInt(this.qtyForm.value.quantity!),
      this.data.id
    );
  }
}
