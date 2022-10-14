import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/cursos';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent implements OnInit {

  cursos : Curso [] = [
    {
      nombre: 'CURSO PILOTO',
      profesor: 'Franco',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: true,
      imagen : '../../../assets/images/icon1.jpg'
    },
  
    {
      nombre: 'PROGRAMACION',
      profesor: 'Juan',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: false,
      imagen : '../../../assets/images/icon2.jpg'

    },
  
    {
      nombre: 'SEGURIDAD',
      profesor: 'Luciano',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: true,
      imagen : '../../../assets/images/icon3.jpg'

    }
   ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
