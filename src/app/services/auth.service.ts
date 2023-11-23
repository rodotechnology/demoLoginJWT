import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../interfaces/auth-token';

const apiUrl = environment.api_url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login( credentials: { email: string; password: string} ): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${ apiUrl }auth/login`, credentials).pipe(
      tap(response => this.saveToken(response.access_token))
    )
  }

  saveToken(token: string): void{
    localStorage.setItem('auth_token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token')
  }

  clearToken(): void {
    localStorage.removeItem('auth_token')
  }

  isAuthenticated(): boolean{
    // Verifica si el tokenestá presente y no ha expirado
    const token = this.getToken()
    return !!token
  }
}
