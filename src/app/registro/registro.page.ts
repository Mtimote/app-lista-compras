import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public registService:RegistroService) { }

  ngOnInit() {
    this.limpiarFormulario();
  }

  regist() {
    if (this.registService.formRegis.valid) {
      console.log(this.registService.formRegis.value);
    } else {
      console.error('Formulario no válido');
    }
  }

  limpiarFormulario(){
    this.registService.iniciaForm();
  }

}
