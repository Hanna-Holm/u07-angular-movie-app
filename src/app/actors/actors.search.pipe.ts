import { Pipe, PipeTransform } from "@angular/core";
import { Actor } from "../actors";

@Pipe({
  name: "searchActor"
})
export class ActorSearchPipe implements PipeTransform {
  public transform(actors: Actor[], keys: string, term: string) {
    const regex = new RegExp(term, "gi");

    return actors.filter(actor => {
      if (regex.test(actor.name)) 
        return true;
    });
  }
}
