import { Component, NgModule, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/services/data.service';
import { TransporterService } from 'src/app/services/transporter.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
//import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.scss']
 
})
  
   
export class SearchmovieComponent implements OnInit {

  constructor(private dataService: DataService,  private activatedRoute: ActivatedRoute,private route:Router) { }
  
  searchedMovies !: Movie;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchedMovies = params['searchMovie']
      this.getSearchMovies(this.searchedMovies)
    });
  }

  movieId: any;
  singleMovieNavigate(event: any, id: any) {
    console.log("this is id : ", id)
    this.route.navigate(['/detail'],{queryParams:{movieId:id}})
  }
 
  getSearchMovies(queryString:any) {
    this.dataService.getSearchMovies(String(queryString)).subscribe((res: any) => {
      this.searchedMovies = this.modifyData(res)
      console.log(this.searchedMovies)
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




}
