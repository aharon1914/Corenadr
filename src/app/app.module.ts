import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*RUTAS */

import { rutas } from './app.rutas';




/* COMPONENTES */

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { LoginComponent } from './component/login/login.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { InfoComponent } from './component/info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarraloginComponent } from './component/barralogin/barralogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaleriaComponent,
    LoginComponent,
    CuerpoComponent,
    InfoComponent,
    InicioComponent,
    BarraloginComponent,
    
  ],
  imports: [
    BrowserModule,
    rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
