import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ContentComponent } from './component/content/content.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { TableComponent } from './component/table/table.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursoComponent } from './component/tabla-curso/tabla-curso.component';
import { InscursoPipe } from './pipe/inscurso.pipe';
import { ColorInscripcionDirective } from './directives/color-inscripcion.directive';
import { CardCursosComponent } from './component/card-cursos/card-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    FormularioComponent,
    TableComponent,
    TablaCursoComponent,
    InscursoPipe,
    ColorInscripcionDirective,
    CardCursosComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
