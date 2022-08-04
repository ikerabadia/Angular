import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'MYdDg0nBkVDPxfE0XddGnMruBTbS29yT';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial]
  }

  constructor ( private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimosResultados')! ) || [];

  }

  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    if(query.length === 0){
      return;
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, { params })
      .subscribe( (resp: SearchGifsResponse) =>{
        this.resultados = resp.data;
        localStorage.setItem("ultimosResultados", JSON.stringify(this.resultados));
      });

    if(this._historial.includes(query)){
      return
    }

    if (this._historial.length === 10) {
      this._historial.pop();
    }

    this._historial.unshift(query);
    localStorage.setItem('historial', JSON.stringify( this._historial ));
  }

}
