import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe((data) => {
      this.movies = data['results'];
      });
  }
}
