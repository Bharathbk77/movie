import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sport {
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
  providedIn: 'root'
})
export class SportsService {

  private apiUrl = 'http://localhost:5000/sports';

  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.apiUrl);
  }

  getSportById(id: number): Observable<Sport> {
    return this.http.get<Sport>(`${this.apiUrl}/${id}`);
  }
}
