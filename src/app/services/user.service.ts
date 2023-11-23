import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/user';
import { environment } from 'src/environments/environment';

const apiUrl = environment.api_url

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getProfile(): Observable<Profile>{
    return this.http.get<Profile>(`${apiUrl}auth/profile`)
  }
}
