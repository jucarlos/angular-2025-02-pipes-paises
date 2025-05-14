import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda-por-capital',
  standalone: false,
  templateUrl: './busqueda-por-capital.component.html',
  styleUrl: './busqueda-por-capital.component.css'
})
export class BusquedaPorCapitalComponent {



  

  buscarPaisesPorCapital( terminoDelHijo: string ) {

    console.log( 'Estoy en el padre :' , terminoDelHijo );
  }

}
