import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WebseriesService } from '../../services/webseries.service';  // adjust path as needed

@Component({
  selector: 'app-webseries-detail',
  standalone:false,
  templateUrl: './webseries-detail.component.html',
  styleUrl: './webseries-detail.component.css'
})
export class WebseriesDetailComponent implements OnInit {
  webseries: any;

  constructor(
    private webseriesService: WebseriesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Webseries ID from route:', id);
    this.webseriesService.getWebSeriesById(id).subscribe(data => {
      console.log('Fetched webseries:', data);
      this.webseries = data;
    });
  }

  goBack() {
    this.location.back();
    console.log("Back button clicked");
  }
}
