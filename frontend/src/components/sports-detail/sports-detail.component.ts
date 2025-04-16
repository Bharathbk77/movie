import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SportsService } from '../../services/sports.service'; // adjust path if needed

@Component({
  selector: 'app-sports-detail',
  standalone: false,
  templateUrl: './sports-detail.component.html',
  styleUrl: './sports-detail.component.css'
})
export class SportsDetailComponent implements OnInit {
  sports: any;

  constructor(
    private sportsService: SportsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Sports ID from route:', id);
    this.sportsService.getSportById(id).subscribe(data => {
      console.log('Fetched sports:', data);
      this.sports = data;
    });
  }

  goBack() {
    this.location.back();
    console.log("Back button clicked");
  }
}
