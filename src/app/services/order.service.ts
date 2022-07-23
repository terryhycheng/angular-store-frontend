import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  addToOrder(data: string): void {
    localStorage.setItem('order', data);
  }

  getOrder(): string {
    return localStorage.getItem('order')!;
  }
}
