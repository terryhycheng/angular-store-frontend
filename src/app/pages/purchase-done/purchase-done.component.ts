import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-purchase-done',
  templateUrl: './purchase-done.component.html',
  styleUrls: ['./purchase-done.component.scss'],
})
export class PurchaseDoneComponent implements OnInit {
  order: Order;
  isNotFound: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const res = this.orderService.getOrder();
    if (res) {
      this.isNotFound = false;
      this.order = JSON.parse(res);
    } else {
      this.isNotFound = true;
    }
  }
}
