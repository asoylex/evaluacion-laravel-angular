import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AlumnoService } from './services/alumno.service'; // Importa el servicio


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule, RouterModule], // Agrega HttpClientModule y provideHttpClient
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [AlumnoService],

})
export class AppComponent {
  title = 'front-end';
}
