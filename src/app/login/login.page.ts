import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public LogService: LoginService, private router:Router, public alert:AlertController) { }

  ngOnInit() {
    this.LogService.iniciaForm();
  }

  async onSubmit() {
    if (this.LogService.validaLogin()) {
      console.log(this.LogService.formLogin.value);
      this.router.navigate(['/home']);

    } else {

      console.error('Formulario no válido');
      const alerts = await this.alert.create({
        header: 'Error',
        message: 'Credenciales incorrectas',
        buttons: ['Aceptar']
      });

      await alerts.present();
    }
    this.LogService.iniciaForm();
  }

  registro() {
    this.router.navigate(['/registro']);
  }

}
