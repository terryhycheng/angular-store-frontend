import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartData } from './models/cart-data.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:5000/local_cart/';

  getCart(): Observable<CartData[]> {
    return this.http.get<CartData[]>(this.url);
  }

  addtoCart(data: CartData): void {
    this.http.post(this.url, data).subscribe();
  }

  updateCart() {
    return this.http.patch(this.url + '1', {});
  }

  deletefromCart() {
    return this.http.delete(this.url + '1');
  }
}
