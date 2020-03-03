import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postLogin(data) {
    return this.http.post(`${apiUrl}/jwt-auth/v1/token`, data)
  }
}
