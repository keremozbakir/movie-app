import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransporterService } from 'src/app/services/transporter.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private httpClient: HttpClient, private transporterService: TransporterService) { }

  ngOnInit(): void {
    
    this.getMovies();
    this.transporterService.searchWord.subscribe((msg: any) => {
      this.searchParam = msg
    })

    
  }
  allMovies: any
  searchParam: any = 'stardust'
  params={q:this.searchParam}
  getMovies() {
    let url = 'https://online-movie-database.p.rapidapi.com/auto-complete'
    let header = new HttpHeaders().set('X-RapidAPI-Key','b27b01202emsh3b40e8d45d9c12bp1923d8jsn9b7d447ff8a3').set('X-RapidAPI-Host', 'online-movie-database.p.rapidapi.com')
    this.httpClient.get(url, { params: this.params, headers: header }).subscribe((movies) => {
      console.log(movies)
      this.allMovies =movies
    })
  }
}
