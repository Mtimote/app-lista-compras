import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private usuariosDePrueba = [
    { name: "Daniel Mauricio Timote Silva", email: 'dtimote@poligran.edu.co', password: 'dtimote' },
    { name: "Andres Lopez", email: 'jandreslopez4@poligran.edu.co', password: 'password2' }
  ];

  constructor() { this.initializeUsuarios(); }

  formRegis: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9\\s]+$'),]),
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  }, { validators: this.passwordMatchValidator('password', 'passwordConfirm') });

  getLoginForm(): FormGroup { return this.formRegis; }

  iniciaForm() {
    this.formRegis.setValue({
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
    });
  }

  registrarUsuario1(): boolean {
    const usuarioIngreso = this.formRegis.value;
    const name = usuarioIngreso.name;
    const email = usuarioIngreso.username;
    const password = usuarioIngreso.password;
    if (!this.usuariosDePrueba.some(usuario => usuario.email === usuarioIngreso.username)) {
      this.usuariosDePrueba.push({ name, email, password });
      console.log("nuevo usuario");
      console.log(this.usuariosDePrueba);
      return true;
    }
    return false; // Si ya existe un usuario con el mismo email
  }

  private passwordMatchValidator(password: string, passwordConfirm: string): ValidatorFn {
    return (control: AbstractControl): {
      [key: string]: boolean
    } | null => {
      const passwordControl = control.get(password);
      const passwordConfirmControl = control.get(passwordConfirm);
      if (passwordControl && passwordConfirmControl && passwordControl.value !== passwordConfirmControl.value) {
        return { 'passwordMismatch': true };
      }
      return null;
    };
  }

  private initializeUsuarios() {
    if (!localStorage.getItem('usuarios')) {
      const usuariosIniciales = this.usuariosDePrueba;
      localStorage.setItem('usuarios', JSON.stringify(usuariosIniciales));
    }
  }

  public leerUsuarios(): any[] {
    const data = localStorage.getItem('usuarios');
    return data ? JSON.parse(data) : [];
  }

  private escribirUsuarios(usuarios: any[]): void {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  registrarUsuario(): boolean {
    const usuarioIngreso = this.formRegis.value;
    const name = usuarioIngreso.name;
    const email = usuarioIngreso.username;
    const password = usuarioIngreso.password;
    const usuarios = this.leerUsuarios();
    if (!usuarios.some(usuario => usuario.email === email)) {
      usuarios.push({ name, email, password });
      this.escribirUsuarios(usuarios);
      return true;
    }
    return false; // Si ya existe un usuario con el mismo email 
  }
}
