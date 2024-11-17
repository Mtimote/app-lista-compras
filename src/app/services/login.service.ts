import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public regis:RegistroService) { }

  private usuariosDePrueba = [ 
    { email: 'dtimote@poligran.edu.co', password: 'dtimote' },
    { email: 'jandreslopez4@poligran.edu.co', password: 'password2' }
  ];

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getLoginForm(): FormGroup { return this.formLogin;}

  validaLogin1(): boolean {
    let usuarioIngreso = this.formLogin.value;
    return this.usuariosDePrueba.some(usuario => usuario.email === usuarioIngreso.username && usuarioIngreso.password === usuario.password);
  }

  iniciaForm() {
    this.formLogin.setValue({
      username: '',
      password: '',
    });
  }

  validaLogin(): boolean { 
    let usuarioIngreso = this.formLogin.value;
    const usuarios = this.regis.leerUsuarios();
    return usuarios.some( usuario => usuario.email === usuarioIngreso.username && usuario.password === usuarioIngreso.password ); 
  }

}
