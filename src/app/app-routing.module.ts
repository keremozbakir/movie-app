import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchmovieComponent } from './components/searchmovie/searchmovie.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
 

const routes: Routes = [
  {path:"",redirectTo: 'movie',pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MovieComponent },
  { path: 'login', component: LoginComponent },
  { path: "movie", component: MovieComponent },
  { path: "search/:searchMovie",component:SearchmovieComponent},
  
  { path: "detail",component:SingleMovieComponent},
  { path: '**' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
