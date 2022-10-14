import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/cursos';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tabla-curso',
  templateUrl: './tabla-curso.component.html',
  styleUrls: ['./tabla-curso.component.css']
})
export class TablaCursoComponent implements OnInit {

  cursos : Curso [] = [
    {
      nombre: 'Reactjs',
      profesor: 'Franco',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: true,
      imagen : '../../../assets/images/icon1.jpg'

    },
  
    {
      nombre: 'Reactjs',
      profesor: 'Juan',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: false,
      imagen : '../../../assets/images/icon2.jpg'

    },
  
    {
      nombre: 'Reactjs',
      profesor: 'Luciano',
      fechaInicio: new Date(2022,3,1),
      fechaFinal: new Date (2022, 5,30),
      inscripcionAbierta: true,
      imagen : '../../../assets/images/icon3.jpg'

    }
   ]; 
   columnas: string [] = ['nombre', 'profesor', 'fechaInicio','fechaFinal', 'inscripcionAbierta', 'acciones'];
  
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso> (this.cursos);
  
  

  constructor() { }

  ngOnInit(): void {
  }
  filtrarCurso(){

  }

  filtrarProfesor(){

  }


}
