import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartData } from 'src/app/services/models/cart-data.model';
import { OrderService } from 'src/app/services/order.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartData: CartData[];
  totalPrice: number = 0;

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    payment: new FormControl('', Validators.required),
  });

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartData = this.cartService.getCart();
    this.cartService.watchStorage().subscribe((data: string) => {
      this.cartData = JSON.parse(data);
      this.updatePrice(this.cartData);
    });
    this.updatePrice(this.cartData);
  }

  updatePrice(data: CartData[]): void {
    this.totalPrice = 0;
    data.length > 0
      ? data.forEach((data) => (this.totalPrice += data.price * data.quantity))
      : (this.totalPrice = 0);
  }

  onSubmit(): void {
    if (this.cartData.length) {
      const data: string = JSON.stringify({
        orderId: uuidv4(),
        totalPrice: this.totalPrice,
        order: this.cartData,
        info: this.contactForm.value,
      });
      this.contactForm.reset();
      this.cartService.clearCart();
      this.orderService.addToOrder(data);
      this.router.navigate(['/purchase-done']);
    }
  }
}
