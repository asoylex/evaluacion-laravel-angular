import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private email: string = 'test@example.com';
  private password: string = 'password';

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email: this.email, password: this.password })
      .pipe(
        tap(response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            console.log('Token:', response.token);
          }
        }),
        catchError(error => {
          console.error('Error al iniciar sesión:', error);
          return throwError(() => new Error('Error al obtener el token'));
        })
      );
  }

  ensureToken(): Observable<string> {
    const token = localStorage.getItem('token');
    if (token) {
      return of(token);
    } else {
      return this.login().pipe(
        switchMap(response => {
          if (response && response.token) {
            return of(response.token);
          } else {
            return throwError(() => new Error('No se pudo obtener el token'));
          }
        })
      );
    }
  }

  crearAlumno(alumno: any): Observable<any> {
    return this.ensureToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        });
        return this.http.post(`${this.apiUrl}/crear-alumno`, alumno, { headers });
      })
    );
  }

  consultarAlumnos(gradoId: number): Observable<any> {
    return this.ensureToken().pipe(
      switchMap(token => {
        console.log('Token:', token, 'Grado:', gradoId);
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.http.get(`${this.apiUrl}/consultar-alumno/${gradoId}`, { headers });
      })
    );
  }
}
