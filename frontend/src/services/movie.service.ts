import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;                 // JSON has "id" as a string
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
export class MovieService {
  private apiUrl = 'http://localhost:5000/movies'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMoviesById(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
