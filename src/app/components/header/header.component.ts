import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
 
import { TransporterService } from 'src/app/services/transporter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private transporterService:TransporterService) { }
  data: any;
  searchVal = '';
  ngOnInit(): void {
    
  }
  goHome() {
    this.router.navigate(["home"])
  }
 
  search() {
    if (this.searchVal === '') {
      console.log("nothing to search! ")
    }
    else {
      this.transporterService.communicate(this.searchVal)
      this.router.navigate(['search',this.searchVal]);
    }
  }

   
}
