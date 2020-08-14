import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'content-type': 'application/json',
  //   }),
  // };

  getProduct(): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/products`);
  }

  save(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product);
  }

  remove(id: any): Observable<any> {
    console.log(`${this.apiUrl}/products/${id}`);
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}
