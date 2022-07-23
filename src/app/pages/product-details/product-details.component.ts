import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartData } from 'src/app/services/models/cart-data.model';
import { ToyData } from 'src/app/services/models/toys.model';
import { ProductsService } from 'src/app/services/products.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  product: ToyData;
  cartLength: string;
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
    let length: number = this.cartService.getCart().length;
    this.route.paramMap.subscribe((params) => (id = params.get('id')));
    this.productId = id;
    this.isLoading = true;
    try {
      this.productService.getData().subscribe((data) => {
        this.product = data[parseInt(this.productId) - 1];
        this.isLoading = false;
      });
    } catch (error) {
      console.error(error);
    }
    this.cartLength = length > 0 ? `(${length})` : '';
    this.cartService
      .watchStorage()
      .subscribe(
        (newdata) => (this.cartLength = `(${JSON.parse(newdata).length})`)
      );
  }

  onChange() {
    this.isSubmitted = false;
  }

  onSubmit(form: NgForm) {
    const data: CartData = {
      id: uuidv4(),
      name: this.product.name,
      model: this.product.model,
      price: this.product.price,
      imageUrl: this.product.images[0].url,
      quantity: this.selected,
    };
    this.cartService.addtoCart(data);
    this.isSubmitted = true;
    form.reset();
  }

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
