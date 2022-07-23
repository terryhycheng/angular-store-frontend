import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreData } from './models/store-data.model';

@Injectable({
  providedIn: 'root',
})
export class StoreLocationsService {
  constructor(private http: HttpClient) {}

  getStore(): Observable<StoreData[]> {
    return this.http.get<StoreData[]>(
      'https://angular-hottoys-store-data.herokuapp.com/store_location'
    );
  }
}
