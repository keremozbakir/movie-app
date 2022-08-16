import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  searchWord = new Subject();
  constructor() { }

  sendSearchWord(msg:string) {
    this.searchWord.next(msg)
  }
}
