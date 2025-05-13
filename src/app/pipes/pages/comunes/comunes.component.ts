import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  standalone: false,
  templateUrl: './comunes.component.html',
  styleUrl: './comunes.component.css'
})
export class ComunesComponent {

  public ciudad ='tOLEdo';

  public frase = 'en un lugar de la mancha';

  public hoy: Date = new Date();

  public precioPorKilo: number = 175.69678515;





}
