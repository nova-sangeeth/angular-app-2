import { Injectable } from '@angular/core';
import { retry, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public first = '';
  public prev = '';
  public next = '';
  public last = '';
}
