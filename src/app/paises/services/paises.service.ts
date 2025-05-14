import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private http = inject( HttpClient );


  public listarPaises() {
    
    return this.http.get('https://restcountries.com/v3.1/all');

  }



}
