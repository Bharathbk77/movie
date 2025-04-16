import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WebSeries {
  id: number;
  title: string;
  image: string;
  director: string;
  actor: string;
  actress: string;
  music: string;
  budget: string;
  collection: string;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class WebseriesService {
  private apiUrl = 'http://localhost:5000/webseries';

  constructor(private http: HttpClient) {}

  getWebSeries(): Observable<WebSeries[]> {
    return this.http.get<WebSeries[]>(this.apiUrl);
  }

  getWebSeriesById(id: number): Observable<WebSeries> {
    return this.http.get<WebSeries>(`${this.apiUrl}/${id}`);
  }
}
