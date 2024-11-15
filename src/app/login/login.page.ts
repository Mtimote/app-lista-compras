import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public LogService: LoginService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.LogService.formLogin.valid) {
      console.log(this.LogService.formLogin.value);
    } else {
      console.error('Formulario no válido');
    }
  }

  registro() {
    this.router.navigate(['/registro']);
  }

}
