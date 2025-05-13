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


  cambiarPersona(): void {

  }

}
