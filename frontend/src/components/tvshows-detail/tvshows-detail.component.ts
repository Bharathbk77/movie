import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-tvshows-detail',
  standalone: false,
  templateUrl: './tvshows-detail.component.html',
  styleUrls: ['./tvshows-detail.component.css']
})
export class TvshowsDetailComponent implements OnInit {
  tvshow: any;

  constructor(
    private tvshowsService: TvService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('TV Show ID from route:', id);
    this.tvshowsService.getTvShowById(id).subscribe(data => {
      console.log('Fetched TV show:', data);
      this.tvshow = data;
    });
  }

  goBack(): void {
    this.location.back();
    console.log("Back button clicked");
  }
}
