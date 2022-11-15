import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransporterService } from 'src/app/services/transporter.service';
import moviesJson from '../movie/movies.json';
import upcomingMovies from "../movie/moviesUpcoming.json";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/Model/movie';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private httpClient: HttpClient, private dataService:DataService) { }
  latestMovie !: any;
  popularMovie !: Movie;
  topRated !: Movie;
  nowPlaying !: Movie;
  upcoming !: Movie;
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleLeft = faChevronCircleLeft;
  allMovies=moviesJson
  upcomingMovies = upcomingMovies
  ngOnInit(): void {
    
    this.getLatestMovie();
    this.getNowPlaying();
    this.getPopularMovies();
    this.getTopRated();
    this.getUpcoming();
    
  }

   
  changeData(res:any):any {
    if (!res.backdrop_path) {
      res.backdrop_path= "https://image.tmdb.org/t/p/original" + res.poster_path + '?api_key=' + environment.api_key;
    } else {
      res.backdrop_path="https://image.tmdb.org/t/p/original" + res.backdrop_path + '?api_key=' + environment.api_key;
    }
  }

  getLatestMovie() {
    this.dataService.getLatestData().subscribe((res: any) => {      //returns single movie
      this.latestMovie = res
      //console.log(res)
    })
  }

  

  getPopularMovies() {
    this.dataService.getPopularMovies().subscribe((res: any) => {
      this.popularMovie = this.modifyData(res)
      //console.log(this.popularMovie)
    })
  }

  getNowPlaying() {
    this.dataService.getNowPlayingMovies().subscribe((res: any) => {
      this.nowPlaying = this.modifyData(res)
     // console.log(this.nowPlaying)
    })
  }


  getTopRated() {
    this.dataService.getTopRatedMovies().subscribe((res: any) => {
      this.topRated = this.modifyData(res)
      //console.log(this.topRated)
    })
  }

  getUpcoming() {
    this.dataService.getUpcomingMovies().subscribe((res: any) => {
      this.upcoming = this.modifyData(res)
     // console.log(this.upcoming)
    })
  }

  modifyData(movies: Movie):Movie {
    if (movies.results) {
      movies.results.forEach((element: any) => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original" + element.poster_path + '?api_key=' + environment.api_key;
        if (!element.title) {
          element.title = element?.title; 
        }
      });
    }

    return movies;
  }


 




customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  margin: 0,
  autoWidth:true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  nav: true,
  navText: [
    "<i class='fa-sharp fa-solid fa-circle-caret-right'></i>",
    "<i class='fa-sharp fa-solid fa-circle-caret-left'></i>"
   
  ],
  
  
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    } ,
    1140: {
      items: 5
    },
    1340: {
      items:6
    },
    1540: {
      items: 7
    }   
  }
}

 
}
