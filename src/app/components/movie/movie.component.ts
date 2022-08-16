import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransporterService } from 'src/app/services/transporter.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private httpClient:HttpClient,private transporterService:TransporterService) { }

  ngOnInit(): void {
    
   //this.getMovies();
    this.transporterService.searchWord.subscribe((msg:any) => {
      this.searchParam = msg
    })

    
  }
  allMovies: any
  searchParam: string ='stardust'
  //getmovies heeree
}
