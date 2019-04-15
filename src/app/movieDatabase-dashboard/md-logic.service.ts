import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interfaces
import { Actor } from './models/actor.interface';
import { Movie } from './models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MdLogicService {

  constructor(
    private http: HttpClient,
  ) { }

  private key = '322cc983a9b40cb62b8b3066a3056c2f';
  url = 'https://api.themoviedb.org/3';

  getMovie(id: number): Observable<Movie> {
    const url = `${this.url}/movie/${id}?api_key=${this.key}`;
    return this.http.get<Movie>(`${url}`);
  }
  getActorsByMovie(id: number): Observable<Actor[]> {
    const url = `${this.url}/movie/${id}/credits?api_key=${this.key}`;
    return this.http.get(`${url}`).pipe(
      map(data => data['cast'])
    );
  }

  getActor(id: number): Observable<Actor> {
    const url = `${this.url}/person/${id}?api_key=${this.key}&language=en-US`;
    return this.http.get(`${url}`);
  }
  getMoviesByActor(id: number): Observable<Movie[]> {
    const url = `${this.url}/discover/movie?api_key=${this.key}&with_cast=${id}&language=en-US&sort_by=vote_average.desc`;
    return this.http.get(`${url}`).pipe(
      map(data => data['results'])
    );
  }
  
  // getMovieImg(id: number) {
  //   const url = `${this.url}/movie/${id}/images?api_key=${this.key}`;
  //   return this.http.get(`${url}`);
  // }
  // getActorImg(id: number) {
  //   const url = `${this.url}/person/${id}/images?api_key=${this.key}`;
  //   return this.http.get(`${url}`);
  // }

  // GET list of movies
  getMoviesPop(id: number): Observable<any> {
    const url = `
    ${this.url}/discover/movie?api_key=${this.key}&certification_country=US&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${id}`;
    return this.http.get(`${url}`);
  }
  getMoviesTopR(id: number): Observable<any> {
    const url = `
    ${this.url}/discover/movie?api_key=${this.key}&certification_country=US&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=${id}`;
    return this.http.get(`${url}`);
  }
  getMoviesAll(id: number): Observable<any> {
    const url = `
    ${this.url}/discover/movie?api_key=${this.key}&language=en-US&sort_by=original_title.asc&page=${id}&include_adult=false&include_video=false`;
    return this.http.get(`${url}`);
  }

  // SEARCH
  findMovie(value): Observable<Movie[]> {
    const url = `${this.url}/search/movie?api_key=${this.key}&language=en-US&query=${value}&page=1&include_adult=false`;
    return this.http.get(`${url}`).pipe(
      map(data => data['results'])
    );
  }
}
