import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartData } from './models/cart-data.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:5000/local_cart/';

  private storageSub = new Subject();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  getCart(): CartData[] {
    return JSON.parse(localStorage.getItem('cart_data')!) || [];
  }

  addtoCart(data: CartData): void {
    const list: CartData[] = this.getCart();
    localStorage.setItem('cart_data', JSON.stringify([...list, data]));
    this.storageSub.next(JSON.stringify([...list, data]));
    console.log(JSON.parse(localStorage.getItem('cart_data')!));
  }

  updateCart() {
    return this.http.patch(this.url + '1', {});
  }

  deletefromCart() {
    return this.http.delete(this.url + '1');
  }
}
