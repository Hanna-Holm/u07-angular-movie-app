import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from "../movies";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  public transform(movies: Movie[], keys: string, term: string) {
    const regex = new RegExp(term, "gi");

    return movies.filter(movie => {
      if (regex.test(movie.title)) 
        return true;
    });
  }
}
