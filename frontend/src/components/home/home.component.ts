import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSeries, WebseriesService } from '../../services/webseries.service';
import { TvShow, TvService } from '../../services/tv.service';
import { Sport, SportsService } from '../../services/sports.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies: Movie[] = [];
  webSeries: WebSeries[] = [];
  tvShows: TvShow[] = [];
  sports: Sport[] = [];


  showUserModal: boolean = false; // Add this property
  showLoginForm = false;
  showRegisterForm = false;
  loggedInUser: string | null = null;

  constructor(private router: Router, private movieService: MovieService,
    private webSeriesService: WebseriesService,
    private tvService: TvService,
    private sportsService: SportsService
  ) {} 

  // ngOnInit(): void {
  //   this.movieService.getMovies().subscribe((data) => {
  //     this.movies = data;
  //     // console.log(data);
  //   });
  // }

  // goToDetailPage(id: number) {
  //   this.router.navigate(['/movie', id]);
  //   console.log("naviagted")
  // }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => (this.movies = data));
    this.webSeriesService.getWebSeries().subscribe((data) => (this.webSeries = data));
    this.tvService.getTvShows().subscribe((data) => (this.tvShows = data));
    this.sportsService.getSports().subscribe((data) => (this.sports = data));

    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      this.loggedInUser = savedUser;
    }
  }

  goToDetailPage(category: string, id: number) {
    this.router.navigate([`/${category}`, id]);
  }

  // ✅ Modal logic
  openUserModal() {
    this.showUserModal = true;
    // this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  closeUserModal() {
    this.showUserModal = false;
    this.showLoginForm = false;
    this.showRegisterForm = false;
  }

  

  goToLogin() {
    this.showLoginForm = true;
    // this.router.navigate(['/login']);
  }

  goToAdmin() {
    console.log('Admin login clicked');
  }
  

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = false;
  }

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
    this.showLoginForm = false;
  }

  backToProfile() {
    this.showLoginForm = false;
    this.showRegisterForm = false;
  }

  handleLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('input[placeholder="Username"]') as HTMLInputElement).value;
    const password = (form.querySelector('input[placeholder="Password"]') as HTMLInputElement).value;

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("❌ " + data.error);
      } else {
        this.loggedInUser = username;
        localStorage.setItem('loggedInUser', username);
        alert("✅ " + data.message);
        this.closeUserModal();
      }
    })
    .catch(err => {
      console.error(err);
      alert("❌ Failed to login");
    });
  }

  handleRegister(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('input[placeholder="Username"]') as HTMLInputElement).value;
    const email = (form.querySelector('input[placeholder="Email"]') as HTMLInputElement).value;
    const password = (form.querySelector('input[placeholder="Password"]') as HTMLInputElement).value;
    const confirmPassword = (form.querySelector('input[placeholder="Confirm Password"]') as HTMLInputElement).value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("❌ " + data.error);
      } else {
        alert("✅ " + data.message);
        this.backToProfile();
      }
    })
    .catch(err => {
      alert("❌ Failed to register");
      console.error(err);
    });
  }
  
  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    alert('🚪 Logged out successfully');
    this.backToProfile();
  }
  
}
