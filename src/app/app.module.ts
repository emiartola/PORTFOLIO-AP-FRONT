import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from './services/portfolio.service';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    HomeComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
