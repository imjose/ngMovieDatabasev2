import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MdLogicService } from '../../md-logic.service';

// interface
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
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
    this.details$ = this.dataService.getMoviesAll();
  }

  ngOnInit() {
    this.getMovies();
  }
}
