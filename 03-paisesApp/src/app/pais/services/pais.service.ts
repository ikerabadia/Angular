import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public terminoPorPais: string = "";
  public resultadosPorPais: Country[] = [];

  public terminoPorCapital: string = "";
  public resultadosPorCapital: Country[] = [];

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>(url);
    /* return this.http.get( url ).pipe(
      catchError( error => of([]) )
    ); */
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(code: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ code }`;
    return this.http.get<Country[]>(url);
  }

}
