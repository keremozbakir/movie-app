import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  constructor(private route :ActivatedRoute,private dataService: DataService) { }
  //imageUrl = 'https://www.formula1.com/content/dam/fom-website/manual/Misc/2021manual/2021BritishManualAdds/2022CarImages/2022CarImageSTUDIO/2022%20F1%20Car%20Race%20Service%20-%20Ryan%20Davis-5.jpg.transform/9col/image.jpg'
  movieName!: any;
  imageUrl!: any;
  movieId!: any;
  searchedMovie!: any;
  movieOverview!: any;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.movieId = params.get('movieId')
    })
    this.getMoviesById(this.movieId)
     
  }

  getMoviesById(queryString:any) {
    this.dataService.getSearchMoviesById(String(queryString)).subscribe((res: any) => {
      this.searchedMovie = this.modifyData(res)
     this.movieName = res.original_title
      this.imageUrl = "https://image.tmdb.org/t/p/original" + res.backdrop_path;
      this.movieOverview = res.overview
      console.log(this.movieName,this.imageUrl,this.movieOverview)
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
