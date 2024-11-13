import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router) { }

  @ViewChild('cajausuario') cajausuario!: ElementRef;
  @ViewChild('cajacontrasena') cajacontrasena!: ElementRef;


  login() {

    let usuario = this.cajausuario.nativeElement.value;
    let contrasena = this.cajacontrasena.nativeElement.value;

    this._service.login(usuario, contrasena).then(response => {
      console.log(response);
      this._router.navigate(['/profile']);
    });
    
  }

}
