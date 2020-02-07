import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent implements OnInit {
  fecha = new Date();

  dia: any = new Date().getDay() + 2;
  mes: any = new Date().getMonth() +1;
  anio: any = new Date().getUTCFullYear();

  constructor() {
    console.log(this.fecha);
   }


  ngOnInit() {
  }

}
