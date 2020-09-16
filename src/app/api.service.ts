import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // add the acurate url tested from the browser.
  private SERVER_URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  handleError = (error: HttpErrorResponse) => {
    let errorMessage = 'Unknown-Errors';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // public sendGetRequest() {
  //   return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  // }
  public get() {
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }
}
