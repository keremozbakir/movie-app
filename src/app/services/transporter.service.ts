import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TransporterService {
   
  public searchedMovies: any;
  sendMessage = new Subject();

  communicate(msg:any) {
    this.sendMessage.next(msg)
  }
}
