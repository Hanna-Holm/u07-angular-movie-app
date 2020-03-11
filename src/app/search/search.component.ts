import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { MoviesService } from '../movies.service';
import { Movie } from '../movies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies$: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MoviesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term))
    )
  }
}
