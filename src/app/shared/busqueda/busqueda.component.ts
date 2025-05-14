import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit, OnDestroy {
  

  @Output()
  public onValue = new EventEmitter<string>;

  // Creamos un observable
  private debuncer: Subject<string> = new Subject<string>;

  // Controlar la suscripción al observable.
  private debouncerSuscripcion?: Subscription;

  ngOnInit(): void {
    
    this.debouncerSuscripcion = this.debuncer
    .pipe(
          debounceTime(1000) 
         ).subscribe( resp => {
                this.onValue.emit( resp );
          })


  }
  

  ngOnDestroy(): void {
    this.debouncerSuscripcion?.unsubscribe();
  }


  onKeyPress(termino: string ): void {

    this.debuncer.next( termino );

  }



}
