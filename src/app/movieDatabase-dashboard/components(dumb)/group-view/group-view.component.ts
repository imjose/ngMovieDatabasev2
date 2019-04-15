import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {
  @Input() details: Observable<Movie[]>;

  view = true;

  clickHandle() {
    this.view = !this.view;
  }

  constructor() { }

  ngOnInit() {
  }

}
