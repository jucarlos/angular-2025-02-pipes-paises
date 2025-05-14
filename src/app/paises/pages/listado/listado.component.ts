import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  
  

  private paisesService = inject(PaisesService);

  public countries: Country[] = [];



  ngOnInit(): void {

    this.paisesService.listarPaises().subscribe( countries  => {
      
      this.countries = countries;

    
    })
    
  }

}
