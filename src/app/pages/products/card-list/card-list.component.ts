import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { ToyData } from '../../../services/models/toys.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  products: ToyData[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    try {
      this.productService.getData().subscribe((data) => {
        this.products.push(...data);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
