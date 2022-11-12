import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransporterService } from 'src/app/services/transporter.service';
import moviesJson from '../movie/movies.json'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private httpClient: HttpClient, private transporterService: TransporterService) { }

  ngOnInit(): void {
    
    //this.getMovies();
    this.transporterService.searchWord.subscribe((msg: any) => {
      this.searchParam = msg
      this.getMovies()
    })

  }
  allMovies: any = moviesJson
  searchParam: any = 'stardust'
  sliderWidth="300px"
  allUrls = []
  getMovies() {
    var params={q:this.searchParam}
    let url = 'https://online-movie-database.p.rapidapi.com/auto-complete'
    let header = new HttpHeaders().set('X-RapidAPI-Key','b27b01202emsh3b40e8d45d9c12bp1923d8jsn9b7d447ff8a3').set('X-RapidAPI-Host', 'online-movie-database.p.rapidapi.com')
    this.httpClient.get(url, { params: params, headers: header }).subscribe((movies) => {
      console.log(movies)
      this.allMovies = movies
      //this.allUrls = movies.i.imageUrl
    })
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
      navText: ['', ''],
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
      },
      nav: false
    }
  
 
}
