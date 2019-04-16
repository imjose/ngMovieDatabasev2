import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImgDialogComponent } from '../img-dialog/img-dialog.component';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss']
})
export class IndividualViewComponent implements OnInit {
  @Input() isMovie: boolean;
  @Input() detail$: Observable<any>;
  @Input() complement$: Observable<any>;

  image: string;

  constructor( public dialog: MatDialog ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImgDialogComponent, {
      data: {image: this.image}
    });
  }

  ngOnInit() {
    this.detail$.subscribe(
      data => {
        if (data.hasOwnProperty('backdrop_path') && data.backdrop_path !== null) {
          this.image = `https://image.tmdb.org/t/p/w780${data.backdrop_path}`;
        } else if (data.hasOwnProperty('profile_path') && data.profile_path !== null) {
          this.image = `https://image.tmdb.org/t/p/h632${data.profile_path}`;
        } else {
          this.image = `https://www.jkhfindia.org/files/noimageavailable.png`;
        }
      }
    );
  }
}
