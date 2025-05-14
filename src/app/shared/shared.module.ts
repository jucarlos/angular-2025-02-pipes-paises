import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BusquedaComponent
  ],
  exports: [ 
    NavbarComponent,
    BusquedaComponent,
  
   ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
