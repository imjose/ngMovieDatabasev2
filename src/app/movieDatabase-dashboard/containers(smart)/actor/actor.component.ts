import { Component, OnInit } from '@angular/core';
import { MdLogicService } from '../../md-logic.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// interface
import { Movie } from '../../models/movie.interface';
import { Actor } from '../../models/actor.interface';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  Id: number;

  constructor(
    private dataService: MdLogicService,
    private route: ActivatedRoute
  ) { this.Id = route.snapshot.params.id; }

  detail$: Observable<any>;
  complement$: Observable<Movie[]>;

  ngOnInit() {
    this.detail$ = this.dataService.getActor(this.Id);
    this.complement$ = this.dataService.getMoviesByActor(this.Id);
  }
}
