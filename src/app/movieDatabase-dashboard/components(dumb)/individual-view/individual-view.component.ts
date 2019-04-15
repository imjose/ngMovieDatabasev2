import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

// interfaces
import { Movie } from '../../models/movie.interface';
import { Actor } from '../../models/actor.interface';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss']
})
export class IndividualViewComponent implements OnInit {
  @Input() isMovie: boolean;
  @Input() detail$: Observable<any>;
  @Input() complement$: Observable<any>;

  constructor() { }

  ngOnInit() { }
}