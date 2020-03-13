import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private API_KEY = '86f786cb3168b7be2d9b10e010de421b';
  private moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number) : Observable<Movie> {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&append_to_response=credits`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
