import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  email = "";
  password = "";
  errorMessage = ""
 
  ngOnInit(): void {
  }
  login() {
    var userEmail = this.email.trim()
    var userPassword = this.password.trim()

    if (userEmail.length === 0){
      this.errorMessage = "Please Enter Email "
    }else if (userPassword.trim().length === 0) {
      this.errorMessage = "Please Enter Password"
    }else {
      if ((this.auth.login(userEmail, userPassword)) === 200) {
        this.errorMessage = ""
        this.router.navigate(["home"])
      }else {
        this.errorMessage = "Wrong Email Or Password"
       }  
      }
  }

}
