import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { TransporterService } from 'src/app/services/transporter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private transporterService:TransporterService) { }
  data: any;

  ngOnInit(): void {
    
  }
  goHome() {
    this.router.navigate(["home"])
  }
  searchWord() {
    this.transporterService.sendSearchWord(this.data)
  }

   
}
