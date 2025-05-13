import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { BusquedaPorCapitalComponent } from './pages/busqueda-por-capital/busqueda-por-capital.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    BusquedaPorCapitalComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
