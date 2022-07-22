import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartData } from 'src/app/services/models/cart-data.model';
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
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  selected: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let id: any;
    this.isLoading = true;
    this.route.paramMap.subscribe((params) => (id = params.get('id')));
    this.productId = id;
    try {
      this.productService
        .getOneData(this.productId)
        .subscribe((data) => (this.product = data));
    } catch (error) {
      console.error(error);
    }
    this.isLoading = false;
  }

  onChange() {
    this.isSubmitted = false;
  }

  onSubmit(form: NgForm) {
    const data: CartData = {
      productId: this.productId,
      name: this.product.name,
      model: this.product.model,
      price: this.product.price,
      imageUrl: this.product.images[0].url,
      quantity: this.selected,
    };
    // console.log(data);
    this.cartService.addtoCart(data);
    this.isSubmitted = true;
    form.reset();
  }

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
