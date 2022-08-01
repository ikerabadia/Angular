import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'MYdDg0nBkVDPxfE0XddGnMruBTbS29yT';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial]
  }

  constructor ( private http: HttpClient){

  }

  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    if(query.length === 0){
      return;      
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=MYdDg0nBkVDPxfE0XddGnMruBTbS29yT&q=${query}&limit=10`)
      .subscribe( (resp: SearchGifsResponse) =>{
        console.log(resp.data);
        this.resultados = resp.data;
        
      });

    if(this._historial.includes(query)){
      return
    }

    if (this._historial.length === 10) {
      this._historial.pop();
    }

    this._historial.unshift(query);
    localStorage.setItem('historial', query);
    console.log(this._historial);
  }

}
