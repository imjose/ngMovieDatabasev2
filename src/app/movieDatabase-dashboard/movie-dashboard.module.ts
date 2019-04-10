import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DashboardComponent } from './containers(smart)/dashboard/dashboard.component';
import { GroupViewComponent } from './components(dumb)/group-view/group-view.component';
import { IndividualViewComponent } from './components(dumb)/individual-view/individual-view.component';
import { PopularComponent } from './containers(smart)/popular/popular.component';
import { TopRatedComponent } from './containers(smart)/top-rated/top-rated.component';
import { AllComponent } from './containers(smart)/all/all.component';
import { ActorComponent } from './containers(smart)/actor/actor.component';
import { MovieComponent } from './containers(smart)/movie/movie.component';

@NgModule({
  declarations: [
    // smart Components
    DashboardComponent,
    PopularComponent,
    TopRatedComponent,
    AllComponent,
    ActorComponent,
    MovieComponent,
    // dumb Components
    GroupViewComponent,
    IndividualViewComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MovieDashboardModule { }
