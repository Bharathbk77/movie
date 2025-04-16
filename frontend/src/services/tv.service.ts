import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TvShow {
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
export class TvService {

  private apiUrl = 'http://localhost:5000/tvshows';

  constructor(private http: HttpClient) {}

  getTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.apiUrl);
  }

  getTvShowById(id: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/${id}`);
  }
}
