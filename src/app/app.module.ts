import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { GaleriaComponent } from './component/galeria/galeria.component';
import { LoginComponent } from './component/login/login.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { InfoComponent } from './component/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaleriaComponent,
    LoginComponent,
    CuerpoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
