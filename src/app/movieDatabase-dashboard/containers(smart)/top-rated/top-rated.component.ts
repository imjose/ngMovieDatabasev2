import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MdLogicService } from '../../md-logic.service';

// interface
import { Movie } from '../../models/movie.interface';

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
      this.ngOnInit();
      this.onSearch = false;
    }
  }

  getMovies() {
    let i = 1;
    do {
      this.dataService.getMoviesTopR(i)
      .subscribe( data => {
        this.movieData = this.movieData.concat(data['results']);
        this.details$ = of(this.movieData);
       });
      i++;
    } while (i <= 5);
  }

  ngOnInit() {
    this.getMovies();
  }
}
