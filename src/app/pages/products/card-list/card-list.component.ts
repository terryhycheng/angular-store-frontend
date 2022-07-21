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
  isLoading: boolean = false;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    try {
      this.productService.getData().subscribe((data) => {
        this.products.push(...data);
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
