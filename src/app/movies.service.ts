import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private moviesUrl = 'api/movies';

  private API_KEY = '86f786cb3168b7be2d9b10e010de421b';
  
  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
  }

  getMovie(id: number): Observable<Movie[]> {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`);
  }

  searchMovies(term: string): Observable<Movie[]> {
    console.log('Entering the searchMovies function');
    if (!term.trim()) {
      // if not search term, return empty hero array
      return of([]);
    }
    return this.httpClient.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log( `found heroes matching "${term}"`) :
        console.log(`no heroes matchin "${term}"`)),
    );

  }
}

