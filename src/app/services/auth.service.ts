import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string,password:string) {
    if (email === "kerem@gmail" && password === "kerem") {
      return 200
    } else {
      return 404
    }
  }
}
