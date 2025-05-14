import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-busqueda-por-capital',
  standalone: false,
  templateUrl: './busqueda-por-capital.component.html',
  styleUrl: './busqueda-por-capital.component.css'
})
export class BusquedaPorCapitalComponent {


  public isLoading = false;
  public countries: Country[] = [];

  private paisesService = inject( PaisesService );





  buscarPaisesPorCapital( terminoDelHijo: string ) {

    this.isLoading = true;

    this.paisesService.buscarPaisPorCapital( terminoDelHijo )
    .subscribe ( resp => {

      this.countries = resp;
      this.isLoading = false;

    })




  }

}
