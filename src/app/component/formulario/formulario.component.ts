import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

@Output () addUsuario: EventEmitter<any> = new EventEmitter<any>();


  formulario= this.formBuilder.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    edad: ['', [Validators.required, Validators.min(18)]],
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    conocimientos: new FormArray([new FormControl()])
  });
    
 
  constructor(
    private formBuilder : FormBuilder 
  ) { 
    
  }

  ngOnInit(): void {
  }

  submitForm() : void{
    console.log(this.formulario.value)
    this.addUsuario.emit(this.formulario.value)
  }

  get conocimientos(): FormArray{
    return this.formulario.get ('conocimientos') as FormArray;
  }


  agregarconocimiento(): void{
    this.conocimientos.push (new FormControl());
  }

}
