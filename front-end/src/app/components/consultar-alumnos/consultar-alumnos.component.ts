import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-consultar-alumnos',
  templateUrl: './consultar-alumnos.component.html',
  styleUrls: ['./consultar-alumnos.component.css'],
  imports: [FormsModule, CommonModule],
})
export class ConsultarAlumnosComponent {
  gradoId: number | null = null;

  alumnos: any[] = [];
  grades = ['1ro', '2do', '3ro', '4to', '5to', '6to'];
  sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  constructor(private alumnoService: AlumnoService) {}

  onConsultar() {
    if (this.gradoId) {
      this.alumnoService.consultarAlumnos(this.gradoId).subscribe(
        (response) => {
        console.log(response)
          this.alumnos = response;
        },
        (error) => {
          console.error('Error al consultar alumnos:', error);
        }
      );
    }
  }
}
