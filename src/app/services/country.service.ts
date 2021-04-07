import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  RESTCOUNTRIES_URL = "https://restcountries.eu/rest/v2";
  

  constructor( private http : HttpClient) { }

  getAllCountries() : Observable<any> {
    return this.http.get<any>(`${this.RESTCOUNTRIES_URL}/all`)
    .pipe(retry(1), catchError(this.handleError));
  }

  getCountryByName( name) : Observable<any> {
    return this.http.get<any>(`${this.RESTCOUNTRIES_URL}/name/${name.toLowerCase()}?fullText=true`)
    .pipe(retry(1),catchError(this.handleError));
  }



  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
  
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   
    return throwError(errorMessage);
  }


}
