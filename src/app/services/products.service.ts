import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToyData } from './models/toys.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ToyData[]> {
    return this.http.get<ToyData[]>(
      'https://angular-hottoys-store-data.herokuapp.com/toys'
    );
  }

  getOneData(id: string): Observable<ToyData> {
    return this.http.get<ToyData>(`http://localhost:5000/toys/${id}`);
  }
}
