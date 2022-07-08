import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'acerca', component: AcercaDeComponent},
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
