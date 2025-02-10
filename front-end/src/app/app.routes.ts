import { Routes } from '@angular/router';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { ConsultarAlumnosComponent } from './components/consultar-alumnos/consultar-alumnos.component';


export const routes: Routes = [
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumnos', component: ConsultarAlumnosComponent },
  { path: '', redirectTo: '/crear-alumno', pathMatch: 'full' },
];
