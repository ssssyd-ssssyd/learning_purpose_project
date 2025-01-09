import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
interface CatFact {
  fact: string;
  length: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://catfact.ninja/fact';
  public cat = signal<CatFact | null>;
  public count = signal(0);
  constructor(private http: HttpClient) {}

  getCatFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.apiUrl);
  }
}
