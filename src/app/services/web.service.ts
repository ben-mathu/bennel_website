import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  loadCarousel(): Observable<any> {
    const filePath = "assets/data/carousel.json";
    return this.http.get(filePath);
  }
}
