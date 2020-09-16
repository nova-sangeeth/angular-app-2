import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // add the acurate url tested from the browser.
  private SERVER_URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }
}
