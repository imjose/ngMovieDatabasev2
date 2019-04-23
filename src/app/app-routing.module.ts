import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// auth components
import { LoginComponent } from './Auth/containers/login/login.component';
import { RegisterComponent } from './Auth/containers/register/register.component';

// dashboard components
import { MovieComponent } from './movieDatabase-dashboard/containers(smart)/movie/movie.component';
import { TopRatedComponent } from './movieDatabase-dashboard/containers(smart)/top-rated/top-rated.component';
import { PopularComponent } from './movieDatabase-dashboard/containers(smart)/popular/popular.component';
import { ActorComponent } from './movieDatabase-dashboard/containers(smart)/actor/actor.component';
import { AllComponent } from './movieDatabase-dashboard/containers(smart)/all/all.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  // {path: '', redirectTo: '/toprated', pathMatch: 'full'},
  {path: 'toprated', component: TopRatedComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'all', component: AllComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'actor/:id', component: ActorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
