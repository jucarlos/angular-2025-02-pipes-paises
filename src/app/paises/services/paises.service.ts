import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private http = inject( HttpClient );


  public listarPaises(): Observable<Country[]> {
    
    return this.http.get<RESTCountry[]>
        ('https://restcountries.com/v3.1/all')
        .pipe(
          map( resp => CountryMapper.mapRestCountryArrayToCountryArr( resp )),
          // Efectos secundarios en rxjs ( tap )
          // tap( resp => {
          //   console.log( 'Estoy en el servicio: ', resp );
          // })
        )
        
        ;

 


  }



}
