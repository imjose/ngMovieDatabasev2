import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchField: FormControl;

  @Output() search: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.searchField = new FormControl('');
    this.searchField.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(_ => {
        this.search.emit(this.searchField.value);
      });
  }
}
