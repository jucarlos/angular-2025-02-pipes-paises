import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private http = inject( HttpClient );


  public listarPaises() {
    
    return this.http.get<RESTCountry[]>
        ('https://restcountries.com/v3.1/all');

  }



}
