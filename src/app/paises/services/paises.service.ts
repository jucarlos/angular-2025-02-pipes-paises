import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { Country } from '../interfaces/country.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private http = inject( HttpClient );



  public buscarPaisPorCapital( termino: string ) {

    const url = `${environment.baseUrl}/capital/${termino}`
    return this.obtienePaisesConCriterios( url );

  }


  public listarPaises(): Observable<Country[]> {

    const url = `${environment.baseUrl}/all/` ;
    return this.obtienePaisesConCriterios( url );
  
  }


  private obtienePaisesConCriterios(url: string ): Observable<Country[]> {

    return this.http.get<RESTCountry[]>( url )
        .pipe(
          map( resp => CountryMapper.mapRestCountryArrayToCountryArr( resp )),
          delay( 250 ),
          // Efectos secundarios en rxjs ( tap )
          // tap( resp => {
          //   console.log( 'Estoy en el servicio: ', resp );
          // })
        ) ;

  }




}
