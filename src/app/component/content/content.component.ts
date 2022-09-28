import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public ALUMNOS : Array<Alumnos> = [
    {
      nombre : "juan",
      edad: 20,
      ficha: "../../../assets/images/juan.jpg",
      curso: "Curso Piloto",
      fecha: new Date(),
    },
    {
      nombre : "Pedro",
      edad: 26,
      ficha: "../../../assets/images/pedro.jpg",
      curso: "Curso Programacion",
      fecha: new Date(),
    },
    {
      nombre : "Galo",
      edad: 29,
      ficha: "../../../assets/images/galo.jpg",
      curso: "Curso Piloto",
      fecha: new Date(),
    },
    {
      nombre : "Celeste",
      edad: 21,
      ficha: "../../../assets/images/celes.jpg",
      curso: "Curso Seguridad",
      fecha: new Date(),
    },
    {
      nombre : "Charo",
      edad: 33,
      ficha: "../../../assets/images/charo.jpg",
      curso: "Curso Programacion",
      fecha: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
