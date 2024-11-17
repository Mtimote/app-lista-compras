import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public registService: RegistroService, private router: Router, public alert: AlertController) { }

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

  limpiarFormulario() {
    this.registService.iniciaForm();
  }

  async guardar() {
    console.log('Guardar');
    this.registService.formRegis.disable();

    if (!this.registService.registrarUsuario()) {
      this.registService.formRegis.enable();
      const alerts = await this.alert.create({
        header: 'Error',
        message: 'El usuario ya se encuentra creado',
        buttons: ['Aceptar']
      });
      await alerts.present();

    } else {
      await this.showAlert('Exitoso', 'Registro completo!, Puedes iniciar sesión');
      this.login();
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  async showAlert(header: string, message: string): Promise<void> { 
    return new Promise(async (resolve) => { 
      const alert = await this.alert.create({ header, message, buttons: [{ text: 'Aceptar', handler: () => { resolve(); } }] }); 
      await alert.present(); 
    }); 
  }

}
