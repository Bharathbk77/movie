import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { HomeDetailpageComponent } from '../components/home-detailpage/home-detailpage.component';
import { WebSeriesComponent } from '../components/web-series/web-series.component';
import { TvShowsComponent } from '../components/tv-shows/tv-shows.component';
import { SportsComponent } from '../components/sports/sports.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { WebseriesDetailComponent } from '../components/webseries-detail/webseries-detail.component';
import { TvshowsDetailComponent } from '../components/tvshows-detail/tvshows-detail.component';
import { SportsDetailComponent } from '../components/sports-detail/sports-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'movie', component: MoviesComponent },
  { path: 'movie/:id', component: HomeDetailpageComponent },

  { path: 'webseries', component: WebSeriesComponent },
  { path: 'webseries/:id', component: WebseriesDetailComponent },

  { path: 'tvshows', component: TvShowsComponent },
  { path: 'tvshows/:id', component: TvshowsDetailComponent },

  { path: 'sports', component: SportsComponent },
  { path: 'sports/:id', component: SportsDetailComponent },

  // fallback route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
