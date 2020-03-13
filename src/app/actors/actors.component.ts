import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActorsService } from '../actors.service';
import { Actor } from '../actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[];
  searchTerm: string

  constructor(private actorsService: ActorsService) { }

  ngOnInit() {
    this.actorsService.getActors()
      .subscribe((data) => {
      this.actors = data['results'];
      console.log(data['results']);
      });
  }
}
