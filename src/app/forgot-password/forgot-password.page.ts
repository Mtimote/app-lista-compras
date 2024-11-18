import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  async sendCode() {
    if (!this.email || !this.email.includes('@')) {
      // Validación simple para el campo de correo electrónico
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingresa un correo válido.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Mostrar alerta con el mensaje
    const alert = await this.alertController.create({
      header: 'Código enviado',
      message: `Código enviado al correo: ${this.email}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navegar a la pantalla de login al cerrar la alerta
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
