import { Component, OnInit } from '@angular/core';
import { Observable, of, zip } from 'rxjs';

import { MdLogicService } from '../../md-logic.service';

// interface
import { Movie } from '../../models/movie.interface';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  onSearch = false;

  constructor( private dataService: MdLogicService ) { }

  details$: Observable<Movie[]>;
  movieData: Movie[] = [];

  handleSearch(value) {
    if (value !== '') {
      this.onSearch = true;
      this.details$ = this.dataService.findMovie(value);
    } else {
      this.getMovies();
      this.onSearch = false;
    }
  }

  getMovies() {
    this.details$ = this.dataService.getMoviesTopR();
  }

  ngOnInit() {
    this.getMovies();
  }
}