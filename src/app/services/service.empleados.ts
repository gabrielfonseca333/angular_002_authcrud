import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Empleado } from '../components/models/empleado';
import axios from 'axios';

@Injectable()
export class ServiceEmpleados {

    constructor() { }

    login(usuario: string, contrasena: string): Promise<Empleado> {
        let request = "auth/login";
        let url = environment.urlApiEmpleados + request;
        return axios.post(url, { userName: usuario, password: contrasena }).then(response => {
            let token = response.data.response;
            localStorage.setItem('token', token);
            console.log("🦙", token);
            return response.data;
        });
    }

    getEmpleadoProfile(): Promise<Empleado> {
        let request = "api/empleados/perfilempleado";
        let url = environment.urlApiEmpleados + request;

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getEmpleadoProfile", response);
            return response.data;
        });

    }

    getSubordinados(){
        let request = "api/empleados/subordinados";
        let url = environment.urlApiEmpleados + request;

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getSubordinados", response);
            return response.data;
        });
    }

    getEmpleados() {
        let request = "api/empleados";
        let url = environment.urlApiEmpleados + request;

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getEmpleados", response);
            return response.data;
        });
    }

}