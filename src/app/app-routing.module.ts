import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { SingleMovieCardComponent } from './single-movie-card/single-movie-card.component';

const routes: Routes = [
  {path:"",redirectTo: 'login',pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: "movie", component: MovieComponent },
  { path: "card", component: SingleMovieCardComponent },
  {path: '**' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
