import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

// components
import { DashboardComponent } from './containers(smart)/dashboard/dashboard.component';
import { GroupViewComponent } from './components(dumb)/group-view/group-view.component';
import { IndividualViewComponent } from './components(dumb)/individual-view/individual-view.component';
import { PopularComponent } from './containers(smart)/popular/popular.component';
import { TopRatedComponent } from './containers(smart)/top-rated/top-rated.component';
import { AllComponent } from './containers(smart)/all/all.component';
import { ActorComponent } from './containers(smart)/actor/actor.component';
import { MovieComponent } from './containers(smart)/movie/movie.component';
import { SearchComponent } from './containers(smart)/search/search.component';

// service
import { MdLogicService } from './md-logic.service';
import { ImgDialogComponent } from './components(dumb)/img-dialog/img-dialog.component';

@NgModule({
  declarations: [
    // containers
    DashboardComponent,
    PopularComponent,
    TopRatedComponent,
    AllComponent,
    ActorComponent,
    MovieComponent,
    SearchComponent,
    // components
    GroupViewComponent,
    IndividualViewComponent,
    ImgDialogComponent,
  ],
  providers: [
    MdLogicService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
  ],
  exports: [
    DashboardComponent,
  ],
  entryComponents: [
    ImgDialogComponent,
  ],
})
export class MovieDashboardModule { }
