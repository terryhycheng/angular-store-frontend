import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartData } from './models/cart-data.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url: string = 'http://localhost:5000/local_cart/';
  private storageSub: Subject<any> = new Subject();

  constructor() {}

  watchStorage(): Observable<string> {
    return this.storageSub.asObservable();
  }

  getCart(): CartData[] {
    return JSON.parse(localStorage.getItem('cart_data')!) || [];
  }

  addtoCart(data: CartData): void {
    const list: CartData[] = this.getCart();
    localStorage.setItem('cart_data', JSON.stringify([...list, data]));
    this.storageSub.next(JSON.stringify([...list, data]));
  }

  updateCart(newQuantity: number, ItemId: string): void {
    let list: CartData[] = this.getCart();
    const selected = list.find(({ id }) => id === ItemId);
    list[list.indexOf(selected!)].quantity = newQuantity;
    localStorage.setItem('cart_data', JSON.stringify(list));
    this.storageSub.next(JSON.stringify([...list]));
  }

  deleteItem(id: string): void {
    let list: CartData[] = this.getCart();
    list = list.filter((data) => data.id !== id);
    localStorage.setItem('cart_data', JSON.stringify(list));
    this.storageSub.next(JSON.stringify([...list]));
  }

  clearCart(): void {
    localStorage.clear();
    this.storageSub.next(JSON.stringify([]));
  }
}
