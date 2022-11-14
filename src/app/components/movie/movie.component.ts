import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransporterService } from 'src/app/services/transporter.service';
import moviesJson from '../movie/movies.json';
import upcomingMovies from "../movie/moviesUpcoming.json";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private httpClient: HttpClient, private transporterService: TransporterService) { }

  ngOnInit(): void { }
   
 
  faChevronCircleRight = faChevronCircleRight;
  faChevronCircleLeft = faChevronCircleLeft;

allMovies=moviesJson
upcomingMovies = upcomingMovies
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
