import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../components/movies/movies.component';
import { WebSeriesComponent } from '../components/web-series/web-series.component';
import { WebseriesDetailComponent } from '../components/webseries-detail/webseries-detail.component';
import { TvShowsComponent } from '../components/tv-shows/tv-shows.component';
import { SportsComponent } from '../components/sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    WebSeriesComponent,
    TvShowsComponent,
    SportsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
   
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
