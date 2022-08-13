import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'steven'
  nombreUpper: string = 'STEVEN'
  nombreCompleto: string = 'sTevEN gIRon'

  fecha: Date = new Date(); //el día de hoy
  
}
