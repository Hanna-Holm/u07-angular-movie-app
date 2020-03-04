import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private API_KEY = '86f786cb3168b7be2d9b10e010de421b';
  
  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`)
  }
}

