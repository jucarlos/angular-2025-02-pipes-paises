import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  
  

  private paisesService = inject(PaisesService);


  ngOnInit(): void {

    this.paisesService.listarPaises().subscribe( (resp: any)  => {
      console.log( resp );

      console.log( resp[0].name.common);

    })
    
  }

}
