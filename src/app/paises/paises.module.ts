import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { BusquedaPorCapitalComponent } from './pages/busqueda-por-capital/busqueda-por-capital.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './home/home.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BusquedaPorCapitalComponent,
    ListadoComponent,
    HomeComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
