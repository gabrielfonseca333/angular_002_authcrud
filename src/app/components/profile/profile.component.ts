import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(
    private _service: ServiceEmpleados) { }

    public empleado!: Empleado;
    public subordinados!: Empleado[];

  ngOnInit(): void {
    this.loadProfile();
    this.loadSubordinados();
  }

  loadProfile():void {
    this._service.getEmpleadoProfile().then(response => {
      this.empleado = response;
      console.log(response);
    });
  }

  loadSubordinados():void {
    this._service.getSubordinados().then(response => {
      this.subordinados = response;
      console.log(response);
    });
  }

}
