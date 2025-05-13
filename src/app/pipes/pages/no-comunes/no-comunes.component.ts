import { Component } from '@angular/core';


enum Genero {
  Masculino = 'M',
  Femenino = 'F',
}


@Component({
  selector: 'app-no-comunes',
  standalone: false,
  templateUrl: './no-comunes.component.html',
  styleUrl: './no-comunes.component.css'
})
export class NoComunesComponent {

  public nombre: string = 'Marta';
  public genero: Genero = Genero.Femenino;

  // i18SelectPipeMap
  public generoMap = {
    'M': 'bienvenido',
    'F': 'bienvenida',
  }


  //i18PluralPipe
  public listaEspera: number = 5;

  public listaEsperaMap = {
    '=0': 'No hay nadie esperando',
    '=1': 'Hay una persona esperando',
    'other': 'Hay # personas esperando',
  }



  cambiarPersona(): void {

    this.nombre = 'Luis';
    this.genero = Genero.Masculino;
  }


  bajarListaEspera(): void {
    
    if ( this.listaEspera === 0) return;
    this.listaEspera--;
  }

}
