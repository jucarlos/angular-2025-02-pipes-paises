import { Component, input, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'tabla-paises',
  standalone: false,
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {


  // Forma clásica
  // @Input()
  // public countries: Country[] = [];

  // En base a señales, recordando que en el html hay que poner ()
  public countries = input.required<Country[]>();






}
