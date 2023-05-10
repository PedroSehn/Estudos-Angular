import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  getCards(url: string): Observable<any>{
    return this.http.get<any>(`${url}`)
  }
}
