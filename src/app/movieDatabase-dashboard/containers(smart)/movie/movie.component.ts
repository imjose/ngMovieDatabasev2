import { Component, OnInit } from '@angular/core';
import { MdLogicService } from '../../md-logic.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// interface
import { Movie } from '../../models/movie.interface';
import { Actor } from '../../models/actor.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  Id: number;

  constructor(
    private dataService: MdLogicService,
    private route: ActivatedRoute
  ) { this.Id = route.snapshot.params.id; }

  detail$: Observable<Movie>;
  complement$: Observable<Actor[]>;

  ngOnInit() {
    this.detail$ = this.dataService.getMovie(this.Id);
    this.complement$ = this.dataService.getActorsByMovie(this.Id);
  }

}
