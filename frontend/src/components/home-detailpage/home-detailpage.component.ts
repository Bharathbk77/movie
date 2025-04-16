import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-detailpage',
  standalone: true,
  // imports:[CommonModule],
  templateUrl: './home-detailpage.component.html',
  styleUrl: './home-detailpage.component.css'
})
export class HomeDetailpageComponent implements OnInit{
  movie: any;

  constructor(private movieservice:MovieService,private route: ActivatedRoute, private location: Location){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log('Movie ID from route:', id);  // debug
      this.movieservice.getMoviesById(id).subscribe(data => {
        console.log('Fetched movie:', data);    // debug
        this.movie = data;
      });
  }
  goBack() {
    this.location.back();
    console.log("Back button clicked");
  }
  
  
}
