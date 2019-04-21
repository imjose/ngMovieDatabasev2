import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import 'hammerjs';

// import { AppRoutingModule } from './app-routing.module';
import { MovieDashboardModule } from './movieDatabase-dashboard/movie-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,

    // custom module
    MovieDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
