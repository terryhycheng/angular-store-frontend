import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToyData } from 'src/app/services/models/toys.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  product: ToyData;
  isLoding: boolean = false;
  selected: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    let id: any;
    this.route.paramMap.subscribe((params) => (id = params.get('id')));
    this.productId = id;
    this.isLoding = true;
    try {
      this.productService
        .getOneData(this.productId)
        .subscribe((data) => (this.product = data));
    } catch (error) {
      console.error(error);
    }
    this.isLoding = false;
  }

  onChange() {
    console.log(this.selected);
  }
}
