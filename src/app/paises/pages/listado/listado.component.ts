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

    this.paisesService.listarPaises().subscribe( countries  => {
      
      console.log( countries[0].name );

    
    })
    
  }

}
