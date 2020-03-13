import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from "../movies";

@Pipe({
  name: "searchMovie"
})
export class MovieSearchPipe implements PipeTransform {
  public transform(movies: Movie[], keys: string, term: string) {
    const regex = new RegExp(term, "gi");

    return movies.filter(movie => {
      if (regex.test(movie.title)) 
        return true;
    });
  }
}
