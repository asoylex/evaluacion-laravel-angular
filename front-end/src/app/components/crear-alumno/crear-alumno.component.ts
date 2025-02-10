import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class CrearAlumnoComponent {
  alumno = {
    name: '',
    date_of_birth: '',
    father_name: '',
    mother_name: '',
    date_of_entry: '',
    grade_id: null,
    section_id: null,
  };
  grades = ['1ro', '2do', '3ro', '4to', '5to', '6to'];
  sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  constructor(private alumnoService: AlumnoService) {}

  onSubmit() {
    this.alumnoService.crearAlumno(this.alumno).subscribe(
      (response) => {
        console.log('Alumno creado:', response);
        alert('Alumno creado exitosamente');
      },
      (error) => {
        console.error('Error al crear alumno:', error);
        alert('Error al crear alumno');
      }
    );
  }
}
