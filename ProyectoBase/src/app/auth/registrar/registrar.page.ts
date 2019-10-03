import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registrarForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { 

    this.registrarForm=this.formBuilder.group({
      nombre: ['',Validators.required],
      correo: ['',[Validators.required,Validators.email]],
      contrasena: ['',[Validators.required,Validators.minLength(6)]],
      confirmacionContrasena: ['',Validators.required]
  })
}

  ngOnInit() {
/*
  },{
      validator: this.MustMatch('password','confirmarPassword')
      
    });*/
  }

  get f() {return this.registrarForm.controls;}
  registrar(){
    console.log(this.registrarForm.valid);
  }
  /*
  registrar(form){
    let inputs = form.form.value;
    if(inputs.password != inputs.confirmarPassword){
      console.log('el password y la confirmacion no son iguales');
    }
  }

  MustMatch(controlName: string, matchingControlName: string){
    return true;
  }
*/
}
