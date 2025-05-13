import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

   {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'comunes',
        component: ComunesComponent,
      },
      {
        path: 'no-comunes',
        component: NoComunesComponent,
      },
      {
        path: '**',
        redirectTo: 'comunes'
      }
    ]
   }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
