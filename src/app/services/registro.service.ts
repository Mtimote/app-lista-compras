import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  formRegis: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getLoginForm(): FormGroup { return this.formRegis;}

  iniciaForm() {
    this.formRegis.setValue({
      username: '',
      password: '',
      passwordConfirm: '',
    });
  }
}
