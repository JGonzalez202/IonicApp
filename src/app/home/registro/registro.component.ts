import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  email:string = "";
  password:string = "";

  loginForm = new FormGroup({

    nombre:new FormControl(''),
    matricula: new FormControl(''),
    password: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl('')


  });

  constructor(private ruta:Router) { }

  ngOnInit() {}

  guardar(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.controls.email.value);
    this.email = this.loginForm.controls.email.value + "";
    this.password = this.loginForm.controls.password.value + "";

    if(this.password === "123456"){
      console.log("Acceso permitido");
      this.ruta.navigate(['/home/actividades'])
    } else{
      console.log("Acceso denegado");
    }

  }

}
