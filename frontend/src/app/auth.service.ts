import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  postLogin(data) {
    return this.http.post(`${apiUrl}/jwt-auth/v1/token`, data)
  }
}
